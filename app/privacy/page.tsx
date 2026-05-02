import type { Metadata } from 'next';
import Link from 'next/link';
import PrintButton from './PrintButton';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Informativa sulla privacy per il corso Fondamenti di AI — Steve Jobs Academy Catania.',
  alternates: {
    canonical: '/privacy',
  },
};

const sections = [
  { id: 'chi-siamo', label: 'Chi siamo' },
  { id: 'dati-raccolti', label: 'Dati raccolti' },
  { id: 'tecnologie', label: 'Tecnologie utilizzate' },
  { id: 'cookie', label: 'Cookie e storage locale' },
  { id: 'diritti-gdpr', label: 'I tuoi diritti GDPR' },
  { id: 'contatti', label: 'Contatti' },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = '2 maggio 2025';

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Skip to content */}
      <a
        href="#privacy-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-400 focus:text-navy-900 focus:rounded-lg focus:font-semibold"
      >
        Vai al contenuto
      </a>

      {/* Hero */}
      <header className="bg-gradient-to-r from-navy-900 via-blue-900 to-navy-800 py-14 px-6 border-b border-blue-800/40">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-400">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-cyan-300 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-600">›</li>
              <li aria-current="page" className="text-gray-300">Privacy Policy</li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl" aria-hidden="true">🔒</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Privacy Policy
            </h1>
          </div>
          <p className="text-cyan-300 text-lg font-medium mb-2">
            Fondamenti di AI — Steve Jobs Academy Catania
          </p>
          <p className="text-gray-400 text-sm">
            Ultimo aggiornamento: <time dateTime="2025-05-02">{lastUpdated}</time>
          </p>
        </div>
      </header>

      {/* Print button */}
      <div className="max-w-4xl mx-auto px-6 pt-6 print:hidden">
        <PrintButton />
      </div>

      <div id="privacy-content" className="max-w-4xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">
        {/* Table of Contents — sticky sidebar on desktop */}
        <aside
          aria-label="Indice dei contenuti"
          className="lg:w-56 flex-shrink-0 print:hidden"
        >
          <nav className="lg:sticky lg:top-8">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Indice</p>
            <ol className="space-y-1">
              {sections.map((sec, i) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    className="flex items-start gap-2 text-sm text-gray-400 hover:text-cyan-300 transition-colors py-1 leading-snug"
                  >
                    <span className="text-xs text-gray-600 font-mono mt-0.5 w-4 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {sec.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 space-y-12">

          {/* Intro box */}
          <div className="rounded-xl border border-blue-700/40 bg-blue-900/20 p-5 text-sm text-gray-300 leading-relaxed">
            <p>
              Questa informativa privacy è redatta ai sensi del{' '}
              <strong className="text-white">Regolamento UE 2016/679 (GDPR)</strong> e del
              D.Lgs. 196/2003 (Codice Privacy italiano). Descrive come questo sito web gestisce
              (o meglio: <em>non</em> gestisce) i tuoi dati personali.
            </p>
          </div>

          {/* Section 1 — Chi siamo */}
          <section aria-labelledby="chi-siamo">
            <h2
              id="chi-siamo"
              className="text-2xl font-bold text-white mb-4 flex items-center gap-3 scroll-mt-8"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-400/20 border border-blue-400/40 flex items-center justify-center text-blue-300 text-sm font-bold" aria-hidden="true">1</span>
              Chi siamo
            </h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Questo sito è il portale del corso <strong className="text-white">Fondamenti di AI</strong>,
                sviluppato da <strong className="text-white">Michele Tornello</strong> per gli studenti della{' '}
                <strong className="text-white">Steve Jobs Academy (SJA) Catania</strong>.
              </p>
              <p>
                Il sito ha finalità esclusivamente didattiche e non commerciali. Non sono presenti
                sistemi di acquisto, iscrizioni a pagamento o pubblicità.
              </p>
              <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-lg bg-navy-800/60 border border-blue-800/40 p-4">
                  <dt className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Titolare del trattamento</dt>
                  <dd className="text-sm text-white">Michele Tornello</dd>
                </div>
                <div className="rounded-lg bg-navy-800/60 border border-blue-800/40 p-4">
                  <dt className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Contesto</dt>
                  <dd className="text-sm text-white">Steve Jobs Academy Catania</dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Section 2 — Dati raccolti */}
          <section aria-labelledby="dati-raccolti">
            <h2
              id="dati-raccolti"
              className="text-2xl font-bold text-white mb-4 flex items-center gap-3 scroll-mt-8"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-400/20 border border-blue-400/40 flex items-center justify-center text-blue-300 text-sm font-bold" aria-hidden="true">2</span>
              Dati raccolti
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5" aria-hidden="true">✅</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Zero dati personali raccolti</p>
                    <p className="text-sm">
                      Questo sito <strong>non raccoglie, non archivia e non trasmette</strong> dati
                      personali identificabili (PII — Personally Identifiable Information).
                      Non esistono form di registrazione, login, profili utente o sistemi di tracciamento
                      individuale.
                    </p>
                  </div>
                </div>
              </div>
              <p>
                Le uniche informazioni memorizzate sono i <strong className="text-white">progressi del corso</strong> (capitoli letti, punteggi quiz) salvati
                esclusivamente nel tuo browser tramite <code className="text-cyan-300 bg-navy-800/60 px-1 rounded">localStorage</code>. Questi dati:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  'rimangono sul tuo dispositivo — non vengono inviati a nessun server',
                  'non sono accessibili a noi o a terze parti',
                  'possono essere cancellati in qualsiasi momento svuotando la cache del browser',
                  'non contengono informazioni identificabili sulla tua persona',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0" aria-hidden="true">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-400 bg-navy-800/40 rounded-lg p-4 border border-blue-800/30">
                <strong className="text-gray-300">Log di accesso Vercel:</strong> Come ogni hosting web,
                Vercel può registrare indirizzi IP e dati tecnici della richiesta HTTP per fini
                operativi e di sicurezza. Questi log sono gestiti da Vercel Inc. secondo la propria
                privacy policy e non vengono elaborati da noi.
              </p>
            </div>
          </section>

          {/* Section 3 — Tecnologie */}
          <section aria-labelledby="tecnologie">
            <h2
              id="tecnologie"
              className="text-2xl font-bold text-white mb-4 flex items-center gap-3 scroll-mt-8"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-400/20 border border-blue-400/40 flex items-center justify-center text-blue-300 text-sm font-bold" aria-hidden="true">3</span>
              Tecnologie utilizzate
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>Il sito utilizza le seguenti tecnologie per il suo funzionamento:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: 'Next.js 15',
                    desc: 'Framework React per il rendering e la navigazione. Open source, nessuna telemetria inviata in produzione.',
                    icon: '⚛️',
                  },
                  {
                    name: 'Vercel',
                    desc: 'Piattaforma di hosting. Gestisce CDN, deploy e log tecnici secondo la Vercel Privacy Policy.',
                    icon: '▲',
                  },
                  {
                    name: 'localStorage',
                    desc: 'Web Storage API nativa del browser. Usata per salvare progressi locali. Nessun dato trasmesso.',
                    icon: '💾',
                  },
                  {
                    name: 'Tailwind CSS',
                    desc: 'Framework CSS. Nessuna telemetria o raccolta dati.',
                    icon: '🎨',
                  },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="rounded-lg bg-navy-800/60 border border-blue-800/40 p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span aria-hidden="true">{tech.icon}</span>
                      <span className="font-semibold text-white text-sm">{tech.name}</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4 — Cookie */}
          <section aria-labelledby="cookie">
            <h2
              id="cookie"
              className="text-2xl font-bold text-white mb-4 flex items-center gap-3 scroll-mt-8"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-400/20 border border-blue-400/40 flex items-center justify-center text-blue-300 text-sm font-bold" aria-hidden="true">4</span>
              Cookie e storage locale
            </h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Questo sito <strong className="text-white">non utilizza cookie</strong> di profilazione,
                analytics o marketing. Non è presente alcun banner cookie perché non ve ne è necessità.
              </p>
              <p>
                Vercel può impostare cookie tecnici strettamente necessari per il corretto funzionamento
                del CDN e per funzionalità di sicurezza (es. protezione DDoS). Questi cookie non
                tracciano la navigazione e non richiedono consenso ai sensi del GDPR.
              </p>
              <p>
                Il <code className="text-cyan-300 bg-navy-800/60 px-1 rounded">localStorage</code> del
                browser viene utilizzato per salvare il tuo progresso nel corso. Puoi eliminare questi
                dati in qualsiasi momento dalle impostazioni del browser ({' '}
                <em>Impostazioni → Privacy → Cancella dati di navigazione</em>).
              </p>
            </div>
          </section>

          {/* Section 5 — Diritti GDPR */}
          <section aria-labelledby="diritti-gdpr">
            <h2
              id="diritti-gdpr"
              className="text-2xl font-bold text-white mb-4 flex items-center gap-3 scroll-mt-8"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-400/20 border border-blue-400/40 flex items-center justify-center text-blue-300 text-sm font-bold" aria-hidden="true">5</span>
              I tuoi diritti GDPR
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Ai sensi degli articoli 15–22 del Regolamento GDPR, hai i seguenti diritti riguardo ai
                tuoi dati personali:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { right: 'Diritto di accesso (art. 15)', desc: 'Ottenere conferma se i tuoi dati vengono trattati e riceverne copia.' },
                  { right: 'Diritto di rettifica (art. 16)', desc: 'Richiedere la correzione di dati inesatti o incompleti.' },
                  { right: 'Diritto alla cancellazione (art. 17)', desc: 'Richiedere la cancellazione dei tuoi dati ("diritto all\'oblio").' },
                  { right: 'Diritto di limitazione (art. 18)', desc: 'Richiedere la limitazione del trattamento in determinate circostanze.' },
                  { right: 'Diritto alla portabilità (art. 20)', desc: 'Ricevere i tuoi dati in formato strutturato e leggibile da macchina.' },
                  { right: 'Diritto di opposizione (art. 21)', desc: 'Opporsi al trattamento dei tuoi dati in qualsiasi momento.' },
                ].map((item) => (
                  <div
                    key={item.right}
                    className="rounded-lg bg-navy-800/60 border border-blue-800/40 p-4"
                  >
                    <p className="text-sm font-semibold text-cyan-300 mb-1">{item.right}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 bg-navy-800/40 rounded-lg p-4 border border-blue-800/30">
                Poiché non raccogliamo dati personali, la maggior parte di questi diritti non si applica
                praticamente a questo sito. Per qualsiasi richiesta, contattaci comunque ai recapiti
                indicati di seguito.
              </p>
              <p className="text-sm">
                Hai inoltre il diritto di proporre reclamo al{' '}
                <a
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-200 underline"
                >
                  Garante per la Protezione dei Dati Personali
                </a>
                {' '}(Autorità di controllo italiana).
              </p>
            </div>
          </section>

          {/* Section 6 — Contatti */}
          <section aria-labelledby="contatti">
            <h2
              id="contatti"
              className="text-2xl font-bold text-white mb-4 flex items-center gap-3 scroll-mt-8"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-400/20 border border-blue-400/40 flex items-center justify-center text-blue-300 text-sm font-bold" aria-hidden="true">6</span>
              Contatti
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Per qualsiasi domanda relativa a questa informativa privacy o al trattamento dei dati,
                puoi contattare il titolare del trattamento:
              </p>
              <div className="rounded-xl border border-blue-700/40 bg-navy-800/40 p-6 space-y-4">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Titolare</p>
                  <p className="text-white font-semibold">Michele Tornello</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Contesto istituzionale</p>
                  <p className="text-white">Steve Jobs Academy Catania</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">GitHub</p>
                  <a
                    href="https://github.com/MT-Showcases/ai-fundamentals-showcase"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 underline text-sm"
                  >
                    MT-Showcases/ai-fundamentals-showcase
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Last updated + back link */}
          <div className="pt-8 border-t border-blue-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              Informativa aggiornata al{' '}
              <time dateTime="2025-05-02">{lastUpdated}</time>
              {' '}· Versione 1.0
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              ← Torna alla Home
            </Link>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-navy-800 border-t border-blue-700/60 py-10 px-6 mt-12 print:hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-sm">Fondamenti di AI</p>
              <p className="text-gray-400 text-xs mt-0.5">Corso di Formazione AI</p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-gray-300 text-sm">
                Docente: <span className="text-cyan-400 font-medium">Michele Tornello</span>
              </p>
              <div className="flex items-center justify-end gap-3 mt-1">
                <span className="text-gray-400 text-xs">Privacy Policy</span>
                <span className="text-gray-700 text-xs" aria-hidden="true">·</span>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-300 text-xs transition-colors">
                  Termini di Servizio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Print styles */}
      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          body { background: white !important; color: black !important; }
          h1, h2 { color: black !important; }
          p, li { color: #333 !important; }
          a { color: #0066cc !important; }
          .bg-navy-900, .bg-navy-800, .bg-navy-700,
          .bg-blue-900\\/20, .bg-navy-800\\/60, .bg-navy-800\\/40 {
            background: white !important;
            border-color: #ccc !important;
          }
        }
      `}</style>
    </div>
  );
}
