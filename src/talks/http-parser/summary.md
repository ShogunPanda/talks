# Node.js HTTP parser, what's going on?

## Impostazione

Guida in italiano alla versione sorgente corrente: **29 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** Un parser critico deve essere anche comprensibile e mantenibile: le prestazioni di llhttp sono il punto di partenza per esplorare alternative, non l'unico criterio.

**Contesto e crediti:** Talk archiviato che precede la proposta Milo. Racconta http_parser, llhttp, llparse e una possibile ripartenza in Rust. Stato di manutenzione e supporto protocollare vanno letti nel periodo del deck, senza presentare la proposta come integrazione avvenuta.

## Struttura e ritmo

- **Slide 1–10 — HTTP e Node.js:** Delimitare il protocollo e il parser trattato.
- **Slide 11–20 — La storia dei parser:** Spiegare il passaggio a llhttp e alla generazione di codice.
- **Slide 21–26 — Manutenibilità e alternative:** Separare gli aspetti da conservare da quelli da cambiare.
- **Slide 27–29 — Proposta e chiusura:** Presentare il lavoro come esplorazione.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. Node.js HTTP parser, what's going on?
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** Un parser critico deve essere anche comprensibile e mantenibile: le prestazioni di llhttp sono il punto di partenza per esplorare alternative, non l'unico criterio.
- **Transizione:** Passare alla slide 2, «Nothing beats a classic!».

### 2. Nothing beats a classic!
- **Scopo:** Segnare un passaggio nella sezione «HTTP e Node.js».
- **Traccia:** Usare «Nothing beats a classic!» come domanda o pausa visiva prima del prossimo passaggio. Delimitare il protocollo e il parser trattato.
- **Transizione:** Passare alla slide 3, «Hello».

### 3. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Passare alla slide 4, «We all love HTTP!».

### 4. We all love HTTP!
- **Scopo:** Segnare un passaggio nella sezione «HTTP e Node.js».
- **Traccia:** Usare «We all love HTTP!» come domanda o pausa visiva prima del prossimo passaggio. Delimitare il protocollo e il parser trattato.
- **Transizione:** Passare alla slide 5, «Which HTTP are you?».

### 5. Which HTTP are you?
- **Scopo:** Segnare un passaggio nella sezione «HTTP e Node.js».
- **Traccia:** Usare «Which HTTP are you?» come domanda o pausa visiva prima del prossimo passaggio. Delimitare il protocollo e il parser trattato.
- **Transizione:** Passare alla slide 6, «The choice is narrow».

### 6. The choice is narrow
- **Scopo:** Delimitare il protocollo e il parser trattato, attraverso «The choice is narrow».
- **Traccia:** Distinguere HTTP/1.1, HTTP/2 e HTTP/3 e i rispettivi livelli di trasporto.
- **Transizione:** Passare alla slide 7, «HTTP/1.1: Can't beat a classic».

### 7. HTTP/1.1: Can't beat a classic
- **Scopo:** Delimitare il protocollo e il parser trattato, attraverso «HTTP/1.1: Can't beat a classic».
- **Traccia:** Descrivere protocollo testuale, keep-alive e pipelining; non confondere le origini di HTTP con la standardizzazione di HTTP/1.1.
- **Transizione:** Passare alla slide 8, «HTTP/2: Don't break too much».

### 8. HTTP/2: Don't break too much
- **Scopo:** Delimitare il protocollo e il parser trattato, attraverso «HTTP/2: Don't break too much».
- **Traccia:** HTTP/2 conserva la semantica e cambia il framing con multiplexing sul trasporto TCP.
- **Transizione:** Passare alla slide 9, «HTTP/3».

### 9. HTTP/3
- **Scopo:** Delimitare il protocollo e il parser trattato, attraverso «HTTP/3».
- **Traccia:** HTTP/3 usa QUIC su UDP per ridurre l'interferenza fra stream in caso di perdita di pacchetti.
- **Transizione:** Passare alla slide 10, «What about Node.js?».

### 10. What about Node.js?
- **Scopo:** Delimitare il protocollo e il parser trattato, attraverso «What about Node.js?».
- **Traccia:** Contestualizzare il supporto HTTP/1.1, HTTP/2 e il lavoro HTTP/3 nella versione Node.js del deck.
- **Transizione:** Passare alla slide 11, «Let's focus!», aprendo la sezione «La storia dei parser».

### 11. Let's focus!
- **Scopo:** Spiegare il passaggio a llhttp e alla generazione di codice, attraverso «Let's focus!».
- **Traccia:** Concentrare l'attenzione sul parsing HTTP/1.1.
- **Transizione:** Passare alla slide 12, «The original parser».

### 12. The original parser
- **Scopo:** Spiegare il passaggio a llhttp e alla generazione di codice, attraverso «The original parser».
- **Traccia:** Presentare http_parser come dipendenza storica di Node.js.
- **Transizione:** Passare alla slide 13, «http_parser: the goods».

### 13. http_parser: the goods
- **Scopo:** Spiegare il passaggio a llhttp e alla generazione di codice, attraverso «http_parser: the goods».
- **Traccia:** Riconoscere performance, suite di test e compatibilità storica di http_parser.
- **Transizione:** Passare alla slide 14, «http_parser: the bads».

