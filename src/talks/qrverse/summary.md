# Welcome to the QRverse: let's build a rendering service

## Impostazione

Guida in italiano alla versione sorgente corrente: **44 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** Comprendere la struttura dei QR code permette di costruire un servizio di rendering e tracciamento senza reinventare l'encoding.

**Contesto e crediti:** Il caso usa Watt/Platformatic, un servizio database, URL brevi e UI Preact. qrcode-generator calcola i moduli, il codice del talk li rende in SVG. Le capacità massime dipendono da versione, encoding e livello di correzione.

## Struttura e ritmo

- **Slide 1–11 — QR nella vita quotidiana:** Spiegare origine, capacità e resilienza.
- **Slide 12–20 — Anatomia:** Distinguere marker, metadati e dati.
- **Slide 21–30 — Servizio applicativo:** Collegare database, URL e frontend.
- **Slide 31–41 — Rendering:** Seguire helper, matrice dei moduli e SVG.
- **Slide 42–44 — Risorse e chiusura:** Invitare a usare il progetto.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. Welcome to the QRverse: let's build a rendering service
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** Comprendere la struttura dei QR code permette di costruire un servizio di rendering e tracciamento senza reinventare l'encoding.
- **Transizione:** Passare alla slide 2, «Phenomenal cosmic powers... Itty bitty living space.».

### 2. Phenomenal cosmic powers... Itty bitty living space.
- **Scopo:** Segnare un passaggio nella sezione «QR nella vita quotidiana».
- **Traccia:** Usare «Phenomenal cosmic powers... Itty bitty living space.» come domanda o pausa visiva prima del prossimo passaggio. Spiegare origine, capacità e resilienza.
- **Transizione:** Passare alla slide 3, «Hello».

### 3. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Presentare brevemente Platformatic nella slide 4.

### 4. Platformatic is used by
- **Scopo:** Presentare il contesto aziendale dopo il relatore.
- **Traccia:** Mostrare i loghi e i case study condivisi di Supabase e Spendesk, senza aggiungere metriche o affermazioni non confermate. Titolo e griglie provengono da `src/themes/main/theme.yml`.
- **Transizione:** Introdurre i QR code.

### 5. Have you ever heard of QR codes?
- **Scopo:** Segnare un passaggio nella sezione «QR nella vita quotidiana».
- **Traccia:** Usare «Have you ever heard of QR codes?» come domanda o pausa visiva prima del prossimo passaggio. Spiegare origine, capacità e resilienza.
- **Transizione:** Passare alla slide 6, «Yes, of course!».

### 6. Yes, of course!
- **Scopo:** Segnare un passaggio nella sezione «QR nella vita quotidiana».
- **Traccia:** Usare «Yes, of course!» come domanda o pausa visiva prima del prossimo passaggio. Spiegare origine, capacità e resilienza.
- **Transizione:** Passare alla slide 7, «They are everywhere».

### 7. They are everywhere
- **Scopo:** Spiegare origine, capacità e resilienza, attraverso «They are everywhere».
- **Traccia:** Capacità e semplicità d'uso dipendono dalle opzioni del simbolo, non da un numero unico universale.
- **Transizione:** Passare alla slide 8, «History of QR Codes».

### 8. History of QR Codes
- **Scopo:** Spiegare origine, capacità e resilienza, attraverso «History of QR Codes».
- **Traccia:** Riconoscere Denso Wave e la standardizzazione ISO 18004.
- **Transizione:** Passare alla slide 9, «Main characteristics».

### 9. Main characteristics
- **Scopo:** Spiegare origine, capacità e resilienza, attraverso «Main characteristics».
- **Traccia:** Distinguere dimensioni, modalità di encoding e correzione degli errori.
- **Transizione:** Passare alla slide 10, «QR Codes make our life way easier ...».

### 10. QR Codes make our life way easier ...
- **Scopo:** Segnare un passaggio nella sezione «QR nella vita quotidiana».
- **Traccia:** Usare «QR Codes make our life way easier ...» come domanda o pausa visiva prima del prossimo passaggio. Spiegare origine, capacità e resilienza.
- **Transizione:** Passare alla slide 11, «... sometimes in a weird way!».

### 11. ... sometimes in a weird way!
- **Scopo:** Segnare un passaggio nella sezione «QR nella vita quotidiana».
- **Traccia:** Usare «... sometimes in a weird way!» come domanda o pausa visiva prima del prossimo passaggio. Distinguere marker, metadati e dati.
- **Transizione:** Passare alla slide 12, «If we look closely...», aprendo la sezione «Anatomia».

### 12. If we look closely...
- **Scopo:** Segnare un passaggio nella sezione «Anatomia».
- **Traccia:** Usare «If we look closely...» come domanda o pausa visiva prima del prossimo passaggio. Distinguere marker, metadati e dati.
- **Transizione:** Passare alla slide 13, «Position markers (finders)».

