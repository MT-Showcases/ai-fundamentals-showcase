# Contributing

Grazie per voler contribuire al progetto.

## Workflow consigliato
1. Crea un branch feature/fix da `main`
2. Esegui modifiche piccole e focalizzate
3. Verifica localmente:
   ```bash
   npm run build
   ```
4. Apri PR con descrizione chiara (contesto, cosa cambia, come testare)

## Convenzioni
- TypeScript strict-friendly
- UI coerente con palette brand (navy/blue/cyan)
- Preferire componenti riusabili in `components/`
- Aggiornare documentazione se cambia UX, setup o SEO

## Commit style
Conventional-ish commits consigliati:
- `feat:` nuove funzionalità
- `fix:` bugfix
- `chore:` manutenzione
- `docs:` documentazione

## Checklist PR
- [ ] Build ok (`npm run build`)
- [ ] Nessuna regressione visuale evidente
- [ ] Metadata/SEO mantenuti se tocchi pagine
- [ ] README aggiornato se necessario
