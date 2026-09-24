# Contesto immagini — Node.js: More threads than you think

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

Node.js: More threads than you think

## Abstract esatto

Node.js was announced in 2009 as a single-threaded JavaScript runtime. In 2018, it became multi-threaded, and no one noticed.

What can worker_threads do? What are they useful for? What's the best way of communicating between two threads?

## Messaggio e background confermato

I worker di Node.js consentono parallelismo, RPC, memoria condivisa e orchestrazione di servizi: scegliere il meccanismo di comunicazione è parte del design.

Talk cofirmato con Matteo Collina. Include il contributo storico di Anna Henningsen, Piscina, everysync, Pino, loader hooks e Watt. Le capacità dipendono dalle versioni; il processo resta condiviso anche con event loop separati.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La versione corrente contiene **49 slide**.

- **Slide 1–8 — Storia e API:** Superare il luogo comune sul single thread.
- **Slide 9–20 — Comunicazione:** Distinguere messaggi, RPC, clone e transfer.
- **Slide 21–24 — Piscina:** Mostrare una gestione più semplice del pool.
- **Slide 25–36 — Memoria condivisa e sincronizzazione:** Spiegare il ponte fra API asincrone e sincrone.
- **Slide 37–45 — Watt:** Applicare i worker a più servizi.
- **Slide 46–49 — Community e chiusura:** Lasciare risorse e inviti concreti.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: fuchsia, orange, amber, black. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Canali fra postazioni indipendenti, una piscina di worker e una memoria comune con accessi coordinati. Usare i diagrammi del deck come riferimento esatto, non ricrearli da nomi di file.

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
| 2 | There is a lot in the unknown! | `@common/unknown.png` |
| 4 | First of all, let’s give credits! | `@common/matteo.png` |
| 5 | Let's start the right way! 🤦‍♂️ | `@talk/chatgpt.png` |
| 6 | Node.js is (no longer) single threaded ... | `@common/postman.png` |
| 7 | 2018: "Node.js has threads!" | `@talk/anna.png` |
| 10 | Do you see how far we have gone? | `@common/pidgeon.png` |
| 11 | How do threads communicate? | `@talk/worker-threads-communication.png` |
| 14 | How can threads communicate? | `@common/children.png` |
| 17 | Is all that easy? | `@common/messages-flood.png` |
| 21 | Ready for another dive? | `@common/turtle-pool.png` |
| 22 | Piscina | `@common/piscina.png` |
| 23 | How to use Piscina | `@common/arrow-right.png` |
| 24 | Are we done? | `@common/turtles-tired.png` |
| 25 | Do you know what you can use Worker Threads for? | `@common/batman-superman.png` |
| 26 | “Everything is impossible until somebody does it” | `@talk/batman.png` |
| 30 | How? | `@common/batcave.png` |
| 31 | `Atomics.waitAsync` and `SharedArrayBuffer` | `@talk/shared-array-buffer.png` |
| 35 | Why this is useful? | `@common/pino.png` |
| 37 | Are we finally done? | `@common/turtles-escaping.png` |
| 38 | Introducing Watt, the Node.js application server | `@talk/watt.png` |
| 44 | Network-less HTTP | `@talk/mesh.png` |
| 46 | Immagine — bootcamp.png | `@talk/bootcamp.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 2 — There is a lot in the unknown!

**Concetto proposto:** Più postazioni operative emergono dietro una facciata apparentemente singola.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 6 — Node.js is (no longer) single threaded ...

**Concetto proposto:** Un coordinatore smista lavoro a postazioni indipendenti.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 17 — Is all that easy?

**Concetto proposto:** Un canale troppo pieno di messaggi rende visibile il costo della comunicazione.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 21 — Ready for another dive?

**Concetto proposto:** Una piscina con corsie ordinate evoca un pool di worker.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 30 — How?

**Concetto proposto:** Due postazioni accedono a uno spazio comune alternando un segnale semplice.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 37 — Are we finally done?

**Concetto proposto:** Una nuova stanza di lavoro si apre oltre una porta che sembrava l'ultima.

**Uso:** Composizione adatta al formato richiesto, con spazio negativo dove verrà sovrapposto il titolo.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
