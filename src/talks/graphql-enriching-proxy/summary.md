# Don’t break GraphQL, extend it!

## Impostazione

Guida in italiano alla versione sorgente corrente: **40 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** Le estensioni previste da GraphQL permettono di aggiungere metadati senza alterare i campi richiesti dal client o violare il contratto della risposta.

**Contesto e crediti:** Il progetto graphql-enrich-proxy usa parsing, AST e visita della risposta della reference implementation GraphQL. Il talk distingue dati richiesti, informazioni temporanee sui tipi e arricchimenti in extensions.

## Struttura e ritmo

- **Slide 1–8 — GraphQL e contratti:** Motivare il bisogno di arricchimento.
- **Slide 9–16 — Vincoli dei client:** Spiegare perché non basta aggiungere campi alla risposta.
- **Slide 17–23 — Il proxy:** Seguire analisi, tipi temporanei e cache.
- **Slide 24–30 — Visita dei dati:** Associare arricchimenti ai nodi della risposta.
- **Slide 31–40 — Esempio completo:** Dimostrare la conservazione del contratto.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. Don’t break GraphQL, extend it!
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** Le estensioni previste da GraphQL permettono di aggiungere metadati senza alterare i campi richiesti dal client o violare il contratto della risposta.
- **Transizione:** Passare alla slide 2, «Being kind never hurts!».

### 2. Being kind never hurts!
- **Scopo:** Segnare un passaggio nella sezione «GraphQL e contratti».
- **Traccia:** Usare «Being kind never hurts!» come domanda o pausa visiva prima del prossimo passaggio. Motivare il bisogno di arricchimento.
- **Transizione:** Passare alla slide 3, «Hello».

### 3. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Passare alla slide 4, «Let's celebrate GraphQL!».

### 4. Let's celebrate GraphQL!
- **Scopo:** Motivare il bisogno di arricchimento, attraverso «Let's celebrate GraphQL!».
- **Traccia:** Riconoscere il valore di GraphQL prima di introdurre il problema.
- **Transizione:** Passare alla slide 5, «Why is it good?».

### 5. Why is it good?
- **Scopo:** Motivare il bisogno di arricchimento, attraverso «Why is it good?».
- **Traccia:** Distinguere selezione dei campi, aggregazione e federazione.
- **Transizione:** Passare alla slide 6, «Federation».

### 6. Federation
- **Scopo:** Motivare il bisogno di arricchimento, attraverso «Federation».
- **Traccia:** Descrivere subgraph e servizi; eventuali backend REST possono essere adattati tramite resolver, non federati direttamente come schema.
- **Transizione:** Passare alla slide 7, «Serialization».

### 7. Serialization
- **Scopo:** Motivare il bisogno di arricchimento, attraverso «Serialization».
- **Traccia:** Separare specifica GraphQL, rappresentazione JSON e trasporto HTTP.
- **Transizione:** Passare alla slide 8, «The server knows it better».

### 8. The server knows it better
- **Scopo:** Motivare il bisogno di arricchimento, attraverso «The server knows it better».
- **Traccia:** Il server può avere più informazioni di quelle chieste: porre il problema senza cambiare arbitrariamente data.
- **Transizione:** Passare alla slide 9, «How to be proactive?», aprendo la sezione «Vincoli dei client».

### 9. How to be proactive?
- **Scopo:** Segnare un passaggio nella sezione «Vincoli dei client».
- **Traccia:** Usare «How to be proactive?» come domanda o pausa visiva prima del prossimo passaggio. Spiegare perché non basta aggiungere campi alla risposta.
- **Transizione:** Passare alla slide 10, «Happy case: we control everything».

### 10. Happy case: we control everything
- **Scopo:** Spiegare perché non basta aggiungere campi alla risposta, attraverso «Happy case: we control everything».
- **Traccia:** Quando si controlla tutto, aggiornare schema e query in modo compatibile.
- **Transizione:** Passare alla slide 11, «Are we done?».

### 11. Are we done?
- **Scopo:** Segnare un passaggio nella sezione «Vincoli dei client».
- **Traccia:** Usare «Are we done?» come domanda o pausa visiva prima del prossimo passaggio. Spiegare perché non basta aggiungere campi alla risposta.
- **Transizione:** Passare alla slide 12, «You already know the answer...».

### 12. You already know the answer...
- **Scopo:** Segnare un passaggio nella sezione «Vincoli dei client».
- **Traccia:** Usare «You already know the answer...» come domanda o pausa visiva prima del prossimo passaggio. Spiegare perché non basta aggiungere campi alla risposta.
- **Transizione:** Passare alla slide 13, «The happy case is mostly theoretical».

