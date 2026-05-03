# ML Lab 2 — Reti Neurali: Riconoscimento Cifre (MNIST)

## Cosa Imparerai
- Caricare il famoso dataset MNIST (immagini 28x28 di numeri scritti a mano)
- Comprendere l'importanza di pre-processare i dati (Scaling)
- Allenare una Rete Neurale Artificiale (Multi-Layer Perceptron)
- Comprendere la scelta della libreria: Scikit-learn per capire la teoria senza perdersi nella sintassi.
- Valutare e visualizzare le previsioni (Predetto vs Reale)

---

## 🛠️ Perché Scikit-Learn e non PyTorch o TensorFlow?

Nell'industria moderna, per costruire reti neurali complesse si usano framework giganti come **PyTorch** o **TensorFlow/Keras**. 

Tuttavia, in questo laboratorio useremo **Scikit-Learn** (`MLPClassifier`). Perché questa scelta?
1. **Accessibilità istantanea:** Non richiede GPU, non richiede installazioni pesanti (1GB+ di roba). Il codice gira su qualsiasi computer in 5 secondi.
2. **Focus sulla Teoria, non sull'Ingegneria:** Con PyTorch dovresti scrivere cicli manuali per i gradienti (`loss.backward()`), definire i tensori e gestire i device. Con Scikit-Learn fai `.fit()` e ti concentri su *cosa fa* la rete (i layer, i neuroni), piuttosto che su *come si programma il calcolo matematico*.
3. **Continuità:** Hai già usato Scikit-Learn nel Capitolo 4. Stai applicando lo stesso identico pattern a un modello molto più potente.

*In un progetto reale di Computer Vision o NLP passerai a PyTorch, ma i concetti di "Epochs", "Hidden Layers" e "Loss" appresi qui rimarranno identici.*

---

## Setup Locale

### Prerequisiti
- ✅ Python 3.7+ (scarica da [python.org](https://python.org))
- ✅ pip (incluso in Python)

### Comandi di avvio

```bash
# 1. Estrai lo ZIP e accedi alla cartella
cd ml-lab-02-neural-networks/

# 2. Installa dipendenze (uguali al Lab 01!)
pip install -r requirements.txt

# 3. Esegui il lab (Scaricherà i dati la prima volta)
python main.py
```

---

## Modifiche da Provare (Sperimenta!)

Apri il file `main.py` e cerca questa riga verso lo Step 3:
```python
hidden_layer_sizes=(50,)
```

Prova a cambiare la struttura della rete per vedere come variano le performance e il tempo di training:
1. **Rete più larga:** `hidden_layer_sizes=(100,)` (Un layer con il doppio dei neuroni)
2. **Rete più profonda:** `hidden_layer_sizes=(50, 50,)` (Due layer da 50 neuroni l'uno)
3. **Imbuto (Bottleneck):** `hidden_layer_sizes=(128, 64, 32,)` (Classica struttura a imbuto)

Cosa succede all'Accuracy? Aumenta sempre?
