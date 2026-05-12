# Interactive Challenges (Modular System)

This project now supports a modular interactive challenge engine for chapter-level exercises.

## Component
- `components/ChapterChallengeTableReview.tsx`

## Data contract
Defined in `data/types.ts`:
- `ChapterChallengeTableReview`
- `TableChallengePhase`

### Supported selection modes
- `row`
- `cell`
- `column`

### Scoring modes
- `precision`
- `coverage`
- `balanced`

## Phase structure
Each challenge can define multiple phases (`phases[]`) with independent expected answers:
- `correctRows`
- `correctColumns`
- `correctCells`

## UX behavior
- Selection is interactive by phase
- `Verifica` computes score
- `Mostra risultati` highlights expected answers for the current phase
- `Reset` clears all selections

## Where to wire it
Rendering is handled in:
- `app/chapters/[slug]/page.tsx`

A chapter uses this engine by defining `challenge.table` + `challenge.phases`.

## Migration rule
When a chapter has a robust interactive challenge, avoid duplicating the same task in `exercises` mini-lab blocks.

