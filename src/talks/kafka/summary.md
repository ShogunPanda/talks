# Reimagining Kafka for Node.js

## Impostazione

Guida in italiano alla versione sorgente corrente: **35 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** Un client Kafka progettato per Node.js può unire protocollo, serializzazione e stream in un'esperienza più coerente e misurabile.

**Contesto e crediti:** Il talk presenta @platformatic/kafka e il percorso di implementazione, inclusa la ricerca assistita da AI e verificata. Giudizi su altri client e benchmark sono quelli del deck: manutenzione e supporto delle librerie cambiano nel tempo.

## Struttura e ritmo

- **Slide 1–11 — Protocollo Kafka:** Spiegare partizioni, gruppi e complessità delle versioni.
- **Slide 12–20 — Costruire un client:** Motivare il progetto e il metodo di ricerca.
- **Slide 21–25 — Scelte API:** Collegare DX, tipi, serializzazione e stream.
- **Slide 26–33 — Codice e misure:** Seguire produzione, consumo e risultati.
- **Slide 34–35 — Chiusura:** Invitare a esplorare il progetto.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. Reimagining Kafka for Node.js
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** Un client Kafka progettato per Node.js può unire protocollo, serializzazione e stream in un'esperienza più coerente e misurabile.
- **Transizione:** Passare alla slide 2, «Let's dive into the unknown!».

### 2. Let's dive into the unknown!
- **Scopo:** Segnare un passaggio nella sezione «Protocollo Kafka».
- **Traccia:** Usare «Let's dive into the unknown!» come domanda o pausa visiva prima del prossimo passaggio. Spiegare partizioni, gruppi e complessità delle versioni.
- **Transizione:** Passare alla slide 3, «Hello».

### 3. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Presentare brevemente Platformatic nella slide 4.

### 4. Platformatic is used by
- **Scopo:** Presentare il contesto aziendale dopo il relatore.
- **Traccia:** Mostrare i loghi e i case study condivisi di Supabase e Spendesk, senza aggiungere metriche o affermazioni non confermate. Titolo e griglie provengono da `src/themes/main/theme.yml`.
- **Transizione:** Introdurre Apache Kafka.

### 5. Hello Apache Kafka!
- **Scopo:** Spiegare partizioni, gruppi e complessità delle versioni, attraverso «Hello Apache Kafka!».
- **Traccia:** Presentare Kafka come componente di sistemi event-driven, contestualizzando gli esempi di adozione.
- **Transizione:** Passare alla slide 6, «How does it work?».

### 6. How does it work?
- **Scopo:** Spiegare partizioni, gruppi e complessità delle versioni, attraverso «How does it work?».
- **Traccia:** Distinguere broker, topic e partizione.
- **Transizione:** Passare alla slide 7, «How do we use it?».

### 7. How do we use it?
- **Scopo:** Spiegare partizioni, gruppi e complessità delle versioni, attraverso «How do we use it?».
- **Traccia:** Separare produttori e consumatori; in un gruppo una partizione è assegnata a un consumatore alla volta.
- **Transizione:** Passare alla slide 8, «Kafka API Versioning».

### 8. Kafka API Versioning
- **Scopo:** Spiegare partizioni, gruppi e complessità delle versioni, attraverso «Kafka API Versioning».
- **Traccia:** Ogni API evolve con versioni proprie: il client negozia capacità, non un'unica versione globale.
- **Transizione:** Passare alla slide 9, «That's a lot to handle ...».

### 9. That's a lot to handle ...
- **Scopo:** Segnare un passaggio nella sezione «Protocollo Kafka».
- **Traccia:** Usare «That's a lot to handle ...» come domanda o pausa visiva prima del prossimo passaggio. Spiegare partizioni, gruppi e complessità delle versioni. Sottotitolo da richiamare: «... especially if, like me, you **have never** used Kafka! 😂».
- **Transizione:** Passare alla slide 10, «...and it got much worse! 😭».

### 10. ...and it got much worse! 😭
- **Scopo:** Segnare un passaggio nella sezione «Protocollo Kafka».
- **Traccia:** Usare «...and it got much worse! 😭» come domanda o pausa visiva prima del prossimo passaggio. Spiegare partizioni, gruppi e complessità delle versioni.
- **Transizione:** Passare alla slide 11, «Where is your documentation?».

