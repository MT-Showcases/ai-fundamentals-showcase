# Sources Coverage Plan

## Ready ✅
- CH3: 3 sources (paper/tutorial/dataset) complete for data quality and evaluation (100%)
- CH5: 5 sources (paper + tutorial + video) complete for ML/DL fundamentals (100%)
- CH10: 5 sources (article + dataset + framework PDF) complete for ethics and risk management (100%)
- CH11: 4 sources (regulation + framework + policy) complete for compliance (100%)

## Partial ⚠️
- CH6: 1 base source (CS229) — dedicated NLP tutorial missing (50%)
- CH7: 2 sources (book + video) — local vision dataset ready for upload missing (67%)
- CH8: 2 sources (Transformer + HF Course) — benchmark/eval dataset missing (67%)
- CH9: 2 sources (CS229 + Titanic) — specific decision strategy paper missing (67%)
- CH12: 2 sources (AI Index + UCI Adult) — dedicated European workforce report missing (67%)
- CH13: 3 sources (sklearn + HF + Titanic) — enterprise case study with KPIs missing (75%)
- CH14: 3 sources (Transformer + DL Book + HF) — advanced video asset on RAG/agents missing (75%)
- CH15: 3 sources (AI Index + AI Act + NIST) — 2030+ vertical scenario report for education missing (75%)

## Todo ❌
- CH4: 0 resources in new pack (out of card scope) — requires active research and dedicated folder creation

Total Coverage: 79% (19/24 target)
Target: 100% by Phase 6

## NotebookLM Compatibility Check
Formats present in registry:
- PDF/Paper: compatible directly
- Article/Web: compatible via URL or PDF conversion
- Dataset: use description + CSV schema; optionally attach sample as PDF/Markdown
- Video: attach URL + brief transcript (recommended)

Result: **No technical blockers**. All sources are loadable directly or with light conversion.

## Upload List (relative paths)
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
1. Update `public/sources/index.json` with new sources and `lastVerified`.
2. Align individual `ch*/sources.json` using only `sourceIds` present in the registry.
3. Verify links (HTTP 200/301) before merge.
4. Atomic commit with standard sources pack message.
5. In NotebookLM, reload only the changed chapter packs.
6. Log remaining gaps in this file under the Partial/Todo sections.
