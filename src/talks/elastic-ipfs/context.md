# Contesto immagini — Horizontal Scaling of a Web3 system to the sky and beyond in AWS

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

Horizontal Scaling of a Web3 system to the sky and beyond in AWS

## Abstract esatto

[web3.storage](http://web3.storage) is a system living on top of [Interplanetary File System
(IPFS)](https://ipfs.io) to provide non technical people access to a completely decentralized file sharing network
designed to preserve and grow humanity's knowledge.

The massive success of the initiative quickly brought the system to a point were it was not able to handle the
growth. Uploaded files were only available for downloads after several days due to limited capacity. Adding new
processing nodes took literally days due to the complex bootstrap procedures mandated by the different network
protocols involved.

In this talk I will show how we have been able to migrate to a new fully stateless system by carefully making
assumption and leveraging AWS services. We developed a system that now can perform infinite horizontal scalability
and it is able to consistently handle millions of uploads per day.

## Messaggio e background confermato

Separare indicizzazione, pubblicazione e servizio dei blocchi permette di scalare il caso web3.storage senza replicare tutta la complessità di un nodo IPFS tradizionale.

Talk archiviato su Elastic IPFS e la sua prima implementazione AWS. Il racconto comprende assunzioni specifiche, uso di S3, SQS, Lambda, DynamoDB ed EKS; la promessa di crescita va interpretata entro quote e colli di bottiglia reali.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La versione corrente contiene **47 slide**.

- **Slide 1–12 — Problema e obiettivi:** Motivare il disaccoppiamento dalla crescita del servizio.
- **Slide 13–18 — Architettura e dati:** Spiegare CID, CAR e indici.
- **Slide 19–22 — Indicizzazione:** Seguire il caricamento fino agli indici.
- **Slide 23–32 — Rete e annunci:** Spiegare come il contenuto diventa reperibile.
- **Slide 33–40 — Pubblicazione e servizio:** Gestire ordine degli annunci e accesso ai blocchi.
- **Slide 41–47 — Risultati:** Interpretare misure e assunzioni del caso storico.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: fuchsia, amber, green, sky. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Tre stazioni distinte per indicizzare, pubblicare e servire blocchi. File come contenitori e CID come impronte astratte; niente blockchain decorative o mappe di distribuzione inventate.

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
| 2 | All you need to succeed is love! | `@common/love-1.png` |
| 4 | IPFS (InterPlanetary FileSystem) | `@talk/ipfs.png` |
| 5 | web3.storage | `@talk/web3-storage.svg` |
| 6 | Content Identifier | `@talk/cid.png` |
| 8 | What was wrong? | `@common/obstacle.png` |
| 10 | What was the problem? | `@common/questions-2.png` |
| 13 | The solution | `@common/solution-1.png` |
| 14 | Hi, I'm Elastic IPFS! | `@talk/eipfs-architecture-complete.png` |
| 20 | Overview | `@talk/eipfs-architecture-indexing.png` |
| 26 | Indexer Nodes | `@talk/indexer-node.png` |
| 34 | Overview | `@talk/eipfs-architecture-publishing.png` |
| 36 | What now? | `@common/dont-panic.png` |
| 39 | Overview | `@talk/eipfs-architecture-peer.png` |
| 42 | Hit rate went almost to 100% | `@talk/hit-rate.png` |
| 43 | The average indexing time has dropped | `@talk/indexing-time.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 8 — What was wrong?

**Concetto proposto:** Un deposito cresce mentre un solo sportello resta congestionato.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 13 — The solution

**Concetto proposto:** Tre stazioni autonome lavorano su contenitori uguali.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 19 — Indexing subsystem

**Concetto proposto:** Un contenitore viene aperto e i suoi pezzi ricevono riferimenti astratti.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 23 — Let's talk about DHT

**Concetto proposto:** Punti connessi cercano un contenuto senza una mappa geografica.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 33 — Publishing subsystem

**Concetto proposto:** Molti flussi convergono ordinatamente in una sola catena.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 38 — Peer subsystem

**Concetto proposto:** Un piccolo blocco viene prelevato da un grande contenitore senza spostarlo interamente.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
