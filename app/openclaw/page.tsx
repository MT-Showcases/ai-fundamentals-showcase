'use client';

import { useState } from 'react';
import Link from 'next/link';

const agents = [
  {
    id: 'spark',
    name: 'Spark ✨',
    role: 'Docente AI',
    description: 'Coordina tutto il materiale didattico. Decide struttura, contenuti e quali agenti attivare per ogni task.',
    tool: 'OpenClaw',
    output: 'Struttura capitoli, testi, esercizi, quiz',
    color: 'border-cyan-400',
    headerColor: 'bg-cyan-400/10',
    textColor: 'text-cyan-300',
    children: ['quizard', 'gammabot', 'notebook', 'showcaser'],
  },
  {
    id: 'quizard',
    name: 'Quizard 🎯',
    role: 'Creatore Quiz',
    description: 'Genera i quiz interattivi per ogni capitolo e li pubblica su Wayground in modalità Mastering.',
    tool: 'Wayground',
    output: 'Quiz a risposta multipla con feedback immediato',
    color: 'border-yellow-400',
    headerColor: 'bg-yellow-400/10',
    textColor: 'text-yellow-300',
    children: [],
  },
  {
    id: 'gammabot',
    name: 'GammaBot 🎨',
    role: 'Creatore Slide',
    description: 'Genera presentazioni e slide didattiche via API Gamma.app. Output pronto per la lezione in aula.',
    tool: 'Gamma.app API',
    output: 'Presentazioni PDF/PPTX pronte per l\'aula',
    color: 'border-purple-400',
    headerColor: 'bg-purple-400/10',
    textColor: 'text-purple-300',
    children: [],
  },
  {
    id: 'notebook',
    name: 'Notebook 📓',
    role: 'Knowledge Companion',
    description: 'Prepara le fonti per Google NotebookLM. Da ogni capitolo estrae il testo ottimizzato per generare podcast e video.',
    tool: 'Google NotebookLM',
    output: 'Podcast audio, video riassuntivi, infografiche',
    color: 'border-green-400',
    headerColor: 'bg-green-400/10',
    textColor: 'text-green-300',
    children: [],
  },
  {
    id: 'showcaser',
    name: 'Showcaser 🖥️',
    role: 'Sviluppatore Web',
    description: 'Converte ogni contenuto didattico in pagine web interattive. Ha seguito una pipeline di 7 fasi per costruire questo sito.',
    tool: 'Next.js + Vercel + GitHub',
    output: 'Questo sito — ogni capitolo, quiz, lab',
    color: 'border-blue-400',
    headerColor: 'bg-blue-400/10',
    textColor: 'text-blue-300',
    children: [],
  },
];

const timelineSteps = [
  {
    emoji: '💡',
    title: 'Michele definisce l\'argomento',
    description: 'Un messaggio su Telegram: "Crea il capitolo sul Machine Learning — lab pratico incluso." Niente di più.',
  },
  {
    emoji: '✨',
    title: 'Spark struttura il contenuto',
    description: 'Spark legge il contesto del corso, genera struttura, sezioni, keyTakeaway, discussionPrompt, esercizi e quiz in TypeScript.',
  },
  {
    emoji: '🖥️',
    title: 'Showcaser costruisce la pagina',
    description: 'Il contenuto viene convertito in una pagina Next.js interattiva con componenti, glossario inline e workflow lab. Push su GitHub → deploy automatico su Vercel.',
  },
  {
    emoji: '📓',
    title: 'Notebook prepara le fonti',
    description: 'Per ogni capitolo con lab, viene generato un testo denso e strutturato — la "fonte" che NotebookLM usa per produrre media.',
  },
  {
    emoji: '🎬',
    title: 'Michele genera i media',
    description: 'Con un click su NotebookLM, Michele genera il podcast e il video riassuntivo del capitolo. Li carica nel sito — il media slot era già pronto ad accoglierli.',
  },
  {
    emoji: '🎯',
    title: 'Quizard pubblica il quiz',
    description: 'Il quiz del capitolo viene pubblicato su Wayground in modalità Mastering — gli studenti lo trovano già attivo il giorno della lezione.',
  },
];