### 13. The happy case is mostly theoretical
- **Scopo:** Spiegare perché non basta aggiungere campi alla risposta, attraverso «The happy case is mostly theoretical».
- **Traccia:** I client vecchi e gli aggiornamenti asincroni impediscono di assumere controllo end-to-end.
- **Transizione:** Passare alla slide 14, «BAD!».

### 14. BAD!
- **Scopo:** Spiegare perché non basta aggiungere campi alla risposta, attraverso «BAD!».
- **Traccia:** La provocazione segna il limite di una risposta che cambia il contratto dei campi richiesti. Sottotitolo da richiamare: «DON'T!».
- **Transizione:** Passare alla slide 15, «Do we have a choice?».

### 15. Do we have a choice?
- **Scopo:** Segnare un passaggio nella sezione «Vincoli dei client».
- **Traccia:** Usare «Do we have a choice?» come domanda o pausa visiva prima del prossimo passaggio. Spiegare perché non basta aggiungere campi alla risposta.
- **Transizione:** Passare alla slide 16, «Yes, let's make an enriching proxy!».

### 16. Yes, let's make an enriching proxy!
- **Scopo:** Segnare un passaggio nella sezione «Vincoli dei client».
- **Traccia:** Usare «Yes, let's make an enriching proxy!» come domanda o pausa visiva prima del prossimo passaggio. Seguire analisi, tipi temporanei e cache.
- **Transizione:** Passare alla slide 17, «Check it out!», aprendo la sezione «Il proxy».

### 17. Check it out!
- **Scopo:** Seguire analisi, tipi temporanei e cache, attraverso «Check it out!».
- **Traccia:** Presentare il repository e il riuso del parser GraphQL esistente.
- **Transizione:** Passare alla slide 18, «How it works».

### 18. How it works
- **Scopo:** Seguire analisi, tipi temporanei e cache, attraverso «How it works».
- **Traccia:** Seguire analisi, aggiunta temporanea dei tipi, esecuzione, visita e extensions.
- **Transizione:** Passare alla slide 19, «Meet GraphQL extensions».

### 19. Meet GraphQL extensions
- **Scopo:** Seguire analisi, tipi temporanei e cache, attraverso «Meet GraphQL extensions».
- **Traccia:** Extensions è lo spazio previsto per metadati aggiuntivi; preservare il contenuto di data.
- **Transizione:** Passare alla slide 20, «Overview».

### 20. Overview
- **Scopo:** Seguire analisi, tipi temporanei e cache, attraverso «Overview».
- **Traccia:** Leggere l'handler complessivo come mappa del percorso della richiesta.
- **Transizione:** Passare alla slide 21, «Leveraging types».

### 21. Leveraging types
- **Scopo:** Seguire analisi, tipi temporanei e cache, attraverso «Leveraging types».
- **Traccia:** Usare alias riconoscibili per i tipi temporanei e rimuoverli prima di rispondere.
- **Transizione:** Passare alla slide 22, «Ensuring type information».

### 22. Ensuring type information
- **Scopo:** Seguire analisi, tipi temporanei e cache, attraverso «Ensuring type information».
- **Traccia:** Seguire la trasformazione AST tramite visit.
- **Transizione:** Passare alla slide 23, «Cache the queries».

### 23. Cache the queries
- **Scopo:** Seguire analisi, tipi temporanei e cache, attraverso «Cache the queries».
- **Traccia:** Spiegare cache delle query originali e modificate; la durata e i limiti della cache vanno considerati nell'implementazione.
- **Transizione:** Passare alla slide 24, «Let me introduce two friends...», aprendo la sezione «Visita dei dati».

### 24. Let me introduce two friends...
- **Scopo:** Segnare un passaggio nella sezione «Visita dei dati».
- **Traccia:** Usare «Let me introduce two friends...» come domanda o pausa visiva prima del prossimo passaggio. Associare arricchimenti ai nodi della risposta.
- **Transizione:** Passare alla slide 25, «Depth first tree traversal».

### 25. Depth first tree traversal
- **Scopo:** Associare arricchimenti ai nodi della risposta, attraverso «Depth first tree traversal».
- **Traccia:** Mostrare una visita depth-first nell'albero originale.
- **Transizione:** Passare alla slide 26, «JSONPath».

