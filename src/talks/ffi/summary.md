# FFI: Crossing the Native Boundary in Node.js

## Impostazione

Presentazione in inglese, guida in italiano. Nessuna nota incorporata nelle slide: approfondimenti, fonti e transizioni sono raccolti qui.

Messaggio centrale: FFI permette di riutilizzare librerie native da JavaScript attraverso un contratto binario esplicito. Portarlo in core richiede un'API comprensibile, una gestione rigorosa dei confini e ottimizzazioni che preservino il comportamento del percorso generico.

La versione NodeConf contiene **53 slide**: esempi concreti e una spiegazione essenziale delle ottimizzazioni. `add_i32(20, 22)` collega API, costo della chiamata, shared buffer e un breve pseudocodice dell'adattatore (45). La parte sui trampolini si limita al loro ruolo di adattatori, alla preparazione una tantum e al riuso nelle chiamate ottimizzate. Gli esempi usano il rendering nativo di Freya, con righe più corte e commenti essenziali. Tutti gli 11 separatori usano immagini del talk e nessuno ha icone. Le slide 17, 23 e 51 usano il layout `image` fullscreen. Colori dei separatori: fuchsia apertura (2), blue dipendenza (4), amber casi d'uso/API/performance (8, 24, 35), red npm/responsabilità (11, 26), sky esempio (14), pink receiver (40), orange esito (43), green fallback (48). Logo nero nelle slide 2, 4 e 48; bianco nelle 17 e 51. Alle 14 illustrazioni si aggiungono quattro diagrammi Excalidraw (36, 37, 39, 41), con sorgenti in `diagrams/` e PNG in `assets/`. Le tabelle benchmark della 49 e del confronto percentuale con Koffi (50) sono ASCII in `slides.yml`, con intestazione e note HTML.

Crediti concordati: Bryan English per l'esplorazione originale, le prime ottimizzazioni e l'idea dei trampolini; Colin Ihrig per il rilancio e la PR #62072. Paolo ha confermato di avere realizzato l'implementazione finale della #62072, chiedendo di lasciare a Colin il credito nel racconto. La #63068 è presentata come implementazione di Paolo con Bryan coautore. Citare anche il contributo di Anna Henningsen nelle alternative sul receiver V8 e quello di tianxiadys nel 2025.

Riferimento temporale: ricerca storica del 23 settembre 2026; API, guida degli internals ed emitter AArch64 ricontrollati il 27 settembre 2026. L'abstract e le slide descrivono il landing già avvenuto. Il modulo è sperimentale, introdotto in Node.js 26.1.0. La documentazione corrente indica l'abilitazione di default nelle build con supporto FFI, disattivabile con `--no-experimental-ffi`; con Permission Model serve `--allow-ffi`. Per versioni precedenti può essere necessario `--experimental-ffi`.

Durata proposta, da adattare allo slot NodeConf: circa 35 minuti più domande. Slide 1–16: 8 minuti; 17–23: 4 minuti; 24–34: 9 minuti; 35–48: 10 minuti; 49–53: 4 minuti. La parte sui trampolini deve rimanere al minimo indispensabile: spiegare perché serve un adattatore, quando viene preparato e come viene riutilizzato. Lo pseudocodice della slide 45 richiede soltanto una breve lettura. I separatori sono brevi passaggi di ritmo. La durata effettiva non è ancora confermata. Le due slide Platformatic su Booking.com e Supabase attendono contenuti e dati da Luca: non sono incluse nel conteggio.

## Traccia slide per slide

### 1. FFI: Crossing the Native Boundary in Node.js
- **Scopo:** presentare il tema e la promessa del talk.
- **Traccia:** partire dall'utilità pratica, poi raccontare come si è arrivati al modulo e al fast path.
- **Transizione:** non tutto il codice utile deve essere riscritto.

### 2. Not everything needs a rewrite.
- **Scopo:** apertura provocatoria nel tono degli altri talk.
- **Traccia:** una libreria nativa collaudata non diventa meno utile solo perché l'applicazione è scritta in JavaScript.
- **Transizione:** breve presentazione personale prima di entrare nel problema.

### 3. Hello
- **Scopo:** usare la presentazione standard del tema.
- **Traccia:** ruolo nel Node.js TSC e in Platformatic, collegando l'esperienza al lavoro sul runtime. Non aggiungere episodi personali non confermati.
- **Transizione:** la prossima dipendenza potrebbe appartenere a un altro ecosistema.

### 4. Your next dependency might not be in JavaScript.
- **Scopo:** rendere concreto il bisogno di interoperabilità.
- **Traccia:** SDK di un dispositivo, codec o motore già disponibile come libreria condivisa. Non serve avviare un servizio separato per ogni integrazione.
- **Transizione:** dare un nome a questo collegamento.

### 5. What is FFI?
- **Scopo:** definire Foreign Function Interface senza presupporre conoscenze native.
- **Traccia:** una chiamata nello stesso processo a un simbolo esportato. Il confine è fra rappresentazioni e convenzioni binarie, non necessariamente fra due runtime gestiti. Rust, Zig e C++ devono esporre entry point compatibili con la ABI C; non si invocano arbitrariamente oggetti C++ o Rust.
- **Transizione:** il contratto che rende possibile la chiamata è la ABI.

