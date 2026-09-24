# How to create a PostgreSQL based webhook system

## Impostazione

Guida in italiano alla versione sorgente corrente: **47 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** PostgreSQL può sostenere una coda webhook con persistenza, retry, DLQ e coordinamento; le garanzie di consegna vanno distinte dagli effetti sul destinatario.

**Contesto e crediti:** Il progetto usa servizi Platformatic, PostgreSQL e un target Fastify con errori simulati. La leader election tramite advisory lock impedisce alcuni accessi concorrenti, ma non garantisce da sola exactly-once end-to-end su HTTP: gli effetti richiedono idempotenza o deduplicazione del destinatario.

## Struttura e ritmo

- **Slide 1–12 — Distribuzione e aggiornamenti:** Confrontare batch, polling e push.
- **Slide 13–19 — Coda e failure:** Definire consegna, retry, DLQ e ricorrenza.
- **Slide 20–26 — Coordinamento:** Spiegare leader election e advisory lock.
- **Slide 27–37 — Implementazione:** Seguire schema, loop e consegna HTTP.
- **Slide 38–47 — Scheduling e chiusura:** Gestire notifiche, retry e creazione eventi.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. How to create a PostgreSQL based webhook system
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** PostgreSQL può sostenere una coda webhook con persistenza, retry, DLQ e coordinamento; le garanzie di consegna vanno distinte dagli effetti sul destinatario.
- **Transizione:** Passare alla slide 2, «Don't shoot a fly with a cannon!».

### 2. Don't shoot a fly with a cannon!
- **Scopo:** Segnare un passaggio nella sezione «Distribuzione e aggiornamenti».
- **Traccia:** Usare «Don't shoot a fly with a cannon!» come domanda o pausa visiva prima del prossimo passaggio. Confrontare batch, polling e push.
- **Transizione:** Passare alla slide 3, «Hello».

### 3. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Passare alla slide 4, «Distributed data in a distributed world».

### 4. Distributed data in a distributed world
- **Scopo:** Confrontare batch, polling e push, attraverso «Distributed data in a distributed world».
- **Traccia:** Distribuire responsabilità aumenta anche i punti di guasto.
- **Transizione:** Passare alla slide 5, «Time matters, as usual!».

### 5. Time matters, as usual!
- **Scopo:** Confrontare batch, polling e push, attraverso «Time matters, as usual!».
- **Traccia:** Collegare ritardi e consistenza a un caso comprensibile come la prenotazione.
- **Transizione:** Passare alla slide 6, «How do we keep updated?».

### 6. How do we keep updated?
- **Scopo:** Segnare un passaggio nella sezione «Distribuzione e aggiornamenti».
- **Traccia:** Usare «How do we keep updated?» come domanda o pausa visiva prima del prossimo passaggio. Confrontare batch, polling e push.
- **Transizione:** Passare alla slide 7, «Batch updates via FTP or similar».

### 7. Batch updates via FTP or similar
- **Scopo:** Confrontare batch, polling e push, attraverso «Batch updates via FTP or similar».
- **Traccia:** Il batch riduce frequenza degli scambi ma aumenta latenza e impatto di un errore.
- **Transizione:** Passare alla slide 8, «Polling (pull)».

### 8. Polling (pull)
- **Scopo:** Confrontare batch, polling e push, attraverso «Polling (pull)».
- **Traccia:** Il polling semplifica il client ma può generare richieste senza nuovi dati.
- **Transizione:** Passare alla slide 9, «Events based (push)».

### 9. Events based (push)
- **Scopo:** Confrontare batch, polling e push, attraverso «Events based (push)».
- **Traccia:** Il push riduce gli scambi inutili ma sposta sul mittente stato e gestione dei fallimenti.
- **Transizione:** Passare alla slide 10, «Which one shall we choose?».

### 10. Which one shall we choose?
- **Scopo:** Segnare un passaggio nella sezione «Distribuzione e aggiornamenti».
- **Traccia:** Usare «Which one shall we choose?» come domanda o pausa visiva prima del prossimo passaggio. Confrontare batch, polling e push.
- **Transizione:** Passare alla slide 11, «Say hello to Webhooks!».

