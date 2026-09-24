# Horizontal Scaling of a Web3 system to the sky and beyond in AWS

## Impostazione

Guida in italiano alla versione sorgente corrente: **47 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** Separare indicizzazione, pubblicazione e servizio dei blocchi permette di scalare il caso web3.storage senza replicare tutta la complessità di un nodo IPFS tradizionale.

**Contesto e crediti:** Talk archiviato su Elastic IPFS e la sua prima implementazione AWS. Il racconto comprende assunzioni specifiche, uso di S3, SQS, Lambda, DynamoDB ed EKS; la promessa di crescita va interpretata entro quote e colli di bottiglia reali.

## Struttura e ritmo

- **Slide 1–12 — Problema e obiettivi:** Motivare il disaccoppiamento dalla crescita del servizio.
- **Slide 13–18 — Architettura e dati:** Spiegare CID, CAR e indici.
- **Slide 19–22 — Indicizzazione:** Seguire il caricamento fino agli indici.
- **Slide 23–32 — Rete e annunci:** Spiegare come il contenuto diventa reperibile.
- **Slide 33–40 — Pubblicazione e servizio:** Gestire ordine degli annunci e accesso ai blocchi.
- **Slide 41–47 — Risultati:** Interpretare misure e assunzioni del caso storico.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. Horizontal Scaling of a Web3 system to the sky and beyond in AWS
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** Separare indicizzazione, pubblicazione e servizio dei blocchi permette di scalare il caso web3.storage senza replicare tutta la complessità di un nodo IPFS tradizionale.
- **Transizione:** Passare alla slide 2, «All you need to succeed is love!».

### 2. All you need to succeed is love!
- **Scopo:** Segnare un passaggio nella sezione «Problema e obiettivi».
- **Traccia:** Usare «All you need to succeed is love!» come domanda o pausa visiva prima del prossimo passaggio. Motivare il disaccoppiamento dalla crescita del servizio.
- **Transizione:** Passare alla slide 3, «Hello».

### 3. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Passare alla slide 4, «IPFS (InterPlanetary FileSystem)».

### 4. IPFS (InterPlanetary FileSystem)
- **Scopo:** Motivare il disaccoppiamento dalla crescita del servizio, attraverso «IPFS (InterPlanetary FileSystem)».
- **Traccia:** Definire IPFS in termini di contenuto e reperibilità distribuita.
- **Transizione:** Passare alla slide 5, «web3.storage».

### 5. web3.storage
- **Scopo:** Motivare il disaccoppiamento dalla crescita del servizio, attraverso «web3.storage».
- **Traccia:** Presentare web3.storage come interfaccia più accessibile al sistema.
- **Transizione:** Passare alla slide 6, «Content Identifier».

### 6. Content Identifier
- **Scopo:** Motivare il disaccoppiamento dalla crescita del servizio, attraverso «Content Identifier».
- **Traccia:** Un CID identifica e permette di verificare il contenuto, ma non ne contiene la posizione.
- **Transizione:** Passare alla slide 7, «Content Archives».

### 7. Content Archives
- **Scopo:** Motivare il disaccoppiamento dalla crescita del servizio, attraverso «Content Archives».
- **Traccia:** Leggere un CAR come sequenza di blocchi con prefissi di lunghezza.
- **Transizione:** Passare alla slide 8, «What was wrong?».

### 8. What was wrong?
- **Scopo:** Segnare un passaggio nella sezione «Problema e obiettivi».
- **Traccia:** Usare «What was wrong?» come domanda o pausa visiva prima del prossimo passaggio. Motivare il disaccoppiamento dalla crescita del servizio.
- **Transizione:** Passare alla slide 9, «Previous Challenges».

### 9. Previous Challenges
- **Scopo:** Motivare il disaccoppiamento dalla crescita del servizio, attraverso «Previous Challenges».
- **Traccia:** Collegare crescita degli upload e lentezza del bootstrap alla difficoltà di scalare.
- **Transizione:** Passare alla slide 10, «What was the problem?».

