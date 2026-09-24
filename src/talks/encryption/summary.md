# Maths or magic? End-to-end encryption explained with art

## Impostazione

Guida in italiano alla versione sorgente corrente: **36 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** La metafora dei colori rende intuitivo lo scambio di un segreto su un canale pubblico; la matematica chiarisce poi cosa protegge davvero la comunicazione.

**Contesto e crediti:** Talk interattivo originariamente di Michele Riva. Cesare introduce la cifratura, AES la chiave simmetrica e Diffie-Hellman l'accordo su un segreto. La miscela di colori è una metafora; Diffie-Hellman da solo non autentica gli interlocutori e non impedisce un attacco man-in-the-middle.

## Struttura e ritmo

- **Slide 1–8 — Motivazione e definizione:** Introdurre la riservatezza con il pubblico.
- **Slide 9–19 — Cifrario di Cesare:** Distinguere oscurità e sicurezza.
- **Slide 20–24 — Chiavi condivise:** Motivare l'accordo su un segreto.
- **Slide 25–28 — Esperimento con colori:** Rendere intuitivo lo scambio pubblico.
- **Slide 29–36 — Matematica e chiusura:** Collegare la metafora all'algoritmo.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. Maths or magic? End-to-end encryption explained with art
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** La metafora dei colori rende intuitivo lo scambio di un segreto su un canale pubblico; la matematica chiarisce poi cosa protegge davvero la comunicazione.
- **Transizione:** Passare alla slide 2, «Encrypting is like painting!».

### 2. Encrypting is like painting!
- **Scopo:** Segnare un passaggio nella sezione «Motivazione e definizione».
- **Traccia:** Usare «Encrypting is like painting!» come domanda o pausa visiva prima del prossimo passaggio. Introdurre la riservatezza con il pubblico.
- **Transizione:** Passare alla slide 3, «Hello».

### 3. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Passare alla slide 4, «First of all, let's give credits!».

### 4. First of all, let's give credits!
- **Scopo:** Introdurre la riservatezza con il pubblico, attraverso «First of all, let's give credits!».
- **Traccia:** Riconoscere Michele Riva come autore originale.
- **Transizione:** Passare alla slide 5, «Why do we need end-to-end encryption?».

### 5. Why do we need end-to-end encryption?
- **Scopo:** Introdurre la riservatezza con il pubblico, attraverso «Why do we need end-to-end encryption?».
- **Traccia:** Mostrare che la comunicazione attraversa componenti fuori dal controllo delle estremità.
- **Transizione:** Passare alla slide 6, «Let's send a message ...».

### 6. Let's send a message ...
- **Scopo:** Introdurre la riservatezza con il pubblico, attraverso «Let's send a message ...».
- **Traccia:** Chiedere al pubblico di partecipare al passaggio del messaggio, chiarendo le istruzioni del gioco.
- **Transizione:** Passare alla slide 7, «That was not an encrypted channel!».

### 7. That was not an encrypted channel!
- **Scopo:** Introdurre la riservatezza con il pubblico, attraverso «That was not an encrypted channel!».
- **Traccia:** Far notare cosa è stato visibile durante il passaggio non protetto.
- **Transizione:** Passare alla slide 8, «What is encryption anyway?».

### 8. What is encryption anyway?
- **Scopo:** Introdurre la riservatezza con il pubblico, attraverso «What is encryption anyway?».
- **Traccia:** Leggere la definizione e distinguere trasformazione del messaggio e controllo dell'accesso.
- **Transizione:** Passare alla slide 9, «An example: The Caesar Cipher», aprendo la sezione «Cifrario di Cesare».

### 9. An example: The Caesar Cipher
- **Scopo:** Segnare un passaggio nella sezione «Cifrario di Cesare».
- **Traccia:** Usare «An example: The Caesar Cipher» come domanda o pausa visiva prima del prossimo passaggio. Distinguere oscurità e sicurezza.
- **Transizione:** Passare alla slide 10, «How does the Caesar Cipher work?».

### 10. How does the Caesar Cipher work?
- **Scopo:** Distinguere oscurità e sicurezza, attraverso «How does the Caesar Cipher work?».
- **Traccia:** Avviare la sequenza illustrata del cifrario, identificando alfabeto e messaggio.
- **Transizione:** Passare alla slide 11, «How does the Caesar Cipher work?».

