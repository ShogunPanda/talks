# Contesto immagini — Node.js HTTP parser, what's going on?

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

Node.js HTTP parser, what's going on?

## Abstract esatto

Node.js HTTP relies on llhttp parser, which is a both a semi-obscure piece of code and semi-abandoned project.

As the parser is a critical part of Node.js, do we have better alternatives for easier maintainability? Let's find
out.

## Messaggio e background confermato

Un parser critico deve essere anche comprensibile e mantenibile: le prestazioni di llhttp sono il punto di partenza per esplorare alternative, non l'unico criterio.

Talk archiviato che precede la proposta Milo. Racconta http_parser, llhttp, llparse e una possibile ripartenza in Rust. Stato di manutenzione e supporto protocollare vanno letti nel periodo del deck, senza presentare la proposta come integrazione avvenuta.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La versione corrente contiene **29 slide**.

- **Slide 1–10 — HTTP e Node.js:** Delimitare il protocollo e il parser trattato.
- **Slide 11–20 — La storia dei parser:** Spiegare il passaggio a llhttp e alla generazione di codice.
- **Slide 21–26 — Manutenibilità e alternative:** Separare gli aspetti da conservare da quelli da cambiare.
- **Slide 27–29 — Proposta e chiusura:** Presentare il lavoro come esplorazione.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: fuchsia, blue, amber, sky, green, gray. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Macchine a stati leggibili, una catena TypeScript → C resa con forme astratte e una lente per la manutenzione. Preservare grafi e screenshot reali; nuovi diagrammi in Excalidraw.

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
| 2 | Nothing beats a classic! | `@common/500.png` |
| 4 | We all love HTTP! | `@common/love-2.png` |
| 5 | Which HTTP are you? | `@common/palette.png` |
| 11 | Let's focus! | `@common/focus.png` |
| 12 | The original parser | `@talk/http_parser.png` |
| 15 | The current parser | `@talk/llhttp.png` |
| 16 | How does it work? | `@talk/llhttp_states.png` |
| 17 | Wait, what?! | `@common/what.png` |
| 18 | Yes, you got it right! | `@common/possible.png` |
| 20 | That's a genius in action! | `@common/genius.png` |
| 22 | Where are the docs? | `@common/postit.png` |
| 23 | Do we have the solution? | `@common/solution-1.png` |
| 24 | Yes, start fresh! | `@common/fresh.png` |
| 26 | What shall we change? | `@common/rust-logo.png` |
| 27 | Work in progress, stay tuned! | `@common/road.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 4 — We all love HTTP!

**Concetto proposto:** Un flusso di messaggi entra ordinatamente in un piccolo interprete.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 11 — Let's focus!

**Concetto proposto:** Una lente isola un solo tratto di una rete complessa.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 17 — Wait, what?!

**Concetto proposto:** Una macchina produce un'altra macchina più piccola, con sorpresa leggera.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 22 — Where are the docs?

**Concetto proposto:** Un banco tecnico con un manuale vuoto: metafora della documentazione mancante.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 24 — Yes, start fresh!

**Concetto proposto:** Una nuova struttura conserva le fondamenta solide di quella precedente.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 27 — Work in progress, stay tuned!

**Concetto proposto:** Un percorso in costruzione con il prossimo tratto ancora aperto.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