### 10. What was the problem?
- **Scopo:** Segnare un passaggio nella sezione «Problema e obiettivi».
- **Traccia:** Usare «What was the problem?» come domanda o pausa visiva prima del prossimo passaggio. Motivare il disaccoppiamento dalla crescita del servizio.
- **Transizione:** Passare alla slide 11, «One simple question».

### 11. One simple question
- **Scopo:** Motivare il disaccoppiamento dalla crescita del servizio, attraverso «One simple question».
- **Traccia:** Usare la domanda citata per mettere in discussione le assunzioni dell'architettura iniziale.
- **Transizione:** Passare alla slide 12, «Goals».

### 12. Goals
- **Scopo:** Motivare il disaccoppiamento dalla crescita del servizio, attraverso «Goals».
- **Traccia:** Fissare crescita, servizi stateless e costo operativo come obiettivi.
- **Transizione:** Passare alla slide 13, «The solution», aprendo la sezione «Architettura e dati».

### 13. The solution
- **Scopo:** Segnare un passaggio nella sezione «Architettura e dati».
- **Traccia:** Usare «The solution» come domanda o pausa visiva prima del prossimo passaggio. Spiegare CID, CAR e indici.
- **Transizione:** Passare alla slide 14, «Hi, I'm Elastic IPFS!».

### 14. Hi, I'm Elastic IPFS!
- **Scopo:** Spiegare CID, CAR e indici, attraverso «Hi, I'm Elastic IPFS!».
- **Traccia:** Presentare i tre sottosistemi indipendenti e il repository.
- **Transizione:** Passare alla slide 15, «E-IPFS is democratic and cloud agnostic».

### 15. E-IPFS is democratic and cloud agnostic
- **Scopo:** Spiegare CID, CAR e indici, attraverso «E-IPFS is democratic and cloud agnostic».
- **Traccia:** Distinguere l'implementazione AWS dalle primitive di storage e coda richieste dal modello.
- **Transizione:** Passare alla slide 16, «CARs Table Item».

### 16. CARs Table Item
- **Scopo:** Spiegare CID, CAR e indici, attraverso «CARs Table Item».
- **Traccia:** La tabella CAR registra il contenitore e il suo percorso S3.
- **Transizione:** Passare alla slide 17, «Blocks Tables Item».

### 17. Blocks Tables Item
- **Scopo:** Spiegare CID, CAR e indici, attraverso «Blocks Tables Item».
- **Traccia:** La tabella dei blocchi conserva multihash e tipo per identificazione e diagnostica.
- **Transizione:** Passare alla slide 18, «Blocks Position Item».

### 18. Blocks Position Item
- **Scopo:** Spiegare CID, CAR e indici, attraverso «Blocks Position Item».
- **Traccia:** L'indice di posizione collega blocco, CAR, offset e lunghezza: è la chiave dell'accesso selettivo.
- **Transizione:** Passare alla slide 19, «Indexing subsystem», aprendo la sezione «Indicizzazione».

### 19. Indexing subsystem
- **Scopo:** Segnare un passaggio nella sezione «Indicizzazione».
- **Traccia:** Usare «Indexing subsystem» come domanda o pausa visiva prima del prossimo passaggio. Seguire il caricamento fino agli indici.
- **Transizione:** Passare alla slide 20, «Overview».

### 20. Overview
- **Scopo:** Seguire il caricamento fino agli indici, attraverso «Overview».
- **Traccia:** Percorrere il diagramma di indexing prima dei dettagli operativi.
- **Transizione:** Passare alla slide 21, «Indexing flow».

### 21. Indexing flow
- **Scopo:** Seguire il caricamento fino agli indici, attraverso «Indexing flow».
- **Traccia:** Seguire copia in S3, evento SQS, Lambda e scrittura degli indici.
- **Transizione:** Passare alla slide 22, «Bye, Idempotence!».

### 22. Bye, Idempotence!
- **Scopo:** Seguire il caricamento fino agli indici, attraverso «Bye, Idempotence!».
- **Traccia:** Raccontare il compromesso storico sull'idempotenza senza generalizzare che gli eventi cloud non vengano duplicati.
- **Transizione:** Passare alla slide 23, «Let's talk about DHT», aprendo la sezione «Rete e annunci».

