# Contesto immagini — Project Destino: Doom In The Terminal with Node.js and OpenTUI

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

Project Destino: Doom In The Terminal with Node.js and OpenTUI

## Abstract esatto

In this talk, I’ll take you through the strange and surprisingly fun journey behind Project Destino: a proof of concept to run Doom entirely inside the terminal using Node.js. What started as a joke — “what if we ran Doom in the terminal with Node.js?” — slowly turned into a real experiment in terminal graphics, native interoperability, and runtime performance.

I’ll show how I combined doomgeneric, OpenTUI, node:ffi, and SDL_mixer to build a fully interactive terminal-based Doom experience, with Node.js acting as the coordinator between rendering, input handling, audio, and the native game engine itself.

## Messaggio e background confermato

Un esperimento ludico rende concreti FFI, rendering nel terminale e coordinamento fra JavaScript e librerie native specializzate.

Project Destino combina Node.js, doomgeneric, OpenTUI e SDL_mixer. La battuta iniziale diventa un caso tecnico su ABI, loop a 35 Hz, input e packaging SEA. Il racconto del progetto non autorizza a inventare episodi o screenshot del gioco.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La versione corrente contiene **48 slide**.

- **Slide 1–9 — Dalla battuta al terminale:** Mostrare perché l'esperimento vale la pena.
- **Slide 10–19 — Il confine nativo:** Spiegare ABI, API e responsabilità della memoria.
- **Slide 20–34 — Il gioco funziona:** Separare engine, loop, rendering, input e audio.
- **Slide 35–39 — Distribuzione:** Spiegare come SEA e librerie native convivono.
- **Slide 40–48 — Performance e demo:** Collegare fast path, dimostrazione e riuso.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: red, pink, blue, orange, amber, green, sky. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Tono ironico e tecnico; metafore di un direttore e strumenti specializzati, terminali astratti e adattatori. Per evocare giochi usare retro shooter inspired senza asset, loghi, UI, mostri o screenshot di Doom.

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
| 2 | STFU! | `@talk/stfu.png` |
| 4 | This started as a joke... | `@talk/joke.png` |
| 5 | ... and now we have Doom in the terminal! | `@talk/screenshot.png` |
| 7 | The terminal is the new UI. | `@talk/opentui.png` |
| 10 | But this is not only about Doom. | `@talk/bradipi.png` |
| 12 | Before FFI, we had choices. | `@talk/choice.png` |
| 14 | Say hello to `node:ffi`. | `@talk/hello-ffi.png` |
| 17 | FFI is very powerful. | `@talk/ffi-power.png` |
| 18 | What can go wrong? | `@talk/coder.png` |
| 20 | OK, but what about Doom? | `@talk/sad.png` |
| 21 | Say hi to Destino. | `@talk/destino.png` |
| 25 | Keep the native surface tiny. | `@talk/attack.png` |
| 28 | Now render Doom in a terminal. | `@talk/title.png` |
| 31 | Input is the awkward part. | `@talk/input.png` |
| 35 | How did we package this monster? | `@talk/packaging.png` |
| 37 | How would you solve that? | `@talk/solving.png` |
| 38 | Don't forget about K.I.S.S.ing! | `@talk/kissing.png` |
| 40 | Then comes performance. | `@talk/performance.png` |
| 42 | (Very) Fast FFI is now in Node.js. | `@talk/flash.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 4 — This started as a joke...

**Concetto proposto:** Una piccola idea scherzosa su un banco di lavoro prende forma come macchina funzionante.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 7 — The terminal is the new UI.

**Concetto proposto:** Un terminale astratto diventa uno spazio tridimensionale senza UI o testo.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 14 — Say hello to `node:ffi`.

**Concetto proposto:** Un adattatore collega moduli di forme diverse, senza loghi.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 25 — Keep the native surface tiny.

**Concetto proposto:** Un connettore piccolo mette in moto un sistema complesso.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 35 — How did we package this monster?

**Concetto proposto:** Una scatola trasportabile contiene componenti ordinati che possono essere estratti.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 40 — Then comes performance.

**Concetto proposto:** Un percorso breve fra due macchine, con il costo del passaggio reso visibile da un solo ostacolo.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
