# Why Node.js needs an application server

## Impostazione

Guida in italiano alla versione sorgente corrente: **39 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** Separare applicazioni, coordinamento e osservabilità in thread diversi rende più gestibile l'esecuzione di Node.js in produzione.

**Contesto e crediti:** Il talk presenta Watt e il problema dell'event loop che deve osservare sé stesso. I worker condividono il processo: isolamento JavaScript e riavvio del worker non equivalgono a isolamento da qualunque crash nativo o esaurimento globale di memoria.

## Struttura e ritmo

- **Slide 1–9 — Node.js e parallelismo:** Superare la semplificazione del runtime esclusivamente single-threaded.
- **Slide 10–16 — Osservabilità sotto carico:** Spiegare il limite del monitoraggio nello stesso event loop.
- **Slide 17–23 — Architettura Watt:** Separare esecuzione applicativa e supervisione.
- **Slide 24–29 — Guasti e recupero:** Descrivere rilevamento, sostituzione e instradamento.
- **Slide 30–39 — Più applicazioni e conclusione:** Collegare orchestrazione e uso delle risorse.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. Why Node.js needs an application server
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** Separare applicazioni, coordinamento e osservabilità in thread diversi rende più gestibile l'esecuzione di Node.js in produzione.
- **Transizione:** Passare alla slide 2, «Hello».

### 2. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Passare alla slide 3, «Node.js is everywhere».

### 3. Node.js is everywhere
- **Scopo:** Segnare un passaggio nella sezione «Node.js e parallelismo».
- **Traccia:** Usare «Node.js is everywhere» come domanda o pausa visiva prima del prossimo passaggio. Superare la semplificazione del runtime esclusivamente single-threaded.
- **Transizione:** Passare alla slide 4, «The numbers speak for themselves».

### 4. The numbers speak for themselves
- **Scopo:** Superare la semplificazione del runtime esclusivamente single-threaded, attraverso «The numbers speak for themselves».
- **Traccia:** Contestualizzare adozione e vantaggi per I/O prima di affrontare i limiti CPU.
- **Transizione:** Passare alla slide 5, «But there's a catch...».

### 5. But there's a catch...
- **Scopo:** Segnare un passaggio nella sezione «Node.js e parallelismo».
- **Traccia:** Usare «But there's a catch...» come domanda o pausa visiva prima del prossimo passaggio. Superare la semplificazione del runtime esclusivamente single-threaded.
- **Transizione:** Passare alla slide 6, «Single-threaded by design».

### 6. Single-threaded by design
- **Scopo:** Superare la semplificazione del runtime esclusivamente single-threaded, attraverso «Single-threaded by design».
- **Traccia:** Distinguere l'event loop JavaScript dal lavoro asincrono e dai worker disponibili.
- **Transizione:** Passare alla slide 7, «Is this still true?».

### 7. Is this still true?
- **Scopo:** Segnare un passaggio nella sezione «Node.js e parallelismo».
- **Traccia:** Usare «Is this still true?» come domanda o pausa visiva prima del prossimo passaggio. Superare la semplificazione del runtime esclusivamente single-threaded.
- **Transizione:** Passare alla slide 8, «Did you hide in a cave?».

### 8. Did you hide in a cave?
- **Scopo:** Segnare un passaggio nella sezione «Node.js e parallelismo».
- **Traccia:** Usare «Did you hide in a cave?» come domanda o pausa visiva prima del prossimo passaggio. Superare la semplificazione del runtime esclusivamente single-threaded.
- **Transizione:** Passare alla slide 9, «Worker Threads have existed since 2018».

### 9. Worker Threads have existed since 2018
- **Scopo:** Superare la semplificazione del runtime esclusivamente single-threaded, attraverso «Worker Threads have existed since 2018».
- **Traccia:** Ricordare l'introduzione dei worker nel 2018 e l'indipendenza di V8 ed event loop.
- **Transizione:** Passare alla slide 10, «Running Node.js in production», aprendo la sezione «Osservabilità sotto carico».

### 10. Running Node.js in production
- **Scopo:** Segnare un passaggio nella sezione «Osservabilità sotto carico».
- **Traccia:** Usare «Running Node.js in production» come domanda o pausa visiva prima del prossimo passaggio. Spiegare il limite del monitoraggio nello stesso event loop.
- **Transizione:** Passare alla slide 11, «The three pillars».

### 11. The three pillars
- **Scopo:** Spiegare il limite del monitoraggio nello stesso event loop, attraverso «The three pillars».
- **Traccia:** Presentare monitoraggio, metriche e tolleranza ai guasti come esigenze diverse.
- **Transizione:** Passare alla slide 12, «How do we monitor health?».