### 23. Let's talk about DHT
- **Scopo:** Segnare un passaggio nella sezione «Rete e annunci».
- **Traccia:** Usare «Let's talk about DHT» come domanda o pausa visiva prima del prossimo passaggio. Spiegare come il contenuto diventa reperibile.
- **Transizione:** Passare alla slide 24, «DHT Challenges».

### 24. DHT Challenges
- **Scopo:** Spiegare come il contenuto diventa reperibile, attraverso «DHT Challenges».
- **Traccia:** Un solo PeerID logico e componenti effimeri richiedono una strategia specifica di annuncio.
- **Transizione:** Passare alla slide 25, «Hydra Nodes».

### 25. Hydra Nodes
- **Scopo:** Spiegare come il contenuto diventa reperibile, attraverso «Hydra Nodes».
- **Traccia:** Distinguere distribuzione nella DHT e distribuzione geografica dei nodi Hydra.
- **Transizione:** Passare alla slide 26, «Indexer Nodes».

### 26. Indexer Nodes
- **Scopo:** Spiegare come il contenuto diventa reperibile, attraverso «Indexer Nodes».
- **Traccia:** Gli indexer mappano CID a provider e offrono interfacce di ricerca e ingestione.
- **Transizione:** Passare alla slide 27, «What API shall we use?».

### 27. What API shall we use?
- **Scopo:** Spiegare come il contenuto diventa reperibile, attraverso «What API shall we use?».
- **Traccia:** Motivare HTTP con durata delle connessioni, costi e vincoli libp2p del caso.
- **Transizione:** Passare alla slide 28, «How does HTTP ingestion work?».

### 28. How does HTTP ingestion work?
- **Scopo:** Spiegare come il contenuto diventa reperibile, attraverso «How does HTTP ingestion work?».
- **Traccia:** Pubblicare entries e advertisement, aggiornare head e notificare l'indexer.
- **Transizione:** Passare alla slide 29, «What will the Indexer Node do?».

### 29. What will the Indexer Node do?
- **Scopo:** Spiegare come il contenuto diventa reperibile, attraverso «What will the Indexer Node do?».
- **Traccia:** L'indexer segue gli annunci a ritroso fino a un punto già noto.
- **Transizione:** Passare alla slide 30, «Head file».

### 30. Head file
- **Scopo:** Spiegare come il contenuto diventa reperibile, attraverso «Head file».
- **Traccia:** Mostrare il riferimento all'ultimo annuncio nel file head.
- **Transizione:** Passare alla slide 31, «Advertisement file».

### 31. Advertisement file
- **Scopo:** Spiegare come il contenuto diventa reperibile, attraverso «Advertisement file».
- **Traccia:** Leggere provider e collegamenti ai dati dell'advertisement.
- **Transizione:** Passare alla slide 32, «Entries file».

### 32. Entries file
- **Scopo:** Spiegare come il contenuto diventa reperibile, attraverso «Entries file».
- **Traccia:** Le entries elencano i contenuti annunciati dal provider.
- **Transizione:** Passare alla slide 33, «Publishing subsystem», aprendo la sezione «Pubblicazione e servizio».

### 33. Publishing subsystem
- **Scopo:** Segnare un passaggio nella sezione «Pubblicazione e servizio».
- **Traccia:** Usare «Publishing subsystem» come domanda o pausa visiva prima del prossimo passaggio. Gestire ordine degli annunci e accesso ai blocchi.
- **Transizione:** Passare alla slide 34, «Overview».

### 34. Overview
- **Scopo:** Gestire ordine degli annunci e accesso ai blocchi, attraverso «Overview».
- **Traccia:** Usare il diagramma per separare preparazione parallela e pubblicazione ordinata.
- **Transizione:** Passare alla slide 35, «Concurrency Problem».

### 35. Concurrency Problem
- **Scopo:** Gestire ordine degli annunci e accesso ai blocchi, attraverso «Concurrency Problem».
- **Traccia:** Non perdere annunci e aggiornare atomicamente head sono requisiti più importanti del solo throughput.
- **Transizione:** Passare alla slide 36, «What now?».