### 11. How does the Caesar Cipher work?
- **Scopo:** Distinguere oscurità e sicurezza, attraverso «How does the Caesar Cipher work?».
- **Traccia:** Seguire il secondo passaggio dell'immagine: mantenere la stessa corrispondenza fra lettere.
- **Transizione:** Passare alla slide 12, «How does the Caesar Cipher work?».

### 12. How does the Caesar Cipher work?
- **Scopo:** Distinguere oscurità e sicurezza, attraverso «How does the Caesar Cipher work?».
- **Traccia:** Continuare la sostituzione sulla terza schermata senza cambiare la chiave dell'esempio.
- **Transizione:** Passare alla slide 13, «How does the Caesar Cipher work?».

### 13. How does the Caesar Cipher work?
- **Scopo:** Distinguere oscurità e sicurezza, attraverso «How does the Caesar Cipher work?».
- **Traccia:** Mostrare il quarto passaggio e chiedere al pubblico di anticipare il risultato.
- **Transizione:** Passare alla slide 14, «How does the Caesar Cipher work?».

### 14. How does the Caesar Cipher work?
- **Scopo:** Distinguere oscurità e sicurezza, attraverso «How does the Caesar Cipher work?».
- **Traccia:** Leggere il quinto passaggio della sequenza visuale originale.
- **Transizione:** Passare alla slide 15, «How does the Caesar Cipher work?».

### 15. How does the Caesar Cipher work?
- **Scopo:** Distinguere oscurità e sicurezza, attraverso «How does the Caesar Cipher work?».
- **Traccia:** Completare la dimostrazione e verificare che l'operazione sia reversibile conoscendo lo spostamento.
- **Transizione:** Passare alla slide 16, «Trivia question».

### 16. Trivia question
- **Scopo:** Distinguere oscurità e sicurezza, attraverso «Trivia question».
- **Traccia:** Lasciare rispondere il pubblico alla domanda prima di rivelare il collegamento al cifrario.
- **Transizione:** Passare alla slide 17, «And now, a bit of pain for some of us».

### 17. And now, a bit of pain for some of us
- **Scopo:** Distinguere oscurità e sicurezza, attraverso «And now, a bit of pain for some of us».
- **Traccia:** Usare il riferimento nostalgico dell'immagine senza inventare dettagli non visibili.
- **Transizione:** Passare alla slide 18, «Why is Caesar Cipher weak?».

### 18. Why is Caesar Cipher weak?
- **Scopo:** Distinguere oscurità e sicurezza, attraverso «Why is Caesar Cipher weak?».
- **Traccia:** Il piccolo spazio delle chiavi rende praticabile la ricerca esaustiva.
- **Transizione:** Passare alla slide 19, «A good algorithm».

### 19. A good algorithm
- **Scopo:** Distinguere oscurità e sicurezza, attraverso «A good algorithm».
- **Traccia:** La sicurezza deve dipendere dal segreto e dai parametri, non dal nascondere l'algoritmo.
- **Transizione:** Passare alla slide 20, «What are our choices today?», aprendo la sezione «Chiavi condivise».

### 20. What are our choices today?
- **Scopo:** Motivare l'accordo su un segreto, attraverso «What are our choices today?».
- **Traccia:** AES è un cifrario simmetrico: per una comunicazione sicura servono anche modalità e autenticazione appropriate.
- **Transizione:** Passare alla slide 21, «Let's make the communication secure».

### 21. Let's make the communication secure
- **Scopo:** Motivare l'accordo su un segreto, attraverso «Let's make the communication secure».
- **Traccia:** Porre il problema della distribuzione della chiave su un canale osservabile.
- **Transizione:** Passare alla slide 22, «Do we have a solution?».

### 22. Do we have a solution?
- **Scopo:** Segnare un passaggio nella sezione «Chiavi condivise».
- **Traccia:** Usare «Do we have a solution?» come domanda o pausa visiva prima del prossimo passaggio. Motivare l'accordo su un segreto.
- **Transizione:** Passare alla slide 23, «Of course!».