### 6. The ABI is the contract
- **Scopo:** distinguere API e ABI.
- **Traccia:** nome e firma non bastano senza accordo su dimensioni, allineamento, registri e stack. Non approfondire ancora assembly o differenze fra architetture.
- **Transizione:** prima di vedere i problemi, chiarire perché valga la pena attraversare il confine.

### 7. Why should we care?
- **Scopo:** spiegare il valore pratico.
- **Traccia:** riuso, accesso a funzionalità specializzate, JavaScript come coordinatore. Il beneficio non è automaticamente una maggiore velocità: una libreria può essere interessante anche solo perché esiste ed è affidabile.
- **Transizione:** partire da casi d'uso concreti e aprire all'immaginazione.

### 8. What can we build?
- **Scopo:** introdurre i casi d'uso con il separatore aggiunto da Paolo.
- **Traccia:** porre la domanda al pubblico prima di mostrare alcuni esempi. `coffee.png` rende concreta l'idea di collegare un dispositivo: è un'illustrazione, non una demo documentaria di un'integrazione realizzata.
- **Transizione:** partire da media e hardware, poi lasciare spazio all'immaginazione.

### 9. What can we build?
- **Scopo:** mostrare possibilità comprensibili.
- **Traccia:** immagini/audio, hardware e “And much more…”. Chiudere con “Your imagination is the limit.”: gli esempi non esauriscono le possibilità. Sono casi d'uso possibili, non progetti personali dichiarati.
- **Transizione:** introdurre Destino come esempio concreto e un po' assurdo.

### 10. Yes, even Doom.
- **Scopo:** dare a Destino una slide dedicata e un accesso diretto al repository.
- **Traccia:** “Node.js, a native game engine, and a terminal. Because why not?” Collegare l'immaginazione della slide precedente al progetto reale: Node.js, doomgeneric, OpenTUI e SDL_mixer. Il QR code e l'URL leggibile puntano a https://github.com/platformatic/destino.
- **Transizione:** il pubblico può giustamente chiedere se npm non offrisse già tutto questo.

### 11. Couldn't we just npm install it?
- **Scopo:** introdurre le soluzioni userland prima della motivazione per il core.
- **Traccia:** sì, e il loro lavoro è parte della storia. La domanda utile è quali contratti e costi offrano.
- **Transizione:** confronto concreto fra tre progetti.

### 12. Userland got here first
- **Scopo:** spiegare limiti e differenze senza generalizzare che tutti i pacchetti siano rotti.
- **Traccia:** le tre colonne hanno nomi cliccabili e QR: `node-ffi-napi`, Koffi e `node-ffi-rs`. `ffi-napi` documenta proprietà poco definite rispetto a GC e multithreading, raccomanda di evitare il multithreading e segnala overhead significativo. Come approfondimento orale, `ref-napi` fornisce strumenti per tipi e puntatori, non è da solo un motore FFI. Koffi offre prebuilt sulle piattaforme ufficialmente supportate, strutture per valore, callback e chiamate asincrone: non attribuirgli i limiti di `ffi-napi`. `ffi-rs` usa Rust e Node-API, con propria matrice di piattaforme e regole di memoria/threading.
- **Transizione:** il core risponde a un obiettivo diverso da quello di dichiarare un vincitore fra pacchetti.

### 13. Why put FFI in core?
- **Scopo:** motivare l'integrazione nel runtime con distribuzione, integrazione e manutenzione multipiattaforma.
- **Traccia:** il bridge non è più un addon nativo da installare separatamente; la libreria chiamata rimane da distribuire per piattaforma. Il core coordina V8, environment e permessi. Il terzo elemento riguarda la responsabilità di costruire e testare il bridge e il supporto alle ABI insieme a Node.js sulle piattaforme supportate, senza promettere che ogni firma usi lo stesso percorso ottimizzato ovunque. Non dire che Node-API sia priva di stabilità ABI: è proprio progettata per offrirla. Addon dedicati restano appropriati per integrazioni complesse; Koffi può offrire funzionalità oltre l'attuale superficie di `node:ffi`.
- **Transizione:** vedere quanto diventa piccolo un primo utilizzo.

### 14. Let's get to the action!
- **Scopo:** segnalare il passaggio dall'introduzione all'esempio pratico.
- **Traccia:** usare `@talk/action.png` come cambio di ritmo prima del codice.
- **Transizione:** introdurre una funzione C minima e familiare.

### 15. Start with a native function
- **Scopo:** fissare una firma concreta prima del codice JavaScript.
- **Traccia:** `int32_t add_i32(int32_t, int32_t)` è un esempio didattico, non un motivo per spostare le somme fuori da JavaScript. La libreria deve esportare il simbolo: per Windows usare le appropriate opzioni di export; con C++ serve anche un entry point `extern "C"`. Gli argomenti 20 e 22 non causano overflow signed.
- **Transizione:** descrivere la medesima firma dal lato JavaScript.

