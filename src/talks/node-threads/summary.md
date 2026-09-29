# Node.js: More threads than you think

## Impostazione

Guida in italiano alla versione sorgente corrente: **50 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** I worker di Node.js consentono parallelismo, RPC, memoria condivisa e orchestrazione di servizi: scegliere il meccanismo di comunicazione è parte del design.

**Contesto e crediti:** Talk cofirmato con Matteo Collina. Include il contributo storico di Anna Henningsen, Piscina, everysync, Pino, loader hooks e Watt. Le capacità dipendono dalle versioni; il processo resta condiviso anche con event loop separati.

## Struttura e ritmo

- **Slide 1–9 — Storia e API:** Superare il luogo comune sul single thread.
- **Slide 10–21 — Comunicazione:** Distinguere messaggi, RPC, clone e transfer.
- **Slide 22–25 — Piscina:** Mostrare una gestione più semplice del pool.
- **Slide 26–37 — Memoria condivisa e sincronizzazione:** Spiegare il ponte fra API asincrone e sincrone.
- **Slide 38–46 — Watt:** Applicare i worker a più servizi.
- **Slide 47–50 — Community e chiusura:** Lasciare risorse e inviti concreti.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. Node.js: More threads than you think
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** I worker di Node.js consentono parallelismo, RPC, memoria condivisa e orchestrazione di servizi: scegliere il meccanismo di comunicazione è parte del design.
- **Transizione:** Passare alla slide 2, «There is a lot in the unknown!».

### 2. There is a lot in the unknown!
- **Scopo:** Segnare un passaggio nella sezione «Storia e API».
- **Traccia:** Usare «There is a lot in the unknown!» come domanda o pausa visiva prima del prossimo passaggio. Superare il luogo comune sul single thread.
- **Transizione:** Passare alla slide 3, «Hello».

### 3. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Presentare brevemente Platformatic nella slide 4.

### 4. Platformatic is used by
- **Scopo:** Presentare il contesto aziendale dopo il relatore.
- **Traccia:** Mostrare i loghi e i case study condivisi di Supabase e Spendesk, senza aggiungere metriche o affermazioni non confermate. Titolo e griglie provengono da `src/themes/main/theme.yml`.
- **Transizione:** Passare ai crediti del talk.

### 5. First of all, let’s give credits!
- **Scopo:** Superare il luogo comune sul single thread, attraverso «First of all, let’s give credits!».
- **Traccia:** Accreditare Matteo Collina come coautore.
- **Transizione:** Passare alla slide 6, «Let's start the right way! 🤦‍♂️».

### 6. Let's start the right way! 🤦‍♂️
- **Scopo:** Superare il luogo comune sul single thread, attraverso «Let's start the right way! 🤦‍♂️».
- **Traccia:** Usare lo screenshot ChatGPT come spunto critico, non come fonte tecnica verificata.
- **Transizione:** Passare alla slide 7, «Node.js is (no longer) single threaded ...».

### 7. Node.js is (no longer) single threaded ...
- **Scopo:** Segnare un passaggio nella sezione «Storia e API».
- **Traccia:** Usare «Node.js is (no longer) single threaded ...» come domanda o pausa visiva prima del prossimo passaggio. Superare il luogo comune sul single thread. Sottotitolo da richiamare: «... and it hasn’t been for a while now!».
- **Transizione:** Passare alla slide 8, «2018: "Node.js has threads!"».

### 8. 2018: "Node.js has threads!"
- **Scopo:** Superare il luogo comune sul single thread, attraverso «2018: "Node.js has threads!"».
- **Traccia:** Riconoscere Anna Henningsen e il riferimento video del 2018.
- **Transizione:** Passare alla slide 9, «Worker Thread API».

### 9. Worker Thread API
- **Scopo:** Superare il luogo comune sul single thread, attraverso «Worker Thread API».
- **Traccia:** Ogni worker ha V8 ed event loop propri; ricordare la versione di introduzione.
- **Transizione:** Passare alla slide 10, «How do threads communicate?», aprendo la sezione «Comunicazione».

### 10. How do threads communicate?
- **Scopo:** Distinguere messaggi, RPC, clone e transfer, attraverso «How do threads communicate?».
- **Traccia:** MessagePort e MessageChannel separano il canale di comunicazione dal rapporto parent/child.
- **Transizione:** Passare alla slide 11, «Do you see how far we have gone?».

### 11. Do you see how far we have gone?
- **Scopo:** Segnare un passaggio nella sezione «Comunicazione».
- **Traccia:** Usare «Do you see how far we have gone?» come domanda o pausa visiva prima del prossimo passaggio. Distinguere messaggi, RPC, clone e transfer.
- **Transizione:** Passare alla slide 12, «How do threads communicate?».

