# Achieving 93% Faster Next.js in (your) Kubernetes with Watt

## Impostazione

Guida in italiano alla versione sorgente corrente: **39 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** Distribuzione delle connessioni, worker e osservabilità influenzano la latenza di Next.js in Kubernetes quanto il numero totale di CPU.

**Contesto e crediti:** Il deck confronta tre configurazioni da sei CPU su AWS EKS con k6 a 1000 richieste/s per 120 secondi. Il 93% del titolo è un risultato del benchmark, non un guadagno universale. Distinguere connessioni TCP e richieste HTTP: keep-alive, algoritmo del kernel e traffico influiscono sulla distribuzione.

## Struttura e ritmo

- **Slide 1–6 — Parallelismo:** Presentare i worker come capacità del runtime.
- **Slide 7–14 — Il problema sotto carico:** Separare accettazione, code e costo di coordinamento.
- **Slide 15–22 — Watt e SO_REUSEPORT:** Spiegare architettura e servizi comuni.
- **Slide 23–26 — Kubernetes:** Distinguere bilanciamento fra pod e fra worker.
- **Slide 27–36 — Benchmark:** Interpretare configurazioni e risultati osservati.
- **Slide 37–39 — Avvio e chiusura:** Lasciare una strada pratica al pubblico.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. Achieving 93% Faster Next.js in (your) Kubernetes with Watt
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** Distribuzione delle connessioni, worker e osservabilità influenzano la latenza di Next.js in Kubernetes quanto il numero totale di CPU.
- **Transizione:** Passare alla slide 2, «There is a lot in the unknown!».

### 2. There is a lot in the unknown!
- **Scopo:** Segnare un passaggio nella sezione «Parallelismo».
- **Traccia:** Usare «There is a lot in the unknown!» come domanda o pausa visiva prima del prossimo passaggio. Presentare i worker come capacità del runtime.
- **Transizione:** Passare alla slide 3, «Hello».

### 3. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Passare alla slide 4, «Node.js is (no longer) single threaded ...».

### 4. Node.js is (no longer) single threaded ...
- **Scopo:** Segnare un passaggio nella sezione «Parallelismo».
- **Traccia:** Usare «Node.js is (no longer) single threaded ...» come domanda o pausa visiva prima del prossimo passaggio. Presentare i worker come capacità del runtime. Sottotitolo da richiamare: «... and it hasn't been for a while now!».
- **Transizione:** Passare alla slide 5, «2018: "Node.js has threads!"».

### 5. 2018: "Node.js has threads!"
- **Scopo:** Presentare i worker come capacità del runtime, attraverso «2018: "Node.js has threads!"».
- **Traccia:** Riconoscere il lavoro storico di Anna Henningsen e il riferimento del 2018.
- **Transizione:** Passare alla slide 6, «Worker Thread API».

### 6. Worker Thread API
- **Scopo:** Presentare i worker come capacità del runtime, attraverso «Worker Thread API».
- **Traccia:** Ogni worker possiede event loop separato per eseguire lavoro in parallelo.
- **Transizione:** Passare alla slide 7, «Why do we care?», aprendo la sezione «Il problema sotto carico».

### 7. Why do we care?
- **Scopo:** Segnare un passaggio nella sezione «Il problema sotto carico».
- **Traccia:** Usare «Why do we care?» come domanda o pausa visiva prima del prossimo passaggio. Separare accettazione, code e costo di coordinamento.
- **Transizione:** Passare alla slide 8, «How do you scale Node.js in production?».

### 8. How do you scale Node.js in production?
- **Scopo:** Segnare un passaggio nella sezione «Il problema sotto carico».
- **Traccia:** Usare «How do you scale Node.js in production?» come domanda o pausa visiva prima del prossimo passaggio. Separare accettazione, code e costo di coordinamento.
- **Transizione:** Passare alla slide 9, «A familiar story at scale».

### 9. A familiar story at scale
- **Scopo:** Separare accettazione, code e costo di coordinamento, attraverso «A familiar story at scale».
- **Traccia:** Usare lo scenario di sovraccarico per introdurre squilibrio, costo e impatto applicativo.
- **Transizione:** Passare alla slide 10, «The Cluster Module: How It Works (1/2)».

### 10. The Cluster Module: How It Works (1/2)
- **Scopo:** Separare accettazione, code e costo di coordinamento, attraverso «The Cluster Module: How It Works (1/2)».
- **Traccia:** Descrivere cluster e passaggio delle connessioni; il 30% è una stima del deck, non un costo universale per richiesta.
- **Transizione:** Passare alla slide 11, «The Cluster Module: How It Works (2/2)».

### 11. The Cluster Module: How It Works (2/2)
- **Scopo:** Separare accettazione, code e costo di coordinamento, attraverso «The Cluster Module: How It Works (2/2)».
- **Traccia:** Seguire il diagramma di distribuzione prima di parlare di sovraccarico.
- **Transizione:** Passare alla slide 12, «The Early Rejection Problem».

