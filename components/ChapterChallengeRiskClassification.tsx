'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import type { ChapterChallengeRiskClassification } from '@/data/types';

interface Props {
  challenge: ChapterChallengeRiskClassification;
}

type RiskValue = 'prohibited' | 'high' | 'limited' | 'minimal';

const riskColorMap: Record<RiskValue, { bg: string; border: string; text: string; badge: string }> = {
  prohibited: { bg: 'bg-red-900/30', border: 'border-red-500', text: 'text-red-300', badge: 'bg-red-900/50 text-red-300 border-red-500' },
  high: { bg: 'bg-orange-900/30', border: 'border-orange-500', text: 'text-orange-300', badge: 'bg-orange-900/50 text-orange-300 border-orange-500' },
  limited: { bg: 'bg-yellow-900/30', border: 'border-yellow-500', text: 'text-yellow-300', badge: 'bg-yellow-900/50 text-yellow-300 border-yellow-500' },
  minimal: { bg: 'bg-emerald-900/30', border: 'border-emerald-500', text: 'text-emerald-300', badge: 'bg-emerald-900/50 text-emerald-300 border-emerald-500' },
};

export default function ChapterChallengeRiskClassification({ challenge }: Props) {
  const storageKeySelections = `challenge_${challenge.id}_selections`;
  const storageKeySubmitted = `challenge_${challenge.id}_submitted`;

  const [selections, setSelections] = useState<Record<string, RiskValue>>(() => {
    if (typeof window === 'undefined') return {};
    try {
      const raw = window.localStorage.getItem(storageKeySelections);
      return raw ? (JSON.parse(raw) as Record<string, RiskValue>) : {};
    } catch {
      return {};
    }
  });

  const [submitted, setSubmitted] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem(storageKeySubmitted) === 'true';
  });

  const handleSelect = (scenarioId: string, value: RiskValue) => {
    if (submitted) return;
    setSelections((prev) => {
      const next = { ...prev, [scenarioId]: value };
      window.localStorage.setItem(storageKeySelections, JSON.stringify(next));
      return next;
    });
  };

  const allAnswered = challenge.scenarios.every((s) => selections[s.id] !== undefined);

  const handleVerify = () => {
    setSubmitted(true);
    window.localStorage.setItem(storageKeySubmitted, 'true');
  };

  const handleReset = () => {
    setSelections({});
    setSubmitted(false);
    window.localStorage.removeItem(storageKeySelections);
    window.localStorage.removeItem(storageKeySubmitted);
  };

  const score = submitted
    ? challenge.scenarios.filter((s) => selections[s.id] === s.correctRisk).length
    : 0;

  return (
    <section className="mb-12 bg-navy-800 border border-cyan-400/30 rounded-xl p-6">
      <header className="mb-6">
        <h3 className="text-cyan-300 font-bold text-xl">⚖️ {challenge.title}</h3>
        <p className="text-gray-300 mt-2 text-sm leading-relaxed">{challenge.intro}</p>
      </header>

      <div className="space-y-6">
        {challenge.scenarios.map((scenario, idx) => {
          const selected = selections[scenario.id];
          const isCorrect = submitted && selected === scenario.correctRisk;
          const isWrong = submitted && selected !== undefined && selected !== scenario.correctRisk;
          const notAnswered = submitted && selected === undefined;

          return (
            <div
              key={scenario.id}
              className={`rounded-xl border p-4 transition-all duration-300 ${
                isCorrect
                  ? 'border-emerald-500/60 bg-emerald-900/10'
                  : isWrong
                  ? 'border-red-500/60 bg-red-900/10'
                  : notAnswered
                  ? 'border-orange-500/60 bg-orange-900/10'
                  : 'border-cyan-400/20 bg-navy-900/60'
              }`}
            >
              {/* Scenario header */}
              <div className="flex items-start gap-3 mb-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-900/50 border border-cyan-400/40 flex items-center justify-center text-cyan-300 text-sm font-bold">
                  {idx + 1}
                </span>
                <p className="text-gray-200 text-sm leading-relaxed flex-1">{scenario.text}</p>
              </div>

              {/* Risk options */}
              <div className="flex flex-wrap gap-2 mt-2">
                {challenge.riskOptions.map((opt) => {
                  const isSelected = selected === opt.value;
                  const colors = riskColorMap[opt.value];
                  return (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(scenario.id, opt.value)}
                      disabled={submitted}
                      aria-pressed={isSelected}
                      className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                        isSelected
                          ? `${colors.badge} border-2 scale-105 shadow-md`
                          : `border-cyan-400/20 text-gray-400 hover:${colors.bg} hover:${colors.text} hover:border-opacity-60 bg-navy-900/40`
                      } ${submitted ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              {/* Feedback post-submit */}
              {submitted && (
                <div
                  className={`mt-3 rounded-lg px-4 py-3 text-sm border ${
                    isCorrect
                      ? 'bg-emerald-900/20 border-emerald-500/40 text-emerald-200'
                      : 'bg-red-900/20 border-red-500/40 text-red-200'
                  }`}
                  aria-live="polite"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-base">{isCorrect ? '✅' : notAnswered ? '⚠️' : '❌'}</span>
                    <div>
                      {notAnswered ? (
                        <p className="text-orange-300">Non hai selezionato una risposta per questo scenario.</p>
                      ) : !isCorrect ? (
                        <p>
                          <span className="font-semibold">
                            Risposta selezionata:{' '}
                            {challenge.riskOptions.find((o) => o.value === selected)?.label}
                          </span>{' '}
                          — La risposta corretta è{' '}
                          <span className="font-semibold">
                            {challenge.riskOptions.find((o) => o.value === scenario.correctRisk)?.label}
                          </span>
                          .
                        </p>
                      ) : (
                        <p className="font-semibold">
                          Corretto!{' '}
                          {challenge.riskOptions.find((o) => o.value === scenario.correctRisk)?.label}
                        </p>
                      )}
                      <p className="mt-1 text-gray-300 leading-relaxed">{scenario.rationale}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Score & Actions */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {submitted ? (
          <div className="flex items-center gap-3">
            <span
              className={`text-lg font-bold px-4 py-2 rounded-xl border ${
                score === challenge.scenarios.length
                  ? 'text-emerald-300 border-emerald-500/60 bg-emerald-900/20'
                  : score >= Math.ceil(challenge.scenarios.length / 2)
                  ? 'text-yellow-300 border-yellow-500/60 bg-yellow-900/20'
                  : 'text-red-300 border-red-500/60 bg-red-900/20'
              }`}
            >
              {score === challenge.scenarios.length ? '🏆' : score >= Math.ceil(challenge.scenarios.length / 2) ? '📊' : '📚'}{' '}
              Score: {score}/{challenge.scenarios.length}
            </span>
            <span className="text-gray-400 text-sm">
              {score === challenge.scenarios.length
                ? 'Perfetto! Padroneggi la classificazione AI Act.'
                : score >= Math.ceil(challenge.scenarios.length / 2)
                ? 'Buon lavoro — rivedi i casi sbagliati.'
                : 'Rileggi le sezioni sui livelli di rischio e riprova.'}
            </span>
          </div>
        ) : (
          <p className="text-cyan-300 text-sm font-medium">
            {allAnswered
              ? `Tutti gli scenari classificati (${challenge.scenarios.length}/${challenge.scenarios.length}) — pronto a verificare!`
              : `${Object.keys(selections).length}/${challenge.scenarios.length} scenari classificati`}
          </p>
        )}
        <div className="flex gap-3">
          {!submitted ? (
            <button
              onClick={allAnswered ? handleVerify : undefined}
              disabled={!allAnswered}
              className={`px-6 py-3 min-h-11 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:outline-none bg-blue-400 text-navy-900 hover:bg-cyan-300 hover:text-navy-900 ${allAnswered ? 'hover:scale-105 hover:shadow-lg hover:shadow-blue-400/40' : 'opacity-50 cursor-not-allowed'}`}
            >
              Verifica classificazioni
            </button>
          ) : (
            <Button
              onClick={handleReset}
              className="focus-visible:ring-cyan-300 bg-slate-700 hover:bg-slate-600"
            >
              ↻ Ricomincia
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
