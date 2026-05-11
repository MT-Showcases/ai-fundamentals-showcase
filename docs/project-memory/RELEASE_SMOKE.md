# Release Smoke Test

Dopo ogni push su `main`:

1. Aprire homepage e capitolo toccato
2. Verificare blocco "Media del Capitolo"
3. Verificare media sezione (se presente)
4. Verificare challenge (se toccate)
5. Verificare console browser senza errori bloccanti

## URL base
- Production: https://ai-fundamentals.micheletornello.com

## Esito
- PASS: tutto visibile, nessun 404, nessun blocco UX
- FAIL: aprire fix immediato con commit separato `fix(...)`