### 11. Where is your documentation?
- **Scopo:** Spiegare partizioni, gruppi e complessità delle versioni, attraverso «Where is your documentation?».
- **Traccia:** Raccontare la ricerca fra documentazione, KIP e dettagli implementativi.
- **Transizione:** Passare alla slide 12, «What about Node.js?», aprendo la sezione «Costruire un client».

### 12. What about Node.js?
- **Scopo:** Segnare un passaggio nella sezione «Costruire un client».
- **Traccia:** Usare «What about Node.js?» come domanda o pausa visiva prima del prossimo passaggio. Motivare il progetto e il metodo di ricerca.
- **Transizione:** Passare alla slide 13, «There were already some solutions».

### 13. There were already some solutions
- **Scopo:** Motivare il progetto e il metodo di ricerca, attraverso «There were already some solutions».
- **Traccia:** Presentare node-rdkafka e KafkaJS prima di motivare un nuovo progetto.
- **Transizione:** Passare alla slide 14, «node-rdkafka».

### 14. node-rdkafka
- **Scopo:** Motivare il progetto e il metodo di ricerca, attraverso «node-rdkafka».
- **Traccia:** Leggere la API basata su librdkafka e i limiti di compatibilità osservati nel periodo del talk.
- **Transizione:** Passare alla slide 15, «KafkaJS».

### 15. KafkaJS
- **Scopo:** Motivare il progetto e il metodo di ricerca, attraverso «KafkaJS».
- **Traccia:** Collegare gli aspetti API e allocazioni ai problemi incontrati, senza trasformare lo stato storico in un giudizio attuale assoluto.
- **Transizione:** Passare alla slide 16, «We needed a better solution ...».

### 16. We needed a better solution ...
- **Scopo:** Segnare un passaggio nella sezione «Costruire un client».
- **Traccia:** Usare «We needed a better solution ...» come domanda o pausa visiva prima del prossimo passaggio. Motivare il progetto e il metodo di ricerca.
- **Transizione:** Passare alla slide 17, «... so we started fresh!».

### 17. ... so we started fresh!
- **Scopo:** Segnare un passaggio nella sezione «Costruire un client».
- **Traccia:** Usare «... so we started fresh!» come domanda o pausa visiva prima del prossimo passaggio. Motivare il progetto e il metodo di ricerca.
- **Transizione:** Passare alla slide 18, «Hello *@platformatic/kafka*!».

### 18. Hello *@platformatic/kafka*!
- **Scopo:** Motivare il progetto e il metodo di ricerca, attraverso «Hello *@platformatic/kafka*!».
- **Traccia:** Presentare @platformatic/kafka e il repository.
- **Transizione:** Passare alla slide 19, «How did we build a client with no documentation available?».

### 19. How did we build a client with no documentation available?
- **Scopo:** Segnare un passaggio nella sezione «Costruire un client».
- **Traccia:** Usare «How did we build a client with no documentation available?» come domanda o pausa visiva prima del prossimo passaggio. Motivare il progetto e il metodo di ricerca.
- **Transizione:** Passare alla slide 20, «AI to the Rescue».

### 20. AI to the Rescue
- **Scopo:** Motivare il progetto e il metodo di ricerca, attraverso «AI to the Rescue».
- **Traccia:** L'AI ha accelerato la sintesi, ma le informazioni sono state controllate per le allucinazioni.
- **Transizione:** Passare alla slide 21, «Design Principles», aprendo la sezione «Scelte API».

### 21. Design Principles
- **Scopo:** Collegare DX, tipi, serializzazione e stream, attraverso «Design Principles».
- **Traccia:** Spiegare centralità dello sviluppatore, allocazioni ridotte e TypeScript con type stripping.
- **Transizione:** Passare alla slide 22, «Integrated Serialization and Deserialization».

### 22. Integrated Serialization and Deserialization
- **Scopo:** Collegare DX, tipi, serializzazione e stream, attraverso «Integrated Serialization and Deserialization».
- **Traccia:** Collegare serializzatori tipizzati e riuso delle funzioni alle ottimizzazioni V8.
- **Transizione:** Passare alla slide 23, «One consuming semantic: Node.js Streams».