### 12. The Early Rejection Problem
- **Scopo:** Separare accettazione, code e costo di coordinamento, attraverso «The Early Rejection Problem».
- **Traccia:** Una richiesta già accettata e accodata consuma risorse prima della decisione applicativa.
- **Transizione:** Passare alla slide 13, «Why Next.js Makes This Worse».

### 13. Why Next.js Makes This Worse
- **Scopo:** Separare accettazione, code e costo di coordinamento, attraverso «Why Next.js Makes This Worse».
- **Traccia:** SSR, middleware e dati di contesto richiedono lavoro prima di poter decidere come gestire la richiesta.
- **Transizione:** Passare alla slide 14, «The Compounding Effect».

### 14. The Compounding Effect
- **Scopo:** Separare accettazione, code e costo di coordinamento, attraverso «The Compounding Effect».
- **Traccia:** Separare costo di coordinamento e squilibrio fra code, senza applicare una percentuale fissa a ogni sistema.
- **Transizione:** Passare alla slide 15, «We solved this.», aprendo la sezione «Watt e SO_REUSEPORT».

### 15. We solved this.
- **Scopo:** Segnare un passaggio nella sezione «Watt e SO_REUSEPORT».
- **Traccia:** Usare «We solved this.» come domanda o pausa visiva prima del prossimo passaggio. Spiegare architettura e servizi comuni.
- **Transizione:** Passare alla slide 16, «The Technical Foundation - SO_REUSEPORT».

### 16. The Technical Foundation - SO_REUSEPORT
- **Scopo:** Spiegare architettura e servizi comuni, attraverso «The Technical Foundation - SO_REUSEPORT».
- **Traccia:** SO_REUSEPORT permette più socket in ascolto sulla stessa porta e distribuzione nel kernel; l'affinità riguarda il flusso, non necessariamente tutte le richieste dello stesso utente.
- **Transizione:** Passare alla slide 17, «Introducing Watt, the Node.js application server».

### 17. Introducing Watt, the Node.js application server
- **Scopo:** Spiegare architettura e servizi comuni, attraverso «Introducing Watt, the Node.js application server».
- **Traccia:** Presentare Watt prima dei dettagli operativi.
- **Transizione:** Passare alla slide 18, «What is Watt?».

### 18. What is Watt?
- **Scopo:** Spiegare architettura e servizi comuni, attraverso «What is Watt?».
- **Traccia:** Distinguere ingresso diretto nei worker, mesh e osservabilità.
- **Transizione:** Passare alla slide 19, «Watt: Architecture».

### 19. Watt: Architecture
- **Scopo:** Spiegare architettura e servizi comuni, attraverso «Watt: Architecture».
- **Traccia:** Seguire il diagramma identificando coordinatore e worker.
- **Transizione:** Passare alla slide 20, «Process Orchestration».

### 20. Process Orchestration
- **Scopo:** Spiegare architettura e servizi comuni, attraverso «Process Orchestration».
- **Traccia:** Descrivere restart, shutdown ordinato e monitoraggio, distinguendo worker e processi.
- **Transizione:** Passare alla slide 21, «Watt: Automatic Health Restarts».

### 21. Watt: Automatic Health Restarts
- **Scopo:** Spiegare architettura e servizi comuni, attraverso «Watt: Automatic Health Restarts».
- **Traccia:** Spiegare come si rileva un worker degradato; il recupero non elimina tutti i guasti globali del processo.
- **Transizione:** Passare alla slide 22, «Watt: Shared HTTP Cache».

### 22. Watt: Shared HTTP Cache
- **Scopo:** Spiegare architettura e servizi comuni, attraverso «Watt: Shared HTTP Cache».
- **Traccia:** La cache HTTP condivisa riduce duplicazioni di lavoro quando politica e chiavi lo consentono.
- **Transizione:** Passare alla slide 23, «Deploying Watt in Kubernetes», aprendo la sezione «Kubernetes».

### 23. Deploying Watt in Kubernetes
- **Scopo:** Segnare un passaggio nella sezione «Kubernetes».
- **Traccia:** Usare «Deploying Watt in Kubernetes» come domanda o pausa visiva prima del prossimo passaggio. Distinguere bilanciamento fra pod e fra worker.
- **Transizione:** Passare alla slide 24, «Two-Layer Architecture».

### 24. Two-Layer Architecture
- **Scopo:** Distinguere bilanciamento fra pod e fra worker, attraverso «Two-Layer Architecture».
- **Traccia:** Separare distribuzione delle nuove connessioni fra pod e scelta del listener nel pod.
- **Transizione:** Passare alla slide 25, «Independent Event Loops».

### 25. Independent Event Loops
- **Scopo:** Distinguere bilanciamento fra pod e fra worker, attraverso «Independent Event Loops».
- **Traccia:** Un event loop lento non blocca direttamente gli altri, ma CPU e memoria restano risorse condivise.
- **Transizione:** Passare alla slide 26, «Resource Sharing Within Pods».