### 16. Load. Describe. Call.
- **Scopo:** mostrare l'API essenziale e il cleanup.
- **Traccia:** `suffix` fornisce l'estensione, non compila né rende portabile il binario. `dlopen` restituisce `lib` e `functions`. Il file `mylib` è una libreria di esempio da compilare prima, non un asset incluso. `using handle` chiude la libreria a fine scope, come negli esempi successivi. Il codice C e la versione precedente degli esempi erano stati eseguiti con Node.js 26.10.0 su macOS, ottenendo i risultati indicati; la revisione di leggibilità del 28 settembre non costituisce una nuova esecuzione degli esempi.
- **Transizione:** questa semplicità esterna ha richiesto anni di lavoro.

### 17. A small API. A long journey.
- **Scopo:** aprire la storia del progetto.
- **Traccia:** la slide fullscreen usa `sequence.png` e il logo bianco. La successione dei prototipi sul banco visualizza le iterazioni: passare dalla prospettiva dell'utente a quella di chi costruisce il runtime.
- **Transizione:** partire dal lavoro di Bryan nel 2023.

### 18. 2023: Bryan starts crossing
- **Scopo:** attribuire l'esplorazione originale a Bryan English.
- **Traccia:** #46905, aperta il 1 marzo 2023, parte dall'esperienza con `sbffi`. Bryan sceglie `libffi` al posto di `dyncall` per la copertura delle piattaforme. La proposta iniziale non supporta callback o strutture per valore. Esistono anche antecedenti di TooTallNate nel 2015 (#1750, #1759, #1762, #1865): il 2023 è l'inizio della linea narrativa scelta, non la prima idea FFI nella storia di Node.js.
- **Transizione:** già la prima PR pone le domande difficili.

### 19. The hard part was never just calling C
- **Scopo:** rendere visibile la complessità dietro una API piccola.
- **Traccia:** proprietà della memoria, callback e supporto multipiattaforma. La libreria chiamata è codice fidato con accesso al processo; FFI non è un sandbox. Non promettere memory safety grazie alla sola validazione degli argomenti.
- **Transizione:** altri contributori riprendono questi problemi.

### 20. 2025: the idea keeps moving
- **Scopo:** riconoscere il passaggio intermedio di tianxiadys.
- **Traccia:** nei tre elementi orizzontali, #57761 (aperta il 5 aprile 2025) riconosce esplicitamente il lavoro di Bryan; le forme `UnsafePointer`, `UnsafePointerView` e `UnsafeCallback` e le questioni su callback, permessi e libffi restano proposte di quella iterazione. Non presentare questa API come quella poi pubblicata.
- **Transizione:** Colin riapre la discussione nel 2026.

### 21. 2026: Colin restarts the conversation
- **Scopo:** dare a Colin il credito concordato per il rilancio e la #62072.
- **Traccia:** apertura il 2 marzo 2026, lavoro collaborativo e landing il 14 aprile 2026; nelle slide le date inglesi sono “March 2nd, 2026” e “April 14th, 2026”. Il link a `node:ffi` nell'ultimo elemento apre la documentazione. GitHub mostra la PR chiusa, ma il commento di landing e il commit `d0fa608c0796` confermano l'integrazione. Non confondere la data di landing con quella della release.
- **Transizione:** il risultato più visibile è la forma dell'API.

### 22. Finding the API that fits Node.js
- **Scopo:** presentare tre scelte di design.
- **Traccia:** i tre elementi orizzontali riassumono `DynamicLibrary`, firme esplicite (`arguments` e `return`) e operazioni di memoria esplicite. #62762 completa helper ed errori. Gli alias delle proprietà delle firme sono stati rimossi in #63482; usare i nomi correnti negli esempi.
- **Transizione:** il modulo entra nelle release Node.js.

### 23. Welcome, `node:ffi`.
- **Scopo:** segnare il passaggio da proposta a modulo disponibile.
- **Traccia:** la slide fullscreen usa `@talk/welcome.png`, con il piccolo robot in una culla come metafora della nascita del modulo. Il sottotitolo è “Introduced as experimental in Node.js 26.1.0.”. Abilitazione e disponibilità dipendono dalla versione e dalla build; Permission Model richiede `--allow-ffi`. La #65475 abilita il modulo di default, ma non lo rende stabile.
- **Transizione:** chiedere come si usa concretamente.

### 24. How do I use it?
- **Scopo:** aprire con una domanda la spiegazione dei contratti d'uso dell'API.
- **Traccia:** il separatore usa `cow.png`. Collegarsi all'esempio già visto: «Abbiamo visto la chiamata più semplice; ora vediamo quali contratti dobbiamo rispettare». Tipi e memoria approfondiscono l'uso dell'API senza ricominciare da capo.
- **Transizione:** iniziare dalle firme.

### 25. Types are part of the call
- **Scopo:** spiegare la corrispondenza fra valori JS e tipi nativi.
- **Traccia:** mostrare `identity_u64` e il valore `9_007_199_254_740_993n`: un `number` perderebbe precisione prima ancora di attraversare il confine. Lo snippet prosegue con una libreria `lib` già aperta; il simbolo C ha corpo `return value;`. Interi piccoli e float usano `number`, argomenti int64/uint64 usano `bigint` nella API verificata. Non confondere questa regola con i setter di memoria. Le firme non vengono dedotte dagli header e `bool` è un alias numerico uint8, non un boolean JavaScript.
- **Transizione:** prima dei puntatori, ricordare che il controllo su memoria e firme comporta responsabilità.

