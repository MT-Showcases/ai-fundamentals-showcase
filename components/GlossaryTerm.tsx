'use client';

import { useState } from 'react';

interface GlossaryTermProps {
  term: string;
  children: React.ReactNode;
}

export default function GlossaryTerm({ term, children }: GlossaryTermProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const glossary: Record<string, string> = {
    training: 'Dataset usato per allenare il modello. Il modello "vede" questi dati e apprende i pattern.',
    validation: 'Dataset mai visto dal modello durante l\'allenamento. Usato per valutare generalizzazione.',
    overfitting: 'Quando il modello memorizza i dati di training invece di apprendere pattern generali. Performance alta in training, crolla in validation.',
    MAE: 'Mean Absolute Error. Errore medio in valore assoluto. Più basso = più accurato.',
    'R²': 'Coefficient of determination. % varianza spiegata dal modello (0-1). Più alto = più bravo.',
    test_size: 'Frazione di dataset destinata al test. 0.2 = 20% test, 80% training.',
    n_estimators: 'Numero di alberi decisionali in Random Forest. Più alto = più accurato ma più lento.',
    RMSE: 'Root Mean Squared Error. Come MAE ma penalizza di più gli errori grandi (outlier).',
    random_state: 'Seed per il generatore casuale. Stesso valore = risultati riproducibili.',
    generalization: 'Capacità del modello di funzionare bene su dati mai visti. Obiettivo principale del ML.',
    LogisticRegression: 'Classificatore lineare che stima la probabilità di appartenenza a una classe (es. positivo/negativo).',
    MultinomialNB: 'Classificatore probabilistico Naive Bayes molto efficace su testo (bag-of-words/TF-IDF), rapido e leggero.',
  };

  const definition = glossary[term] || 'Termine non trovato';

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className="underline decoration-cyan-400 decoration-dotted cursor-help text-cyan-300">
        {children}
      </span>

      {showTooltip && (
        <div className="absolute left-0 bottom-full mb-2 p-2 bg-cyan-900 border border-cyan-400 rounded text-xs text-gray-200 w-48 z-10">
          {definition}
          <div className="absolute left-4 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-cyan-900"></div>
        </div>
      )}
    </span>
  );
}
