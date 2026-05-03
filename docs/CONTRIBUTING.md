# Contributing

Thank you for your interest in contributing to this project.

## Recommended workflow
1. Create a feature/fix branch from `main`
2. Make small, focused changes
3. Verify locally:
   ```bash
   npm run build
   ```
4. Open a PR with a clear description (context, what changes, how to test)

## Conventions
- TypeScript strict-friendly
- UI consistent with brand palette (navy/blue/cyan)
- Prefer reusable components in `components/`
- Update documentation if UX, setup, or SEO changes

## Commit style
Conventional-ish commits recommended:
- `feat:` new features
- `fix:` bug fixes
- `chore:` maintenance
- `docs:` documentation

## PR checklist
- [ ] Build passes (`npm run build`)
- [ ] No obvious visual regressions
- [ ] Metadata/SEO preserved if touching pages
- [ ] README updated if necessary
