# ML Lab 1 — Regressione: Predire Prezzi Case

## Cosa Imparerai
- Caricare dataset reale
- Esplorare dati (statistiche base)
- Allenare modelli: Linear Regression + Random Forest
- Valutare performance con MAE, RMSE, R²
- Visualizzare previsioni vs realtà

## Setup (2 min)

### 1. Installa dipendenze
```bash
pip install -r requirements.txt
```

### 2. Esegui il lab
```bash
python main.py
```

Vedrai:
- Statistiche dataset
- Training...
- Risultati MAE/RMSE/R²
- Grafico salvato: `housing-predictions.png`

## Esperimenti (20 min)

Apri `main.py` e prova:

**Esperimento 1:** Cambia il rapporto train/test
```python
# Riga ~30: cambia test_size
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)  # prova 0.1 o 0.3
```

**Esperimento 2:** Aggiungi più features
```python
# Riga ~20: decomment altre colonne
features = ['MedInc', 'HouseAge', 'AveRooms', 'AveBedrms', 'Population']
```

**Esperimento 3:** Usa un modello diverso
```python
# Riga ~45: prova GradientBoostingRegressor
from sklearn.ensemble import GradientBoostingRegressor
model = GradientBoostingRegressor()
```

## Cosa Osservare
- Quando R² cala? (Overfitting?)
- MAE cambia con test_size?
- Random Forest è sempre meglio di Linear Regression?
- Quali features contano di più?

---

## Output Atteso
```
=== Housing Regression Lab ===
Dataset shape: (20640, 8)
Target (price) range: $14,999 - $500,001

Training Models...

Linear Regression:
  MAE: $71,234
  RMSE: $97,452
  R²: 0.58

Random Forest:
  MAE: $49,123
  RMSE: $72,814
  R²: 0.76

✅ Grafico salvato: housing-predictions.png
```