### 36. What now?
- **Scopo:** Segnare un passaggio nella sezione «Pubblicazione e servizio».
- **Traccia:** Usare «What now?» come domanda o pausa visiva prima del prossimo passaggio. Gestire ordine degli annunci e accesso ai blocchi.
- **Transizione:** Passare alla slide 37, «Publishing flow».

### 37. Publishing flow
- **Scopo:** Gestire ordine degli annunci e accesso ai blocchi, attraverso «Publishing flow».
- **Traccia:** Parallelizzare la costruzione delle entries e serializzare la fase che modifica la catena degli annunci.
- **Transizione:** Passare alla slide 38, «Peer subsystem».

### 38. Peer subsystem
- **Scopo:** Segnare un passaggio nella sezione «Pubblicazione e servizio».
- **Traccia:** Usare «Peer subsystem» come domanda o pausa visiva prima del prossimo passaggio. Gestire ordine degli annunci e accesso ai blocchi.
- **Transizione:** Passare alla slide 39, «Overview».

### 39. Overview
- **Scopo:** Gestire ordine degli annunci e accesso ai blocchi, attraverso «Overview».
- **Traccia:** Seguire richiesta del peer, lookup dell'indice e lettura del blocco.
- **Transizione:** Passare alla slide 40, «Peer subsystem characteristic».

### 40. Peer subsystem characteristic
- **Scopo:** Gestire ordine degli annunci e accesso ai blocchi, attraverso «Peer subsystem characteristic».
- **Traccia:** EKS serve blocchi via indice DynamoDB e richieste S3 Byte-Range; il sottoinsieme BitSwap dipende dal caso d'uso.
- **Transizione:** Passare alla slide 41, «How does E-IPFS perform?», aprendo la sezione «Risultati».

### 41. How does E-IPFS perform?
- **Scopo:** Segnare un passaggio nella sezione «Risultati».
- **Traccia:** Usare «How does E-IPFS perform?» come domanda o pausa visiva prima del prossimo passaggio. Interpretare misure e assunzioni del caso storico.
- **Transizione:** Passare alla slide 42, «Hit rate went almost to 100%».

### 42. Hit rate went almost to 100%
- **Scopo:** Interpretare misure e assunzioni del caso storico, attraverso «Hit rate went almost to 100%».
- **Traccia:** Leggere l'hit rate sui 200 TB del grafico come risultato di quel sistema.
- **Transizione:** Passare alla slide 43, «The average indexing time has dropped».

### 43. The average indexing time has dropped
- **Scopo:** Interpretare misure e assunzioni del caso storico, attraverso «The average indexing time has dropped».
- **Traccia:** Confrontare i tempi di indexing riportati senza inventare valori mancanti.
- **Transizione:** Passare alla slide 44, «Give me the numbers!».

### 44. Give me the numbers!
- **Scopo:** Interpretare misure e assunzioni del caso storico, attraverso «Give me the numbers!».
- **Traccia:** Distinguere conteggio CAR, blocchi e associazioni fra blocchi e contenitori.
- **Transizione:** Passare alla slide 45, «Take home lessons».

### 45. Take home lessons
- **Scopo:** Interpretare misure e assunzioni del caso storico, attraverso «Take home lessons».
- **Traccia:** Riassumere semplificazione, utilità di HTTP e portabilità delle primitive.
- **Transizione:** Passare alla slide 46, «Keep your eyes on the stars, and your feet on the ground.».

### 46. Keep your eyes on the stars, and your feet on the ground.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «Keep your eyes on the stars, and your feet on the ground.», attribuita nella slide a Theodore Roosevelt. Collegarla al tema: Separare indicizzazione, pubblicazione e servizio dei blocchi permette di scalare il caso web3.storage senza replicare tutta la complessità di un nodo IPFS tradizionale.
- **Transizione:** Passare alla slide 47, «End».

### 47. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://github.com/elastic-ipfs/elastic-ipfs>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
