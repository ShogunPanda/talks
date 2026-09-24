# The tale of avoiding a time-based DDOS attack in Node.js

## Impostazione

Guida in italiano alla versione sorgente corrente: **33 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** La disponibilità può essere compromessa anche da client lentissimi: timeout corretti devono funzionare anche quando non arrivano nuovi dati.

**Contesto e crediti:** Il talk ricostruisce il percorso dei timeout HTTP fino a Node.js 18. È un racconto storico delle mitigazioni Slowloris, non una garanzia generale contro ogni DoS. Le note originali includono battute, precisazioni sul keep-alive e il carattere semver-major della modifica.

## Struttura e ritmo

- **Slide 1–9 — Una minaccia inattesa:** Distinguere intensità del traffico e consumo delle risorse.
- **Slide 10–16 — Meccanismo:** Mostrare come connessioni lente esauriscono capacità.
- **Slide 17–23 — Mitigazioni storiche:** Distinguere timeout di inattività, header e richiesta.
- **Slide 24–29 — La correzione:** Spiegare perché serve un controllo indipendente dai dati in ingresso.
- **Slide 30–33 — Lezioni:** Collegare performance e correttezza.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. The tale of avoiding a time-based DDOS attack in Node.js
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** La disponibilità può essere compromessa anche da client lentissimi: timeout corretti devono funzionare anche quando non arrivano nuovi dati.
- **Transizione:** Passare alla slide 2, «Sometimes, your worst enemy is slowness!».

### 2. Sometimes, your worst enemy is slowness!
- **Scopo:** Segnare un passaggio nella sezione «Una minaccia inattesa».
- **Traccia:** Usare «Sometimes, your worst enemy is slowness!» come domanda o pausa visiva prima del prossimo passaggio. Distinguere intensità del traffico e consumo delle risorse.
- **Transizione:** Passare alla slide 3, «Hello».

### 3. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Passare alla slide 4, «What do we use everyday?».

### 4. What do we use everyday?
- **Scopo:** Distinguere intensità del traffico e consumo delle risorse, attraverso «What do we use everyday?».
- **Traccia:** Partire dalla dipendenza quotidiana dalle applicazioni web e dal bisogno di disponibilità.
- **Transizione:** Passare alla slide 5, «We are all vulnerable!».

### 5. We are all vulnerable!
- **Scopo:** Segnare un passaggio nella sezione «Una minaccia inattesa».
- **Traccia:** Usare «We are all vulnerable!» come domanda o pausa visiva prima del prossimo passaggio. Distinguere intensità del traffico e consumo delle risorse.
- **Transizione:** Passare alla slide 6, «Denial of Service Attack».

### 6. Denial of Service Attack
- **Scopo:** Distinguere intensità del traffico e consumo delle risorse, attraverso «Denial of Service Attack».
- **Traccia:** Definire DoS e DDoS; enfatizzare la domanda sulle risorse dell'attaccante.
- **Transizione:** Passare alla slide 7, «Fear the real enemy ...».

### 7. Fear the real enemy ...
- **Scopo:** Segnare un passaggio nella sezione «Una minaccia inattesa».
- **Traccia:** Usare «Fear the real enemy ...» come domanda o pausa visiva prima del prossimo passaggio. Distinguere intensità del traffico e consumo delle risorse.
- **Transizione:** Passare alla slide 8, «Immagine — slowloris.png».

### 8. Immagine — slowloris.png
- **Scopo:** Distinguere intensità del traffico e consumo delle risorse, attraverso «Immagine — slowloris.png».
- **Traccia:** Riprendere la battuta prevista nelle note sul titolo alternativo Taming Slowlorises in Node.js.
- **Transizione:** Passare alla slide 9, «The Slowloris attack».

### 9. The Slowloris attack
- **Scopo:** Distinguere intensità del traffico e consumo delle risorse, attraverso «The Slowloris attack».
- **Traccia:** Presentare l'attacco a banda ridotta e il riferimento storico a Robert Hansen nel 2009.
- **Transizione:** Passare alla slide 10, «Normal HTTP server activity», aprendo la sezione «Meccanismo».