### 11. Say hello to Webhooks!
- **Scopo:** Segnare un passaggio nella sezione «Distribuzione e aggiornamenti».
- **Traccia:** Usare «Say hello to Webhooks!» come domanda o pausa visiva prima del prossimo passaggio. Confrontare batch, polling e push.
- **Transizione:** Passare alla slide 12, «What are we talking about?».

### 12. What are we talking about?
- **Scopo:** Confrontare batch, polling e push, attraverso «What are we talking about?».
- **Traccia:** Definire webhook come notifica HTTP verso un destinatario registrato.
- **Transizione:** Passare alla slide 13, «Let's implement a real one!», aprendo la sezione «Coda e failure».

### 13. Let's implement a real one!
- **Scopo:** Segnare un passaggio nella sezione «Coda e failure».
- **Traccia:** Usare «Let's implement a real one!» come domanda o pausa visiva prima del prossimo passaggio. Definire consegna, retry, DLQ e ricorrenza.
- **Transizione:** Passare alla slide 14, «General architeture».

### 14. General architeture
- **Scopo:** Definire consegna, retry, DLQ e ricorrenza, attraverso «General architeture».
- **Traccia:** Modellare eventi persistenti e URL di destinazione come coda.
- **Transizione:** Passare alla slide 15, «Yes, but which kind of queue?».

### 15. Yes, but which kind of queue?
- **Scopo:** Definire consegna, retry, DLQ e ricorrenza, attraverso «Yes, but which kind of queue?».
- **Traccia:** Definire perdita possibile, at-least-once ed exactly-once prima di scegliere la garanzia.
- **Transizione:** Passare alla slide 16, «Yes, but which kind of queue?».

### 16. Yes, but which kind of queue?
- **Scopo:** Definire consegna, retry, DLQ e ricorrenza, attraverso «Yes, but which kind of queue?».
- **Traccia:** Usare la ripetizione per evidenziare la scelta visuale; distinguere consegna HTTP ed effetto applicativo.
- **Transizione:** Passare alla slide 17, «What about failures?».

### 17. What about failures?
- **Scopo:** Segnare un passaggio nella sezione «Coda e failure».
- **Traccia:** Usare «What about failures?» come domanda o pausa visiva prima del prossimo passaggio. Definire consegna, retry, DLQ e ricorrenza.
- **Transizione:** Passare alla slide 18, «Dead letter queue (DLQ)».

### 18. Dead letter queue (DLQ)
- **Scopo:** Definire consegna, retry, DLQ e ricorrenza, attraverso «Dead letter queue (DLQ)».
- **Traccia:** Limitare retry e conservare gli eventi non consegnabili per analisi nella DLQ.
- **Transizione:** Passare alla slide 19, «Cron jobs».

### 19. Cron jobs
- **Scopo:** Definire consegna, retry, DLQ e ricorrenza, attraverso «Cron jobs».
- **Traccia:** La ricorrenza programma una nuova esecuzione dopo quella corrente.
- **Transizione:** Passare alla slide 20, «What about race conditions?», aprendo la sezione «Coordinamento».

### 20. What about race conditions?
- **Scopo:** Segnare un passaggio nella sezione «Coordinamento».
- **Traccia:** Usare «What about race conditions?» come domanda o pausa visiva prima del prossimo passaggio. Spiegare leader election e advisory lock.
- **Transizione:** Passare alla slide 21, «Being equal is hard».

### 21. Being equal is hard
- **Scopo:** Spiegare leader election e advisory lock, attraverso «Being equal is hard».
- **Traccia:** Due processori sullo stesso evento richiedono coordinamento, ma il lock non rende atomica una chiamata remota.
- **Transizione:** Passare alla slide 22, «Leader based queue system».

### 22. Leader based queue system
- **Scopo:** Spiegare leader election e advisory lock, attraverso «Leader based queue system».
- **Traccia:** Un leader attivo riduce la contesa; gli altri attendono e possono subentrare.
- **Transizione:** Passare alla slide 23, «A simple selection implementation».

