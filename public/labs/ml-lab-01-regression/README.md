# ML Lab 1 — Regressione: Predire Prezzi Case

## Cosa Imparerai
- Caricare dataset reale (California Housing)
- Esplorare dati (statistiche base)
- Allenare modelli: Linear Regression + Random Forest
- Valutare performance con MAE, RMSE, R²
- Visualizzare previsioni vs realtà

---

## Setup (2 min)

### 1. Installa dipendenze
```bash
pip install -r requirements.txt
```

### 2. Esegui il lab
```bash
python main.py
```

---

## 5 Step Principali

### Step 1: Carica i Dati
**File:** main.py (linee 1-10)

Il lab carica il dataset California Housing (20k case con 8 features).

```python
from sklearn.datasets import fetch_california_housing
housing = fetch_california_housing()
X = pd.DataFrame(housing.data, columns=housing.feature_names)
y = pd.Series(housing.target * 100000, name='Price')
```

**Cosa fa:** Legge dati reali, li converte a DataFrame leggibile, prepara il target (prezzi).

---

### Step 2: Dividi Training e Test
**File:** main.py (linee 35-38)

Split 80% training / 20% validation.

```python
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
```

**Cosa fa:** Divide il dataset in dati per allenare il modello e dati per validare quanto generalizza.

---

### Step 3: Allena il Modello
**File:** main.py (linee 45-52)

Crea 2 modelli: Linear Regression (semplice) + Random Forest (complesso).

```python
# Modello 1: Linear Regression
model_lr = LinearRegression()
model_lr.fit(X_train, y_train)

# Modello 2: Random Forest
model_rf = RandomForestRegressor(n_estimators=100, random_state=42)
model_rf.fit(X_train, y_train)
```

**Cosa fa:** Allena i modelli sui dati di training.

---

### Step 4: Valuta Performance
**File:** main.py (linee 54-62)

Misura errore (MAE) e accuratezza (R²).

```python
from sklearn.metrics import mean_absolute_error, r2_score

train_mae = mean_absolute_error(y_train, model.predict(X_train))
test_mae = mean_absolute_error(y_test, model.predict(X_test))
test_r2 = r2_score(y_test, model.predict(X_test))
```

**Cosa fa:** Confronta performance su training vs test. Se test_mae >> train_mae = overfitting!

---

### Step 5: Visualizza Risultati
**File:** main.py (linee 65-75)

Grafico scatter: previsioni vs realtà.

```python
import matplotlib.pyplot as plt

plt.scatter(y_test, y_pred, alpha=0.3, s=10)
plt.plot([min_val, max_val], [min_val, max_val], 'r--', lw=2, label='Perfect')
plt.xlabel('Actual Price ($)')
plt.ylabel('Predicted Price ($)')
plt.show()
```

**Cosa fa:** Visualizza quanto bene il modello predice i prezzi.

---

## Output Atteso

```
=== Housing Regression Lab ===
Dataset shape: (20640, 8)
Price range: $14,999 - $500,001

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

---

## Esperimenti Proposti

1. **Cambia test_size** (0.1, 0.3, 0.5)
   - Come varia MAE?
   - Più test = valutazione più rigorosa, ma meno training

2. **Riduci n_estimators** (10 invece di 100)
   - Training più veloce?
   - Accuratezza cala?

3. **Aggiungi metrica RMSE**
   - Penalizza outlier più di MAE
   - Quando useresti RMSE vs MAE?

4. **Prova GradientBoostingRegressor**
   - È più veloce di Random Forest?
   - R² migliora?

---

## FAQ

**Q: Cosa differenzia Linear Regression da Random Forest?**
A: Linear assume relazione lineare y=a*x+b (semplice, veloce). Random Forest crea 100 alberi decisionali (più complesso, cattura pattern non-lineari).

**Q: Cosa significa overfitting?**
A: Quando train_mae << test_mae, il modello ha memorizzato i dati di training anziché apprendere pattern generali.

**Q: Quale metrica è più affidabile, MAE o R²?**
A: Entrambe. MAE è in unità originali (dollari). R² è percentuale varianza spiegata. Usale insieme.

---

## Documentazione Completa

Per step dettagliati, glossario interattivo, file structure spiegata e source per NotebookLM, consulta il sito:

**https://ai-fundamentals.micheletornello.com/chapters/machine-learning**

Sezione: "ML Workflow Pratico — 5 Step"
