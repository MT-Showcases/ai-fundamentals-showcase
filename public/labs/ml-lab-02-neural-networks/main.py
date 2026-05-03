import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.datasets import fetch_openml
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.neural_network import MLPClassifier
import seaborn as sns

def main():
    print("🧠 ML Lab 02: Neural Networks - Riconoscimento Cifre (MNIST)")
    print("-" * 60)

    # ---------------------------------------------------------
    # STEP 1: Carica i Dati (MNIST)
    # ---------------------------------------------------------
    print("\n[Step 1] Scaricamento del dataset MNIST (può richiedere 1-2 minuti)...")
    # Carichiamo solo un subset per far girare lo script velocemente su ogni PC
    X, y = fetch_openml('mnist_784', version=1, return_X_y=True, as_frame=False, parser='auto')
    
    # Riduciamo il dataset a 10.000 campioni per training veloce
    X = X[:10000]
    y = y[:10000]
    
    print(f"Dataset caricato: {X.shape[0]} immagini di dimensione {X.shape[1]} (28x28 pixel).")

    # ---------------------------------------------------------
    # STEP 2: Preprocessing
    # ---------------------------------------------------------
    print("\n[Step 2] Split e Preprocessing (Scaling)...")
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Le reti neurali lavorano molto meglio con dati scalati
    # I pixel vanno da 0 a 255. Li scaliamo (StandardScaler porta mean=0, std=1)
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    print(f"Set di Addestramento: {X_train_scaled.shape[0]} immagini")
    print(f"Set di Test: {X_test_scaled.shape[0]} immagini")

    # ---------------------------------------------------------
    # STEP 3: Architettura e Training
    # ---------------------------------------------------------
    print("\n[Step 3] Creazione della Rete Neurale (Multi-Layer Perceptron)...")
    print("Architettura: 1 hidden layer con 50 neuroni.")
    
    # Creiamo una Rete Neurale (MLP - Multi-Layer Perceptron)
    # hidden_layer_sizes=(50,) -> 1 livello nascosto con 50 neuroni
    # max_iter=20 -> ci fermiamo presto per non far durare troppo l'esecuzione (ma stamperà un warning di convergenza, normale)
    nn_model = MLPClassifier(
        hidden_layer_sizes=(50,), 
        max_iter=20, 
        alpha=1e-4,
        solver='sgd', 
        verbose=10, 
        random_state=42,
        learning_rate_init=0.1
    )

    print("Inizio Addestramento (Training)...")
    nn_model.fit(X_train_scaled, y_train)

    # ---------------------------------------------------------
    # STEP 4: Valutazione (Testing)
    # ---------------------------------------------------------
    print("\n[Step 4] Valutazione sul Test Set...")
    y_pred = nn_model.predict(X_test_scaled)
    
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Accuracy del Modello: {accuracy * 100:.2f}%")

    # ---------------------------------------------------------
    # STEP 5: Visualizzazione
    # ---------------------------------------------------------
    print("\n[Step 5] Generazione Grafici...")
    
    fig, axes = plt.subplots(2, 5, figsize=(12, 5))
    axes = axes.ravel()
    
    # Mostriamo 10 previsioni
    for i in range(10):
        # Rimodelliamo l'array 784 in matrice 28x28
        img = X_test[i].reshape(28, 28)
        axes[i].imshow(img, cmap='gray')
        
        # Colore verde se corretto, rosso se sbagliato
        color = 'green' if y_pred[i] == y_test[i] else 'red'
        axes[i].set_title(f"Pred: {y_pred[i]}\nReale: {y_test[i]}", color=color)
        axes[i].axis('off')
        
    plt.tight_layout()
    print("Salvataggio dell'immagine 'predictions.png' in corso...")
    plt.savefig('predictions.png', dpi=300)
    plt.show()

    print("\n✅ Lab completato! Controlla il file 'predictions.png' e chiudi la finestra del grafico.")

if __name__ == "__main__":
    main()