### 23. A simple selection implementation
- **Scopo:** Spiegare leader election e advisory lock, attraverso «A simple selection implementation».
- **Traccia:** L'esclusività del lock sceglie il leader, senza riprodurre ogni dettaglio dell'algoritmo bully.
- **Transizione:** Passare alla slide 24, «How do you easily get such a lock implementation?».

### 24. How do you easily get such a lock implementation?
- **Scopo:** Segnare un passaggio nella sezione «Coordinamento».
- **Traccia:** Usare «How do you easily get such a lock implementation?» come domanda o pausa visiva prima del prossimo passaggio. Spiegare leader election e advisory lock.
- **Transizione:** Passare alla slide 25, «PostgreSQL Advisory Locks».

### 25. PostgreSQL Advisory Locks
- **Scopo:** Segnare un passaggio nella sezione «Coordinamento».
- **Traccia:** Usare «PostgreSQL Advisory Locks» come domanda o pausa visiva prima del prossimo passaggio. Spiegare leader election e advisory lock.
- **Transizione:** Passare alla slide 26, «The leader election process».

### 26. The leader election process
- **Scopo:** Spiegare leader election e advisory lock, attraverso «The leader election process».
- **Traccia:** Seguire acquisizione, lavoro, rilascio e failover; il lifetime della sessione PostgreSQL è rilevante.
- **Transizione:** Passare alla slide 27, «Stop talking please. Show me the code!», aprendo la sezione «Implementazione».

### 27. Stop talking please. Show me the code!
- **Scopo:** Segnare un passaggio nella sezione «Implementazione».
- **Traccia:** Usare «Stop talking please. Show me the code!» come domanda o pausa visiva prima del prossimo passaggio. Seguire schema, loop e consegna HTTP.
- **Transizione:** Passare alla slide 28, «Technical stack».

### 28. Technical stack
- **Scopo:** Seguire schema, loop e consegna HTTP, attraverso «Technical stack».
- **Traccia:** Presentare lo stack mostrato nel diagramma prima di entrare nello schema.
- **Transizione:** Passare alla slide 29, «Database schema (1/2)».

### 29. Database schema (1/2)
- **Scopo:** Seguire schema, loop e consegna HTTP, attraverso «Database schema (1/2)».
- **Traccia:** Leggere le tabelle iniziali in termini di identità, payload e stato.
- **Transizione:** Passare alla slide 30, «Database schema (2/2)».

### 30. Database schema (2/2)
- **Scopo:** Seguire schema, loop e consegna HTTP, attraverso «Database schema (2/2)».
- **Traccia:** Completare schema e indici collegandoli alle query del processore.
- **Transizione:** Passare alla slide 31, «Services».

### 31. Services
- **Scopo:** Seguire schema, loop e consegna HTTP, attraverso «Services».
- **Traccia:** Assegnare responsabilità a Processor, API, Composer e Target.
- **Transizione:** Passare alla slide 32, «Processor: Main».

### 32. Processor: Main
- **Scopo:** Seguire schema, loop e consegna HTTP, attraverso «Processor: Main».
- **Traccia:** Seguire avvio del processore e inizializzazione delle risorse.
- **Transizione:** Passare alla slide 33, «Processor: Leader election and main loop».

### 33. Processor: Leader election and main loop
- **Scopo:** Seguire schema, loop e consegna HTTP, attraverso «Processor: Leader election and main loop».
- **Traccia:** Localizzare acquisizione del lock e loop del leader.
- **Transizione:** Passare alla slide 34, «And now, let's deliver some messages!».

### 34. And now, let's deliver some messages!
- **Scopo:** Segnare un passaggio nella sezione «Implementazione».
- **Traccia:** Usare «And now, let's deliver some messages!» come domanda o pausa visiva prima del prossimo passaggio. Seguire schema, loop e consegna HTTP.
- **Transizione:** Passare alla slide 35, «Processor: Query to select the next message».

### 35. Processor: Query to select the next message
- **Scopo:** Seguire schema, loop e consegna HTTP, attraverso «Processor: Query to select the next message».
- **Traccia:** La query sceglie il prossimo evento disponibile rispettando lo scheduling.
- **Transizione:** Passare alla slide 36, «Processor: Select and deliver a message».

