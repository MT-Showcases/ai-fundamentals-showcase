# ML Lab 3 — NLP: Analisi del Sentiment

## Cosa Imparerai
- Costruire un dataset testuale inline (nessun download necessario)
- Preprocessare testo con Python: lowercase e rimozione della punteggiatura con regex
- Trasformare frasi in vettori numerici con **TF-IDF** (Term Frequency – Inverse Document Frequency)
- Allenare e confrontare due modelli NLP: **Logistic Regression** vs **Multinomial Naive Bayes**
- Interpretare i risultati: accuracy, confusion matrix e le parole più "cariche" di sentiment

---

## 🛠️ Perché TF-IDF e non BERT/Transformers?

Nell'industria moderna, i modelli all'avanguardia per il testo sono i **Transformer** (BERT, GPT, RoBERTa). 

Tuttavia, in questo laboratorio useremo **TF-IDF + Scikit-Learn**. Perché questa scelta?
1. **Accessibilità istantanea:** BERT richiede il download di centinaia di MB di pesi pre-addestrati e spesso una GPU. TF-IDF funziona su qualsiasi laptop in pochi secondi.
2. **Focus sulla Teoria, non sull'Ingegneria:** Con i Transformer dovresti gestire tokenizer, padding, attention masks e modelli pre-addestrati da Hugging Face. Con TF-IDF capisci davvero *come un computer legge il testo*: conta le parole, le pesa, ci costruisce sopra un vettore.
3. **Continuità con i lab precedenti:** Hai già usato Scikit-Learn nei Lab 1 e 2. Stai applicando lo stesso identico pattern `.fit()` / `.predict()` a un problema completamente diverso.

*In un progetto reale per sentiment analysis a larga scala passerai ai Transformer, ma i concetti di "vettorizzazione", "feature importance" e "confusion matrix" appresi qui rimarranno identici.*

---

## Setup Locale

### Prerequisiti
- ✅ Python 3.7+ (scarica da [python.org](https://python.org))
- ✅ pip (incluso in Python)

### Comandi di avvio

```bash
# 1. Estrai lo ZIP e accedi alla cartella
cd ml-lab-03-nlp/

# 2. Installa dipendenze
pip install -r requirements.txt

# 3. Esegui il lab (nessun download — tutto inline!)
python main.py
```

Al termine troverai il file `sentiment-analysis.png` con la confusion matrix e il grafico delle parole chiave.

---

## Modifiche da Provare (Sperimenta!)

Apri il file `main.py` e prova queste varianti:

1. **Cambia `max_features`** — cerca la riga `TfidfVectorizer(max_features=1000)`:
   ```python
   # Più selettivo: solo le 100 parole più informative
   TfidfVectorizer(max_features=100)
   # Più ricco: mantieni fino a 5000 token
   TfidfVectorizer(max_features=5000)
   ```
   Come cambia l'accuracy? Esiste un punto di saturazione?

2. **Aggiungi frasi al dataset** — cerca il blocco `recensioni = [...]` e inserisci nuove frasi in italiano. Ricorda di aggiungere anche l'etichetta corrispondente (1 = positivo, 0 = negativo) nella lista `etichette`. Con più dati i modelli migliorano?

3. **Prova SVM (Support Vector Machine)** — aggiungi un terzo modello dopo Naive Bayes:
   ```python
   from sklearn.svm import LinearSVC
   svm_model = LinearSVC(random_state=42)
   svm_model.fit(X_train_vec, y_train)
   y_pred_svm = svm_model.predict(X_test_vec)
   acc_svm = accuracy_score(y_test, y_pred_svm)
   print(f"Accuracy SVM: {acc_svm * 100:.2f}%")
   ```
   SVM è storicamente molto competitivo per la classificazione di testo. Batte Logistic Regression?