### 26. Resource Sharing Within Pods
- **Scopo:** Distinguere bilanciamento fra pod e fra worker, attraverso «Resource Sharing Within Pods».
- **Traccia:** Distinguere page cache e memoria del codice dalle heap JavaScript separate dei worker.
- **Transizione:** Passare alla slide 27, «What about performance?», aprendo la sezione «Benchmark».

### 27. What about performance?
- **Scopo:** Segnare un passaggio nella sezione «Benchmark».
- **Traccia:** Usare «What about performance?» come domanda o pausa visiva prima del prossimo passaggio. Interpretare configurazioni e risultati osservati.
- **Transizione:** Passare alla slide 28, «Benchmark: Summary».

### 28. Benchmark: Summary
- **Scopo:** Interpretare configurazioni e risultati osservati, attraverso «Benchmark: Summary».
- **Traccia:** Fissare applicazione, durata, carico, nodi EKS e generatore k6.
- **Transizione:** Passare alla slide 29, «Benchmark: Configurations».

### 29. Benchmark: Configurations
- **Scopo:** Interpretare configurazioni e risultati osservati, attraverso «Benchmark: Configurations».
- **Traccia:** Le tre configurazioni hanno sei CPU complessive: il confronto cambia distribuzione e gestione dei worker.
- **Transizione:** Passare alla slide 30, «Benchmark: Results».

### 30. Benchmark: Results
- **Scopo:** Interpretare configurazioni e risultati osservati, attraverso «Benchmark: Results».
- **Traccia:** Leggere la tabella o il grafico originale prima di citare le percentuali.
- **Transizione:** Passare alla slide 31, «Latency Performance».

### 31. Latency Performance
- **Scopo:** Interpretare configurazioni e risultati osservati, attraverso «Latency Performance».
- **Traccia:** Distinguere mediana e P95 e mantenere il riferimento alla baseline PM2 della misura.
- **Transizione:** Passare alla slide 32, «Throughput and Reliability».

### 32. Throughput and Reliability
- **Scopo:** Interpretare configurazioni e risultati osservati, attraverso «Throughput and Reliability».
- **Traccia:** Throughput e tasso di successo descrivono aspetti diversi del risultato.
- **Transizione:** Passare alla slide 33, «How is that possible?».

### 33. How is that possible?
- **Scopo:** Segnare un passaggio nella sezione «Benchmark».
- **Traccia:** Usare «How is that possible?» come domanda o pausa visiva prima del prossimo passaggio. Interpretare configurazioni e risultati osservati.
- **Transizione:** Passare alla slide 34, «Why PM2 Underperforms».

### 34. Why PM2 Underperforms
- **Scopo:** Interpretare configurazioni e risultati osservati, attraverso «Why PM2 Underperforms».
- **Traccia:** Spiegare la coordinazione cluster a livello connessione; non presentare il 30% come legge universale.
- **Transizione:** Passare alla slide 35, «Why Single-CPU Pods Underperform».

### 35. Why Single-CPU Pods Underperform
- **Scopo:** Interpretare configurazioni e risultati osservati, attraverso «Why Single-CPU Pods Underperform».
- **Traccia:** Le code isolate possono amplificare distribuzioni sbilanciate del carico.
- **Transizione:** Passare alla slide 36, «Watt's Advantages».

### 36. Watt's Advantages
- **Scopo:** Interpretare configurazioni e risultati osservati, attraverso «Watt's Advantages».
- **Traccia:** Descrivere l'eliminazione del passaggio IPC per accettare connessioni; non confondere i listener SO_REUSEPORT con un'unica accept queue condivisa.
- **Transizione:** Passare alla slide 37, «Getting Started with Watt in Kubernetes», aprendo la sezione «Avvio e chiusura».

### 37. Getting Started with Watt in Kubernetes
- **Scopo:** Lasciare una strada pratica al pubblico, attraverso «Getting Started with Watt in Kubernetes».
- **Traccia:** Lasciare la guida al deployment per riprodurre e misurare il proprio caso.
- **Transizione:** Passare alla slide 38, «You are always a student, never a master. You have to keep moving forward.».

### 38. You are always a student, never a master. You have to keep moving forward.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «You are always a student, never a master. You have to keep moving forward.», attribuita nella slide a Conrad Hall. Collegarla al tema: Distribuzione delle connessioni, worker e osservabilità influenzano la latenza di Next.js in Kubernetes quanto il numero totale di CPU.
- **Transizione:** Passare alla slide 39, «End».

### 39. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://www.youtube.com/watch?v=-ssCzHoUI7M](https://www.youtube.com/watch?v=-ssCzHoUI7M>
- <https://nodejs.org/dist/latest-v22.x/docs/api/worker_threads.html>
- <https://docs.platformatic.dev/docs/guides/deployment/nextjs-in-k8s>
- <https://docs.platformatic.dev/docs/guides/deployment/nextjs-in-k8s](https://docs.platformatic.dev/docs/guides/deployment/nextjs-in-k8s>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
