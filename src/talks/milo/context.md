# Contesto immagini — Milo, a new HTTP parser for Node.js

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

Milo, a new HTTP parser for Node.js

## Abstract esatto

Node.js HTTP parsing currently relies on llhttp, a parser which provides very good performance but has currently
some challenges for the health of the runtime.

Is it possible to create a modern, maintenable, well documented, secure and performant alternative? Yes it is!

Let me introduce you Milo, a new Rust based HTTP parser which I plan to integrate into Node.js and let me show you
how you can help be a part of its first Rust component.

## Messaggio e background confermato

Milo esplora un parser HTTP rigoroso in Rust, conservando i punti forti di llhttp e migliorando leggibilità, sviluppo e integrazione.

Paolo dichiara di aver imparato Rust lavorando a Milo e riconosce Fedor Indutny e NearForm. Il deck presenta risultati preliminari e integrazione futura: non descrivere Milo come parser già adottato da Node.js.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La versione corrente contiene **40 slide**.

- **Slide 1–11 — Motivazione:** Spiegare limiti di manutenzione e punti forti di llhttp.
- **Slide 12–20 — Milo e Rust:** Mostrare la costruzione della macchina a stati.
- **Slide 21–26 — Memoria e API Rust:** Seguire parsing e callback.
- **Slide 27–34 — Interoperabilità:** Collegare Rust, C++ e WebAssembly.
- **Slide 35–40 — Risultati e futuro:** Contestualizzare benchmark, integrazione e ringraziamenti.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: fuchsia, blue, amber, sky, green, pink, red. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Macchine a stati compatte, macro come espansioni controllate e ponti fra Rust, C++ e WebAssembly. Diagrammi tecnici fedeli, nessuna guerra fra linguaggi o classifica inventata.

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
| 2 | Being reckless (sometimes) pays off! | `@common/ski.png` |
| 4 | We all love HTTP! | `@common/love-2.png` |
| 5 | Which HTTP are you? | `@common/palette.png` |
| 8 | Let's focus! | `@common/focus.png` |
| 9 | The current parser | `@talk/llhttp.png` |
| 10 | How does it work? | `@talk/llhttp_states.png` |
| 12 | Do we have the solution? | `@common/solution-1.png` |
| 13 | Yes, start fresh! | `@common/fresh.png` |
| 14 | Say hello to Milo! | `@talk/milo.png` |
| 15 | Let's drop the bomb! | `@common/rust-logo.png` |
| 17 | How is that possible? | `@common/dog-1.png` |
| 18 | It's all in the macros! | `@common/macro.png` |
| 20 | Examples are worth more than 1000 words | `@common/arrow-right.png` |
| 21 | What about resources? | `@common/piggy-bank.png` |
| 23 | Strict, period! | `@common/wall.png` |
| 24 | Let's get to the action! | `@common/action.png` |
| 27 | But Node.js uses C++! | `@common/incompatible.png` |
| 28 | The C++ workflow | `@talk/cbindgen.png` |
| 31 | But I want to support SmartOS! | `@common/incompatible.png` |
| 32 | WASM will save us! | `@talk/wasm-bindgen.png` |
| 35 | And that's Milo! | `@common/completed.png` |
| 38 | A due thanks to ... | `@talk/nearform.svg` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 2 — Being reckless (sometimes) pays off!

**Concetto proposto:** Una scelta coraggiosa ma controllata su un percorso tecnico.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 12 — Do we have the solution?

**Concetto proposto:** Un vecchio strumento efficiente accanto a un progetto più leggibile.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 17 — How is that possible?

**Concetto proposto:** Un piccolo modello produce una struttura ordinata più ampia.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 21 — What about resources?

**Concetto proposto:** Un contenitore quasi vuoto rappresenta il ridotto uso di memoria.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 27 — But Node.js uses C++!

**Concetto proposto:** Due connettori diversi uniti da un adattatore piccolo.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 31 — But I want to support SmartOS!

**Concetto proposto:** Un ponte portatile collega piattaforme diverse senza loghi.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