export default function OpenClawPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleAgent = (id: string) => {
    setExpanded(prev => prev === id ? null : id);
  };

  const mainAgent = agents.find(a => a.id === 'spark')!;
  const subAgents = agents.filter(a => a.id !== 'spark');

  return (
    <main className="min-h-screen bg-navy-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-navy-900 via-blue-900 to-navy-800 py-14 px-6 border-b border-blue-400/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Behind the scenes</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Questo sito non l&apos;ho costruito da solo.
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Ogni capitolo, ogni quiz, ogni lab pratico che hai letto è stato creato da un sistema di agenti AI che ho orchestrato con <strong className="text-cyan-300">OpenClaw</strong>. Questa pagina ti mostra come funziona dall&apos;interno.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* Sezione 1 — Il sistema */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Il sistema</h2>
          <p className="text-gray-400 mb-10">
            Ogni agente ha un ruolo preciso. Clicca su ciascuno per vedere cosa fa, quale tool usa e cosa produce.
          </p>

          {/* Spark — agente principale */}
          <div className="mb-6">
            <button
              onClick={() => toggleAgent(mainAgent.id)}
              className={`w-full text-left rounded-xl border-2 ${mainAgent.color} ${mainAgent.headerColor} p-5 transition-all hover:opacity-90`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className={`text-lg font-bold ${mainAgent.textColor}`}>{mainAgent.name}</span>
                  <span className="text-gray-400 text-sm ml-3">{mainAgent.role}</span>
                </div>
                <span className="text-gray-400 text-sm">{expanded === mainAgent.id ? '▲' : '▼'}</span>
              </div>
              {expanded === mainAgent.id && (
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                  <p className="text-gray-300 text-sm">{mainAgent.description}</p>
                  <div className="flex flex-wrap gap-4 mt-3">
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wide">Tool</span>
                      <p className="text-sm text-white font-medium">{mainAgent.tool}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wide">Output</span>
                      <p className="text-sm text-white font-medium">{mainAgent.output}</p>
                    </div>
                  </div>
                </div>
              )}
            </button>

            {/* Connettore visivo */}
            <div className="flex justify-center my-2">
              <div className="w-px h-6 bg-blue-400/40"></div>
            </div>

            {/* Sub-agenti */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4 border-l-2 border-blue-400/20 ml-4">
              {subAgents.map(agent => (
                <button
                  key={agent.id}
                  onClick={() => toggleAgent(agent.id)}
                  className={`text-left rounded-xl border ${agent.color} ${agent.headerColor} p-4 transition-all hover:opacity-90`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`font-bold ${agent.textColor}`}>{agent.name}</span>
                      <p className="text-gray-400 text-xs mt-0.5">{agent.role}</p>
                    </div>
                    <span className="text-gray-500 text-xs">{expanded === agent.id ? '▲' : '▼'}</span>
                  </div>
                  {expanded === agent.id && (
                    <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                      <p className="text-gray-300 text-xs leading-relaxed">{agent.description}</p>
                      <div className="flex flex-col gap-1 mt-2">
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wide">Tool</span>
                          <p className="text-xs text-white font-medium">{agent.tool}</p>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wide">Output</span>
                          <p className="text-xs text-white font-medium">{agent.output}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Sezione 2 — Timeline */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Come nasce un capitolo</h2>
          <p className="text-gray-400 mb-10">
            Dal messaggio di Michele al capitolo live sul sito — in 6 passaggi.
          </p>
          <div className="relative space-y-0">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="flex gap-5">
                {/* Linea verticale + cerchio */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-900 border-2 border-blue-400 flex items-center justify-center text-lg flex-shrink-0">
                    {step.emoji}
                  </div>
                  {idx < timelineSteps.length - 1 && (
                    <div className="w-px flex-1 bg-blue-400/25 my-1"></div>
                  )}
                </div>
                {/* Contenuto */}
                <div className="pb-10">
                  <p className="font-semibold text-white mb-1">{step.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sezione 3 — Media slot infografica NotebookLM */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Il sistema in un&apos;immagine</h2>
          <p className="text-gray-400 mb-6">
            Un&apos;infografica generata con NotebookLM che mostra l&apos;architettura completa del sistema.
          </p>
          <div className="rounded-xl border border-blue-400/20 bg-navy-800 p-8 flex flex-col items-center justify-center gap-3 min-h-48">
            <span className="text-4xl">🗺️</span>
            <p className="text-gray-400 text-sm">Infografica in arrivo</p>
            <p className="text-gray-600 text-xs">Generata con NotebookLM — <em>coming soon</em></p>
          </div>
        </section>

        {/* Sezione 4 — Stack */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Stack e tool</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-blue-400/20">
                  <th className="text-left text-gray-400 font-semibold pb-3 pr-6">Agente</th>
                  <th className="text-left text-gray-400 font-semibold pb-3 pr-6">Tool</th>
                  <th className="text-left text-gray-400 font-semibold pb-3">Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-400/10">
                {agents.map(agent => (
                  <tr key={agent.id}>
                    <td className={`py-3 pr-6 font-medium ${agent.textColor}`}>{agent.name}</td>
                    <td className="py-3 pr-6 text-gray-300">{agent.tool}</td>
                    <td className="py-3 text-gray-400">{agent.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sezione 5 — CTA */}
        <section className="border border-blue-400/20 rounded-2xl bg-navy-800 p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Vuoi costruire qualcosa di simile?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
            OpenClaw è lo strumento che ho usato per orchestrare tutto questo. Se stai costruendo un prodotto, un corso o un sistema AI, parliamone.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://micheletornello.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-colors"
            >
              micheletornello.com
            </a>
            <a
              href="https://github.com/MT-Showcases"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-blue-400/40 hover:border-blue-400 text-gray-300 hover:text-white font-semibold text-sm transition-colors"
            >
              GitHub MT-Showcases
            </a>
            <Link
              href="/"
              className="px-6 py-3 rounded-lg border border-cyan-400/40 hover:border-cyan-400 text-gray-300 hover:text-white font-semibold text-sm transition-colors"
            >
              ← Torna ai capitoli
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