### 12. How do threads communicate?
- **Scopo:** Distinguere messaggi, RPC, clone e transfer, attraverso «How do threads communicate?».
- **Traccia:** Seguire il grafo della comunicazione fra thread.
- **Transizione:** Passare alla slide 13, «BroadcastChannel API».

### 13. BroadcastChannel API
- **Scopo:** Distinguere messaggi, RPC, clone e transfer, attraverso «BroadcastChannel API».
- **Traccia:** Mostrare BroadcastChannel come pub/sub fra thread iscritti allo stesso nome.
- **Transizione:** Passare alla slide 14, «postMessageToThread».

### 14. postMessageToThread
- **Scopo:** Distinguere messaggi, RPC, clone e transfer, attraverso «postMessageToThread».
- **Traccia:** Spiegare postMessageToThread e l'handler workerMessage nel destinatario, con la versione indicata.
- **Transizione:** Passare alla slide 15, «How can threads communicate?».

### 15. How can threads communicate?
- **Scopo:** Distinguere messaggi, RPC, clone e transfer, attraverso «How can threads communicate?».
- **Traccia:** Aprire il problema della semantica di richiesta e risposta sopra i messaggi.
- **Transizione:** Passare alla slide 16, «Efficient inter-thread RPC».

### 16. Efficient inter-thread RPC
- **Scopo:** Distinguere messaggi, RPC, clone e transfer, attraverso «Efficient inter-thread RPC».
- **Traccia:** Collegare identificatore, richiesta pendente e risoluzione della Promise.
- **Transizione:** Passare alla slide 17, «Example: multithreaded HTTP server».

### 17. Example: multithreaded HTTP server
- **Scopo:** Distinguere messaggi, RPC, clone e transfer, attraverso «Example: multithreaded HTTP server».
- **Traccia:** Seguire correlazione della risposta e richiesta HTTP; cleanup e timeout sono aspetti da aggiungere a un esempio produttivo.
- **Transizione:** Passare alla slide 18, «Is all that easy?».

### 18. Is all that easy?
- **Scopo:** Segnare un passaggio nella sezione «Comunicazione».
- **Traccia:** Usare «Is all that easy?» come domanda o pausa visiva prima del prossimo passaggio. Distinguere messaggi, RPC, clone e transfer.
- **Transizione:** Passare alla slide 19, «Structured Clone».

### 19. Structured Clone
- **Scopo:** Distinguere messaggi, RPC, clone e transfer, attraverso «Structured Clone».
- **Traccia:** Structured clone non trasferisce funzioni o qualunque oggetto nativo; consultare le eccezioni documentate.
- **Transizione:** Passare alla slide 20, «Transferable (1/2)».

### 20. Transferable (1/2)
- **Scopo:** Distinguere messaggi, RPC, clone e transfer, attraverso «Transferable (1/2)».
- **Traccia:** Distinguere copia da trasferimento di ownership e invalidazione dell'origine.
- **Transizione:** Passare alla slide 21, «Transferable (2/2)».

### 21. Transferable (2/2)
- **Scopo:** Distinguere messaggi, RPC, clone e transfer, attraverso «Transferable (2/2)».
- **Traccia:** La lista va verificata rispetto alla versione: CryptoKey è clonabile, non va confuso con gli oggetti obbligatoriamente trasferibili.
- **Transizione:** Passare alla slide 22, «Ready for another dive?», aprendo la sezione «Piscina».

### 22. Ready for another dive?
- **Scopo:** Segnare un passaggio nella sezione «Piscina».
- **Traccia:** Usare «Ready for another dive?» come domanda o pausa visiva prima del prossimo passaggio. Mostrare una gestione più semplice del pool.
- **Transizione:** Passare alla slide 23, «Piscina».

### 23. Piscina
- **Scopo:** Mostrare una gestione più semplice del pool, attraverso «Piscina».
- **Traccia:** Piscina gestisce pool, invio dei lavori e risultati, lasciando al codice applicativo il task.
- **Transizione:** Passare alla slide 24, «How to use Piscina».

### 24. How to use Piscina
- **Scopo:** Mostrare una gestione più semplice del pool, attraverso «How to use Piscina».
- **Traccia:** Seguire run nel main e la funzione esportata dal worker.
- **Transizione:** Passare alla slide 25, «Are we done?».

### 25. Are we done?
- **Scopo:** Segnare un passaggio nella sezione «Piscina».
- **Traccia:** Usare «Are we done?» come domanda o pausa visiva prima del prossimo passaggio. Spiegare il ponte fra API asincrone e sincrone.
- **Transizione:** Passare alla slide 26, «Do you know what you can use Worker Threads for?», aprendo la sezione «Memoria condivisa e sincronizzazione».

