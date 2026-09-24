# Milo, a new HTTP parser for Node.js

## Impostazione

Guida in italiano alla versione sorgente corrente: **40 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** Milo esplora un parser HTTP rigoroso in Rust, conservando i punti forti di llhttp e migliorando leggibilità, sviluppo e integrazione.

**Contesto e crediti:** Paolo dichiara di aver imparato Rust lavorando a Milo e riconosce Fedor Indutny e NearForm. Il deck presenta risultati preliminari e integrazione futura: non descrivere Milo come parser già adottato da Node.js.

## Struttura e ritmo

- **Slide 1–11 — Motivazione:** Spiegare limiti di manutenzione e punti forti di llhttp.
- **Slide 12–20 — Milo e Rust:** Mostrare la costruzione della macchina a stati.
- **Slide 21–26 — Memoria e API Rust:** Seguire parsing e callback.
- **Slide 27–34 — Interoperabilità:** Collegare Rust, C++ e WebAssembly.
- **Slide 35–40 — Risultati e futuro:** Contestualizzare benchmark, integrazione e ringraziamenti.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. Milo, a new HTTP parser for Node.js
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** Milo esplora un parser HTTP rigoroso in Rust, conservando i punti forti di llhttp e migliorando leggibilità, sviluppo e integrazione.
- **Transizione:** Passare alla slide 2, «Being reckless (sometimes) pays off!».

### 2. Being reckless (sometimes) pays off!
- **Scopo:** Segnare un passaggio nella sezione «Motivazione».
- **Traccia:** Usare «Being reckless (sometimes) pays off!» come domanda o pausa visiva prima del prossimo passaggio. Spiegare limiti di manutenzione e punti forti di llhttp.
- **Transizione:** Passare alla slide 3, «Hello».

### 3. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Passare alla slide 4, «We all love HTTP!».

### 4. We all love HTTP!
- **Scopo:** Segnare un passaggio nella sezione «Motivazione».
- **Traccia:** Usare «We all love HTTP!» come domanda o pausa visiva prima del prossimo passaggio. Spiegare limiti di manutenzione e punti forti di llhttp.
- **Transizione:** Passare alla slide 5, «Which HTTP are you?».

### 5. Which HTTP are you?
- **Scopo:** Segnare un passaggio nella sezione «Motivazione».
- **Traccia:** Usare «Which HTTP are you?» come domanda o pausa visiva prima del prossimo passaggio. Spiegare limiti di manutenzione e punti forti di llhttp.
- **Transizione:** Passare alla slide 6, «The choice is narrow».

### 6. The choice is narrow
- **Scopo:** Spiegare limiti di manutenzione e punti forti di llhttp, attraverso «The choice is narrow».
- **Traccia:** Distinguere versioni HTTP e livelli di trasporto.
- **Transizione:** Passare alla slide 7, «What about Node.js?».

### 7. What about Node.js?
- **Scopo:** Spiegare limiti di manutenzione e punti forti di llhttp, attraverso «What about Node.js?».
- **Traccia:** Descrivere il supporto Node.js come fotografia della versione del talk.
- **Transizione:** Passare alla slide 8, «Let's focus!».

### 8. Let's focus!
- **Scopo:** Segnare un passaggio nella sezione «Motivazione».
- **Traccia:** Usare «Let's focus!» come domanda o pausa visiva prima del prossimo passaggio. Spiegare limiti di manutenzione e punti forti di llhttp.
- **Transizione:** Passare alla slide 9, «The current parser».

### 9. The current parser
- **Scopo:** Spiegare limiti di manutenzione e punti forti di llhttp, attraverso «The current parser».
- **Traccia:** Riconoscere llhttp e Fedor Indutny come punto di partenza.
- **Transizione:** Passare alla slide 10, «How does it work?».

### 10. How does it work?
- **Scopo:** Spiegare limiti di manutenzione e punti forti di llhttp, attraverso «How does it work?».
- **Traccia:** Seguire la generazione di C dalla descrizione TypeScript degli stati.
- **Transizione:** Passare alla slide 11, «llhttp: what's wrong with it?».

### 11. llhttp: what's wrong with it?
- **Scopo:** Spiegare limiti di manutenzione e punti forti di llhttp, attraverso «llhttp: what's wrong with it?».
- **Traccia:** Separare difficoltà di debug, compatibilità storica e leniency.
- **Transizione:** Passare alla slide 12, «Do we have the solution?», aprendo la sezione «Milo e Rust».

### 12. Do we have the solution?
- **Scopo:** Segnare un passaggio nella sezione «Milo e Rust».
- **Traccia:** Usare «Do we have the solution?» come domanda o pausa visiva prima del prossimo passaggio. Mostrare la costruzione della macchina a stati.
- **Transizione:** Passare alla slide 13, «Yes, start fresh!».

