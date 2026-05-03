#!/usr/bin/env python3
"""
ML Lab 4 — Generative AI: Prompt Engineering con Groq API

Questo lab mostra:
1. Come connettersi a un LLM via API (Groq, gratuita)
2. Come costruire prompt semplici vs strutturati
3. Come confrontare e valutare la qualità dell'output
4. Come sperimentare con parametri e variazioni di prompt

Prerequisiti:
- Account Groq gratuito su https://console.groq.com
- File .env con GROQ_API_KEY=tua_chiave

Esegui:
  python main.py
"""

import os
from dotenv import load_dotenv
from groq import Groq

# Carica la chiave API dal file .env
load_dotenv()


def get_client():
    """Inizializza il client Groq con la chiave dal file .env"""
    api_key = os.getenv("GROQ_API_KEY")
    if not api_key:
        print("❌ ERRORE: GROQ_API_KEY non trovata.")
        print("   Crea un file .env nella cartella del lab con:")
        print("   GROQ_API_KEY=tua_chiave_qui")
        print("   Ottieni la chiave gratis su: https://console.groq.com")
        exit(1)
    return Groq(api_key=api_key)


def call_llm(client, prompt, system_prompt=None, temperature=0.7):
    """Chiama il modello e restituisce la risposta + token usati"""
    messages = []
    if system_prompt:
        messages.append({"role": "system", "content": system_prompt})
    messages.append({"role": "user", "content": prompt})

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=messages,
        temperature=temperature,
        seed=42,
    )
    text = response.choices[0].message.content
    tokens = response.usage.total_tokens
    return text, tokens


def valuta_risposta(prompt, risposta):
    """Mini scorecard: valuta lunghezza, struttura, coerenza"""
    parole = len(risposta.split())
    ha_struttura = any(c in risposta for c in ["•", "-", "1.", "2.", "3.", "\n-", "\n•"])
    coerente = len(risposta) > 50  # heuristica base

    print(f"  📏 Lunghezza: {parole} parole")
    print(f"  📋 Struttura (bullet/numeri): {'✅ Sì' if ha_struttura else '❌ No'}")
    print(f"  🎯 Risposta sostanziale: {'✅ Sì' if coerente else '⚠️  Troppo corta'}")


def main():
    print("=" * 60)
    print("🤖 ML Lab 04: Generative AI - Prompt Engineering con Groq")
    print("=" * 60)

    # ---------------------------------------------------------
    # STEP 1: Setup e connessione API
    # ---------------------------------------------------------
    print("\n[Step 1] Connessione alla Groq API...")
    client = get_client()

    # Test rapido di connessione
    test_risposta, test_tokens = call_llm(client, "Rispondi solo con: OK")
    print(f"✅ Connessione OK — modello: llama-3.1-8b-instant")
    print(f"   Token test: {test_tokens}")

    # ---------------------------------------------------------
    # STEP 2: Prima chiamata — prompt semplice
    # ---------------------------------------------------------
    print("\n" + "=" * 60)
    print("[Step 2] Prima chiamata API — prompt semplice")
    print("=" * 60)

    prompt_semplice = "Spiega cos'è il Machine Learning in 2 righe."
    print(f"\n📝 Prompt: {prompt_semplice}")

    risposta, tokens = call_llm(client, prompt_semplice)
    print(f"\n💬 Risposta:\n{risposta}")
    print(f"\n📊 Token usati: {tokens}")

    # ---------------------------------------------------------
    # STEP 3: Prompt Engineering — confronto vago vs strutturato
    # ---------------------------------------------------------
    print("\n" + "=" * 60)
    print("[Step 3] Confronto: Prompt Vago vs Prompt Strutturato")
    print("=" * 60)

    # Prompt A: vago
    prompt_vago = "Cos'è l'overfitting?"
    print(f"\n--- PROMPT A (Vago) ---")
    print(f"📝 {prompt_vago}")
    risposta_a, tokens_a = call_llm(client, prompt_vago)
    print(f"\n💬 Risposta A:\n{risposta_a}")
    print(f"📊 Token: {tokens_a}")

    # Prompt B: strutturato con ruolo + vincoli + formato
    prompt_strutturato = (
        "Sei un docente universitario che insegna AI a studenti di primo anno. "
        "Spiega il concetto di overfitting in massimo 3 bullet point. "
        "Usa un'analogia pratica della vita quotidiana. "
        "Formato: • Bullet 1 / • Bullet 2 / • Bullet 3"
    )
    print(f"\n--- PROMPT B (Strutturato) ---")
    print(f"📝 {prompt_strutturato}")
    risposta_b, tokens_b = call_llm(client, prompt_strutturato)
    print(f"\n💬 Risposta B:\n{risposta_b}")
    print(f"📊 Token: {tokens_b}")

    # ---------------------------------------------------------
    # STEP 4: Valutazione qualità
    # ---------------------------------------------------------
    print("\n" + "=" * 60)
    print("[Step 4] Valutazione qualità delle risposte")
    print("=" * 60)

    print("\n📊 Scorecard — Prompt A (Vago):")
    valuta_risposta(prompt_vago, risposta_a)

    print("\n📊 Scorecard — Prompt B (Strutturato):")
    valuta_risposta(prompt_strutturato, risposta_b)

    print("\n🎯 Conclusioni:")
    print("  Il prompt strutturato (B) fornisce: ruolo, vincoli, formato atteso.")
    print("  Risultato tipico: risposta più organizzata, più utile, meno generica.")
    print("  Regola pratica: più contesto dai al modello, più controllo hai sull'output.")

    # ---------------------------------------------------------
    # STEP 5: System prompt — controllo del comportamento
    # ---------------------------------------------------------
    print("\n" + "=" * 60)
    print("[Step 5] System Prompt — controllare il comportamento del modello")
    print("=" * 60)

    system = (
        "Sei un assistente tecnico specializzato in AI per startup. "
        "Rispondi sempre in modo conciso (max 5 righe), "
        "con linguaggio pratico e orientato alle decisioni di business."
    )
    domanda = "Quando ha senso usare un modello pre-addestrato invece di addestrarne uno da zero?"
    print(f"\n🔧 System prompt: {system[:80]}...")
    print(f"📝 Domanda: {domanda}")

    risposta_sys, tokens_sys = call_llm(client, domanda, system_prompt=system)
    print(f"\n💬 Risposta con system prompt:\n{risposta_sys}")
    print(f"📊 Token: {tokens_sys}")

    print("\n✅ Lab completato!")
    print("\n👉 Prossimo step: vai alla sezione ESPERIMENTO qui sotto nel codice!")

    # -------------------------------------------------------
    # ESPERIMENTO: modifica il tuo prompt e re-esegui
    # -------------------------------------------------------
    # Cambia mio_prompt con quello che vuoi testare.
    # Prova a:
    # - Cambiare il ruolo nel system prompt
    # - Variare temperature (0.0 = deterministico, 1.0 = creativo)
    # - Aggiungere esempi nel prompt ("few-shot prompting")

    # mio_prompt = "Spiega le reti neurali come se fossi un bambino di 10 anni"
    # mio_system = "Sei un insegnante elementare paziente e creativo"
    # risposta_mia, _ = call_llm(client, mio_prompt, system_prompt=mio_system, temperature=0.9)
    # print(f"\n🧪 Il mio esperimento:\n{risposta_mia}")


if __name__ == "__main__":
    main()