### 26. Do you know what you can use Worker Threads for?
- **Scopo:** Segnare un passaggio nella sezione «Memoria condivisa e sincronizzazione».
- **Traccia:** Usare «Do you know what you can use Worker Threads for?» come domanda o pausa visiva prima del prossimo passaggio. Spiegare il ponte fra API asincrone e sincrone.
- **Transizione:** Passare alla slide 27, «“Everything is impossible until somebody does it”».

### 27. “Everything is impossible until somebody does it”
- **Scopo:** Spiegare il ponte fra API asincrone e sincrone, attraverso «“Everything is impossible until somebody does it”».
- **Traccia:** La citazione prepara il caso sorprendente di una facciata sincrona su lavoro asincrono. Sottotitolo da richiamare: «“It's not who you are underneath, it’s what you do that defines you”».
- **Transizione:** Passare alla slide 28, «How can a Promise be invoked synchronously?».

### 28. How can a Promise be invoked synchronously?
- **Scopo:** Spiegare il ponte fra API asincrone e sincrone, attraverso «How can a Promise be invoked synchronously?».
- **Traccia:** La funzione echo resta asincrona: il chiamante sincrono aspetterà il worker.
- **Transizione:** Passare alla slide 29, «everysync (1/2)».

### 29. everysync (1/2)
- **Scopo:** Spiegare il ponte fra API asincrone e sincrone, attraverso «everysync (1/2)».
- **Traccia:** Mostrare buffer condiviso, avvio del worker e makeSync.
- **Transizione:** Passare alla slide 30, «everysync (2/2)».

### 30. everysync (2/2)
- **Scopo:** Spiegare il ponte fra API asincrone e sincrone, attraverso «everysync (2/2)».
- **Traccia:** Esporre echo tramite wire e discutere il ciclo di vita del worker.
- **Transizione:** Passare alla slide 31, «How?».

### 31. How?
- **Scopo:** Segnare un passaggio nella sezione «Memoria condivisa e sincronizzazione».
- **Traccia:** Usare «How?» come domanda o pausa visiva prima del prossimo passaggio. Spiegare il ponte fra API asincrone e sincrone.
- **Transizione:** Passare alla slide 32, «`Atomics.waitAsync` and `SharedArrayBuffer`».

### 32. `Atomics.waitAsync` and `SharedArrayBuffer`
- **Scopo:** Spiegare il ponte fra API asincrone e sincrone, attraverso «`Atomics.waitAsync` and `SharedArrayBuffer`».
- **Traccia:** Separare area dei metadati e payload nel SharedArrayBuffer.
- **Transizione:** Passare alla slide 33, «Use the same mechanism of `postMessage`».

### 33. Use the same mechanism of `postMessage`
- **Scopo:** Spiegare il ponte fra API asincrone e sincrone, attraverso «Use the same mechanism of `postMessage`».
- **Traccia:** Serializzare i dati con node:v8 e memorizzare la lunghezza prima del payload.
- **Transizione:** Passare alla slide 34, «Calling a method to the worker thread».

### 34. Calling a method to the worker thread
- **Scopo:** Spiegare il ponte fra API asincrone e sincrone, attraverso «Calling a method to the worker thread».
- **Traccia:** Il chiamante pubblica la richiesta, notifica e attende con Atomics.wait; il suo thread rimane bloccato.
- **Transizione:** Passare alla slide 35, «Receiving the calls using Atomics.waitAsync».

### 35. Receiving the calls using Atomics.waitAsync
- **Scopo:** Spiegare il ponte fra API asincrone e sincrone, attraverso «Receiving the calls using Atomics.waitAsync».
- **Traccia:** Il worker usa waitAsync per attendere e notify per segnalare la risposta.
- **Transizione:** Passare alla slide 36, «Why this is useful?».

### 36. Why this is useful?
- **Scopo:** Spiegare il ponte fra API asincrone e sincrone, attraverso «Why this is useful?».
- **Traccia:** Collegare l'approccio ai trasporti asincroni e al flush dei log di Pino.
- **Transizione:** Passare alla slide 37, «Loader hooks».

### 37. Loader hooks
- **Scopo:** Spiegare il ponte fra API asincrone e sincrone, attraverso «Loader hooks».
- **Traccia:** Distinguere loader hook asincroni su thread dedicato dalle altre funzionalità citate: require(esm) e type stripping non vanno spiegati come conseguenze necessarie di quel thread.
- **Transizione:** Passare alla slide 38, «Are we finally done?», aprendo la sezione «Watt».

### 38. Are we finally done?
- **Scopo:** Segnare un passaggio nella sezione «Watt».
- **Traccia:** Usare «Are we finally done?» come domanda o pausa visiva prima del prossimo passaggio. Applicare i worker a più servizi.
- **Transizione:** Passare alla slide 39, «Introducing Watt, the Node.js application server».

