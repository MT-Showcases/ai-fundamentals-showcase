import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termini di Servizio | Fondamenti di AI',
  description: 'Termini e condizioni di utilizzo della piattaforma Fondamenti di AI — Steve Jobs Academy Catania.',
  alternates: { canonical: '/terms' },
};

const LAST_UPDATED = '2 maggio 2025';

const sections = [
  { id: 'uso-piattaforma', label: 'Uso della piattaforma' },
  { id: 'responsabilita', label: 'Responsabilità e disclaimer' },
  { id: 'proprieta-intellettuale', label: 'Proprietà intellettuale' },
  { id: 'diritti-gdpr', label: 'I tuoi diritti (GDPR)' },
  { id: 'modifiche', label: 'Modifiche ai termini' },
  { id: 'legge-applicabile', label: 'Legge applicabile' },
  { id: 'contatti', label: 'Contatti' },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a1f3d] text-white print:bg-white print:text-black">

      {/* Hero */}
      <header className="bg-gradient-to-r from-[#0a1f3d] via-[#0d2a52] to-[#0a1f3d] border-b border-[#00a8ff]/20 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#00a8ff]/10 border border-[#00a8ff]/30 rounded-full px-4 py-1.5 text-[#00a8ff] text-sm font-medium mb-6">
            📋 Documento legale
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Termini di Servizio
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">
            Leggendo o usando questa piattaforma accetti i presenti termini. Sono redatti in modo chiaro, senza legalese inutile.
          </p>
          <p className="text-gray-500 text-sm">
            Ultimo aggiornamento: <span className="text-[#00a8ff] font-medium">{LAST_UPDATED}</span>
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* TOC — Sidebar */}
          <aside className="lg:w-56 shrink-0 print:hidden">
            <nav
              className="sticky top-8 bg-[#0d2a52]/60 border border-[#00a8ff]/20 rounded-2xl p-5"
              aria-label="Indice dei contenuti"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[#00a8ff] mb-4">
                Indice
              </p>
              <ol className="space-y-2">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex items-start gap-2 text-sm text-gray-300 hover:text-[#00a8ff] transition-colors group"
                    >
                      <span className="text-[#00a8ff]/50 group-hover:text-[#00a8ff] font-mono text-xs mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-5 pt-4 border-t border-[#00a8ff]/15 text-xs text-gray-500 space-y-1.5">
                <Link href="/privacy" className="block text-[#00a8ff]/70 hover:text-[#00a8ff] transition-colors">
                  → Privacy Policy
                </Link>
              </div>
            </nav>
          </aside>

          {/* Main content */}
          <article className="flex-1 space-y-14 print:space-y-8">

            {/* Section 1 */}
            <section id="uso-piattaforma" aria-labelledby="h-uso">
              <SectionHeader num="01" id="h-uso" title="Uso della piattaforma" />
              <div className="prose-custom">
                <p>
                  Questa piattaforma è un <strong>corso didattico open access</strong> sui Fondamenti dell&apos;Intelligenza Artificiale, realizzato da <strong>Michele Tornello</strong> nell&apos;ambito della sua attività di docenza presso la <strong>Steve Jobs Academy (SJA) Catania</strong>.
                </p>
                <p>La piattaforma è destinata a:</p>
                <ul>
                  <li>Studenti SJA Catania iscritti al percorso formativo AI</li>
                  <li>Chiunque voglia apprendere i fondamenti dell&apos;AI in modo autonomo</li>
                  <li>Professionisti e curiosi che vogliono aggiornarsi sul tema</li>
                </ul>
                <p>
                  L&apos;accesso è gratuito e non richiede registrazione. L&apos;utente si impegna a utilizzare la piattaforma in modo lecito, nel rispetto delle leggi italiane ed europee, e a non interferire con il funzionamento dei servizi.
                </p>
                <Callout>
                  È vietato copiare, redistribuire o rivendere i contenuti senza autorizzazione scritta del titolare.
                </Callout>
              </div>
            </section>

            {/* Section 2 */}
            <section id="responsabilita" aria-labelledby="h-resp">
              <SectionHeader num="02" id="h-resp" title="Responsabilità e disclaimer" />
              <div className="prose-custom">
                <p>
                  I contenuti di questa piattaforma hanno <strong>finalità esclusivamente didattica</strong>. Non costituiscono consulenza professionale, tecnica, legale o finanziaria.
                </p>
                <p>
                  Il titolare si impegna a mantenere le informazioni aggiornate e accurate, ma non garantisce l&apos;assenza di errori, omissioni o variazioni rispetto all&apos;evoluzione rapida del settore AI.
                </p>
                <p>In nessun caso il titolare sarà responsabile per:</p>
                <ul>
                  <li>Danni diretti o indiretti derivanti dall&apos;uso dei contenuti</li>
                  <li>Interruzioni di servizio o indisponibilità temporanea della piattaforma</li>
                  <li>Decisioni prese dagli utenti basandosi sui contenuti</li>
                  <li>Contenuti di siti terzi raggiungibili tramite link esterni</li>
                </ul>
                <p>
                  La piattaforma può contenere link a risorse esterne (articoli, ricerche, strumenti AI). Il titolare non controlla quei siti e non ne è responsabile.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="proprieta-intellettuale" aria-labelledby="h-pi">
              <SectionHeader num="03" id="h-pi" title="Proprietà intellettuale" />
              <div className="prose-custom">
                <p>
                  Tutti i contenuti originali della piattaforma — testi, struttura del corso, quiz, esercizi, infografiche e codice — sono di <strong>esclusiva proprietà di Michele Tornello</strong>, salvo diversa indicazione.
                </p>
                <p>
                  I loghi, il nome e i materiali della <strong>Steve Jobs Academy Catania</strong> rimangono di proprietà dei rispettivi titolari. Questa piattaforma non è un prodotto ufficiale SJA, ma un&apos;iniziativa didattica del docente.
                </p>
                <p>È consentito:</p>
                <ul>
                  <li>Leggere e studiare i contenuti per uso personale</li>
                  <li>Condividere il link alla piattaforma</li>
                  <li>Citare brevi estratti con attribuzione esplicita all&apos;autore</li>
                </ul>
                <p>Non è consentito senza autorizzazione scritta:</p>
                <ul>
                  <li>Riprodurre integralmente i contenuti su altri siti o pubblicazioni</li>
                  <li>Vendere, sublicenziare o sfruttare commercialmente i materiali</li>
                  <li>Rimuovere o alterare le indicazioni di copyright</li>
                </ul>
                <Callout>
                  Per richieste di licenza o collaborazione: <a href="mailto:michele@michetornello.it" className="text-[#00a8ff] hover:underline">michele@michetornello.it</a>
                </Callout>
              </div>
            </section>

            {/* Section 4 */}
            <section id="diritti-gdpr" aria-labelledby="h-gdpr">
              <SectionHeader num="04" id="h-gdpr" title="I tuoi diritti (GDPR)" />
              <div className="prose-custom">
                <p>
                  Questa piattaforma non raccoglie dati personali tramite form di registrazione o account. Tuttavia, come utente europeo hai diritti garantiti dal <strong>Regolamento UE 2016/679 (GDPR)</strong>:
                </p>
                <ul>
                  <li><strong>Accesso</strong> — puoi richiedere copia dei tuoi dati eventualmente trattati</li>
                  <li><strong>Rettifica</strong> — puoi correggere dati inesatti</li>
                  <li><strong>Cancellazione</strong> — hai il diritto all&apos;oblio (&ldquo;right to be forgotten&rdquo;)</li>
                  <li><strong>Portabilità</strong> — puoi ricevere i tuoi dati in formato leggibile</li>
                  <li><strong>Opposizione</strong> — puoi opporti a specifici trattamenti</li>
                  <li><strong>Limitazione</strong> — puoi chiedere la sospensione del trattamento</li>
                </ul>
                <p>
                  Per esercitare questi diritti o per qualsiasi richiesta relativa alla privacy, consulta la nostra{' '}
                  <Link href="/privacy" className="text-[#00a8ff] hover:underline font-medium">
                    Privacy Policy
                  </Link>{' '}
                  o contattaci direttamente.
                </p>
                <p>
                  Hai anche il diritto di proporre reclamo al <strong>Garante per la protezione dei dati personali</strong> (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#00a8ff] hover:underline">garanteprivacy.it</a>).
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="modifiche" aria-labelledby="h-mod">
              <SectionHeader num="05" id="h-mod" title="Modifiche ai termini" />
              <div className="prose-custom">
                <p>
                  Il titolare si riserva il diritto di modificare i presenti Termini di Servizio in qualsiasi momento. Le modifiche saranno efficaci dal momento della pubblicazione su questa pagina, con aggiornamento della data in cima al documento.
                </p>
                <p>
                  Per modifiche sostanziali, verrà aggiornato l&apos;avviso in evidenza sulla homepage della piattaforma. L&apos;uso continuato della piattaforma dopo la pubblicazione delle modifiche costituisce accettazione dei nuovi termini.
                </p>
                <Callout type="info">
                  Ti consigliamo di rivedere questa pagina periodicamente. L&apos;ultima versione è sempre disponibile a <strong>/terms</strong>.
                </Callout>
              </div>
            </section>

            {/* Section 6 */}
            <section id="legge-applicabile" aria-labelledby="h-leg">
              <SectionHeader num="06" id="h-leg" title="Legge applicabile" />
              <div className="prose-custom">
                <p>
                  I presenti Termini di Servizio sono regolati e interpretati in conformità alla <strong>legge italiana</strong> e al diritto dell&apos;Unione Europea applicabile.
                </p>
                <p>
                  Per qualsiasi controversia relativa all&apos;uso della piattaforma, le parti concordano di sottoporre la questione alla competenza esclusiva del <strong>Tribunale di Catania</strong>, salvo diversa disposizione inderogabile di legge.
                </p>
                <p>
                  In alternativa alla via giudiziale, le parti possono ricorrere a procedure di risoluzione alternativa delle controversie (ADR/ODR) ai sensi del D.Lgs. 130/2015 e del Regolamento UE 524/2013.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="contatti" aria-labelledby="h-cont">
              <SectionHeader num="07" id="h-cont" title="Contatti" />
              <div className="prose-custom">
                <p>
                  Per qualsiasi domanda relativa a questi Termini di Servizio, per richieste di licenza o per qualsiasi altra comunicazione:
                </p>
                <div className="bg-[#0d2a52]/60 border border-[#00a8ff]/20 rounded-xl p-5 mt-4 space-y-2 text-sm not-prose">
                  <div className="flex items-center gap-3">
                    <span className="text-[#00a8ff]">👤</span>
                    <span className="text-gray-300">Michele Tornello — Docente & Autore</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#00a8ff]">🏫</span>
                    <span className="text-gray-300">Steve Jobs Academy Catania</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#00a8ff]">📧</span>
                    <a href="mailto:michele@michetornello.it" className="text-[#00a8ff] hover:underline">
                      michele@michetornello.it
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#00a8ff]">🌐</span>
                    <a href="https://michetornello.it" target="_blank" rel="noopener noreferrer" className="text-[#00a8ff] hover:underline">
                      michetornello.it
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom nav */}
            <div className="pt-8 border-t border-[#00a8ff]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 print:hidden">
              <p className="text-xs text-gray-500">
                Ultimo aggiornamento: <span className="text-[#00a8ff]">{LAST_UPDATED}</span>
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/privacy" className="text-[#00a8ff]/70 hover:text-[#00a8ff] transition-colors">
                  → Privacy Policy
                </Link>
                <Link href="/" className="text-gray-500 hover:text-gray-300 transition-colors">
                  ← Torna al corso
                </Link>
              </div>
            </div>

          </article>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#071628] border-t border-[#00a8ff]/20 py-10 px-6 mt-12 print:hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-sm">Fondamenti di AI</p>
              <p className="text-gray-400 text-xs mt-0.5">Corso di Formazione AI — SJA Catania</p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 justify-end">
              <Link href="/privacy" className="hover:text-[#00a8ff] transition-colors">Privacy Policy</Link>
              <span className="text-[#00a8ff]">Termini di Servizio</span>
              <Link href="/" className="hover:text-[#00a8ff] transition-colors">Home</Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}

/* ─── Sub-components ─── */

function SectionHeader({ num, id, title }: { num: string; id: string; title: string }) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <span className="text-[#00a8ff]/40 font-mono text-sm mt-1 shrink-0">{num}</span>
      <h2 id={id} className="text-2xl font-bold text-white leading-tight">
        {title}
      </h2>
    </div>
  );
}

function Callout({ children, type = 'warning' }: { children: React.ReactNode; type?: 'warning' | 'info' }) {
  const styles = {
    warning: 'bg-amber-500/10 border-amber-500/30 text-amber-200',
    info: 'bg-[#00a8ff]/10 border-[#00a8ff]/30 text-blue-200',
  };
  return (
    <div className={`border rounded-xl px-4 py-3 text-sm mt-4 ${styles[type]}`} role="note">
      {children}
    </div>
  );
}