### 12. How do we monitor health?
- **Scopo:** Segnare un passaggio nella sezione «Osservabilità sotto carico».
- **Traccia:** Usare «How do we monitor health?» come domanda o pausa visiva prima del prossimo passaggio. Spiegare il limite del monitoraggio nello stesso event loop.
- **Transizione:** Passare alla slide 13, «The Node.js event loop».

### 13. The Node.js event loop
- **Scopo:** Spiegare il limite del monitoraggio nello stesso event loop, attraverso «The Node.js event loop».
- **Traccia:** Usare il diagramma dell'event loop per localizzare il lavoro di osservazione.
- **Transizione:** Passare alla slide 14, «The event loop observation problem».

### 14. The event loop observation problem
- **Scopo:** Spiegare il limite del monitoraggio nello stesso event loop, attraverso «The event loop observation problem».
- **Traccia:** Un event loop occupato ritarda anche il codice che dovrebbe rilevarne il sovraccarico.
- **Transizione:** Passare alla slide 15, «Backpressure management loses effectiveness».

### 15. Backpressure management loses effectiveness
- **Scopo:** Spiegare il limite del monitoraggio nello stesso event loop, attraverso «Backpressure management loses effectiveness».
- **Traccia:** Spiegare perché soglie conservative non risolvono un thread completamente bloccato.
- **Transizione:** Passare alla slide 16, «We need a better architecture!».

### 16. We need a better architecture!
- **Scopo:** Segnare un passaggio nella sezione «Osservabilità sotto carico».
- **Traccia:** Usare «We need a better architecture!» come domanda o pausa visiva prima del prossimo passaggio. Separare esecuzione applicativa e supervisione.
- **Transizione:** Passare alla slide 17, «Introducing Watt», aprendo la sezione «Architettura Watt».

### 17. Introducing Watt
- **Scopo:** Separare esecuzione applicativa e supervisione, attraverso «Introducing Watt».
- **Traccia:** Presentare Watt e lasciare il QR come riferimento pratico.
- **Transizione:** Passare alla slide 18, «Here's our _secret sauce_!».

### 18. Here's our _secret sauce_!
- **Scopo:** Separare esecuzione applicativa e supervisione, attraverso «Here's our _secret sauce_!».
- **Traccia:** Assegnare applicazione ai worker e supervisione al coordinatore.
- **Transizione:** Passare alla slide 19, «How does it work?».

### 19. How does it work?
- **Scopo:** Separare esecuzione applicativa e supervisione, attraverso «How does it work?».
- **Traccia:** Seguire lifecycle, segnalazioni di salute e riavvio nel modello a due ruoli.
- **Transizione:** Passare alla slide 20, «What about metrics?».

### 20. What about metrics?
- **Scopo:** Segnare un passaggio nella sezione «Architettura Watt».
- **Traccia:** Usare «What about metrics?» come domanda o pausa visiva prima del prossimo passaggio. Separare esecuzione applicativa e supervisione.
- **Transizione:** Passare alla slide 21, «Prometheus server on the main thread».

### 21. Prometheus server on the main thread
- **Scopo:** Separare esecuzione applicativa e supervisione, attraverso «Prometheus server on the main thread».
- **Traccia:** Il server delle metriche gira fuori dai worker applicativi; la disponibilità dipende comunque dalla salute del coordinatore e del processo.
- **Transizione:** Passare alla slide 22, «Monitoring architecture».

### 22. Monitoring architecture
- **Scopo:** Separare esecuzione applicativa e supervisione, attraverso «Monitoring architecture».
- **Traccia:** Percorrere il diagramma indicando origine e destinazione delle metriche.
- **Transizione:** Passare alla slide 23, «Kubernetes probes benefit too».

### 23. Kubernetes probes benefit too
- **Scopo:** Separare esecuzione applicativa e supervisione, attraverso «Kubernetes probes benefit too».
- **Traccia:** Distinguere readiness e liveness e ciò che possono realmente osservare.
- **Transizione:** Passare alla slide 24, «Handling failures», aprendo la sezione «Guasti e recupero».

### 24. Handling failures
- **Scopo:** Segnare un passaggio nella sezione «Guasti e recupero».
- **Traccia:** Usare «Handling failures» come domanda o pausa visiva prima del prossimo passaggio. Descrivere rilevamento, sostituzione e instradamento.
- **Transizione:** Passare alla slide 25, «The traditional single-threaded scenario».

### 25. The traditional single-threaded scenario
- **Scopo:** Descrivere rilevamento, sostituzione e instradamento, attraverso «The traditional single-threaded scenario».
- **Traccia:** Descrivere il recupero dopo un guasto e la perdita temporanea di capacità nel modello tradizionale.
- **Transizione:** Passare alla slide 26, «The innovative Watt multi-threaded approach».

