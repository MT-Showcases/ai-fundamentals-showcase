# Documentation Audit — 2026-05-11

## Scope
Audit documentazione progetto per ridurre ambiguità agenti, separare skill vs project docs e identificare gap.

---

## 1) Stato attuale (sintesi)

### Coperto ✅
- Modello contenuti e rendering media (`CONTENT_MODEL.md`, `MEDIA_RENDERING_CONTRACT.md`)
- QA operativo media (`QA_MEDIA_CHECKLIST.md`)
- Smoke release (`RELEASE_SMOKE.md`)
- Policy change (`CHANGE_POLICY.md`)
- Playbook agenti (`AGENT_PLAYBOOK.md`)

### Migliorato in questo audit ✅
- Aggiunto indice docs globale (`docs/INDEX.md`)
- Allineato dominio ufficiale in file runtime/metadata critici:
  - `app/layout.tsx`
  - `scripts/qa_runtime.mjs`

### Storico/artefatti da tenere ma etichettare ℹ️
- `docs/lighthouse.json`, `docs/runtime-check.json`, `docs/ux-mobile.json` ecc.
  - Sono snapshot tecnici, non policy.
  - Da rigenerare periodicamente o versionare con data quando necessario.

---

## 2) Gap residui (priorità)

### P1 — Allineamento URL in report storici
Alcuni markdown storici citano il dominio Vercel fallback nei report QA/perf.
Azione consigliata:
- NON riscrivere la storia nei report tecnici già emessi.
- Aggiungere nota standard: "baseline storica su vecchio URL / deployment".

### P2 — Script di report con output versionato
Gli script QA producono file statici sovrascrivibili (es. `runtime-check.json`).
Azione consigliata:
- introdurre naming con timestamp opzionale (`runtime-check-YYYYMMDD.json`) + ultimo symlink/logico.

### P3 — README labs roadmap
README parla di “more labs coming” in punti già completati.
Azione consigliata:
- allineare sezione labs/roadmap allo stato reale periodicamente.

---

## 3) Decisione architetturale confermata

**Regola:** skill leggere e generiche; conoscenza operativa specifica in `docs/project-memory/*`.

Motivo:
- evita duplicazione e drift
- abilita skill futura "tutti gli showcase"
- rende ogni showcase autonomo con la sua documentazione locale

---

## 4) Checklist rapida per futuri audit
- [ ] URL ufficiale coerente in metadata + script runtime
- [ ] media chapter/section documentati e testati
- [ ] policy update in `project-memory` quando cambia comportamento FE
- [ ] README allineato allo stato reale dei capitoli/labs
- [ ] report QA marcati come snapshot storici