### 26. With great power comes great responsibility™
- **Scopo:** cambio di tono prima di spiegare la sicurezza della memoria.
- **Traccia:** il separatore rosso usa `@talk/spider-panda.png`. La validazione dei tipi non garantisce che un puntatore sia valido, posseduto o ancora vivo.
- **Transizione:** un indirizzo non è un modello di ownership.

### 27. A pointer is not an ownership model
- **Scopo:** distinguere indirizzo, memoria e durata.
- **Traccia:** le stringhe diventano UTF-8 NUL-terminated temporaneo; il backing store dei buffer deve restare valido durante la chiamata. `toBuffer(ptr, length)` copia; `toBuffer(ptr, length, false)` crea una vista. `getRawPointer` non mantiene magicamente viva o immobile la memoria. #62818 documenta il rispetto della protezione delle pagine; #62857 corregge gli accessi agli ArrayBuffer.
- **Transizione:** rendere concreto il prestito di memoria con una funzione C che legge un buffer.

### 28. Borrow bytes, not ownership
- **Scopo:** rendere visibili i limiti dell'accesso nativo alla memoria.
- **Traccia:** `sum_bytes` riceve un indirizzo e una lunghezza, legge esattamente quell'intervallo e non conserva il puntatore. La lunghezza è `uint32_t`, non `size_t`: la firma non dipende dalla larghezza di `size_t`. L'accumulatore unsigned ha wrap definito modulo 2^32. Nessuna validazione FFI può dimostrare che una lunghezza arbitraria corrisponda alla memoria realmente disponibile.
- **Transizione:** prestare a questa funzione lo storage di un Buffer JavaScript.

### 29. A Buffer crosses the boundary
- **Scopo:** mostrare una chiamata completa con dati binari e cleanup.
- **Traccia:** `[10, 20, 12]` produce 42. Il payload non viene copiato e la proprietà rimane JavaScript. Lo storage deve rimanere vivo e stabile durante la chiamata, anche se codice rientrante fosse coinvolto. `using handle` chiude la libreria a fine scope; non autorizza C a conservare il puntatore. Non chiamare l'intera operazione «senza conversioni»: il bridge deve comunque ottenere il puntatore e preparare la chiamata.
- **Transizione:** rendere esplicito l'ordine generale del cleanup.

### 30. Cleanup has an order
- **Scopo:** spiegare la durata della libreria e delle risorse associate.
- **Traccia:** fermare attività e callback, usare il deallocatore previsto dalla libreria, chiudere il handle. La chiusura rende invalide le funzioni risolte, ma non revoca puntatori già consegnati a codice nativo. GC e `Symbol.dispose` non possono conoscere tutti gli usi esterni. #63024 e #64860 mostrano problemi reali di lifetime.
- **Transizione:** le callback rendono il contratto bidirezionale.

### 31. Callbacks cross the other way
- **Scopo:** spiegare la direzione C → JavaScript.
- **Traccia:** `registerCallback` crea un puntatore usando una closure libffi. Invocazione sul thread creatore, nessun throw, nessuna Promise e ritorno compatibile. Non chiudere la libreria o deregistrare la callback mentre è attiva. Una funzione con tipo `function` non usa il fast path attuale; le closure callback restano distinte dai trampolini downcall.
- **Transizione:** vedere una libreria che invoca una callback esattamente una volta.

### 32. C calls JavaScript, then returns
- **Scopo:** rendere esplicito il contratto nativo della callback.
- **Traccia:** `apply_once` chiama il puntatore sul thread corrente e restituisce il risultato. Non avvia thread e non conserva l'indirizzo. Sono proprietà di questa funzione C, non garanzie che FFI impone automaticamente a ogni libreria.
- **Transizione:** registrare una funzione JavaScript con la stessa firma.

### 33. Register. Call. Unregister.
- **Scopo:** mostrare creazione, utilizzo e rilascio di una callback reale.
- **Traccia:** la callback identità restituisce 42 senza throw, Promise o rischio di overflow della moltiplicazione. Il parametro C è dichiarato `function`, quindi questa downcall non usa il Fast API path. La callback usa comunque una closure libffi. Nel `finally`, `apply_once` è già terminata e non conserva il puntatore: è il momento corretto per deregistrarlo. A fine scope `using` chiude la libreria.
- **Transizione:** chiamata nativa e callback restano sincrone sul thread corrente.

### 34. Native does not mean asynchronous
- **Scopo:** correggere un'aspettativa comune.
- **Traccia:** una chiamata sincrona blocca il thread che la esegue. Un worker può isolare lavoro adatto, ma libreria, stato globale e callback devono rispettare le regole native. `getCurrentEventLoop`, #64323, restituisce il `uv_loop_t` dell'environment corrente; disponibile da 26.6.0 secondo la documentazione. Non è un sostituto di una API asincrona.
- **Transizione:** anche una chiamata breve ha un costo.

