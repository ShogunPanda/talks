# Compiling and bundling JS, the painless way

## Impostazione

Guida in italiano alla versione sorgente corrente: **58 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** Capire parsing, trasformazione e bundling permette di scegliere strumenti e compromessi invece di subire la complessità della toolchain.

**Contesto e crediti:** Talk archiviato, originariamente di Michele Riva, accreditato nella slide 4. Confronti fra strumenti, supporto dei runtime e previsioni sul futuro appartengono al periodo del deck. Le trasformazioni mostrate come immagini sono materiale tecnico da preservare.

## Struttura e ritmo

- **Slide 1–9 — Lessico e crediti:** Distinguere compilazione, transpilation e bundling.
- **Slide 10–18 — Motivazioni:** Collegare linguaggi e ambienti di esecuzione.
- **Slide 19–37 — Dentro un transpiler:** Seguire il passaggio dal sorgente all'AST e al nuovo codice.
- **Slide 38–54 — Bundler e alternative:** Confrontare gli approcci descritti nel deck.
- **Slide 55–58 — Scelte e conclusioni:** Separare tendenze storiche e criteri riutilizzabili.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. Compiling and bundling JS, the painless way
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** Capire parsing, trasformazione e bundling permette di scegliere strumenti e compromessi invece di subire la complessità della toolchain.
- **Transizione:** Passare alla slide 2, «Fight your fears!».

### 2. Fight your fears!
- **Scopo:** Segnare un passaggio nella sezione «Lessico e crediti».
- **Traccia:** Usare «Fight your fears!» come domanda o pausa visiva prima del prossimo passaggio. Distinguere compilazione, transpilation e bundling.
- **Transizione:** Passare alla slide 3, «Hello».

### 3. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Passare alla slide 4, «First of all, let's give credits!».

### 4. First of all, let's give credits!
- **Scopo:** Distinguere compilazione, transpilation e bundling, attraverso «First of all, let's give credits!».
- **Traccia:** Riconoscere Michele Riva come autore originale.
- **Transizione:** Passare alla slide 5, «Compiling and bundling JavaScript is often a pain ...».

### 5. Compiling and bundling JavaScript is often a pain ...
- **Scopo:** Segnare un passaggio nella sezione «Lessico e crediti».
- **Traccia:** Usare «Compiling and bundling JavaScript is often a pain ...» come domanda o pausa visiva prima del prossimo passaggio. Distinguere compilazione, transpilation e bundling.
- **Transizione:** Passare alla slide 6, «…but it should not!».

### 6. …but it should not!
- **Scopo:** Segnare un passaggio nella sezione «Lessico e crediti».
- **Traccia:** Usare «…but it should not!» come domanda o pausa visiva prima del prossimo passaggio. Distinguere compilazione, transpilation e bundling.
- **Transizione:** Passare alla slide 7, «A bit of terminology: Compiling».

### 7. A bit of terminology: Compiling
- **Scopo:** Distinguere compilazione, transpilation e bundling, attraverso «A bit of terminology: Compiling».
- **Traccia:** Leggere la definizione di compilazione e chiarire il livello di trasformazione.
- **Transizione:** Passare alla slide 8, «A bit of terminology: Transpiling».

### 8. A bit of terminology: Transpiling
- **Scopo:** Distinguere compilazione, transpilation e bundling, attraverso «A bit of terminology: Transpiling».
- **Traccia:** Distinguere transpilation fra linguaggi o versioni del linguaggio dalla sola generazione di binari.
- **Transizione:** Passare alla slide 9, «A bit of terminology: Bundling».

### 9. A bit of terminology: Bundling
- **Scopo:** Distinguere compilazione, transpilation e bundling, attraverso «A bit of terminology: Bundling».
- **Traccia:** Il bundling risolve dipendenze e confeziona moduli: non è sinonimo di transpilation.
- **Transizione:** Passare alla slide 10, «Transpilation», aprendo la sezione «Motivazioni».

### 10. Transpilation
- **Scopo:** Segnare un passaggio nella sezione «Motivazioni».
- **Traccia:** Usare «Transpilation» come domanda o pausa visiva prima del prossimo passaggio. Collegare linguaggi e ambienti di esecuzione.
- **Transizione:** Passare alla slide 11, «Why do we want to transpile our code?».

### 11. Why do we want to transpile our code?
- **Scopo:** Collegare linguaggi e ambienti di esecuzione, attraverso «Why do we want to transpile our code?».
- **Traccia:** Collegare nuove funzionalità e compatibilità; le note richiamano il processo TC39, da contestualizzare storicamente.
- **Transizione:** Passare alla slide 12, «Who are you missing the most?».