### 10. Normal HTTP server activity
- **Scopo:** Mostrare come connessioni lente esauriscono capacità, attraverso «Normal HTTP server activity».
- **Traccia:** Ogni socket usa risorse anche prima di completare una richiesta.
- **Transizione:** Passare alla slide 11, «Normal HTTP server activity».

### 11. Normal HTTP server activity
- **Scopo:** Mostrare come connessioni lente esauriscono capacità, attraverso «Normal HTTP server activity».
- **Traccia:** Nel caso normale le connessioni vengono liberate; precisare l'eccezione keep-alive come richiesto dalle note.
- **Transizione:** Passare alla slide 12, «Normal HTTP server activity».

### 12. Normal HTTP server activity
- **Scopo:** Mostrare come connessioni lente esauriscono capacità, attraverso «Normal HTTP server activity».
- **Traccia:** Collegare ingresso e uscita delle connessioni a un consumo relativamente stabile.
- **Transizione:** Passare alla slide 13, «Retaining sockets is expensive».

### 13. Retaining sockets is expensive
- **Scopo:** Mostrare come connessioni lente esauriscono capacità, attraverso «Retaining sockets is expensive».
- **Traccia:** Distinguere memoria del sistema operativo, file descriptor e rappresentazione applicativa.
- **Transizione:** Passare alla slide 14, «The Slowloris attack».

### 14. The Slowloris attack
- **Scopo:** Mostrare come connessioni lente esauriscono capacità, attraverso «The Slowloris attack».
- **Traccia:** Un client rallenta o non completa la richiesta e tiene aperta la connessione.
- **Transizione:** Passare alla slide 15, «The Slowloris attack».

### 15. The Slowloris attack
- **Scopo:** Mostrare come connessioni lente esauriscono capacità, attraverso «The Slowloris attack».
- **Traccia:** Mostrare l'accumulo progressivo di risorse occupate.
- **Transizione:** Passare alla slide 16, «The Slowloris attack».

### 16. The Slowloris attack
- **Scopo:** Mostrare come connessioni lente esauriscono capacità, attraverso «The Slowloris attack».
- **Traccia:** L'esaurimento impedisce l'accesso a utenti legittimi.
- **Transizione:** Passare alla slide 17, «How do we stop it?», aprendo la sezione «Mitigazioni storiche».

### 17. How do we stop it?
- **Scopo:** Distinguere timeout di inattività, header e richiesta, attraverso «How do we stop it?».
- **Traccia:** Marcare oralmente la domanda su come fermare l'attacco, come previsto nelle note.
- **Transizione:** Passare alla slide 18, «Use a reverse proxy».

### 18. Use a reverse proxy
- **Scopo:** Distinguere timeout di inattività, header e richiesta, attraverso «Use a reverse proxy».
- **Traccia:** Presentare il reverse proxy come livello di mitigazione da configurare, non come protezione automatica universale.
- **Transizione:** Passare alla slide 19, «Mitigation strategies».

### 19. Mitigation strategies
- **Scopo:** Distinguere timeout di inattività, header e richiesta, attraverso «Mitigation strategies».
- **Traccia:** Bilanciare limiti per IP, velocità minima e timeout senza penalizzare indiscriminatamente client legittimi.
- **Transizione:** Passare alla slide 20, «What about Node.js?».

### 20. What about Node.js?
- **Scopo:** Segnare un passaggio nella sezione «Mitigazioni storiche».
- **Traccia:** Usare «What about Node.js?» come domanda o pausa visiva prima del prossimo passaggio. Distinguere timeout di inattività, header e richiesta.
- **Transizione:** Passare alla slide 21, «http.Server.headersTimeout».

### 21. http.Server.headersTimeout
- **Scopo:** Distinguere timeout di inattività, header e richiesta, attraverso «http.Server.headersTimeout».
- **Traccia:** headersTimeout limita gli header ma non basta da solo a delimitare il tempo della richiesta completa.
- **Transizione:** Passare alla slide 22, «Trust the frameworks».