### 13. Position markers (finders)
- **Scopo:** Distinguere marker, metadati e dati, attraverso «Position markers (finders)».
- **Traccia:** I tre finder localizzano il simbolo.
- **Transizione:** Passare alla slide 14, «Alignment markers».

### 14. Alignment markers
- **Scopo:** Distinguere marker, metadati e dati, attraverso «Alignment markers».
- **Traccia:** Gli alignment pattern aiutano a correggere distorsioni della griglia.
- **Transizione:** Passare alla slide 15, «Timing markers».

### 15. Timing markers
- **Scopo:** Distinguere marker, metadati e dati, attraverso «Timing markers».
- **Traccia:** I timing pattern aiutano a ricostruire la dimensione dei moduli.
- **Transizione:** Passare alla slide 16, «Version information».

### 16. Version information
- **Scopo:** Distinguere marker, metadati e dati, attraverso «Version information».
- **Traccia:** La versione determina la dimensione del simbolo; mostrare dove appare l'informazione.
- **Transizione:** Passare alla slide 17, «Format information».

### 17. Format information
- **Scopo:** Distinguere marker, metadati e dati, attraverso «Format information».
- **Traccia:** Le informazioni di formato identificano livello di correzione e maschera, non direttamente il testo codificato.
- **Transizione:** Passare alla slide 18, «Data and Error correction».

### 18. Data and Error correction
- **Scopo:** Distinguere marker, metadati e dati, attraverso «Data and Error correction».
- **Traccia:** Dati e ridondanza occupano la parte restante secondo l'ordine previsto.
- **Transizione:** Passare alla slide 19, «Quiet zone».

### 19. Quiet zone
- **Scopo:** Distinguere marker, metadati e dati, attraverso «Quiet zone».
- **Traccia:** La quiet zone separa il codice dal contesto e ne aiuta la lettura.
- **Transizione:** Passare alla slide 20, «The best path might not be the straight one».

### 20. The best path might not be the straight one
- **Scopo:** Distinguere marker, metadati e dati, attraverso «The best path might not be the straight one».
- **Traccia:** Seguire il percorso a colonne evitando i moduli riservati.
- **Transizione:** Passare alla slide 21, «Can we get to the practice please?», aprendo la sezione «Servizio applicativo».

### 21. Can we get to the practice please?
- **Scopo:** Segnare un passaggio nella sezione «Servizio applicativo».
- **Traccia:** Usare «Can we get to the practice please?» come domanda o pausa visiva prima del prossimo passaggio. Collegare database, URL e frontend.
- **Transizione:** Passare alla slide 22, «Let's build a QR rendering service».

### 22. Let's build a QR rendering service
- **Scopo:** Collegare database, URL e frontend, attraverso «Let's build a QR rendering service».
- **Traccia:** Separare calcolo del QR e rendering; il servizio usa una libreria per il primo.
- **Transizione:** Passare alla slide 23, «Let's go!».

### 23. Let's go!
- **Scopo:** Segnare un passaggio nella sezione «Servizio applicativo».
- **Traccia:** Usare «Let's go!» come domanda o pausa visiva prima del prossimo passaggio. Collegare database, URL e frontend.
- **Transizione:** Passare alla slide 24, «Create the skeleton».

### 24. Create the skeleton
- **Scopo:** Collegare database, URL e frontend, attraverso «Create the skeleton».
- **Traccia:** Mostrare lo scaffolding Platformatic della versione usata.
- **Transizione:** Passare alla slide 25, «Database service - Create a migration».

### 25. Database service - Create a migration
- **Scopo:** Collegare database, URL e frontend, attraverso «Database service - Create a migration».
- **Traccia:** Leggere migrazione e schema per URL e statistiche.
- **Transizione:** Passare alla slide 26, «Database service - Track our clicks».

### 26. Database service - Track our clicks
- **Scopo:** Collegare database, URL e frontend, attraverso «Database service - Track our clicks».
- **Traccia:** Seguire la registrazione dei click nel servizio database.
- **Transizione:** Passare alla slide 27, «URL service - Shorten a URL».

### 27. URL service - Shorten a URL
- **Scopo:** Collegare database, URL e frontend, attraverso «URL service - Shorten a URL».
- **Traccia:** Creare e restituire l'URL breve.
- **Transizione:** Passare alla slide 28, «URL service - Track clicks».

### 28. URL service - Track clicks
- **Scopo:** Collegare database, URL e frontend, attraverso «URL service - Track clicks».
- **Traccia:** Collegare redirezione e registrazione del click.
- **Transizione:** Passare alla slide 29, «URL service - Get all stats».

### 29. URL service - Get all stats
- **Scopo:** Collegare database, URL e frontend, attraverso «URL service - Get all stats».
- **Traccia:** Esporre le statistiche tramite l'endpoint mostrato.
- **Transizione:** Passare alla slide 30, «Frontend - Add a rendering UI».