### 12. Who are you missing the most?
- **Scopo:** Collegare linguaggi e ambienti di esecuzione, attraverso «Who are you missing the most?».
- **Traccia:** Usare Scala.js e Opal come esempi di sorgenti differenti destinati a JavaScript.
- **Transizione:** Passare alla slide 13, «An example: transpilation of Scala.js».

### 13. An example: transpilation of Scala.js
- **Scopo:** Collegare linguaggi e ambienti di esecuzione, attraverso «An example: transpilation of Scala.js».
- **Traccia:** Seguire la trasformazione Scala.js sull'immagine originale.
- **Transizione:** Passare alla slide 14, «Where do we (mostly) run?».

### 14. Where do we (mostly) run?
- **Scopo:** Collegare linguaggi e ambienti di esecuzione, attraverso «Where do we (mostly) run?».
- **Traccia:** Distinguere browser, runtime e motori; le note citano SpiderMonkey e JavaScriptCore come esempi di differenze.
- **Transizione:** Passare alla slide 15, «There is a transpiler for everything…™».

### 15. There is a transpiler for everything…™
- **Scopo:** Collegare linguaggi e ambienti di esecuzione, attraverso «There is a transpiler for everything…™».
- **Traccia:** Mostrare la varietà degli ecosistemi senza trattare tutte le relazioni come compilazione diretta in JavaScript.
- **Transizione:** Passare alla slide 16, «… and that's thanks to LLVM!».

### 16. … and that's thanks to LLVM!
- **Scopo:** Collegare linguaggi e ambienti di esecuzione, attraverso «… and that's thanks to LLVM!».
- **Traccia:** Presentare LLVM come infrastruttura riutilizzabile, senza attribuirgli ogni transpiler dell'elenco.
- **Transizione:** Passare alla slide 17, «What are you missing the most?».

### 17. What are you missing the most?
- **Scopo:** Collegare linguaggi e ambienti di esecuzione, attraverso «What are you missing the most?».
- **Traccia:** Seguire la trasformazione della pipeline syntax illustrata; la nota richiama il dialetto Hack.
- **Transizione:** Passare alla slide 18, «There is no end to what we can achieve».

### 18. There is no end to what we can achieve
- **Scopo:** Collegare linguaggi e ambienti di esecuzione, attraverso «There is no end to what we can achieve».
- **Traccia:** Confrontare l'esempio di sintassi con l'output trasformato.
- **Transizione:** Passare alla slide 19, «Transpiling, in depth», aprendo la sezione «Dentro un transpiler».

### 19. Transpiling, in depth
- **Scopo:** Segnare un passaggio nella sezione «Dentro un transpiler».
- **Traccia:** Usare «Transpiling, in depth» come domanda o pausa visiva prima del prossimo passaggio. Seguire il passaggio dal sorgente all'AST e al nuovo codice. Sottotitolo da richiamare: «Let's have a deep look on how a transpiler really works.».
- **Transizione:** Passare alla slide 20, «Generated code is not always readable…».

### 20. Generated code is not always readable…
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «Generated code is not always readable…».
- **Traccia:** L'output può essere corretto ma difficile da leggere: distinguere leggibilità e semantica.
- **Transizione:** Passare alla slide 21, «…but some transpilers are really good!».

### 21. …but some transpilers are really good!
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «…but some transpilers are really good!».
- **Traccia:** Mostrare il controesempio più leggibile, senza promettere che ogni trasformazione lo sia.
- **Transizione:** Passare alla slide 22, «Each language has its own transpiler».

### 22. Each language has its own transpiler
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «Each language has its own transpiler».
- **Traccia:** Collegare ogni linguaggio alle sue esigenze di trasformazione.
- **Transizione:** Passare alla slide 23, «No transpiler is perfect!».

### 23. No transpiler is perfect!
- **Scopo:** Segnare un passaggio nella sezione «Dentro un transpiler».
- **Traccia:** Usare «No transpiler is perfect!» come domanda o pausa visiva prima del prossimo passaggio. Seguire il passaggio dal sorgente all'AST e al nuovo codice.
- **Transizione:** Passare alla slide 24, «Problem #1: Transpilation time».

### 24. Problem #1: Transpilation time
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «Problem #1: Transpilation time».
- **Traccia:** Il tempo di transpilation entra nel ciclo di feedback dello sviluppatore.
- **Transizione:** Passare alla slide 25, «Problem #2: Output optimization».

### 25. Problem #2: Output optimization
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «Problem #2: Output optimization».
- **Traccia:** Ottimizzazione dell'output e rapidità del compilatore sono misure differenti.
- **Transizione:** Passare alla slide 26, «Let's focus on the popular one!».

### 26. Let's focus on the popular one!
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «Let's focus on the popular one!».
- **Traccia:** Confrontare Babel e TSC nel contesto storico del deck.
- **Transizione:** Passare alla slide 27, «How does a transpiler work?».