### 35. It works. But how fast?
- **Scopo:** aprire la parte di performance.
- **Traccia:** il separatore è amber, una domanda sul costo della chiamata; spostare il focus dalla durata del lavoro nativo al costo di attraversamento.
- **Transizione:** scomporre il percorso generico.

### 36. Every crossing has a cost
- **Scopo:** spiegare dove nasce l'overhead.
- **Traccia:** seguire il diagramma Excalidraw a serpentina: `add_i32(20, 22)`, callback V8, validazione/conversione C++, preparazione ABI con libffi, funzione C e conversione di 42 in un numero JavaScript. Il diagramma sostituisce il precedente blocco ASCII. Il codice C fa una sola somma: qui interessa il costo del tragitto, non accelerare l'addizione.
- **Transizione:** Bryan interviene sul passaggio degli argomenti.

### 37. First optimizations
- **Scopo:** attribuire a Bryan lo shared-buffer path.
- **Traccia:** layout `side`, testo HTML a sinistra e diagramma verticale a destra. Il testo attribuisce il percorso a Bryan English, collega la #62918 e spiega beneficio e riuso dell'ArrayBuffer. Nel PNG restano solo blocchi, frecce ed etichette brevi. Leggere dall'alto: JS valida e prepara gli argomenti, li scrive nell'ArrayBuffer condiviso con C++, C++ legge gli slot, libffi invoca la funzione C. Un ArrayBuffer per funzione, riutilizzato; “shared” non significa SharedArrayBuffer fra worker. Il messaggio è meno overhead, ancora libffi. La proposta originale copriva firme numeriche e puntatori; la documentazione corrente descrive un percorso più ampio con fallback per valori pointer-like che richiedono conversione.
- **Transizione:** mostrare gli offset reali degli slot per i due argomenti.

### 38. Pack once per call, reuse the storage
- **Scopo:** spiegare concretamente il lavoro rimosso dallo shared buffer.
- **Traccia:** pseudocodice degli internals, non API pubblica né snippet eseguibile da solo. Un ArrayBuffer per funzione: slot da 8 byte, risultato a offset 0, argomenti a 8 e 16. Ogni chiamata valida e scrive gli int32, poi entra in C++ senza argomenti JS. Il nativo copia gli argomenti prima di chiamare libffi, così la rientranza non sovrascrive gli argomenti della chiamata esterna. Si riutilizza lo storage, non si evita il packing a ogni chiamata. Lo stesso `add_i32` può illustrare questo percorso quando Fast API non è disponibile; non è un selettore pubblico.
- **Transizione:** per eliminare anche libffi dal percorso caldo scalare serve un ingresso diverso.

### 39. V8 already knows a faster route
- **Scopo:** introdurre Fast API senza attribuirle capacità magiche.
- **Impaginazione:** le due frasi esplicative sono testo HTML sopra il diagramma; nel PNG rimangono solo blocchi, frecce ed etichette, incluso “No compile-time adapter available” al centro.
- **Traccia:** diagramma orizzontale: V8 Fast API a sinistra, `add_i32` a destra. Al centro, il riquadro rosso tratteggiato “No compile-time adapter available” evidenzia l'assenza di un adattatore precompilato per la firma caricata a runtime. V8 passa `(receiver, a, b)`, mentre C si aspetta `(a, b)`. La 41 riprende gli stessi contratti in verticale. Non eseguire una chiamata ABI incompatibile e non attribuirle un risultato numerico deterministico. I metadati dei tipi possono essere costruiti a runtime: il punto è la forma della chiamata.
- **Transizione:** isolare l'argomento inatteso: il receiver JavaScript.

### 40. One unexpected argument.
- **Scopo:** creare un momento di scoperta.
- **Traccia:** il separatore rosa mette in evidenza il receiver appena mostrato: occupa il primo argomento nativo del fast callback. Un simbolo C ordinario non se lo aspetta. Nella discussione un tentativo senza receiver sembrava funzionare ma non percorreva davvero la fast call.
- **Transizione:** adattare la chiamata con un piccolo trampolino.

### 41. A tiny adapter bridges the gap
- **Scopo:** spiegare soltanto perché serve un trampolino.
- **Preparazione:** il testo HTML esplicita “allocate RW → emit code → flush instruction cache → protect RX”. RW significa leggibile/scrivibile; RX leggibile/eseguibile, non più scrivibile. Avviene durante la preparazione dell'adattatore, non a ogni chiamata. Ordine verificato il 28 settembre 2026 nell'emitter ARM64: `AllocateCode`, emissione, `FlushCode`, `ProtectCode`; su POSIX il cambio avviene con `mprotect(PROT_READ | PROT_EXEC)`. Se la protezione fallisce, l'emitter libera la memoria e rifiuta il fast path. Fonte: https://github.com/nodejs/node/blob/main/src/ffi/platforms/arm64.cc.
- **Traccia:** layout `side`, come la 37: spiegazioni HTML a sinistra, diagramma verticale a destra con sole etichette nei blocchi. Dall'alto: V8, adattatore arancio, funzione nativa. Riprendere le firme della 39. «Il trampolino sposta a e b nelle posizioni attese dalla funzione nativa, senza passarle il receiver. La somma restituisce sempre 42». Attribuire a Bryan l'idea e gli esperimenti della #63140.
- **Transizione:** per ottenere questo adattamento sono state esplorate più soluzioni.