### 14. http_parser: the bads
- **Scopo:** Spiegare il passaggio a llhttp e alla generazione di codice, attraverso «http_parser: the bads».
- **Traccia:** Collegare difficoltà di manutenzione e tempestività delle correzioni.
- **Transizione:** Passare alla slide 15, «The current parser».

### 15. The current parser
- **Scopo:** Spiegare il passaggio a llhttp e alla generazione di codice, attraverso «The current parser».
- **Traccia:** Presentare llhttp e riconoscere Fedor Indutny.
- **Transizione:** Passare alla slide 16, «How does it work?».

### 16. How does it work?
- **Scopo:** Spiegare il passaggio a llhttp e alla generazione di codice, attraverso «How does it work?».
- **Traccia:** Spiegare come llparse genera C da una descrizione degli stati in TypeScript.
- **Transizione:** Passare alla slide 17, «Wait, what?!».

### 17. Wait, what?!
- **Scopo:** Segnare un passaggio nella sezione «La storia dei parser».
- **Traccia:** Usare «Wait, what?!» come domanda o pausa visiva prima del prossimo passaggio. Spiegare il passaggio a llhttp e alla generazione di codice.
- **Transizione:** Passare alla slide 18, «Yes, you got it right!».

### 18. Yes, you got it right!
- **Scopo:** Segnare un passaggio nella sezione «La storia dei parser».
- **Traccia:** Usare «Yes, you got it right!» come domanda o pausa visiva prima del prossimo passaggio. Spiegare il passaggio a llhttp e alla generazione di codice.
- **Transizione:** Passare alla slide 19, «There's more!».

### 19. There's more!
- **Scopo:** Spiegare il passaggio a llhttp e alla generazione di codice, attraverso «There's more!».
- **Traccia:** I casi di test in Markdown diventano sorgente C compilato: mostrare input e log atteso.
- **Transizione:** Passare alla slide 20, «That's a genius in action!».

### 20. That's a genius in action!
- **Scopo:** Spiegare il passaggio a llhttp e alla generazione di codice, attraverso «That's a genius in action!».
- **Traccia:** Riconoscere l'ingegnosità del lavoro prima della critica.
- **Transizione:** Passare alla slide 21, «llhttp: what's wrong with it?», aprendo la sezione «Manutenibilità e alternative».

### 21. llhttp: what's wrong with it?
- **Scopo:** Separare gli aspetti da conservare da quelli da cambiare, attraverso «llhttp: what's wrong with it?».
- **Traccia:** Distinguere debugging, compatibilità storica e tolleranza sintattica.
- **Transizione:** Passare alla slide 22, «Where are the docs?».

### 22. Where are the docs?
- **Scopo:** Separare gli aspetti da conservare da quelli da cambiare, attraverso «Where are the docs?».
- **Traccia:** La documentazione è un requisito di manutenzione, non un dettaglio successivo.
- **Transizione:** Passare alla slide 23, «Do we have the solution?».

### 23. Do we have the solution?
- **Scopo:** Segnare un passaggio nella sezione «Manutenibilità e alternative».
- **Traccia:** Usare «Do we have the solution?» come domanda o pausa visiva prima del prossimo passaggio. Separare gli aspetti da conservare da quelli da cambiare.
- **Transizione:** Passare alla slide 24, «Yes, start fresh!».

### 24. Yes, start fresh!
- **Scopo:** Segnare un passaggio nella sezione «Manutenibilità e alternative».
- **Traccia:** Usare «Yes, start fresh!» come domanda o pausa visiva prima del prossimo passaggio. Separare gli aspetti da conservare da quelli da cambiare.
- **Transizione:** Passare alla slide 25, «Keep the goods».

### 25. Keep the goods
- **Scopo:** Separare gli aspetti da conservare da quelli da cambiare, attraverso «Keep the goods».
- **Traccia:** Conservare architettura a stati e patrimonio dei test.
- **Transizione:** Passare alla slide 26, «What shall we change?».

### 26. What shall we change?
- **Scopo:** Separare gli aspetti da conservare da quelli da cambiare, attraverso «What shall we change?».
- **Traccia:** Presentare leggibilità del codice generato, Rust e parsing rigoroso; distinguere semantica HTTP di RFC 9110 e framing HTTP/1.1 di RFC 9112.
- **Transizione:** Passare alla slide 27, «Work in progress, stay tuned!», aprendo la sezione «Proposta e chiusura».

### 27. Work in progress, stay tuned!
- **Scopo:** Presentare il lavoro come esplorazione, attraverso «Work in progress, stay tuned!».
- **Traccia:** La soluzione è ancora lavoro in corso nel racconto di questa versione.
- **Transizione:** Passare alla slide 28, «If there is no struggle, there is no progress.».

### 28. If there is no struggle, there is no progress.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «If there is no struggle, there is no progress.», attribuita nella slide a Frederick Douglass. Collegarla al tema: Un parser critico deve essere anche comprensibile e mantenibile: le prestazioni di llhttp sono il punto di partenza per esplorare alternative, non l'unico criterio.
- **Transizione:** Passare alla slide 29, «End».

### 29. End
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
