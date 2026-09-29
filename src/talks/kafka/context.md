# Contesto immagini — Reimagining Kafka for Node.js

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

Reimagining Kafka for Node.js

## Abstract esatto

Kafka has become a go-to for powering real-time, event-driven apps.

If you’re building with Node.js, dealing with Kafka hasn’t exactly been smooth sailing: the developer experience is not ideal and native libraries are not supporting all the new Node.js features like multithreading.

So, we built something new. It’s fast, it’s built with TypeScript in mind, and it cuts through the mess to give you a clean, reliable way to work with Kafka in Node.js. Oh, and it’s 100% open source, as usual.

In this talk, we’ll share the journey, show what it can do, and help you level up your Kafka game without the usual headaches.

## Messaggio e background confermato

Un client Kafka progettato per Node.js può unire protocollo, serializzazione e stream in un'esperienza più coerente e misurabile.

Il talk presenta @platformatic/kafka e il percorso di implementazione, inclusa la ricerca assistita da AI e verificata. Giudizi su altri client e benchmark sono quelli del deck: manutenzione e supporto delle librerie cambiano nel tempo.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La slide 4, subito dopo `hello`, è “Platformatic is used by”: titolo, loghi di Supabase e Spendesk e link ai case study provengono dal tema condiviso (`src/themes/main/theme.yml`). Riutilizzare i loghi originali, senza generarli o aggiungere affermazioni commerciali.

La versione corrente contiene **35 slide**.

- **Slide 1–11 — Protocollo Kafka:** Spiegare partizioni, gruppi e complessità delle versioni.
- **Slide 12–20 — Costruire un client:** Motivare il progetto e il metodo di ricerca.
- **Slide 21–25 — Scelte API:** Collegare DX, tipi, serializzazione e stream.
- **Slide 26–33 — Codice e misure:** Seguire produzione, consumo e risultati.
- **Slide 34–35 — Chiusura:** Invitare a esplorare il progetto.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: blue, red, pink, amber, green. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Flussi di eventi divisi in corsie, un collo di bottiglia documentale e canali con controllo del flusso. Grafici e output rimangono quelli reali; niente numeri sintetici.

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
| 2 | Let's dive into the unknown! | `@common/dive.png` |
| 5 | Hello Apache Kafka! | `@common/kafka.png` |
| 9 | That's a lot to handle ... | `@common/information-overload.png` |
| 10 | ...and it got much worse! 😭 | `@common/missing-puzzle.png` |
| 12 | What about Node.js? | `@common/node.png` |
| 16 | We needed a better solution ... | `@common/deserve.png` |
| 17 | ... so we started fresh! | `@common/fresh.png` |
| 19 | How did we build a client with no documentation available? | `@common/questions-2.png` |
| 26 | Show the code! | `@common/fry-money.png` |
| 29 | What about performance? | `@common/car.png` |
| 31 | Producer API | `@talk/benchmark-producer.png` |
| 33 | Consumer API | `@talk/benchmark-consumer.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 2 — Let's dive into the unknown!

**Concetto proposto:** Un esploratore guarda una rete di corsie luminose sconosciute.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 9 — That's a lot to handle ...

**Concetto proposto:** Pochi ingranaggi con interfacce differenti richiedono coordinamento.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 10 — ...and it got much worse! 😭

**Concetto proposto:** Un puzzle incompleto accanto a molti frammenti di documentazione senza testo.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 17 — ... so we started fresh!

**Concetto proposto:** Un banco nuovo riusa gli strumenti utili e ordina quelli sparsi.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 19 — How did we build a client with no documentation available?

**Concetto proposto:** Una lente collega frammenti sparsi prima di costruire il sistema.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 29 — What about performance?

**Concetto proposto:** Flussi comparabili attraversano canali distinti, senza podi o numeri di velocità.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
