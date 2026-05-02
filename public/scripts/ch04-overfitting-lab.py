#!/usr/bin/env python3
"""
CH4 Overfitting Lab — Mini Esperimento su Overfitting vs Generalizzazione
Esercizio interattivo per il capitolo Machine Learning.

Requisiti: numpy, matplotlib
Uso: python ch04-overfitting-lab.py
"""

import numpy as np
import matplotlib.pyplot as plt
from numpy.polynomial import Polynomial


def mae(y_true, y_pred):
    return float(np.mean(np.abs(y_true - y_pred)))


def overfitting_status(train_mae, val_mae):
    gap = val_mae - train_mae
    if gap > 5:
        return "⚠️ OVERFITTING (training << validation)"
    if gap <= 2.5:
        return "✅ GOOD (vicini tra loro)"
    return "✓ OK"


def main():
    # Setup riproducibile
    np.random.seed(42)

    # 1) Dati sintetici: ore_studio (1..10) -> voto (30..100)
    n_samples = 50
    ore_studio = np.random.uniform(1, 10, n_samples)

    # Relazione base + rumore realistico
    voto = 25 + 7.2 * ore_studio + np.random.normal(0, 6, n_samples)
    voto = np.clip(voto, 30, 100)

    # 2) Split 80/20 train/validation
    idx = np.arange(n_samples)
    np.random.shuffle(idx)
    train_size = int(0.8 * n_samples)
    train_idx, val_idx = idx[:train_size], idx[train_size:]

    X_train, y_train = ore_studio[train_idx], voto[train_idx]
    X_val, y_val = ore_studio[val_idx], voto[val_idx]

    # 3) Allena i 3 modelli (grado 1, 3, 10)
    model_specs = [
        ("Model A (Linear)", 1),
        ("Model B (Poly Deg 3)", 3),
        ("Model C (Poly Deg 10)", 10),
    ]

    models = {}
    for name, degree in model_specs:
        models[name] = Polynomial.fit(X_train, y_train, degree)

    # 4) Valutazione MAE train + validation
    print("=" * 62)
    print("CH4 Overfitting Lab — Risultati")
    print("=" * 62)

    results = []
    for name, _degree in model_specs:
        model = models[name]

        y_train_pred = model(X_train)
        y_val_pred = model(X_val)

        train_mae = mae(y_train, y_train_pred)
        val_mae = mae(y_val, y_val_pred)
        status = overfitting_status(train_mae, val_mae)

        print(f"\n{name}:")
        print(f"  Training MAE: {train_mae:.2f}")
        print(f"  Validation MAE: {val_mae:.2f}")
        print(f"  Status: {status}")

        results.append((name, train_mae, val_mae, status))

    print("\n" + "=" * 62)
    print("Conclusione:")
    print("Scegli in produzione il modello con validation MAE bassa")
    print("e gap ridotto tra training e validation (migliore generalizzazione).")
    print("=" * 62)

    # 5) Grafico
    x_line = np.linspace(ore_studio.min(), ore_studio.max(), 300)

    plt.figure(figsize=(12, 7))
    plt.scatter(X_train, y_train, label="Training", alpha=0.75, s=55, color="#2563eb")
    plt.scatter(X_val, y_val, label="Validation", alpha=0.9, s=55, color="#f59e0b")

    colors = {
        "Model A (Linear)": "#16a34a",
        "Model B (Poly Deg 3)": "#ea580c",
        "Model C (Poly Deg 10)": "#dc2626",
    }

    for name, _degree in model_specs:
        y_line = models[name](x_line)
        plt.plot(x_line, y_line, linewidth=2.2, color=colors[name], label=name)

    plt.title("CH4 Lab: Overfitting vs Generalizzazione")
    plt.xlabel("Ore di studio")
    plt.ylabel("Voto")
    plt.grid(True, alpha=0.25)
    plt.legend()
    plt.tight_layout()

    output_file = "overfitting-lab-output.png"
    plt.savefig(output_file, dpi=120)
    print(f"\n✅ Grafico salvato: {output_file}")


if __name__ == "__main__":
    main()
