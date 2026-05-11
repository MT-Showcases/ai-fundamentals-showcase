# Content Model

## Fonte contenuti
- Capitoli: `data/chapters/ch01.ts ... ch15.ts`
- Tipi: `data/types.ts`

## Regole principali

### Chapter-level media (blocco "Media del Capitolo")
Usato da `components/ChapterMediaSlots.tsx`.

Richiede nel capitolo:
```ts
media: [
  { type: 'video' | 'podcast' | 'infographic' | 'resource', placeholderPath: 'media/...', notes: 'ready' | 'placeholder' }
]
```

Se `chapter.media` manca, il blocco principale non mostra i media reali del capitolo.

### Section-level media (media dentro le sezioni)
Usato da `components/SectionMediaSlots.tsx` via `section.media[]`.

### Stato media
- `notes: 'ready'` → asset visibile come contenuto pronto
- `notes: 'placeholder'` → slot "In arrivo"

## Challenge
Le challenge sono in `chapter.challenge` con union type:
- bias dataset
- hallucination spotting
- risk classification

Il rendering è gestito in `app/chapters/[slug]/page.tsx` con discriminazione sul tipo (`dataset`, `spans`, `scenarios`).