### 26. The innovative Watt multi-threaded approach
- **Scopo:** Descrivere rilevamento, sostituzione e instradamento, attraverso «The innovative Watt multi-threaded approach».
- **Traccia:** Spiegare rilevamento proattivo e avvio del sostituto prima dello stop quando possibile.
- **Transizione:** Passare alla slide 27, «Why is this approach better?».

### 27. Why is this approach better?
- **Scopo:** Segnare un passaggio nella sezione «Guasti e recupero».
- **Traccia:** Usare «Why is this approach better?» come domanda o pausa visiva prima del prossimo passaggio. Descrivere rilevamento, sostituzione e instradamento.
- **Transizione:** Passare alla slide 28, «Because I'm telling you!».

### 28. Because I'm telling you!
- **Scopo:** Segnare un passaggio nella sezione «Guasti e recupero».
- **Traccia:** Usare «Because I'm telling you!» come domanda o pausa visiva prima del prossimo passaggio. Descrivere rilevamento, sostituzione e instradamento. Sottotitolo da richiamare: «Don't you just trust me? 😭».
- **Transizione:** Passare alla slide 29, «Seriously, why is this approach better?».

### 29. Seriously, why is this approach better?
- **Scopo:** Descrivere rilevamento, sostituzione e instradamento, attraverso «Seriously, why is this approach better?».
- **Traccia:** Presentare la continuità come obiettivo del routing e del drain; non garantire assenza di perdita per richieste già in un worker che si arresta.
- **Transizione:** Passare alla slide 30, «Not convinced yet?», aprendo la sezione «Più applicazioni e conclusione».

### 30. Not convinced yet?
- **Scopo:** Segnare un passaggio nella sezione «Più applicazioni e conclusione».
- **Traccia:** Usare «Not convinced yet?» come domanda o pausa visiva prima del prossimo passaggio. Collegare orchestrazione e uso delle risorse.
- **Transizione:** Passare alla slide 31, «Multiple applications, one process».

### 31. Multiple applications, one process
- **Scopo:** Collegare orchestrazione e uso delle risorse, attraverso «Multiple applications, one process».
- **Traccia:** Più applicazioni nello stesso processo hanno event loop separati e risorse globali condivise.
- **Transizione:** Passare alla slide 32, «Watt in action: the mesh network».

### 32. Watt in action: the mesh network
- **Scopo:** Collegare orchestrazione e uso delle risorse, attraverso «Watt in action: the mesh network».
- **Traccia:** Seguire una richiesta nella mesh e distinguere rete esterna e comunicazione interna.
- **Transizione:** Passare alla slide 33, «Intelligent dynamic in-process scaling».

### 33. Intelligent dynamic in-process scaling
- **Scopo:** Collegare orchestrazione e uso delle risorse, attraverso «Intelligent dynamic in-process scaling».
- **Traccia:** Collegare numero dei worker, disponibilità CPU e carico osservato.
- **Transizione:** Passare alla slide 34, «Watt in action: multiple workers».

### 34. Watt in action: multiple workers
- **Scopo:** Collegare orchestrazione e uso delle risorse, attraverso «Watt in action: multiple workers».
- **Traccia:** Usare il diagramma per rendere visibile lo scaling di una singola applicazione.
- **Transizione:** Passare alla slide 35, «Dynamic applications».

### 35. Dynamic applications
- **Scopo:** Collegare orchestrazione e uso delle risorse, attraverso «Dynamic applications».
- **Traccia:** Descrivere aggiunta, rimozione e redistribuzione delle applicazioni nel modello presentato.
- **Transizione:** Passare alla slide 36, «Please, just let me go!».

### 36. Please, just let me go!
- **Scopo:** Segnare un passaggio nella sezione «Più applicazioni e conclusione».
- **Traccia:** Usare «Please, just let me go!» come domanda o pausa visiva prima del prossimo passaggio. Collegare orchestrazione e uso delle risorse. Sottotitolo da richiamare: «I promise I understood everything! 🙏».
- **Transizione:** Passare alla slide 37, «Take-home lessons».

### 37. Take-home lessons
- **Scopo:** Collegare orchestrazione e uso delle risorse, attraverso «Take-home lessons».
- **Traccia:** Chiudere su osservazione esterna, separazione delle responsabilità e recupero rapido.
- **Transizione:** Passare alla slide 38, «Success is often achieved by those who don't know that failure is inevitable.».

### 38. Success is often achieved by those who don't know that failure is inevitable.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «Success is often achieved by those who don't know that failure is inevitable.», attribuita nella slide a Coco Chanel. Collegarla al tema: Separare applicazioni, coordinamento e osservabilità in thread diversi rende più gestibile l'esecuzione di Node.js in produzione.
- **Transizione:** Passare alla slide 39, «End».

### 39. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://www.platformatichq.com/watt>
- <https://www.platformatichq.com/watt](https://www.platformatichq.com/watt>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