### 22. Trust the frameworks
- **Scopo:** Distinguere timeout di inattività, header e richiesta, attraverso «Trust the frameworks».
- **Traccia:** Contestualizzare la disabilitazione storica del timeout di inattività e la motivazione serverless; le note citano differenze fra framework dell'epoca.
- **Transizione:** Passare alla slide 23, «http.Server.requestTimeout».

### 23. http.Server.requestTimeout
- **Scopo:** Distinguere timeout di inattività, header e richiesta, attraverso «http.Server.requestTimeout».
- **Traccia:** requestTimeout aggiunge un limite complessivo, inizialmente disabilitato di default nella storia raccontata.
- **Transizione:** Passare alla slide 24, «Are we safe now?», aprendo la sezione «La correzione».

### 24. Are we safe now?
- **Scopo:** Segnare un passaggio nella sezione «La correzione».
- **Traccia:** Usare «Are we safe now?» come domanda o pausa visiva prima del prossimo passaggio. Spiegare perché serve un controllo indipendente dai dati in ingresso.
- **Transizione:** Passare alla slide 25, «Yes, almost!».

### 25. Yes, almost!
- **Scopo:** Segnare un passaggio nella sezione «La correzione».
- **Traccia:** Usare «Yes, almost!» come domanda o pausa visiva prima del prossimo passaggio. Spiegare perché serve un controllo indipendente dai dati in ingresso.
- **Transizione:** Passare alla slide 26, «The countermeasures were loose».

### 26. The countermeasures were loose
- **Scopo:** Spiegare perché serve un controllo indipendente dai dati in ingresso, attraverso «The countermeasures were loose».
- **Traccia:** Un timeout controllato soltanto all'arrivo di dati non protegge contro chi smette del tutto di inviarli.
- **Transizione:** Passare alla slide 27, «How to protect Node.js 16 and below».

### 27. How to protect Node.js 16 and below
- **Scopo:** Spiegare perché serve un controllo indipendente dai dati in ingresso, attraverso «How to protect Node.js 16 and below».
- **Traccia:** Per le versioni storiche distinguere timeout di inattività, richiesta e header.
- **Transizione:** Passare alla slide 28, «How to protect Node.js 16 and below».

### 28. How to protect Node.js 16 and below
- **Scopo:** Spiegare perché serve un controllo indipendente dai dati in ingresso, attraverso «How to protect Node.js 16 and below».
- **Traccia:** Seguire la configurazione dell'esempio e il ruolo distinto dei tre valori.
- **Transizione:** Passare alla slide 29, «Node.js 18.0.0 is finally safe by default».

### 29. Node.js 18.0.0 is finally safe by default
- **Scopo:** Spiegare perché serve un controllo indipendente dai dati in ingresso, attraverso «Node.js 18.0.0 is finally safe by default».
- **Traccia:** Node.js 18 introduce controllo periodico e default protettivi per questo attacco; ricordare la modifica semver-major e il risultato prestazionale del deck.
- **Transizione:** Passare alla slide 30, «We made it!», aprendo la sezione «Lezioni».

### 30. We made it!
- **Scopo:** Collegare performance e correttezza, attraverso «We made it!».
- **Traccia:** Riprendere il gesto di vittoria previsto nelle note.
- **Transizione:** Passare alla slide 31, «Take home lessons».

### 31. Take home lessons
- **Scopo:** Collegare performance e correttezza, attraverso «Take home lessons».
- **Traccia:** Prima dell'elenco, riassumere attacco inatteso e lungo percorso di correzione; poi discutere sicurezza, misurazione e revisione continua.
- **Transizione:** Passare alla slide 32, «Never assume the obvious is true.».

### 32. Never assume the obvious is true.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «Never assume the obvious is true.», attribuita nella slide a William Safire. Collegarla al tema: La disponibilità può essere compromessa anche da client lentissimi: timeout corretti devono funzionare anche quando non arrivano nuovi dati.
- **Transizione:** Passare alla slide 33, «End».

### 33. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- Nessun URL esplicito nelle slide. I riferimenti visuali sono elencati nel contesto immagini.

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