### 13. Yes, start fresh!
- **Scopo:** Segnare un passaggio nella sezione «Milo e Rust».
- **Traccia:** Usare «Yes, start fresh!» come domanda o pausa visiva prima del prossimo passaggio. Mostrare la costruzione della macchina a stati.
- **Transizione:** Passare alla slide 14, «Say hello to Milo!».

### 14. Say hello to Milo!
- **Scopo:** Mostrare la costruzione della macchina a stati, attraverso «Say hello to Milo!».
- **Traccia:** Presentare Milo come nuova proposta, senza attribuirgli un landing nel runtime.
- **Transizione:** Passare alla slide 15, «Let's drop the bomb!».

### 15. Let's drop the bomb!
- **Scopo:** Mostrare la costruzione della macchina a stati, attraverso «Let's drop the bomb!».
- **Traccia:** Raccontare l'apprendimento di Rust confermato dal deck e l'intento di valutarne l'accessibilità.
- **Transizione:** Passare alla slide 16, «Do not throw the goods away».

### 16. Do not throw the goods away
- **Scopo:** Mostrare la costruzione della macchina a stati, attraverso «Do not throw the goods away».
- **Traccia:** Conservare l'architettura a stati di llhttp; i conteggi riportati appartengono alle implementazioni confrontate.
- **Transizione:** Passare alla slide 17, «How is that possible?».

### 17. How is that possible?
- **Scopo:** Segnare un passaggio nella sezione «Milo e Rust».
- **Traccia:** Usare «How is that possible?» come domanda o pausa visiva prima del prossimo passaggio. Mostrare la costruzione della macchina a stati.
- **Transizione:** Passare alla slide 18, «It's all in the macros!».

### 18. It's all in the macros!
- **Scopo:** Segnare un passaggio nella sezione «Milo e Rust».
- **Traccia:** Usare «It's all in the macros!» come domanda o pausa visiva prima del prossimo passaggio. Mostrare la costruzione della macchina a stati.
- **Transizione:** Passare alla slide 19, «Rust macro system is insanely powerful».

### 19. Rust macro system is insanely powerful
- **Scopo:** Mostrare la costruzione della macchina a stati, attraverso «Rust macro system is insanely powerful».
- **Traccia:** Spiegare espansione delle macro a compile time e ispezione tramite cargo-expand.
- **Transizione:** Passare alla slide 20, «Examples are worth more than 1000 words».

### 20. Examples are worth more than 1000 words
- **Scopo:** Mostrare la costruzione della macchina a stati, attraverso «Examples are worth more than 1000 words».
- **Traccia:** Seguire una singola macro dal pattern dichiarativo al Rust espanso.
- **Transizione:** Passare alla slide 21, «What about resources?», aprendo la sezione «Memoria e API Rust».

### 21. What about resources?
- **Scopo:** Segnare un passaggio nella sezione «Memoria e API Rust».
- **Traccia:** Usare «What about resources?» come domanda o pausa visiva prima del prossimo passaggio. Seguire parsing e callback.
- **Transizione:** Passare alla slide 22, «Milo has very small memory footprint».

### 22. Milo has very small memory footprint
- **Scopo:** Seguire parsing e callback, attraverso «Milo has very small memory footprint».
- **Traccia:** Distinguere parsing in-place e copia opzionale della parte non consumata.
- **Transizione:** Passare alla slide 23, «Strict, period!».

### 23. Strict, period!
- **Scopo:** Seguire parsing e callback, attraverso «Strict, period!».
- **Traccia:** Il rigore sintattico è una scelta del parser, non una promessa che ogni input sia affidabile.
- **Transizione:** Passare alla slide 24, «Let's get to the action!».

### 24. Let's get to the action!
- **Scopo:** Segnare un passaggio nella sezione «Memoria e API Rust».
- **Traccia:** Usare «Let's get to the action!» come domanda o pausa visiva prima del prossimo passaggio. Seguire parsing e callback.
- **Transizione:** Passare alla slide 25, «Sample code (Rust)».

### 25. Sample code (Rust)
- **Scopo:** Seguire parsing e callback, attraverso «Sample code (Rust)».
- **Traccia:** Seguire creazione, callback on_data, parse e lifetime del messaggio nell'esempio Rust.
- **Transizione:** Passare alla slide 26, «Output (Rust)».

### 26. Output (Rust)
- **Scopo:** Seguire parsing e callback, attraverso «Output (Rust)».
- **Traccia:** Collegare posizione e body dell'output alla callback appena mostrata.
- **Transizione:** Passare alla slide 27, «But Node.js uses C++!», aprendo la sezione «Interoperabilità».

