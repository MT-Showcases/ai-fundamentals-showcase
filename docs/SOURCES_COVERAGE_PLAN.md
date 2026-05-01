# Sources Coverage Plan

## Ready ✅
- CH3: 3 fonti (paper/tutorial/dataset) complete per data quality e evaluation (100%)
- CH5: 5 fonti (paper + tutorial + video) complete per fondamentali ML/DL (100%)
- CH10: 5 fonti (article + dataset + framework PDF) complete per etica e risk management (100%)
- CH11: 4 fonti (normativa + framework + policy) complete per compliance (100%)

## Partial ⚠️
- CH6: 1 fonte di base (CS229) — manca tutorial NLP dedicato (50%)
- CH7: 2 fonti (book + video) — manca dataset vision locale pronto per upload (67%)
- CH8: 2 fonti (Transformer + HF Course) — manca benchmark/eval dataset (67%)
- CH9: 2 fonti (CS229 + Titanic) — manca paper decision strategy specifico (67%)
- CH12: 2 fonti (AI Index + UCI Adult) — manca report workforce europeo dedicato (67%)
- CH13: 3 fonti (sklearn + HF + Titanic) — manca case study enterprise con KPI (75%)
- CH14: 3 fonti (Transformer + DL Book + HF) — manca asset video avanzato su RAG/agents (75%)
- CH15: 3 fonti (AI Index + AI Act + NIST) — manca scenario report 2030+ verticale education (75%)

## Todo ❌
- CH4: 0 risorse nel nuovo pack (fuori perimetro card) — richiede ricerca attiva e creazione cartella dedicata

Total Coverage: 79% (19/24 target)
Target: 100% by Phase 6

## NotebookLM Compatibility Check
Formati presenti nel registry:
- PDF/Paper: compatibili direttamente
- Article/Web: compatibili via URL o conversione PDF
- Dataset: usare descrizione + schema CSV; opzionale allegare sample in PDF/Markdown
- Video: allegare URL + trascrizione sintetica (consigliato)

Esito: **Nessun blocco tecnico**. Tutte le fonti sono caricabili direttamente o con conversione leggera.

## Upload List (percorsi relativi)
- `public/sources/index.json`
- `public/sources/ch3/sources.json`
- `public/sources/ch5/sources.json`
- `public/sources/ch6/sources.json`
- `public/sources/ch7/sources.json`
- `public/sources/ch8/sources.json`
- `public/sources/ch9/sources.json`
- `public/sources/ch10/sources.json`
- `public/sources/ch11/sources.json`
- `public/sources/ch12/sources.json`
- `public/sources/ch13/sources.json`
- `public/sources/ch14/sources.json`
- `public/sources/ch15/sources.json`

## Sync Workflow
1. Aggiorna `public/sources/index.json` con nuove fonti e `lastVerified`.
2. Allinea i singoli `ch*/sources.json` usando solo `sourceIds` presenti nel registry.
3. Verifica link (HTTP 200/301) prima del merge.
4. Commit atomico con messaggio standard del pacchetto fonti.
5. In NotebookLM, ricarica solo i chapter pack variati.
6. Logga gap residui in questo file sotto sezione Partial/Todo.
