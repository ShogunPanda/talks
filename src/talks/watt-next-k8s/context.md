# Contesto immagini — Achieving 93% Faster Next.js in (your) Kubernetes with Watt

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

Achieving 93% Faster Next.js in (your) Kubernetes with Watt

## Abstract esatto

Here's something most Node.js developers don't realize: PM2's cluster module silently imposes a ~30% performance tax through hidden IPC coordination overhead. Every request pays this cost for master-worker communication, and most teams accept it as the price of scaling Node.js applications.

With Watt, we eliminated this overhead using SO_REUSEPORT, achieving 93% faster median latency by letting the Linux kernel handle load distribution directly—no master processes, no IPC, zero coordination cost.

In this talk, we'll walk through our production benchmarks on AWS EKS and show how Watt delivers not just raw performance, but also multithreaded SSR, distributed caching, full observability with Prometheus, and seamless horizontal scaling—all while dramatically reducing your infrastructure costs.

## Messaggio e background confermato

Distribuzione delle connessioni, worker e osservabilità influenzano la latenza di Next.js in Kubernetes quanto il numero totale di CPU.

Il deck confronta tre configurazioni da sei CPU su AWS EKS con k6 a 1000 richieste/s per 120 secondi. Il 93% del titolo è un risultato del benchmark, non un guadagno universale. Distinguere connessioni TCP e richieste HTTP: keep-alive, algoritmo del kernel e traffico influiscono sulla distribuzione.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La slide 4, subito dopo `hello`, è “Platformatic is used by”: titolo, loghi di Supabase e Spendesk e link ai case study provengono dal tema condiviso (`src/themes/main/theme.yml`). Riutilizzare i loghi originali, senza generarli o aggiungere affermazioni commerciali.

La versione corrente contiene **40 slide**.

- **Slide 1–7 — Parallelismo:** Presentare i worker come capacità del runtime.
- **Slide 8–15 — Il problema sotto carico:** Separare accettazione, code e costo di coordinamento.
- **Slide 16–23 — Watt e SO_REUSEPORT:** Spiegare architettura e servizi comuni.
- **Slide 24–27 — Kubernetes:** Distinguere bilanciamento fra pod e fra worker.
- **Slide 28–37 — Benchmark:** Interpretare configurazioni e risultati osservati.
- **Slide 38–40 — Avvio e chiusura:** Lasciare una strada pratica al pubblico.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: fuchsia, red, amber, green, sky. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Due livelli di distribuzione con pod e worker distinti, code separate e una vista ordinata delle risorse. Conservare i grafici reali; nuove illustrazioni non devono inventare code condivise o numeri di benchmark.

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
| 5 | Node.js is (no longer) single threaded ... | `@common/postman.png` |
| 6 | 2018: "Node.js has threads!" | `@talk/anna.png` |
| 8 | Why do we care? | `@common/why.png` |
| 9 | How do you scale Node.js in production? | `@common/server.png` |
| 12 | The Cluster Module: How It Works (2/2) | `@talk/cluster.png` |
| 16 | We solved this. | `@common/fresh.png` |
| 18 | Introducing Watt, the Node.js application server | `@talk/mesh.png` |
| 20 | Watt: Architecture | `@talk/watt.png` |
| 24 | Deploying Watt in Kubernetes | `@common/turtle-pool.png` |
| 28 | What about performance? | `@common/car.png` |
| 31 | Benchmark: Results | `@talk/benchmarks.png` |
| 34 | How is that possible? | `@common/dog-1.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 2 — There is a lot in the unknown!

**Concetto proposto:** Un livello nascosto di postazioni emerge sotto una superficie semplice.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 8 — Why do we care?

**Concetto proposto:** Due code di lavoro crescono in modo molto diverso a parità di risorse.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 9 — How do you scale Node.js in production?

**Concetto proposto:** Più gruppi di postazioni ricevono richieste da un punto esterno.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 16 — We solved this.

**Concetto proposto:** Un passaggio centrale viene sostituito da ingressi diretti ordinati.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 24 — Deploying Watt in Kubernetes

**Concetto proposto:** Due livelli di smistamento chiaramente separati, senza etichette.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 28 — What about performance?

**Concetto proposto:** Tre configurazioni equivalenti sono preparate su banchi di prova identici.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