### 27. But Node.js uses C++!
- **Scopo:** Segnare un passaggio nella sezione «Interoperabilità».
- **Traccia:** Usare «But Node.js uses C++!» come domanda o pausa visiva prima del prossimo passaggio. Collegare Rust, C++ e WebAssembly.
- **Transizione:** Passare alla slide 28, «The C++ workflow».

### 28. The C++ workflow
- **Scopo:** Collegare Rust, C++ e WebAssembly, attraverso «The C++ workflow».
- **Traccia:** Spiegare generazione degli header con cbindgen e linking della libreria statica.
- **Transizione:** Passare alla slide 29, «Sample code (C++)».

### 29. Sample code (C++)
- **Scopo:** Collegare Rust, C++ e WebAssembly, attraverso «Sample code (C++)».
- **Traccia:** Seguire la stessa API dal C++; prima di una demo correggere l'uso di %s su un buffer copiato senza terminatore NUL.
- **Transizione:** Passare alla slide 30, «Output (C++)».

### 30. Output (C++)
- **Scopo:** Collegare Rust, C++ e WebAssembly, attraverso «Output (C++)».
- **Traccia:** Leggere compilazione ed esecuzione C++ come secondo accesso allo stesso parser.
- **Transizione:** Passare alla slide 31, «But I want to support SmartOS!».

### 31. But I want to support SmartOS!
- **Scopo:** Segnare un passaggio nella sezione «Interoperabilità».
- **Traccia:** Usare «But I want to support SmartOS!» come domanda o pausa visiva prima del prossimo passaggio. Collegare Rust, C++ e WebAssembly.
- **Transizione:** Passare alla slide 32, «WASM will save us!».

### 32. WASM will save us!
- **Scopo:** Collegare Rust, C++ e WebAssembly, attraverso «WASM will save us!».
- **Traccia:** Presentare wasm-bindgen come percorso alternativo per piattaforme e integrazioni diverse.
- **Transizione:** Passare alla slide 33, «Sample code (Node.js with WebAssembly)».

### 33. Sample code (Node.js with WebAssembly)
- **Scopo:** Collegare Rust, C++ e WebAssembly, attraverso «Sample code (Node.js with WebAssembly)».
- **Traccia:** Seguire allocazione nello spazio WASM, vista Buffer, parsing e deallocazione.
- **Transizione:** Passare alla slide 34, «Output (Node.js with WebAssembly)».

### 34. Output (Node.js with WebAssembly)
- **Scopo:** Collegare Rust, C++ e WebAssembly, attraverso «Output (Node.js with WebAssembly)».
- **Traccia:** Confrontare l'output Node.js/WASM con quelli nativi.
- **Transizione:** Passare alla slide 35, «And that's Milo!», aprendo la sezione «Risultati e futuro».

### 35. And that's Milo!
- **Scopo:** Segnare un passaggio nella sezione «Risultati e futuro».
- **Traccia:** Usare «And that's Milo!» come domanda o pausa visiva prima del prossimo passaggio. Contestualizzare benchmark, integrazione e ringraziamenti.
- **Transizione:** Passare alla slide 36, «Performance in Node (native, preliminary)».

### 36. Performance in Node (native, preliminary)
- **Scopo:** Contestualizzare benchmark, integrazione e ringraziamenti, attraverso «Performance in Node (native, preliminary)».
- **Traccia:** Leggere richieste al secondo e distribuzioni della misura preliminare; non promettere il risultato su ogni workload.
- **Transizione:** Passare alla slide 37, «What's missing?».

### 37. What's missing?
- **Scopo:** Contestualizzare benchmark, integrazione e ringraziamenti, attraverso «What's missing?».
- **Traccia:** Distinguere integrazione Node.js, prestazioni WASM e migrazione della suite di test come attività ancora aperte nel deck.
- **Transizione:** Passare alla slide 38, «A due thanks to ...».

### 38. A due thanks to ...
- **Scopo:** Contestualizzare benchmark, integrazione e ringraziamenti, attraverso «A due thanks to ...».
- **Traccia:** Riconoscere il supporto e la sponsorizzazione NearForm riportati dal relatore.
- **Transizione:** Passare alla slide 39, «A person who never made a mistake never tried anything new.».

### 39. A person who never made a mistake never tried anything new.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «A person who never made a mistake never tried anything new.», attribuita nella slide a Albert Einstein. Collegarla al tema: Milo esplora un parser HTTP rigoroso in Rust, conservando i punti forti di llhttp e migliorando leggibilità, sviluppo e integrazione.
- **Transizione:** Passare alla slide 40, «End».

### 40. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://github.com/dtolnay/cargo-expand>
- <https://github.com/mozilla/cbindgen>
- <https://github.com/rustwasm/wasm-bindgen>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
