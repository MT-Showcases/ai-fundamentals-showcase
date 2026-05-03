# ML Lab 4 — Generative AI: Prompt Engineering con Groq API

## Cosa Imparerai
- Connetterti a un LLM reale via API (nessun costo, nessuna carta)
- Costruire prompt semplici e confrontarli con prompt strutturati
- Usare il **system prompt** per controllare il comportamento del modello
- Valutare la qualità dell'output con criteri pratici

---

## 🛠️ Perché Groq e non OpenAI?

**OpenAI** è lo standard industriale, ma richiede carta di credito e addebita per ogni token.

**Groq** offre:
1. **Account gratuito** — nessuna carta, nessun costo fino a limiti generosi
2. **Stesso standard API** — il codice è identico a OpenAI (cambi solo 3 righe per migrare)
3. **Modelli open-source** — usa LLaMA 3.1, sviluppato da Meta e rilasciato pubblicamente
4. **Velocità estrema** — Groq usa hardware specializzato (LPU), risposte in millisecondi

*Quando passerai a un progetto reale userai OpenAI o Anthropic, ma i concetti appresi qui — prompt strutturati, system prompt, valutazione output — sono identici su qualsiasi provider.*

---

## Setup Locale

### Prerequisiti
- ✅ Python 3.7+
- ✅ pip installato
- ✅ Account Groq gratuito (segui i passi sotto)

### Come ottenere la chiave Groq (gratis, 2 minuti)

1. Vai su **https://console.groq.com**
2. Registrati con email o Google (nessuna carta richiesta)
3. Nel menu laterale: **API Keys → Create API Key**
4. Copia la chiave (inizia con `gsk_...`)
5. Crea un file `.env` nella cartella del lab:
   ```
   GROQ_API_KEY=gsk_la_tua_chiave_qui
   ```

### Comandi di avvio

```bash
# 1. Estrai lo ZIP e accedi alla cartella
cd ml-lab-04-generative-ai/

# 2. Installa le dipendenze
pip install -r requirements.txt

# 3. Crea il file .env con la tua chiave Groq
echo "GROQ_API_KEY=gsk_la_tua_chiave" > .env

# 4. Esegui il lab
python main.py
```

---

## Modifiche da Provare (Sperimenta!)

Apri `main.py` e prova queste variazioni:

1. **Cambia modello** — sostituisci `llama-3.1-8b-instant` con `mixtral-8x7b-32768` (più potente):
   ```python
   model="mixtral-8x7b-32768"
   ```

2. **Varia la temperature** — `0.0` = risposta deterministica, `1.0` = più creativa:
   ```python
   temperature=0.0  # sempre uguale
   temperature=1.0  # più variabile e creativa
   ```

3. **Few-shot prompting** — aggiungi esempi nel prompt per guidare il modello:
   ```python
   prompt = """
   Classifica il sentiment di queste frasi:
   Frase: "Adoro questo prodotto!" → Positivo
   Frase: "Pessima esperienza." → Negativo
   Frase: "Non mi aspettavo molto ma sono rimasto piacevolmente sorpreso." → ?
   """
   ```

4. **Sblocca la sezione ESPERIMENTO** — in fondo a `main.py` c'è codice commentato pronto per i tuoi test.