### 27. How does a transpiler work?
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «How does a transpiler work?».
- **Traccia:** Fissare parsing, trasformazione e codegen come tre fasi.
- **Transizione:** Passare alla slide 28, «Parsing step #1: Tokenization».

### 28. Parsing step #1: Tokenization
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «Parsing step #1: Tokenization».
- **Traccia:** Seguire il sorgente mentre diventa una sequenza di token.
- **Transizione:** Passare alla slide 29, «Parsing step #2: Syntactical Analysis».

### 29. Parsing step #2: Syntactical Analysis
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «Parsing step #2: Syntactical Analysis».
- **Traccia:** Mostrare come la sintassi organizza i token in un parse tree.
- **Transizione:** Passare alla slide 30, «Parsing step #3: Prepare the AST».

### 30. Parsing step #3: Prepare the AST
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «Parsing step #3: Prepare the AST».
- **Traccia:** Spiegare cosa viene astratto nel passaggio al modello AST.
- **Transizione:** Passare alla slide 31, «Parsing step #4: Build the AST».

### 31. Parsing step #4: Build the AST
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «Parsing step #4: Build the AST».
- **Traccia:** Leggere nodi e relazioni dell'AST risultante.
- **Transizione:** Passare alla slide 32, «Traversing the AST».

### 32. Traversing the AST
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «Traversing the AST».
- **Traccia:** Seguire la visita dei nodi, non ogni dettaglio dell'implementazione.
- **Transizione:** Passare alla slide 33, «Transforming the AST».

### 33. Transforming the AST
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «Transforming the AST».
- **Traccia:** Mostrare una trasformazione locale e come cambia l'albero.
- **Transizione:** Passare alla slide 34, «Code generation».

### 34. Code generation
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «Code generation».
- **Traccia:** Ricostruire il sorgente dall'albero trasformato.
- **Transizione:** Passare alla slide 35, «All your popular tools use this flow».

### 35. All your popular tools use this flow
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «All your popular tools use this flow».
- **Traccia:** Collegare lo stesso modello a Babel, Prettier ed ESLint, distinguendone gli obiettivi.
- **Transizione:** Passare alla slide 36, «A more complex example: the problem».

### 36. A more complex example: the problem
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «A more complex example: the problem».
- **Traccia:** Definire input e risultato desiderato prima di leggere la soluzione.
- **Transizione:** Passare alla slide 37, «A more complex example: the solution».

### 37. A more complex example: the solution
- **Scopo:** Seguire il passaggio dal sorgente all'AST e al nuovo codice, attraverso «A more complex example: the solution».
- **Traccia:** Seguire la trasformazione complessa e collegarla alle tre fasi già spiegate.
- **Transizione:** Passare alla slide 38, «Bundling», aprendo la sezione «Bundler e alternative».

### 38. Bundling
- **Scopo:** Segnare un passaggio nella sezione «Bundler e alternative».
- **Traccia:** Usare «Bundling» come domanda o pausa visiva prima del prossimo passaggio. Confrontare gli approcci descritti nel deck.
- **Transizione:** Passare alla slide 39, «Why do we want to bundle our code?».

### 39. Why do we want to bundle our code?
- **Scopo:** Confrontare gli approcci descritti nel deck, attraverso «Why do we want to bundle our code?».
- **Traccia:** Distinguere vantaggi di distribuzione e caricamento; le note sconsigliano di applicare automaticamente il bundling al server.
- **Transizione:** Passare alla slide 40, «The three horsemen».

### 40. The three horsemen
- **Scopo:** Confrontare gli approcci descritti nel deck, attraverso «The three horsemen».
- **Traccia:** Presentare la classificazione di Webpack, Rollup e Parcel come confronto dell'epoca.
- **Transizione:** Passare alla slide 41, «Is webpack still worth it?».

### 41. Is webpack still worth it?
- **Scopo:** Segnare un passaggio nella sezione «Bundler e alternative».
- **Traccia:** Usare «Is webpack still worth it?» come domanda o pausa visiva prima del prossimo passaggio. Confrontare gli approcci descritti nel deck.
- **Transizione:** Passare alla slide 42, «Are there any better alternatives?».

### 42. Are there any better alternatives?
- **Scopo:** Confrontare gli approcci descritti nel deck, attraverso «Are there any better alternatives?».
- **Traccia:** Aprire la ricerca di alternative con criteri di costo e compatibilità.
- **Transizione:** Passare alla slide 43, «ESBuild».

### 43. ESBuild
- **Scopo:** Segnare un passaggio nella sezione «Bundler e alternative».
- **Traccia:** Usare «ESBuild» come domanda o pausa visiva prima del prossimo passaggio. Confrontare gli approcci descritti nel deck.
- **Transizione:** Passare alla slide 44, «How fast ESBuild is?».