### 42. We explored more than one route
- **Scopo:** raccontare i compromessi reali della review.
- **Traccia:** nei due elementi orizzontali: generare wrapper con un compilatore (Cranelift, MIR e altre opzioni) oppure modificare V8 per omettere il receiver. Anna suggerisce di intervenire sul contratto V8; Bryan prova questa strada nella #63140. Il landing usa emitter mirati, non Cranelift/MIR o la patch no-receiver. La #63140 è stata parzialmente incorporata e superata dalla #63068.
- **Transizione:** dopo le esplorazioni, chiedere che cosa è stato integrato.

### 43. So, what happened?
- **Scopo:** creare una pausa narrativa fra le alternative considerate e la scelta integrata.
- **Traccia:** separatore arancione con `@talk/dog.png`: lasciare un momento di suspense, senza ripercorrere le opzioni.
- **Transizione:** annunciare il landing della Fast FFI.

### 44. We brought it home!
- **Scopo:** presentare il contributo di Paolo e Bryan nella soluzione integrata.
- **Traccia:** «La #63068 è stata integrata il 16 giugno 2026, con Bryan coautore. Le chiamate idonee possono usare Fast API, mantenendo la stessa API pubblica». Fermarsi al risultato del lavoro e ai crediti.
- **Transizione:** rendere concreto l'adattatore con la somma già vista.

### 45. The adapter, in pseudocode
- **Scopo:** mostrare il ruolo dell'adattatore in poche righe.
- **Traccia:** una sola slide, senza etichetta `adapter:`, con un commento breve per ogni operazione. `stp` decrementa sp di 16 e salva x29/x30: il `!` aggiorna sp prima del salvataggio, mantenendo l'allineamento a 16 byte. x29 è il frame pointer convenzionale, ma qui viene solo salvato, non impostato. x30 contiene il ritorno a V8. `CHECK_LIBRARY_OPEN` è simbolica: se la libreria è chiusa, segnala l'errore JS, ripristina registri e stack e ritorna senza chiamare C. `mov x0, x1` sposta a al posto del receiver; `mov x1, x2` sposta b nella seconda posizione C. L'ordine evita di perdere a. wN indica i 32 bit bassi di xN, quelli rilevanti per gli int32. `LOAD_ADDRESS` è simbolica e carica in x16 l'indirizzo già risolto, ad esempio con movz/movk; non cerca il simbolo a ogni chiamata. `blr x16` chiama il target e salva in x30 il ritorno all'istruzione successiva; C restituisce 42 in w0. `ldp` recupera x29/x30 e poi incrementa sp di 16, preservando w0. `ret` torna a V8 tramite x30, lasciando il risultato in w0. La slide usa `asm` e commenti con `;` per la grammatica Assembly generica: è pseudocodice didattico, non sorgente ARM64 da assemblare.
- **Transizione:** questo adattatore viene preparato una volta e riutilizzato.

### 46. Prepared once. Reused on every fast call.
- **Scopo:** far ricordare che la preparazione non si ripete a ogni chiamata.
- **Traccia:** «Quando crea una funzione idonea, Node prepara un adattatore per la sua firma e la piattaforma corrente. Le chiamate ottimizzate lo riutilizzano. Non generiamo codice a ogni chiamata: le differenze fra piattaforme sono gestite dall'implementazione».
- **Transizione:** l'adattatore è uno dei tre modi con cui Node può attraversare il confine.

### 47. Three paths, one contract
- **Scopo:** riassumere i percorsi con una frase ciascuno.
- **Traccia:** generico: conversioni in C++ e chiamata tramite libffi. Shared buffer: preparazione degli argomenti in JavaScript, ancora con libffi. Fast API: il codice JavaScript ottimizzato passa attraverso l'adattatore generato. Chiudere con «Node selects the path. Your API stays the same». La scelta è interna a Node; usare la stessa API non significa che ogni chiamata percorra il fast path.
- **Transizione:** il fallback è una scelta architetturale positiva.

### 48. Fallback is part of the design.
- **Scopo:** far ricordare il contratto di correttezza.
- **Traccia:** `slide.png` accompagna il separatore verde con logo nero. «Se l'ottimizzazione non è applicabile, una chiamata supportata continua a funzionare attraverso un altro percorso». Il messaggio è che il fallback fa parte del progetto.
- **Transizione:** vedere in quali casi il fast path cambia davvero le misure.

