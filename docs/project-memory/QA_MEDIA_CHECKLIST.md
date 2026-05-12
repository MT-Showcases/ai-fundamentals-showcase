# QA Media Checklist

## Pre-push
- [ ] Asset ottimizzato per web (target immagini ~150–400 KB quando possibile)
- [ ] File copiato in `public/media/...`
- [ ] `placeholderPath` aggiornato in `data/chapters/chXX.ts`
- [ ] `notes: 'ready'` impostato
- [ ] Verifica livello corretto:
  - [ ] `chapter.media` per blocco "Media del Capitolo"
  - [ ] `section.media` per media nelle sezioni
- [ ] `npm run build` OK

## Post-deploy (live)
- [ ] Test desktop (homepage + pagina capitolo)
- [ ] Test mobile (390px)
- [ ] Layout media corretto:
  - [ ] 1 slot visibile → full-width
  - [ ] 2+ slot visibili → 2 colonne desktop / 1 colonna mobile
  - [ ] ordine: infografica → video → podcast → risorsa
- [ ] Apertura modal infografica/video funzionante
- [ ] Nessun 404 su media
- [ ] Se cache stale: applicato cache-bust filename + path

## Command rapidi
```bash
npm run build
curl -I https://ai-fundamentals.micheletornello.com/media/.../file.jpg
```