### 23. Of course!
- **Scopo:** Motivare l'accordo su un segreto, attraverso «Of course!».
- **Traccia:** Introdurre Diffie e Hellman usando il materiale già presente.
- **Transizione:** Passare alla slide 24, «The Diffie-Hellman algorithm».

### 24. The Diffie-Hellman algorithm
- **Scopo:** Motivare l'accordo su un segreto, attraverso «The Diffie-Hellman algorithm».
- **Traccia:** Spiegare l'accordo di chiave e separarlo dall'autenticazione delle parti.
- **Transizione:** Passare alla slide 25, «It's time to paint!», aprendo la sezione «Esperimento con colori».

### 25. It's time to paint!
- **Scopo:** Rendere intuitivo lo scambio pubblico, attraverso «It's time to paint!».
- **Traccia:** Preparare colori e partecipanti; i materiali effettivi dell'attività vanno concordati prima dell'evento.
- **Transizione:** Passare alla slide 26, «Generate the private and public keys».

### 26. Generate the private and public keys
- **Scopo:** Rendere intuitivo lo scambio pubblico, attraverso «Generate the private and public keys».
- **Traccia:** Tenere private le componenti segrete e rendere pubbliche soltanto quelle previste dalla metafora.
- **Transizione:** Passare alla slide 27, «Exchange the public keys».

### 27. Exchange the public keys
- **Scopo:** Rendere intuitivo lo scambio pubblico, attraverso «Exchange the public keys».
- **Traccia:** Scambiare pubblicamente i colori risultanti, non i segreti iniziali.
- **Transizione:** Passare alla slide 28, «Generate the shared keys».

### 28. Generate the shared keys
- **Scopo:** Rendere intuitivo lo scambio pubblico, attraverso «Generate the shared keys».
- **Traccia:** Mostrare che le due parti ottengono la stessa miscela seguendo il percorso previsto.
- **Transizione:** Passare alla slide 29, «Let's make some math!», aprendo la sezione «Matematica e chiusura».

### 29. Let's make some math!
- **Scopo:** Segnare un passaggio nella sezione «Matematica e chiusura».
- **Traccia:** Usare «Let's make some math!» come domanda o pausa visiva prima del prossimo passaggio. Collegare la metafora all'algoritmo.
- **Transizione:** Passare alla slide 30, «How is this possible?».

### 30. How is this possible?
- **Scopo:** Collegare la metafora all'algoritmo, attraverso «How is this possible?».
- **Traccia:** Leggere i parametri pubblici nel primo diagramma matematico.
- **Transizione:** Passare alla slide 31, «How is this possible?».

### 31. How is this possible?
- **Scopo:** Collegare la metafora all'algoritmo, attraverso «How is this possible?».
- **Traccia:** Seguire il calcolo locale rappresentato nel secondo diagramma.
- **Transizione:** Passare alla slide 32, «How is this possible?».

### 32. How is this possible?
- **Scopo:** Collegare la metafora all'algoritmo, attraverso «How is this possible?».
- **Traccia:** Seguire lo scambio e il secondo calcolo nel terzo diagramma.
- **Transizione:** Passare alla slide 33, «How is this possible?».

### 33. How is this possible?
- **Scopo:** Collegare la metafora all'algoritmo, attraverso «How is this possible?».
- **Traccia:** Confrontare i due risultati nel diagramma della chiave condivisa.
- **Transizione:** Passare alla slide 34, «Let's prove it!».

### 34. Let's prove it!
- **Scopo:** Collegare la metafora all'algoritmo, attraverso «Let's prove it!».
- **Traccia:** Ripercorrere la prova illustrata; distinguere uguaglianza del risultato e difficoltà di recuperare il segreto.
- **Transizione:** Passare alla slide 35, «The decisions we make about communication security today will determine the kind of society we live in tomorrow.».

### 35. The decisions we make about communication security today will determine the kind of society we live in tomorrow.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «The decisions we make about communication security today will determine the kind of society we live in tomorrow.», attribuita nella slide a Whitfield Diffie. Collegarla al tema: La metafora dei colori rende intuitivo lo scambio di un segreto su un canale pubblico; la matematica chiarisce poi cosa protegge davvero la comunicazione.
- **Transizione:** Passare alla slide 36, «End».

### 36. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://twitter.com/@MicheleRivaCode>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