### 36. Processor: Select and deliver a message
- **Scopo:** Seguire schema, loop e consegna HTTP, attraverso «Processor: Select and deliver a message».
- **Traccia:** Collegare selezione e consegna evitando di confondere stato locale e successo remoto.
- **Transizione:** Passare alla slide 37, «Processor: Deliver a message».

### 37. Processor: Deliver a message
- **Scopo:** Seguire schema, loop e consegna HTTP, attraverso «Processor: Deliver a message».
- **Traccia:** Inviare HTTP e interpretare risposta ed errori; una risposta persa può lasciare ambiguo l'esito remoto.
- **Transizione:** Passare alla slide 38, «Why all those delays?», aprendo la sezione «Scheduling e chiusura».

### 38. Why all those delays?
- **Scopo:** Segnare un passaggio nella sezione «Scheduling e chiusura».
- **Traccia:** Usare «Why all those delays?» come domanda o pausa visiva prima del prossimo passaggio. Gestire notifiche, retry e creazione eventi.
- **Transizione:** Passare alla slide 39, «Notifications based scheduling».

### 39. Notifications based scheduling
- **Scopo:** Gestire notifiche, retry e creazione eventi, attraverso «Notifications based scheduling».
- **Traccia:** LISTEN/NOTIFY può risvegliare il processore, ma la coda persistente resta la fonte di verità e i cron richiedono timer.
- **Transizione:** Passare alla slide 40, «Processor: Retry and error handling».

### 40. Processor: Retry and error handling
- **Scopo:** Gestire notifiche, retry e creazione eventi, attraverso «Processor: Retry and error handling».
- **Traccia:** Aggiornare tentativi e ritardi oppure trasferire l'evento alla DLQ.
- **Transizione:** Passare alla slide 41, «Processor: Reschedule a successful cron job».

### 41. Processor: Reschedule a successful cron job
- **Scopo:** Gestire notifiche, retry e creazione eventi, attraverso «Processor: Reschedule a successful cron job».
- **Traccia:** Calcolare la prossima ricorrenza soltanto dopo l'esito previsto.
- **Transizione:** Passare alla slide 42, «Remember, successful message cannot be retried!».

### 42. Remember, successful message cannot be retried!
- **Scopo:** Gestire notifiche, retry e creazione eventi, attraverso «Remember, successful message cannot be retried!».
- **Traccia:** Un evento noto come riuscito non va ritentato; gli esiti remoti ambigui richiedono idempotenza.
- **Transizione:** Passare alla slide 43, «API: Message creation endpoint».

### 43. API: Message creation endpoint
- **Scopo:** Gestire notifiche, retry e creazione eventi, attraverso «API: Message creation endpoint».
- **Traccia:** Seguire validazione e inserimento dell'evento tramite l'endpoint API.
- **Transizione:** Passare alla slide 44, «Mission completed!».

### 44. Mission completed!
- **Scopo:** Segnare un passaggio nella sezione «Scheduling e chiusura».
- **Traccia:** Usare «Mission completed!» come domanda o pausa visiva prima del prossimo passaggio. Gestire notifiche, retry e creazione eventi.
- **Transizione:** Passare alla slide 45, «Check it out!».

### 45. Check it out!
- **Scopo:** Gestire notifiche, retry e creazione eventi, attraverso «Check it out!».
- **Traccia:** Lasciare il repository per provare il sistema e ispezionare il codice completo.
- **Transizione:** Passare alla slide 46, «Progress is man's ability to complicate simplicity.».

### 46. Progress is man's ability to complicate simplicity.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «Progress is man's ability to complicate simplicity.», attribuita nella slide a Thor Heyerdahl. Collegarla al tema: PostgreSQL può sostenere una coda webhook con persistenza, retry, DLQ e coordinamento; le garanzie di consegna vanno distinte dagli effetti sul destinatario.
- **Transizione:** Passare alla slide 47, «End».

### 47. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://github.com/ShogunPanda/postgresql-webhooks>
- <https://github.com/ShogunPanda/postgresql-webhooks](https://github.com/ShogunPanda/postgresql-webhooks>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