### 49. How fast is Fast FFI?
- **Impaginazione:** intestazione con data/hardware e note finali in HTML; al centro una tabella ASCII monospaziata con `language: none`, direttamente in `slides.yml`.
- **Scopo:** mostrare misure confrontabili, il contesto del confronto e il motivo del caso senza miglioramento.
- **Traccia:** nuove misure del 28 settembre 2026, in ns/chiamata (meno è meglio). Colonne: Koffi 3.3.1 e ffi-rs 1.3.7 su Node ufficiale 26.4.0; Node 26.1.0 compilato localmente con `use_sb = false`; Node ufficiale 26.1.0 con shared buffer; Node ufficiale 26.4.0 con Fast API. Su `identity-i32` le mediane sono 22.08 / 1638.61 / 78.12 / 53.76 / 2.13 ns. Su `add-i32`: 26.65 / 2020.85 / 87.73 / 70.25 / 2.21 ns. Per `sum-8-i32`: 51.51 / 4178.95 / 122.69 / 124.65 / 124.73 ns. Per `sum-buffer`, 64 B: 43.42 / 2060.27 / 107.78 / 83.78 / 14.04 ns; 1 KiB: 97.19 / 2094.26 / 161.94 / 138.32 / 68.80 ns; 16 KiB: 964.40 / 2986.33 / 1037.58 / 1006.89 / 931.89 ns. `add_i32(20, 22)` riprende l'esempio del talk e usa il fast path; il rapporto shared/Fast API è 31.77× e Koffi/Fast API 12.05×, calcolati dalle mediane non arrotondate. Koffi vince nel caso a otto argomenti, che su ARM64 non usa Fast API; aumentando il lavoro nativo, le differenze relative si riducono.
- **Metodo:** Apple M2 Max ARM64, 64 GiB, macOS 27.0 (26A428). Fixture C comune, compilata una volta per tutte le configurazioni con Apple clang 21.0.0 e `-O3 -dynamiclib`. Quindici processi indipendenti per caso/configurazione, 450 campioni totali; 500 ms di warm-up e almeno 500 ms di misura per processo, ordine ruotato e nessuna esecuzione parallela. Preparazione degli input, caricamento e controlli di correttezza fuori dalla misura; eventuali allocazioni interne alle API restano incluse. Le mediane includono overhead del loop e conversione del risultato. Nessuna sottrazione di un loop vuoto. L'IQR relativo alla mediana varia circa fra 0.63% e 4.73% nelle 30 celle.
- **Fonte riproducibile:** suite locale in `~/Sandbox/ffi-benchmarks`; risultati definitivi in `results/2026-09-28T15-55-03.243Z/` (`metadata.json`, `samples.jsonl`, `summary.json`, `summary.md`, snapshot dei sorgenti in `sources/`). `summary.json` contiene anche quartili, estremi e rapporti; pilot e precedente raccolta a cinque casi non entrano nei risultati della slide. Hash dei binari e della fixture nei metadati. Revisioni: v26.1.0 `e7da6f056ac4afeaaf012042188818ca7736f437`; v26.4.0 `2022edf3e32ce28ee08b17f8566243a090dacd95`. Binari ufficiali scaricati con `n`; configurazione locale `./configure --ninja`, poi `make`. La sola patch sorgente imposta `use_sb = false`.
- **Percorsi verificati:** metadati interni confermano lo shared buffer e il fallback a otto argomenti; i grafi TurboFan della 26.4.0 mostrano nodi `FastApiCall` nei loop `runIdentity`, `runAdd` e `runBuffer`. Diagnostica separata dalle misure. `sum-buffer` in Node/Koffi passa un puntatore BigInt pre-calcolato e una lunghezza BigInt: non misura l'entrypoint Fast Buffer che riceve direttamente un Buffer.
- **ffi-rs:** è il pacchetto npm del progetto node-ffi-rs, basato su Rust e N-API. Si misura l'API pubblica `define()`, riutilizzando l'array degli argomenti. Il wrapper richiama internamente `load()` a ogni invocazione e il relativo costo di gestione del descrittore resta incluso. `createPointer`/`unwrapPointer` preparano il buffer fuori dal loop; la chiamata riceve un External e lunghezza Number con tipo `U64`, mantenendo la stessa ABI C. `freePointer` libera l'allocazione dopo tutte le chiamate sincrone. Nessun wrapper personalizzato aggiuntivo nel loop misurato.
- **Limiti:** generic/shared comprende differenze fra build locale e ufficiale, quindi non isola esclusivamente lo shared buffer. Shared/Fast API confronta release diverse, con modifiche anche a V8 e libffi. Koffi e ffi-rs restituiscono Number per queste somme uint64 esattamente rappresentabili; Node restituisce BigInt. La normalizzazione per il controllo avviene fuori dal loop, ma il costo della conversione nativa di ciascuna API resta nella misura. Le due librerie userland sono riferimenti nominati, non una rappresentazione di tutte le alternative. Sono microbenchmark di chiamate sincrone a regime, non misure di latenza applicativa o garanzie universali. Nessun test di significatività è stato eseguito: quartili e campioni grezzi descrivono la variabilità.
- **Transizione:** dopo i numeri, tornare alla domanda iniziale: che cosa potremmo collegare?

### 50. Node.js Fast API vs Koffi
- **Scopo:** rendere immediato il confronto percentuale con Koffi, usando gli stessi campioni della slide 49.
- **Traccia:** throughput relativo a Koffi: `identity-i32` +937.09%; `add-i32` +1105.01%; `sum-8-i32` −58.70%; `sum-buffer` 64 B +209.20%, 1 KiB +41.25%, 16 KiB +3.49%. Formula: `(mediana Koffi ns/chiamata / mediana Node ns/chiamata − 1) × 100`, applicata ai valori non arrotondati. Un valore positivo indica più chiamate al secondo, non una riduzione percentuale equivalente della latenza.
- **Contesto:** entrambe le configurazioni usano il binario ufficiale Node 26.4.0; Koffi è 3.3.1. Il caso a otto argomenti è esplicitamente marcato come fallback shared buffer su ARM64: qui vince Koffi. Restano validi i limiti della slide 49, inclusa la differenza Number/BigInt per i risultati dei buffer. Nessuna nuova misurazione o affermazione di significatività.
- **Transizione:** dopo i numeri, tornare alla domanda iniziale: che cosa potremmo collegare?

