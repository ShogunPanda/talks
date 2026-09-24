# Contesto immagini — Maths or magic? End-to-end encryption explained with art

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

Maths or magic? End-to-end encryption explained with art

## Abstract esatto

Every time we send a message on the most popular messaging platforms, we want to make sure that our communication is
private and inaccessible to malicious users.

We also want to ensure that in case of a data breach, the messages will be encrypted so that no one could
potentially easily decrypt them. But how do we do that?

How does end-to-end encryption work, and is it really that secure?

In this interactive talk, we will see how to make our communications secure by implementing one of the most popular
e2e encryption algorithms... with some help from the public!

## Messaggio e background confermato

La metafora dei colori rende intuitivo lo scambio di un segreto su un canale pubblico; la matematica chiarisce poi cosa protegge davvero la comunicazione.

Talk interattivo originariamente di Michele Riva. Cesare introduce la cifratura, AES la chiave simmetrica e Diffie-Hellman l'accordo su un segreto. La miscela di colori è una metafora; Diffie-Hellman da solo non autentica gli interlocutori e non impedisce un attacco man-in-the-middle.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La versione corrente contiene **36 slide**.

- **Slide 1–8 — Motivazione e definizione:** Introdurre la riservatezza con il pubblico.
- **Slide 9–19 — Cifrario di Cesare:** Distinguere oscurità e sicurezza.
- **Slide 20–24 — Chiavi condivise:** Motivare l'accordo su un segreto.
- **Slide 25–28 — Esperimento con colori:** Rendere intuitivo lo scambio pubblico.
- **Slide 29–36 — Matematica e chiusura:** Collegare la metafora all'algoritmo.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: fuchsia, sky, red, amber. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Colori distinti per le parti private e miscele coerenti per quelle pubbliche e condivise. Preservare le sequenze tecniche esistenti; nuove immagini devono aiutare la metafora senza inventare formule.

## Formati e vincoli di generazione

- Se non viene specificato il formato, generare un'immagine **piccola: 1000×1120 px**. Anche **media** significa **1000×1120 px**.
- Usare **2000×1120 px** soltanto quando viene richiesta un'immagine **grande** o **fullscreen**. Rispettare le dimensioni esatte, senza imporre il 16:9.
- Esportare sempre in **PNG**, a circa **150 DPI**.
- Una sola metafora dominante, contrasto elevato e leggibilità a distanza. Niente titoli, lettere, codice, etichette, watermark o testo della slide nell'immagine.
- Lasciare margini generosi e spazio negativo per eventuali titoli. Per i pannelli laterali mantenere il soggetto compatto; il crop ordinario è centrato, salvo indicazioni diverse dell'utente.
- Conservare coerenza di materiali, luce e palette. Preferire poche immagini chiave coordinate, senza sostituire automaticamente quelle già scelte.
- Non generare QR utilizzabili, grafici con misure inventate, schermate di prodotto o false fotografie documentarie. I diagrammi architetturali richiedono Excalidraw con sorgente modificabile e riferimento PNG.
- Non ricreare ritratti di persone reali o scene biografiche senza fotografie e contesto forniti dall'utente.
- Se si evoca un videogioco, usare motivi astratti retro shooter inspired, senza asset, loghi, mostri, screenshot o UI di Doom.

## Immagini già referenziate

Questi sono riferimenti sorgente, non immagini da rigenerare automaticamente. `@talk/` indica un asset specifico del talk, `@common/` un asset condiviso. Caricare gli originali per usarli come riferimento.

| Slide | Titolo | Riferimento immagine |
| --- | --- | --- |
| 2 | Encrypting is like painting! | `@common/painting.png` |
| 4 | First of all, let's give credits! | `@common/michele.png` |
| 6 | Let's send a message ... | `@common/pidgeons.png` |
| 7 | That was not an encrypted channel! | `@common/dali.png` |
| 9 | An example: The Caesar Cipher | `@common/caesar-salad.png` |
| 10 | How does the Caesar Cipher work? | `@talk/caesar-cipher-1.png` |
| 11 | How does the Caesar Cipher work? | `@talk/caesar-cipher-2.png` |
| 12 | How does the Caesar Cipher work? | `@talk/caesar-cipher-3.png` |
| 13 | How does the Caesar Cipher work? | `@talk/caesar-cipher-4.png` |
| 14 | How does the Caesar Cipher work? | `@talk/caesar-cipher-5.png` |
| 15 | How does the Caesar Cipher work? | `@talk/caesar-cipher-6.png` |
| 16 | Trivia question | `@common/hal.png` |
| 17 | And now, a bit of pain for some of us | `@talk/rot13.png` |
| 18 | Why is Caesar Cipher weak? | `@talk/letter-analysis.png` |
| 19 | A good algorithm | `@common/algorithm.png` |
| 20 | What are our choices today? | `@talk/aes.png` |
| 22 | Do we have a solution? | `@common/solution-1.png` |
| 23 | Of course! | `@talk/diffie-hellman.png` |
| 25 | It's time to paint! | `@common/baby-hand.png` |
| 26 | Generate the private and public keys | `@talk/generate.png` |
| 27 | Exchange the public keys | `@talk/exchange.png` |
| 28 | Generate the shared keys | `@talk/shared.png` |
| 29 | Let's make some math! | `@common/walter-white.png` |
| 30 | How is this possible? | `@talk/handshake-1.png` |
| 31 | How is this possible? | `@talk/handshake-2.png` |
| 32 | How is this possible? | `@talk/handshake-3.png` |
| 33 | How is this possible? | `@talk/shared-calculation.png` |
| 34 | Let's prove it! | `@talk/prove.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 2 — Encrypting is like painting!

**Concetto proposto:** Due tavolozze separate con miscele che arrivano allo stesso colore.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 6 — Let's send a message ...

**Concetto proposto:** Un messaggio astratto attraversa molte mani ed è visibile lungo il percorso.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 9 — An example: The Caesar Cipher

**Concetto proposto:** Due ruote alfabetiche astratte senza lettere leggibili, a supporto della metafora.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 22 — Do we have a solution?

**Concetto proposto:** Due persone separate da uno spazio pubblico cercano un modo di accordarsi.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 25 — It's time to paint!

**Concetto proposto:** Tre recipienti di colore grandi e distinti pronti per l'esperimento.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 29 — Let's make some math!

**Concetto proposto:** La tavolozza si collega a forme geometriche ordinate, senza formule inventate.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