### 23. One consuming semantic: Node.js Streams
- **Scopo:** Collegare DX, tipi, serializzazione e stream, attraverso «One consuming semantic: Node.js Streams».
- **Traccia:** Unificare il consumo attorno agli stream e mostrare le diverse modalità di interazione.
- **Transizione:** Passare alla slide 24, «Benefits of Node.js Streams».

### 24. Benefits of Node.js Streams
- **Scopo:** Collegare DX, tipi, serializzazione e stream, attraverso «Benefits of Node.js Streams».
- **Traccia:** Spiegare backpressure, memoria e propagazione degli errori come vantaggi del modello stream.
- **Transizione:** Passare alla slide 25, «Every medal has two faces!».

### 25. Every medal has two faces!
- **Scopo:** Collegare DX, tipi, serializzazione e stream, attraverso «Every medal has two faces!».
- **Traccia:** Distinguere API esterna con promise/callback e implementazione interna a callback.
- **Transizione:** Passare alla slide 26, «Show the code!», aprendo la sezione «Codice e misure».

### 26. Show the code!
- **Scopo:** Segnare un passaggio nella sezione «Codice e misure».
- **Traccia:** Usare «Show the code!» come domanda o pausa visiva prima del prossimo passaggio. Seguire produzione, consumo e risultati.
- **Transizione:** Passare alla slide 27, «Producer API».

### 27. Producer API
- **Scopo:** Seguire produzione, consumo e risultati, attraverso «Producer API».
- **Traccia:** Seguire configurazione, serializzazione, send e chiusura. Lo snippet ha parentesi incongruenti: va corretto prima di usarlo dal vivo; acks senza risposta non conferma la persistenza sul broker.
- **Transizione:** Passare alla slide 28, «Consumer API».

### 28. Consumer API
- **Scopo:** Seguire produzione, consumo e risultati, attraverso «Consumer API».
- **Traccia:** Mostrare eventi e for-await come alternative, non come due consumatori da attivare insieme nello stesso esempio.
- **Transizione:** Passare alla slide 29, «What about performance?».

### 29. What about performance?
- **Scopo:** Segnare un passaggio nella sezione «Codice e misure».
- **Traccia:** Usare «What about performance?» come domanda o pausa visiva prima del prossimo passaggio. Seguire produzione, consumo e risultati.
- **Transizione:** Passare alla slide 30, «Producer API».

### 30. Producer API
- **Scopo:** Seguire produzione, consumo e risultati, attraverso «Producer API».
- **Traccia:** Leggere throughput, campioni e tolleranze del produttore prima di citare il distacco.
- **Transizione:** Passare alla slide 31, «Producer API».

### 31. Producer API
- **Scopo:** Seguire produzione, consumo e risultati, attraverso «Producer API».
- **Traccia:** Usare il grafico del produttore come visualizzazione degli stessi risultati.
- **Transizione:** Passare alla slide 32, «Consumer API».

### 32. Consumer API
- **Scopo:** Seguire produzione, consumo e risultati, attraverso «Consumer API».
- **Traccia:** Distinguere le modalità stream ed eventi nei risultati dei consumatori.
- **Transizione:** Passare alla slide 33, «Consumer API».

### 33. Consumer API
- **Scopo:** Seguire produzione, consumo e risultati, attraverso «Consumer API».
- **Traccia:** Confrontare il grafico dei consumatori con la tabella precedente.
- **Transizione:** Passare alla slide 34, «Paths are made by walking.», aprendo la sezione «Chiusura».

### 34. Paths are made by walking.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «Paths are made by walking.», attribuita nella slide a Franz Kafka. Collegarla al tema: Un client Kafka progettato per Node.js può unire protocollo, serializzazione e stream in un'esperienza più coerente e misurabile.
- **Transizione:** Passare alla slide 35, «End».

### 35. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://github.com/Blizzard/node-rdkafka>
- <https://kafka.js.org/>
- <https://github.com/platformatic/kafka>
- <https://github.com/platformatic/kafka](https://github.com/platformatic/kafka>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
