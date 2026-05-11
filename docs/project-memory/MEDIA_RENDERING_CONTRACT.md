# Media Rendering Contract (Frontend)

## Capitolo
Componente: `ChapterMediaSlots`

Fonte dati: `chapter.media`

Comportamento:
- slot `ready` + `type=infographic` → immagine visibile e cliccabile
- slot `ready` + `type=video/podcast/resource` → player/link visibile
- slot `placeholder` → card "In arrivo"

## Sezione
Componente: `SectionMediaSlots`

Fonte dati: `section.media`

Comportamento:
- se `section.media` assente o vuoto: non renderizza nulla
- se presente: stessa logica `ready/placeholder`

## Anti-regressione (importante)
Aggiornare un file in `public/media/...` **non basta**.
Servono sempre anche:
1. path corretto in `chXX.ts`
2. `notes: 'ready'`
3. livello corretto (`chapter.media` vs `section.media`)

## Cache/CDN
Se deploy live ma asset vecchio:
- rinominare file (`*-v2.*`)
- aggiornare `placeholderPath`
- push e verificare nuovo URL