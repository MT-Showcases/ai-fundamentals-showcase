#!/usr/bin/env python3
"""
ML Lab 1 — Regressione: Predire Prezzi Case (California Housing Dataset)

Questo lab mostra:
1. Come caricare e esplorare dati reali
2. Allenare due modelli: Linear Regression + Random Forest
3. Valutare performance con MAE, RMSE, R²
4. Visualizzare previsioni vs realtà

Esegui:
  python main.py
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score


def load_data():
    """Carica California Housing Dataset"""
    print("Loading California Housing Dataset...")
    housing = fetch_california_housing()
    X = pd.DataFrame(housing.data, columns=housing.feature_names)
    y = pd.Series(housing.target * 100000, name='Price')  # Converti a dollari
    return X, y


def evaluate_model(name, model, X_train, X_test, y_train, y_test):
    """Allena modello e stampa metriche"""
    print(f"\n{name}...")
    model.fit(X_train, y_train)

    y_train_pred = model.predict(X_train)
    y_test_pred = model.predict(X_test)

    train_mae = mean_absolute_error(y_train, y_train_pred)
    test_mae = mean_absolute_error(y_test, y_test_pred)
    test_rmse = np.sqrt(mean_squared_error(y_test, y_test_pred))
    test_r2 = r2_score(y_test, y_test_pred)

    print(f"  Training MAE: ${train_mae:,.0f}")
    print(f"  Test MAE: ${test_mae:,.0f}")
    print(f"  Test RMSE: ${test_rmse:,.0f}")
    print(f"  Test R²: {test_r2:.3f}")

    return model, y_test_pred, test_mae, test_rmse, test_r2


def main():
    print("=" * 60)
    print("ML Lab 1: Regressione — Predire Prezzi Case")
    print("=" * 60)

    # Carica dati
    X, y = load_data()
    print(f"\nDataset shape: {X.shape}")
    print(f"Price range: ${y.min():,.0f} - ${y.max():,.0f}")

    # Split train/test (80/20)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    print(f"\nTrain samples: {len(X_train)}, Test samples: {len(X_test)}")

    # Allena modelli
    print("\n" + "=" * 60)
    print("Training Models")
    print("=" * 60)

    results = {}

    # Model 1: Linear Regression
    lr_model, lr_pred, lr_mae, lr_rmse, lr_r2 = evaluate_model(
        "Linear Regression",
        LinearRegression(),
        X_train, X_test, y_train, y_test
    )
    results['Linear Regression'] = (lr_model, lr_pred, lr_mae, lr_rmse, lr_r2)

    # Model 2: Random Forest
    rf_model, rf_pred, rf_mae, rf_rmse, rf_r2 = evaluate_model(
        "Random Forest",
        RandomForestRegressor(n_estimators=100, random_state=42, n_jobs=-1),
        X_train, X_test, y_train, y_test
    )
    results['Random Forest'] = (rf_model, rf_pred, rf_mae, rf_rmse, rf_r2)

    # Visualizza risultati
    print("\n" + "=" * 60)
    print("Visualizing Results")
    print("=" * 60)

    fig, axes = plt.subplots(1, 2, figsize=(14, 5))

    for idx, (name, (model, y_pred, mae, rmse, r2)) in enumerate(results.items()):
        ax = axes[idx]

        # Scatter: y_test vs y_pred
        ax.scatter(y_test, y_pred, alpha=0.3, s=10)

        # Linea perfetta (y=x)
        min_val = min(y_test.min(), y_pred.min())
        max_val = max(y_test.max(), y_pred.max())
        ax.plot([min_val, max_val], [min_val, max_val], 'r--', lw=2, label='Perfect Prediction')

        ax.set_xlabel('Actual Price ($)')
        ax.set_ylabel('Predicted Price ($)')
        ax.set_title(f'{name}\nMAE: ${mae:,.0f}, R²: {r2:.3f}')
        ax.legend()
        ax.grid(True, alpha=0.3)

    plt.tight_layout()
    plt.savefig('housing-predictions.png', dpi=100)
    print("✅ Grafico salvato: housing-predictions.png")
    plt.show()

    # Sommario
    print("\n" + "=" * 60)
    print("Conclusioni")
    print("=" * 60)
    print("\n🎯 Domande da porsi:")
    print("1. Quale modello ha performance migliore? (R² più alto)")
    print("2. C'è differenza grande tra train MAE e test MAE? (Overfitting?)")
    print("3. Cosa succede se aumenti test_size a 0.3?")
    print("4. Prova a modificare il seed random_state — i risultati cambiano?")
    print("\n👉 Vai a main.py e prova gli esperimenti nella sezione Esperimenti!\n")


if __name__ == '__main__':
    main()