### 30. Frontend - Add a rendering UI
- **Scopo:** Collegare database, URL e frontend, attraverso «Frontend - Add a rendering UI».
- **Traccia:** Preact senza JSX evita la transpilation dell'esempio UI.
- **Transizione:** Passare alla slide 31, «Where are the QR codes?», aprendo la sezione «Rendering».

### 31. Where are the QR codes?
- **Scopo:** Segnare un passaggio nella sezione «Rendering».
- **Traccia:** Usare «Where are the QR codes?» come domanda o pausa visiva prima del prossimo passaggio. Seguire helper, matrice dei moduli e SVG.
- **Transizione:** Passare alla slide 32, «Let's dive in!».

### 32. Let's dive in!
- **Scopo:** Segnare un passaggio nella sezione «Rendering».
- **Traccia:** Usare «Let's dive in!» come domanda o pausa visiva prima del prossimo passaggio. Seguire helper, matrice dei moduli e SVG.
- **Transizione:** Passare alla slide 33, «QR service - Some helpers (1/4)».

### 33. QR service - Some helpers (1/4)
- **Scopo:** Seguire helper, matrice dei moduli e SVG, attraverso «QR service - Some helpers (1/4)».
- **Traccia:** Introdurre il primo helper e il sistema di coordinate.
- **Transizione:** Passare alla slide 34, «QR service - Some helpers (2/4)».

### 34. QR service - Some helpers (2/4)
- **Scopo:** Seguire helper, matrice dei moduli e SVG, attraverso «QR service - Some helpers (2/4)».
- **Traccia:** Seguire il secondo helper di rendering.
- **Transizione:** Passare alla slide 35, «QR service - Some helpers (3/4)».

### 35. QR service - Some helpers (3/4)
- **Scopo:** Seguire helper, matrice dei moduli e SVG, attraverso «QR service - Some helpers (3/4)».
- **Traccia:** Collegare il terzo helper alla costruzione delle forme.
- **Transizione:** Passare alla slide 36, «QR service - Some helpers (4/4)».

### 36. QR service - Some helpers (4/4)
- **Scopo:** Seguire helper, matrice dei moduli e SVG, attraverso «QR service - Some helpers (4/4)».
- **Traccia:** Mostrare l'ultimo helper e dichiarare che finder e alignment completi sono omessi per brevità.
- **Transizione:** Passare alla slide 37, «QR service - Service skeleton».

### 37. QR service - Service skeleton
- **Scopo:** Seguire helper, matrice dei moduli e SVG, attraverso «QR service - Service skeleton».
- **Traccia:** Definire lo scheletro del servizio e il punto di ingresso del rendering.
- **Transizione:** Passare alla slide 38, «QR service - Compute modules».

### 38. QR service - Compute modules
- **Scopo:** Seguire helper, matrice dei moduli e SVG, attraverso «QR service - Compute modules».
- **Traccia:** Attribuire a qrcode-generator il calcolo della matrice dei moduli.
- **Transizione:** Passare alla slide 39, «QR service - Draw regular modules».

### 39. QR service - Draw regular modules
- **Scopo:** Seguire helper, matrice dei moduli e SVG, attraverso «QR service - Draw regular modules».
- **Traccia:** Disegnare i moduli ordinari senza sovrapporsi alle aree riservate.
- **Transizione:** Passare alla slide 40, «QR service - Draw other elements».

### 40. QR service - Draw other elements
- **Scopo:** Seguire helper, matrice dei moduli e SVG, attraverso «QR service - Draw other elements».
- **Traccia:** Aggiungere i componenti speciali mantenendo leggibilità e quiet zone.
- **Transizione:** Passare alla slide 41, «QR service - Return the SVG».

### 41. QR service - Return the SVG
- **Scopo:** Seguire helper, matrice dei moduli e SVG, attraverso «QR service - Return the SVG».
- **Traccia:** Restituire l'SVG con il tipo di contenuto corretto.
- **Transizione:** Passare alla slide 42, «Check it out!», aprendo la sezione «Risorse e chiusura».

### 42. Check it out!
- **Scopo:** Invitare a usare il progetto, attraverso «Check it out!».
- **Traccia:** Lasciare il repository con l'implementazione completa.
- **Transizione:** Passare alla slide 43, «Sharing is good, and with digital technology, sharing is easy.».

### 43. Sharing is good, and with digital technology, sharing is easy.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «Sharing is good, and with digital technology, sharing is easy.», attribuita nella slide a Richard Stallman. Collegarla al tema: Comprendere la struttura dei QR code permette di costruire un servizio di rendering e tracciamento senza reinventare l'encoding.
- **Transizione:** Passare alla slide 44, «End».

### 44. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://preactjs.com/guide/v10/getting-started#alternatives-to-jsx>
- <https://www.npmjs.com/package/qrcode-generator>
- <https://github.com/ShogunPanda/plt-qr-rendering>
- <https://github.com/ShogunPanda/plt-qr-rendering](https://github.com/ShogunPanda/plt-qr-rendering>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
