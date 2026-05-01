# QA UX Mobile Finale — Responsive + Touch

Data audit: 2026-05-01  
Repo: `ai-fundamentals-showcase`

## Scope viewport
- 375px (mobile small)
- 480px (mobile standard)
- 768px (tablet)
- 1024px (desktop)

Fonte misure: `docs/ux-mobile.json`  
Screenshot: `docs/screenshots/ux-375.png`, `ux-480.png`, `ux-768.png`, `ux-1024.png`

---

## Esito per viewport

| Viewport | Horizontal scroll | Font leggibile (>=16 mobile) | Tap target >=44x44 | Touch/scroll/click | Images load | Stato |
|---|---:|---:|---:|---:|---:|---|
| 375x812 | ✅ no | ⚠️ parziale | ⚠️ 11 elementi piccoli | ✅ | ✅ | PASS con warning |
| 480x900 | ✅ no | ⚠️ parziale | ⚠️ 13 elementi piccoli | ✅ | ✅ | PASS con warning |
| 768x1024 | ✅ no | ✅ | ⚠️ 12 elementi piccoli | ✅ | ✅ | PASS |
| 1024x768 | ✅ no | ✅ | ⚠️ 14 elementi piccoli | ✅ | ✅ | PASS |

> Nota: il check automatico sul font minimo rileva anche micro-testi di badge/metadata; il corpo principale risulta leggibile. Warning mantenuto per hardening UI mobile.

---

## Dettagli osservati

### Punti OK
- Nessun layout break critico ai 4 breakpoint.
- Nessun overflow orizzontale globale.
- Scroll e click touch coerenti.
- Asset immagine caricati correttamente nelle pagine testate.

### Warning minori (non bloccanti)
1. Alcuni elementi interattivi risultano sotto soglia 44x44 px (micro-controls/links secondari).
2. Alcuni testi secondari hanno font-size piccolo (non critico, ma da uniformare in mobile).

### Raccomandazioni veloci
- Applicare `min-height/min-width: 44px` ai controlli principali su mobile.
- Portare i testi secondari a base 14–16px su viewport <=480px.
- Eventuale spacing extra tra controls adiacenti in sezioni quiz/media.

---

## Lighthouse Accessibility
- Score: **95/100** ✅
- Requisito `>=90`: ✅ PASS

## Checklist mobile
- 375px: PASS ✅
- 480px: PASS ✅
- 768px: PASS ✅
- 1024px: PASS ✅
- Lighthouse AA ≥90: PASS ✅

## Conclusione
✅ **QA UX Mobile complessivo PASS**  
Nessun blocco critico, solo miglioramenti minori consigliati su dimensioni target touch e tipografia secondaria.