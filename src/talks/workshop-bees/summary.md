# Workshop: The bees are important: use SDKs wisely

## Impostazione

Guida in italiano alla versione sorgente corrente: **14 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** Implementare un upload S3 con HTTP e Signature V4 permette di capire concretamente ciò che un SDK automatizza.

**Contesto e crediti:** Workshop collegato al talk bees con cinque esercizi progressivi e repository finale. Servono un ambiente Node.js e risorse AWS concordate dall'organizzatore; credenziali e costi dell'esercitazione non sono forniti dal deck.

## Struttura e ritmo

- **Slide 1–4 — Introduzione e documentazione:** Preparare il contesto e le fonti AWS.
- **Slide 5–7 — Ambiente:** Leggere setup e scheletro prima di iniziare.
- **Slide 8–12 — Cinque esercizi:** Costruire firma e richiesta passo dopo passo.
- **Slide 13–14 — Risorse finali:** Lasciare il codice per proseguire.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Non equiparare il numero delle slide al tempo necessario ai partecipanti per completare gli esercizi.

## Traccia slide per slide

### 1. Workshop: The bees are important: use SDKs wisely
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** Implementare un upload S3 con HTTP e Signature V4 permette di capire concretamente ciò che un SDK automatizza.
- **Transizione:** Passare alla slide 2, «Hello».

### 2. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Passare alla slide 3, «What are we talking about?».

### 3. What are we talking about?
- **Scopo:** Preparare il contesto e le fonti AWS, attraverso «What are we talking about?».
- **Traccia:** Usare il QR verso bees per l'introduzione ai compromessi SDK, senza ripetere tutto il talk.
- **Transizione:** Passare alla slide 4, «The details lie in the documentation».

### 4. The details lie in the documentation
- **Scopo:** Preparare il contesto e le fonti AWS, attraverso «The details lie in the documentation».
- **Traccia:** Aprire PutObject e la documentazione Signature V4 come fonti del lavoro.
- **Transizione:** Passare alla slide 5, «Let's get to the action!», aprendo la sezione «Ambiente».

### 5. Let's get to the action!
- **Scopo:** Segnare un passaggio nella sezione «Ambiente».
- **Traccia:** Usare «Let's get to the action!» come domanda o pausa visiva prima del prossimo passaggio. Leggere setup e scheletro prima di iniziare.
- **Transizione:** Passare alla slide 6, «Setup».

### 6. Setup
- **Scopo:** Leggere setup e scheletro prima di iniziare, attraverso «Setup».
- **Traccia:** Preparare il progetto e verificare la disponibilità delle API Node.js richieste.
- **Transizione:** Passare alla slide 7, «The skeleton».

### 7. The skeleton
- **Scopo:** Leggere setup e scheletro prima di iniziare, attraverso «The skeleton».
- **Traccia:** Leggere lo scheletro e identificare i punti da completare nei cinque esercizi.
- **Transizione:** Passare alla slide 8, «Task 1: Create a Canonical Request», aprendo la sezione «Cinque esercizi».

### 8. Task 1: Create a Canonical Request
- **Scopo:** Costruire firma e richiesta passo dopo passo, attraverso «Task 1: Create a Canonical Request».
- **Traccia:** Far costruire la CanonicalRequest, verificando metodo, URI, query, header firmati e hash del payload. Sottotitolo da richiamare: «Enjoy! 😈».
- **Transizione:** Passare alla slide 9, «Task 2: Create a String to Sign».

### 9. Task 2: Create a String to Sign
- **Scopo:** Costruire firma e richiesta passo dopo passo, attraverso «Task 2: Create a String to Sign».
- **Traccia:** Costruire la StringToSign con algoritmo, timestamp, scope e hash della richiesta canonica. Sottotitolo da richiamare: «Enjoy! 😂».
- **Transizione:** Passare alla slide 10, «Task 3: Calculate Signature».

### 10. Task 3: Calculate Signature
- **Scopo:** Costruire firma e richiesta passo dopo passo, attraverso «Task 3: Calculate Signature».
- **Traccia:** Derivare la chiave con HMAC e calcolare la firma; usare credenziali di esercizio senza pubblicarle. Sottotitolo da richiamare: «Enjoy! 😶».
- **Transizione:** Passare alla slide 11, «Task 4: REST API call».

### 11. Task 4: REST API call
- **Scopo:** Costruire firma e richiesta passo dopo passo, attraverso «Task 4: REST API call».
- **Traccia:** Eseguire PutObject con gli stessi dati e header usati nella firma, poi leggere la risposta. Sottotitolo da richiamare: «Enjoy! 😎».
- **Transizione:** Passare alla slide 12, «Task 5: Main function».

### 12. Task 5: Main function
- **Scopo:** Costruire firma e richiesta passo dopo passo, attraverso «Task 5: Main function».
- **Traccia:** Collegare i passaggi nella funzione principale e provare l'upload con un piccolo file. Sottotitolo da richiamare: «Enjoy! 🍺».
- **Transizione:** Passare alla slide 13, «Take home», aprendo la sezione «Risorse finali».

### 13. Take home
- **Scopo:** Lasciare il codice per proseguire, attraverso «Take home».
- **Traccia:** Lasciare il repository delle soluzioni e discutere quali responsabilità restano al codice manuale.
- **Transizione:** Passare alla slide 14, «End».

### 14. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://talks.paoloinsogna.dev/bees>
- <https://talks.paoloinsogna.dev/bees](https://talks.paoloinsogna.dev/bees>
- <https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html>
- <https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-header-based-auth.html>
- <https://github.com/ShogunPanda/workshops-bees>
- <https://github.com/ShogunPanda/workshops-bees](https://github.com/ShogunPanda/workshops-bees>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