### 44. How fast ESBuild is?
- **Scopo:** Confrontare gli approcci descritti nel deck, attraverso «How fast ESBuild is?».
- **Traccia:** Leggere il confronto esbuild dal grafico originale, senza estendere la misura a ogni progetto.
- **Transizione:** Passare alla slide 45, «Ok, it's fast. What about configuration?».

### 45. Ok, it's fast. What about configuration?
- **Scopo:** Confrontare gli approcci descritti nel deck, attraverso «Ok, it's fast. What about configuration?».
- **Traccia:** Mostrare la configurazione CLI e le opzioni realmente necessarie.
- **Transizione:** Passare alla slide 46, «SWC».

### 46. SWC
- **Scopo:** Segnare un passaggio nella sezione «Bundler e alternative».
- **Traccia:** Usare «SWC» come domanda o pausa visiva prima del prossimo passaggio. Confrontare gli approcci descritti nel deck.
- **Transizione:** Passare alla slide 47, «How does it compare to ESBuild?».

### 47. How does it compare to ESBuild?
- **Scopo:** Confrontare gli approcci descritti nel deck, attraverso «How does it compare to ESBuild?».
- **Traccia:** Confrontare gli output ES2019 ed ES2020 prima delle prestazioni.
- **Transizione:** Passare alla slide 48, «An example of SWC configuration».

### 48. An example of SWC configuration
- **Scopo:** Confrontare gli approcci descritti nel deck, attraverso «An example of SWC configuration».
- **Traccia:** Leggere la configurazione SWC per obiettivo e trasformazioni abilitate.
- **Transizione:** Passare alla slide 49, «SWC can run in a browser thanks to WASM».

### 49. SWC can run in a browser thanks to WASM
- **Scopo:** Segnare un passaggio nella sezione «Bundler e alternative».
- **Traccia:** Usare «SWC can run in a browser thanks to WASM» come domanda o pausa visiva prima del prossimo passaggio. Confrontare gli approcci descritti nel deck.
- **Transizione:** Passare alla slide 50, «Vite».

### 50. Vite
- **Scopo:** Segnare un passaggio nella sezione «Bundler e alternative».
- **Traccia:** Usare «Vite» come domanda o pausa visiva prima del prossimo passaggio. Confrontare gli approcci descritti nel deck.
- **Transizione:** Passare alla slide 51, «A little insights into Vite».

### 51. A little insights into Vite
- **Scopo:** Confrontare gli approcci descritti nel deck, attraverso «A little insights into Vite».
- **Traccia:** Distinguere server di sviluppo ESM, HMR e build di produzione; le note richiamano CJS contro ESM.
- **Transizione:** Passare alla slide 52, «Vite leverages existing tools».

### 52. Vite leverages existing tools
- **Scopo:** Confrontare gli approcci descritti nel deck, attraverso «Vite leverages existing tools».
- **Traccia:** Mostrare quali strumenti Vite coordina nella versione illustrata.
- **Transizione:** Passare alla slide 53, «Snowpack».

### 53. Snowpack
- **Scopo:** Segnare un passaggio nella sezione «Bundler e alternative».
- **Traccia:** Usare «Snowpack» come domanda o pausa visiva prima del prossimo passaggio. Confrontare gli approcci descritti nel deck.
- **Transizione:** Passare alla slide 54, «And now something completely different™».

### 54. And now something completely different™
- **Scopo:** Confrontare gli approcci descritti nel deck, attraverso «And now something completely different™».
- **Traccia:** Contestualizzare Snowpack e Skypack come approcci storici alla distribuzione di moduli.
- **Transizione:** Passare alla slide 55, «The greatest gain in new bundlers», aprendo la sezione «Scelte e conclusioni».

### 55. The greatest gain in new bundlers
- **Scopo:** Separare tendenze storiche e criteri riutilizzabili, attraverso «The greatest gain in new bundlers».
- **Traccia:** Il costo del feedback incrementale non equivale a una compilazione completa sempre O(1).
- **Transizione:** Passare alla slide 56, «Take home lessons».

### 56. Take home lessons
- **Scopo:** Separare tendenze storiche e criteri riutilizzabili, attraverso «Take home lessons».
- **Traccia:** Presentare le previsioni del deck come tendenze dell'epoca; chiudere sui criteri di scelta e sul valore della concorrenza.
- **Transizione:** Passare alla slide 57, «Working hard and working smart can be two different things.».

### 57. Working hard and working smart can be two different things.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «Working hard and working smart can be two different things.», attribuita nella slide a Byron Dorgan. Collegarla al tema: Capire parsing, trasformazione e bundling permette di scegliere strumenti e compromessi invece di subire la complessità della toolchain.
- **Transizione:** Passare alla slide 58, «End».

### 58. End
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