### 26. JSONPath
- **Scopo:** Associare arricchimenti ai nodi della risposta, attraverso «JSONPath».
- **Traccia:** JSONPath identifica dove associare gli arricchimenti, distinguendo oggetti e array.
- **Transizione:** Passare alla slide 27, «... and now the show goes on!».

### 27. ... and now the show goes on!
- **Scopo:** Segnare un passaggio nella sezione «Visita dei dati».
- **Traccia:** Usare «... and now the show goes on!» come domanda o pausa visiva prima del prossimo passaggio. Associare arricchimenti ai nodi della risposta.
- **Transizione:** Passare alla slide 28, «Enrich the data».

### 28. Enrich the data
- **Scopo:** Associare arricchimenti ai nodi della risposta, attraverso «Enrich the data».
- **Traccia:** Invocare l'handler per nodo e registrare gli arricchimenti con il percorso corrispondente.
- **Transizione:** Passare alla slide 29, «Tree traversal».

### 29. Tree traversal
- **Scopo:** Associare arricchimenti ai nodi della risposta, attraverso «Tree traversal».
- **Traccia:** Seguire ricorsione, casi foglia e risalita della visita.
- **Transizione:** Passare alla slide 30, «Fetch additional data».

### 30. Fetch additional data
- **Scopo:** Associare arricchimenti ai nodi della risposta, attraverso «Fetch additional data».
- **Traccia:** Scegliere la fonte aggiuntiva in base a tipo e percorso del nodo.
- **Transizione:** Passare alla slide 31, «Only an example can enlighten us!», aprendo la sezione «Esempio completo».

### 31. Only an example can enlighten us!
- **Scopo:** Segnare un passaggio nella sezione «Esempio completo».
- **Traccia:** Usare «Only an example can enlighten us!» come domanda o pausa visiva prima del prossimo passaggio. Dimostrare la conservazione del contratto.
- **Transizione:** Passare alla slide 32, «Input query».

### 32. Input query
- **Scopo:** Dimostrare la conservazione del contratto, attraverso «Input query».
- **Traccia:** Leggere soltanto i campi richiesti dalla query del client.
- **Transizione:** Passare alla slide 33, «Query executed from the upstream».

### 33. Query executed from the upstream
- **Scopo:** Dimostrare la conservazione del contratto, attraverso «Query executed from the upstream».
- **Traccia:** Confrontare la query eseguita con l'originale, evidenziando gli alias temporanei.
- **Transizione:** Passare alla slide 34, «Upstream response».

### 34. Upstream response
- **Scopo:** Dimostrare la conservazione del contratto, attraverso «Upstream response».
- **Traccia:** Localizzare i tipi ausiliari nella risposta upstream.
- **Transizione:** Passare alla slide 35, «Proxy response (1/2)».

### 35. Proxy response (1/2)
- **Scopo:** Dimostrare la conservazione del contratto, attraverso «Proxy response (1/2)».
- **Traccia:** Verificare che data torni al contratto richiesto dal client.
- **Transizione:** Passare alla slide 36, «Proxy response (2/2)».

### 36. Proxy response (2/2)
- **Scopo:** Dimostrare la conservazione del contratto, attraverso «Proxy response (2/2)».
- **Traccia:** Mostrare gli arricchimenti in extensions e la loro associazione ai percorsi.
- **Transizione:** Passare alla slide 37, «Mission completed!».

### 37. Mission completed!
- **Scopo:** Segnare un passaggio nella sezione «Esempio completo».
- **Traccia:** Usare «Mission completed!» come domanda o pausa visiva prima del prossimo passaggio. Dimostrare la conservazione del contratto.
- **Transizione:** Passare alla slide 38, «Take home lessons».

### 38. Take home lessons
- **Scopo:** Dimostrare la conservazione del contratto, attraverso «Take home lessons».
- **Traccia:** Chiudere sul valore di leggere la specifica prima di introdurre eccezioni.
- **Transizione:** Passare alla slide 39, «You are remembered for the rules you break.».

### 39. You are remembered for the rules you break.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «You are remembered for the rules you break.», attribuita nella slide a Douglas MacArthur. Collegarla al tema: Le estensioni previste da GraphQL permettono di aggiungere metadati senza alterare i campi richiesti dal client o violare il contratto della risposta.
- **Transizione:** Passare alla slide 40, «End».

### 40. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://github.com/ShogunPanda/graphql-enrich-proxy>
- <https://github.com/ShogunPanda/graphql-enrich-proxy](https://github.com/ShogunPanda/graphql-enrich-proxy>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