### 39. Introducing Watt, the Node.js application server
- **Scopo:** Applicare i worker a più servizi, attraverso «Introducing Watt, the Node.js application server».
- **Traccia:** Presentare Watt come applicazione del modello multithread.
- **Transizione:** Passare alla slide 40, «Watt».

### 40. Watt
- **Scopo:** Applicare i worker a più servizi, attraverso «Watt».
- **Traccia:** I servizi hanno event loop separati ma condividono il processo e alcuni rischi globali.
- **Transizione:** Passare alla slide 41, «How do you configure Watt?».

### 41. How do you configure Watt?
- **Scopo:** Applicare i worker a più servizi, attraverso «How do you configure Watt?».
- **Traccia:** Leggere server, autoload e watch nella configurazione Watt.
- **Transizione:** Passare alla slide 42, «How do you create a service?».

### 42. How do you create a service?
- **Scopo:** Applicare i worker a più servizi, attraverso «How do you create a service?».
- **Traccia:** Creare il servizio seguendo le convenzioni della cartella web e del package.json.
- **Transizione:** Passare alla slide 43, «Configure your service».

### 43. Configure your service
- **Scopo:** Applicare i worker a più servizi, attraverso «Configure your service».
- **Traccia:** Mostrare il ruolo di wattpm import e dello schema di configurazione.
- **Transizione:** Passare alla slide 44, «How do you write a service?».

### 44. How do you write a service?
- **Scopo:** Applicare i worker a più servizi, attraverso «How do you write a service?».
- **Traccia:** Seguire funzione build/create, listen dell'entrypoint e indirizzo interno plt.local.
- **Transizione:** Passare alla slide 45, «Network-less HTTP».

### 45. Network-less HTTP
- **Scopo:** Applicare i worker a più servizi, attraverso «Network-less HTTP».
- **Traccia:** La mesh mantiene la semantica HTTP usando la comunicazione fra thread.
- **Transizione:** Passare alla slide 46, «Example: a service which invokes another service».

### 46. Example: a service which invokes another service
- **Scopo:** Applicare i worker a più servizi, attraverso «Example: a service which invokes another service».
- **Traccia:** Seguire la route locale e la chiamata al servizio worker.
- **Transizione:** Passare alla slide 47, «Immagine — bootcamp.png», aprendo la sezione «Community e chiusura».

### 47. Immagine — bootcamp.png
- **Scopo:** Lasciare risorse e inviti concreti, attraverso «Immagine — bootcamp.png».
- **Traccia:** Mostrare il materiale reale del bootcamp senza inventare persone o attività.
- **Transizione:** Passare alla slide 48, «GoFundMe campaign».

### 48. GoFundMe campaign
- **Scopo:** Lasciare risorse e inviti concreti, attraverso «GoFundMe campaign».
- **Traccia:** Presentare il link alla campagna Code Their Future come riferimento del deck; verificarne lo stato prima di un nuovo evento.
- **Transizione:** Passare alla slide 49, «Keep your face always toward the sunshine and shadows will fall behind you.».

### 49. Keep your face always toward the sunshine and shadows will fall behind you.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «Keep your face always toward the sunshine and shadows will fall behind you.», attribuita nella slide a Walt Whitman. Collegarla al tema: I worker di Node.js consentono parallelismo, RPC, memoria condivisa e orchestrazione di servizi: scegliere il meccanismo di comunicazione è parte del design.
- **Transizione:** Passare alla slide 50, «End».

### 50. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://twitter.com/@matteocollina>
- <https://www.youtube.com/watch?v=-ssCzHoUI7M](https://www.youtube.com/watch?v=-ssCzHoUI7M>
- <https://nodejs.org/dist/latest-v22.x/docs/api/worker_threads.html>
- <https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm>
- <https://nodejs.org/docs/latest/api/worker_threads.html#portpostmessagevalue-transferlist>
- <https://www.npmjs.com/package/piscina>
- <https://github.com/mcollina/everysync>
- <https://github.com/mcollina/everysync](https://github.com/mcollina/everysync>
- <https://github.com/mcollina/everysync/blob/main/lib/objects.js>
- <https://getpino.io>
- <https://getpino.io](https://getpino.io>
- <https://platformatic.dev/watt>
- <http://[SERVICE].plt.local>
- <https://www.gofundme.com/f/code-their-future-unlocking-opportunities-for-underserved-k>
- <https://www.gofundme.com/f/code-their-future-unlocking-opportunities-for-underserved-k](https://www.gofundme.com/f/code-their-future-unlocking-opportunities-for-underserved-k>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