### 51. What will you connect next?
- **Scopo:** invito finale all'uso consapevole.
- **Traccia:** slide fullscreen con `next.png` e logo bianco: il robot offre un attrezzo a chi guarda. Pensare a una libreria già disponibile che oggi richiede troppo glue code; iniziare da una superficie C piccola e documentata.
- **Transizione:** lasciare la domanda aperta e passare all'invito a inventare il futuro.

### 52. The best way to predict the future is to invent it.
- **Scopo:** chiudere con un invito a costruire nuove possibilità, dopo la domanda al pubblico.
- **Traccia:** citazione di Alan Kay, pioniere del personal computing e di Smalltalk. Collegare l'idea di inventare il futuro al riuso creativo delle librerie native attraverso `node:ffi`, senza attribuirgli un commento specifico sul progetto.
- **Fonte:** https://quoteinvestigator.com/2012/09/27/invent-the-future/
- **Transizione:** ringraziamento e domande.

### 53. End
- **Scopo:** usare la chiusura standard con contatti del tema.
- **Traccia:** ringraziare e aprire le domande su API, internals e compromessi.
- **Transizione:** Q&A.

## Fonti principali

- [API corrente di node:ffi](https://github.com/nodejs/node/blob/main/doc/api/ffi.md), ricontrollata il 27 settembre 2026: firme, tipi, callback, cleanup, percorsi e disponibilità.
- [FFI Fast API internals](https://github.com/nodejs/node/blob/main/doc/contributing/ffi-fast-api-internals.md): implementazione e limiti ABI.
- [#46905 — Bryan, esplorazione originale](https://github.com/nodejs/node/pull/46905).
- [#57761 — tianxiadys, iterazione del 2025](https://github.com/nodejs/node/pull/57761).
- [#62072 — Colin, introduzione del modulo](https://github.com/nodejs/node/pull/62072); [commit di landing](https://github.com/nodejs/node/commit/d0fa608c0796).
- [#62762 — helper ed errori](https://github.com/nodejs/node/pull/62762).
- [#62818 — protezione della memoria](https://github.com/nodejs/node/pull/62818); [#62857 — ArrayBuffer](https://github.com/nodejs/node/pull/62857).
- [#62918 — shared-buffer path](https://github.com/nodejs/node/pull/62918).
- [#63140 — esperimenti di Bryan con Fast API e receiver](https://github.com/nodejs/node/pull/63140).
- [#63068 — Fast FFI integrato](https://github.com/nodejs/node/pull/63068), inclusa la discussione Cranelift/MIR/trampolini.
- [#63941 — altre piattaforme](https://github.com/nodejs/node/pull/63941).
- [#64323 — event loop](https://github.com/nodejs/node/pull/64323).
- [#65475 — abilitazione di default](https://github.com/nodejs/node/pull/65475); [#66086 — documentazione dei call path](https://github.com/nodejs/node/pull/66086).
- [ffi-napi README](https://github.com/node-ffi-napi/node-ffi-napi#readme): avvertenze GC/threading, requisiti di build e overhead, non risultati comparativi nuovi.
- [Koffi](https://koffi.dev/): funzionalità, piattaforme e prebuilt ufficialmente supportati.
- [ffi-rs README](https://github.com/zhangyuang/node-ffi-rs#readme): Rust/Node-API, piattaforme, memoria, callback e `runInNewThread`.
- [Destino](https://github.com/platformatic/destino): caso d'uso, insieme al talk presente in questo repository.

## Dettagli ancora da fornire

- Durata effettiva dello slot NodeConf ed eventuale versione Node.js richiesta dalla conferenza.
- Materiale di Luca per le due slide Platformatic, incluse affermazioni e misure autorizzate su Booking.com e Supabase.
- Eventuali episodi personali del lavoro di review: aggiungerli soltanto quando forniti da Paolo.
- Se si desidera un confronto riproducibile nuovo: commit esatti, hardware, warm-up, comandi e risultati contro release e pacchetti scelti. I numeri attuali sono fonti storiche, non misure eseguite per questa presentazione.
- Le 14 illustrazioni originali sono presenti e collegate: 11 PNG 1000×1120 e 3 PNG 2000×1120, a circa 150 DPI. Gli originali sono conservati in `assets/__originals/`. Crop centrato, tranne `coffee.png`, spostato a metà fra centro e bordo destro (x=192 sul resize 1256×1120). Le proposte in `context.md` sono soltanto eventuali varianti. I quattro diagrammi sono esportati dall'interfaccia Excalidraw a scala 2×, con sfondo trasparente e senza ritaglio del contenuto; i sorgenti sono in `diagrams/`. La tabella della 49 è ora ASCII resa da Freya.
