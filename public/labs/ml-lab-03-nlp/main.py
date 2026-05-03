import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import re
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, confusion_matrix
import seaborn as sns

def main():
    print("🗣️ ML Lab 03: NLP - Analisi del Sentiment")
    print("-" * 60)

    # ---------------------------------------------------------
    # STEP 1: Carica i Dati
    # ---------------------------------------------------------
    print("\n[Step 1] Caricamento del dataset (inline — nessun download)...")

    recensioni = [
        # Positive (label 1)
        "Questo prodotto è fantastico, qualità eccellente e consegna rapida",
        "Film meraviglioso, storia commovente e recitazione impeccabile",
        "Esperienza indimenticabile, tornerò sicuramente in questo ristorante",
        "Ottimo acquisto, funziona perfettamente e supera le aspettative",
        "Hotel splendido, personale gentilissimo e camere pulitissime",
        "Libro straordinario, non riuscivo a smettere di leggerlo",
        "Servizio clienti eccezionale, hanno risolto tutto in pochi minuti",
        "Prodotto di alta qualità, vale ogni centesimo speso",
        "Corso online brillante, spiegazioni chiare e molto utile",
        "Concerto fantastico, atmosfera magica e artista talentuoso",
        "App intuitiva e veloce, semplifica davvero la vita quotidiana",
        "Ottima pizza, ingredienti freschi e impasto perfetto",
        "Vacanza bellissima, paesaggi mozzafiato e tanto relax",
        "Smartphone eccellente, fotocamera stupenda e batteria lunga",
        "Palestra top, attrezzatura moderna e istruttori preparati",
        # Negative (label 0)
        "Prodotto pessimo, si è rotto dopo due giorni di utilizzo",
        "Film noiosissimo, trama banale e finale deludente",
        "Ristorante terribile, cibo freddo e servizio lentissimo",
        "Acquisto inutile, non funziona come descritto nella pubblicità",
        "Hotel sporco e rumoroso, non dormivo la notte per i rumori",
        "Libro incomprensibile, scritto male e pieno di errori",
        "Servizio clienti inesistente, non rispondono mai alle email",
        "Qualità scadente, il materiale si deteriora rapidamente",
        "Corso deludente, contenuti superficiali e mal organizzati",
        "Concerto deludente, audio pessimo e artista impresentabile",
        "App lenta e piena di bug, si blocca continuamente",
        "Pizza disgustosa, impasto crudo e ingredienti di bassa qualità",
        "Vacanza rovinata, albergo sporco e spiaggia affollata",
        "Smartphone deludente, surriscalda e si scarica in poche ore",
        "Palestra fatiscente, attrezzi rotti e staff maleducato",
    ]

    etichette = [1] * 15 + [0] * 15

    df = pd.DataFrame({"testo": recensioni, "sentiment": etichette})
    print(f"Dataset caricato: {len(df)} recensioni ({df['sentiment'].sum()} positive, {(df['sentiment'] == 0).sum()} negative).")

    # ---------------------------------------------------------
    # STEP 2: Preprocessing (lowercase + rimozione punteggiatura con regex)
    # ---------------------------------------------------------
    print("\n[Step 2] Preprocessing del testo...")

    def preprocess(testo):
        # Converti in minuscolo
        testo = testo.lower()
        # Rimuovi la punteggiatura con regex (tutto ciò che non è lettera o spazio)
        testo = re.sub(r'[^a-zàèéìòùa-z\s]', '', testo)
        return testo

    df["testo_pulito"] = df["testo"].apply(preprocess)
    print("Esempio prima del preprocessing:", df["testo"].iloc[0])
    print("Esempio dopo  il preprocessing:", df["testo_pulito"].iloc[0])

    # ---------------------------------------------------------
    # STEP 3: Vectorization (TfidfVectorizer, max_features=1000)
    # ---------------------------------------------------------
    print("\n[Step 3] Vectorization con TF-IDF (Term Frequency – Inverse Document Frequency)...")

    X_train, X_test, y_train, y_test = train_test_split(
        df["testo_pulito"], df["sentiment"], test_size=0.2, random_state=42
    )

    # TF-IDF trasforma ogni frase in un vettore numerico pesando le parole
    # per quanto sono "informative" nel corpus (frequenti nel doc, rare altrove)
    vectorizer = TfidfVectorizer(max_features=1000)
    X_train_vec = vectorizer.fit_transform(X_train)
    X_test_vec = vectorizer.transform(X_test)

    print(f"Vocabolario appresto: {len(vectorizer.vocabulary_)} token unici.")
    print(f"Set di Addestramento: {X_train_vec.shape[0]} frasi")
    print(f"Set di Test:          {X_test_vec.shape[0]} frasi")

    # ---------------------------------------------------------
    # STEP 4: Training (LogisticRegression + MultinomialNB — confronto accuracy)
    # ---------------------------------------------------------
    print("\n[Step 4] Training e confronto modelli...")

    # Modello 1: Logistic Regression
    lr_model = LogisticRegression(random_state=42, max_iter=1000)
    lr_model.fit(X_train_vec, y_train)
    y_pred_lr = lr_model.predict(X_test_vec)
    acc_lr = accuracy_score(y_test, y_pred_lr)

    # Modello 2: Multinomial Naive Bayes (classico per NLP)
    nb_model = MultinomialNB()
    nb_model.fit(X_train_vec, y_train)
    y_pred_nb = nb_model.predict(X_test_vec)
    acc_nb = accuracy_score(y_test, y_pred_nb)

    print(f"\n  📊 Accuracy Logistic Regression : {acc_lr * 100:.2f}%")
    print(f"  📊 Accuracy Naive Bayes         : {acc_nb * 100:.2f}%")

    # ---------------------------------------------------------
    # STEP 5: Visualizzazione (confusion matrix seaborn + top 10 parole pos/neg)
    # ---------------------------------------------------------
    print("\n[Step 5] Visualizzazione risultati...")

    # --- Top 10 parole più positive e più negative (da Logistic Regression) ---
    feature_names = vectorizer.get_feature_names_out()
    coef = lr_model.coef_[0]

    top_positive_idx = np.argsort(coef)[-10:][::-1]
    top_negative_idx = np.argsort(coef)[:10]

    print("\n  🔝 Top 10 parole PIÙ POSITIVE (Logistic Regression):")
    for idx in top_positive_idx:
        print(f"     {feature_names[idx]:20s}  coef: {coef[idx]:+.4f}")

    print("\n  🔻 Top 10 parole PIÙ NEGATIVE (Logistic Regression):")
    for idx in top_negative_idx:
        print(f"     {feature_names[idx]:20s}  coef: {coef[idx]:+.4f}")

    # --- Confusion Matrix (usa il modello migliore per il grafico) ---
    best_pred = y_pred_lr if acc_lr >= acc_nb else y_pred_nb
    best_name = "Logistic Regression" if acc_lr >= acc_nb else "Naive Bayes"

    cm = confusion_matrix(y_test, best_pred)

    fig, axes = plt.subplots(1, 2, figsize=(14, 5))

    # Confusion Matrix
    sns.heatmap(
        cm,
        annot=True,
        fmt="d",
        cmap="Blues",
        xticklabels=["Negativo", "Positivo"],
        yticklabels=["Negativo", "Positivo"],
        ax=axes[0],
    )
    axes[0].set_title(f"Confusion Matrix — {best_name}")
    axes[0].set_xlabel("Predetto")
    axes[0].set_ylabel("Reale")

    # Top parole positive vs negative (bar chart)
    top10_words = [feature_names[i] for i in top_positive_idx] + \
                  [feature_names[i] for i in top_negative_idx]
    top10_coefs = [coef[i] for i in top_positive_idx] + \
                  [coef[i] for i in top_negative_idx]
    colors = ["#2ecc71"] * 10 + ["#e74c3c"] * 10

    axes[1].barh(top10_words[::-1], top10_coefs[::-1], color=colors[::-1])
    axes[1].set_title("Top 10 Parole Positive vs Negative")
    axes[1].set_xlabel("Coefficiente (peso nel modello)")
    axes[1].axvline(0, color="gray", linestyle="--", linewidth=0.8)

    plt.suptitle("🗣️ ML Lab 03 — NLP Sentiment Analysis", fontsize=14, fontweight="bold")
    plt.tight_layout()
    print("\nSalvataggio del grafico 'sentiment-analysis.png' in corso...")
    plt.savefig("sentiment-analysis.png", dpi=300)
    plt.show()

    print("\n✅ Lab completato! Controlla il file 'sentiment-analysis.png' e chiudi la finestra del grafico.")

    # -------------------------------------------------------
    # ESPERIMENTO: scrivi una tua recensione e vedi la predizione
    # -------------------------------------------------------
    mia_recensione = "Questo prodotto è fantastico, lo consiglio a tutti!"

    # Preprocessa e trasforma con lo stesso vectorizer addestrato
    mia_recensione_pulita = re.sub(r'[^a-zàèéìòùa-z\s]', '', mia_recensione.lower())
    mia_vec = vectorizer.transform([mia_recensione_pulita])

    pred_lr = lr_model.predict(mia_vec)[0]
    pred_nb = nb_model.predict(mia_vec)[0]
    label_map = {1: "😊 POSITIVO", 0: "😞 NEGATIVO"}

    print("\n" + "=" * 60)
    print("🧪 ESPERIMENTO — Predizione su tua recensione")
    print("=" * 60)
    print(f"Recensione: \"{mia_recensione}\"")
    print(f"  → Logistic Regression : {label_map[pred_lr]}")
    print(f"  → Naive Bayes         : {label_map[pred_nb]}")
    print("\n💡 Modifica la variabile 'mia_recensione' nel codice e riesegui!")

if __name__ == "__main__":
    main()
