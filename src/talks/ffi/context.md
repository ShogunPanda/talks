# Brief immagini — FFI: Crossing the Native Boundary in Node.js

## A cosa serve questo documento

Questo brief è autosufficiente: può essere caricato nell'app ChatGPT per generare immagini di supporto alla presentazione senza accesso al repository o alle conversazioni precedenti. La versione NodeConf usa già 14 illustrazioni, quattro diagrammi Excalidraw e una tabella benchmark ASCII resa da Freya. Le nuove generazioni sono varianti richieste dall'utente, non asset mancanti. Per mantenere lo stile, l'utente può caricare le immagini esistenti. Non generare intere slide, testo, codice o grafici con misure inventate. Codice e diagrammi tecnici sono contenuti esatti: non sostituirli con immagini generative.

## Titolo esatto

FFI: Crossing the Native Boundary in Node.js

## Abstract esatto

We will tell the story of how node:ffi made its way into Node.js core: from the original implementation work by Bryan English, through the renewed initiative started by Colin Ihrig, to the final design and implementation that landed in Node.js.

We'll walk through the original exploration, the technical challenges, and the lessons learned while trying to expose foreign function interfaces safely and ergonomically to JavaScript developers, then cover the final implementation, the API shape, the design trade-offs, and the performance characteristics measured along the way.

This talk is for anyone interested in native interoperability, Node.js internals, performance, or the long path from an experimental idea to a core module.

## Messaggio e background confermato

FFI significa Foreign Function Interface: permette a JavaScript di chiamare funzioni native esportate da librerie condivise nello stesso processo. Una ABI è il contratto binario che specifica rappresentazione dei dati e convenzione di chiamata. C, C++, Rust e Zig possono interoperare quando espongono entry point compatibili; non significa compatibilità automatica fra tutti i tipi di tutti i linguaggi.

Il talk è di Paolo Insogna, membro del Node.js Technical Steering Committee e Principal Engineer in Platformatic. Bryan English ha realizzato l'esplorazione originale del 2023, i primi passi di ottimizzazione e gli esperimenti sui trampolini. tianxiadys ha proposto un'iterazione nel 2025. Colin Ihrig ha rilanciato l'iniziativa nel 2026: nel racconto gli viene attribuita la PR di introduzione del modulo. Paolo ha lavorato all'implementazione integrata e al fast path, con Bryan coautore della PR Fast FFI. Anna Henningsen ha contribuito alla discussione sul receiver V8 e sulle alternative.

Il modulo è stato integrato in core il 14 aprile 2026 e introdotto in Node.js 26.1.0. Fast FFI è stato integrato il 16 giugno, poi esteso ad altre piattaforme. La ricerca storica è del 23 settembre 2026; API e internals sono stati ricontrollati il 27 settembre 2026. Il modulo resta sperimentale. L'abstract e il racconto descrivono il lavoro già integrato.

Esistono soluzioni userland presentate nelle slide come node-ffi-napi, Koffi e node-ffi-rs, con link e QR. Il talk confronta limiti specifici e obiettivi, senza rappresentare tutti questi progetti come falliti. Le ragioni per il core sono distribuzione del bridge, integrazione con il runtime e manutenzione della portabilità. La libreria nativa e i vincoli di memoria rimangono anche quando il bridge è incluso nel runtime.

Destino è un esempio reale: Node.js coordina doomgeneric, OpenTUI e SDL_mixer per un gioco nel terminale. La slide 11, “Yes, even Doom.”, gli è dedicata e include un QR code verso https://github.com/platformatic/destino. Non inventare screenshot o scene documentarie del progetto; il QR è generato dal sistema di slide, non dalle immagini.

## Struttura narrativa

La slide “Platformatic is used by” usa titolo, loghi e link condivisi definiti nel tema; nel talk basta `layout: platformatic`. Eventuali titolo e griglie locali hanno precedenza sui valori condivisi. I loghi attivi sono Supabase e Spendesk, con link ai rispettivi case study Platformatic.

La presentazione contiene 56 slide, con esempi concreti per NodeConf e una spiegazione volutamente essenziale dei trampolini:

1. Slide 1–17: cover, provocazione “Not everything needs a rewrite.”, presentazione personale, slide “Platformatic is used by” (4), che cos'è FFI, ABI, utilità, separatore sui casi d'uso (9), esempi e invito all'immaginazione (10), Destino con QR (11), userland, motivazione per il core e nuovo separatore “Let's get to the action!” (15), prima funzione C e chiamata JavaScript.
2. Slide 18–24: dalla slide fullscreen “A small API. A long journey.” (18), al lavoro di Bryan, al passaggio del 2025, al rilancio di Colin e all'API integrata. Anche “Welcome, `node:ffi`.” (24) è fullscreen e il sottotitolo ricorda esplicitamente l'introduzione sperimentale in Node.js 26.1.0.
3. Slide 25–35: domanda “How do I use it?” (25), esempio BigInt (26), responsabilità (27), memoria (28), esempio C/JS con buffer (29–30), cleanup (31), callback con esempio C/JS (32–34) ed event loop (35).
4. Slide 36–49: diagramma del costo delle chiamate (37), percorso shared buffer interamente attribuito a Bryan e alla PR #62918 (38), slot da 8 byte (39), diagramma della chiamata diretta incompatibile fra V8 `(receiver, a, b)` e C `(a, b)` (40), enfasi sul receiver (41), lo stesso diagramma corretto con l'adattatore (42), alternative (43), domanda “So, what happened?” (44), landing (45), pseudocodice ARM64 del flusso completo dell'adattatore per `add_i32`, con controllo e caricamento dell'indirizzo simbolici (46), preparazione e riuso (47), tre percorsi riassunti in una frase ciascuno (48) e fallback (49).
5. Slide 50–56: separatore “Was it worth it?” (50), legenda delle colonne (51), nuovi microbenchmark riproducibili del 28 settembre 2026 (52), confronto percentuale Node Fast API/Koffi (53), invito al pubblico fullscreen (54), citazione di Alan Kay (55) e chiusura (56). La legenda distingue le librerie FFI di terze parti ffi-rs/Koffi dai percorsi di Node.js: Generic converte gli argomenti in C++; Shared usa un buffer riutilizzabile fra JS e C++; entrambi chiamano tramite libffi. Fast API usa chiamate veloci V8 attraverso un adattatore nativo generato, quando applicabile. La tabella confronta ffi-rs 1.3.7 e Koffi 3.3.1 su Node 26.4.0, Node 26.1.0 generic (build locale con shared buffer disabilitato), Node 26.1.0 shared buffer e Node 26.4.0 Fast API. Le altre configurazioni usano binari Node ufficiali. Sei casi: `identity-i32`, `add-i32`, `sum-8-i32`, `sum-buffer` 64 B / 1 KiB / 16 KiB; mediane in ns/chiamata, meno è meglio, 15 processi per caso/configurazione, 450 campioni. La 53 usa gli stessi dati e la formula `(Koffi ns/chiamata / Node ns/chiamata − 1) × 100`: variazione di throughput, non riduzione di latenza. Apple M2 Max ARM64, macOS 27.0. `add_i32(20, 22)` usa Fast API; otto int32 usano il fallback shared buffer nella 26.4.0. Le righe non hanno asterischi: fallback e potenziale di ottimizzazione vengono spiegati a voce. La frase della 53 limita il vantaggio di Node.js ai casi fast-path misurati e riconosce il vantaggio di Koffi sul fallback a otto argomenti. Suite e risultati sono fuori dal repository del talk, in `~/Sandbox/ffi-benchmarks`; dettagli e limiti in `summary.md`. Le due slide Platformatic su Booking.com e Supabase attendono i contenuti di Luca: nessuna affermazione commerciale o immagine documentaria viene inventata.

Il filo conduttore tecnico è `add_i32(20, 22)`: gli stessi argomenti possono attraversare percorsi diversi e produrre sempre 42. Lo shared buffer prepara gli argomenti in JavaScript, mantenendo libffi. Fast API usa un piccolo adattatore generato per collegare il contratto di chiamata V8 a quello della funzione nativa. La slide 42 esplicita in testo HTML la preparazione una tantum: allocare memoria RW (lettura/scrittura), emettere codice, sincronizzare la cache delle istruzioni e proteggere la memoria RX (lettura/esecuzione). Le chiamate riutilizzano quel codice, senza ripetere la generazione o RW → RX. La slide 46 resta una sola slide, con spiegazioni concise di ogni operazione ARM64 e dei registri, senza etichetta `adapter:`. Controllo della libreria e caricamento dell'indirizzo restano simbolici. I commenti usano `;` per l'evidenziazione Assembly generica: è pseudocodice, non sorgente assemblabile. Niente opcode o confronto fra ABI. Node gestisce il percorso e i fallback preservano il comportamento pubblico.

## Tono e direzione visiva

**Scelte finali:** apertura provocatoria, ironia leggera, 12 separatori illustrati senza icone e contenuti tecnici leggibili. Cover, hello, quote e end usano i layout esistenti. I separatori scandiscono domanda d'uso (25), responsabilità della memoria (27), esito dell'esplorazione (44) e introduzione dei benchmark (50). Le illustrazioni accompagnano i contenuti; gli snippet e le tabelle ASCII sono resi da Freya, i diagrammi da Excalidraw. Logo nero nelle slide 2, 5 e 49; bianco nelle 18 e 54: il logo viene gestito dalla slide, non deve essere aggiunto alle nuove immagini.

**Stile effettivo dei riferimenti:** illustrazioni tridimensionali, materiali meccanici, luce calda e tono giocoso. Ricorrono un modulo/adattatore rosso luminoso, componenti nativi e ambienti da officina; diverse immagini includono un panda in tuta gialla. `component.png` collega un modulo verde a una grande macchina tramite l'adattatore. `sequence.png` mostra una lunga serie di prototipi; `welcome.png` il piccolo robot in una culla; `next.png` lo stesso linguaggio meccanico con un robot che offre un attrezzo. Sono metafore, non fotografie del lavoro su Node.js. Per varianti, riprendere i riferimenti caricati dall'utente senza inventare identità dei personaggi o retroscena biografici.

**Significato da conservare:** il collegamento suggerisce compatibilità, non una barriera di sicurezza o un sandbox. Nessuna gerarchia di “linguaggio buono/cattivo”. Il lavoro già esistente viene collegato e riutilizzato.

Palette dei pannelli testuali dei separatori: fuchsia apertura (2), blue dipendenza (5), amber casi d'uso/API/performance (9, 25, 36, 50), red npm/responsabilità (12, 27), sky esempio (15), pink receiver (41), orange esito (44), green fallback (49). Le immagini hanno una propria palette: non colorare automaticamente tutta l'illustrazione come il pannello. Le slide fullscreen 18, 24 e 54 non hanno uno sfondo separatore esplicitamente impostato.

## Vincoli di generazione

- Se l'utente non specifica un formato, genera un'immagine **piccola: 1000×1120 px**. Anche “media” significa **1000×1120 px**; usa **2000×1120 px** solo quando l'utente richiede un'immagine “grande” o “fullscreen”. Mantieni queste dimensioni, senza adattarle a un rapporto 16:9.
- Esporta sempre in **PNG**, a circa **150 DPI**.
- Le 14 immagini attuali sono già scelte. Generare soltanto le varianti o aggiunte richieste, mantenendo la coerenza della serie.
- Nelle nuove immagini non incorporare titoli, lettere, numeri, codice, loghi, watermark o UI. Alcuni asset esistenti contengono scritte o marchi: conservarli come materiale scelto dall'utente non implica riprodurre tali dettagli in nuove generazioni.
- Alta leggibilità a distanza, contrasto forte, sagome chiare e dettagli limitati.
- Per i separatori, l'immagine occupa il pannello laterale: mantenere il soggetto compatto con margini adeguati. Il testo della slide sta nel pannello separato; non occorre sacrificare metà dell'immagine piccola a un titolo incorporato.
- Per fullscreen e materiale di copertina, prevedere un'area poco dettagliata per il titolo aggiunto dal layout. Non includere personaggi o loghi di franchise nelle nuove immagini proposte.
- Per la cover, lasciare più spazio negativo per il lungo titolo; il layout standard non include attualmente questa illustrazione, quindi è una proposta per materiale promozionale o per una futura scelta di impaginazione.
- Le illustrazioni tecniche devono sembrare schemi leggibili, senza suggerire collegamenti o misure non reali.
- Non generare ritratti di Bryan, Colin, Paolo o altri contributori, scene di incontri mai documentati o false fotografie.
- Se si evoca il gioco nel terminale, usare soltanto motivi “retro shooter inspired” astratti. Niente asset, mostri, loghi, screenshot o interfaccia di Doom.
- Non generare immagini con numeri di benchmark: la slide 52 presenta già una tabella esatta di sei casi per cinque configurazioni, misurati il 28 settembre 2026.

## Inventario finale delle immagini

Le 14 illustrazioni elencate sono PNG a circa 150 DPI e sono già collegate nelle slide. Le immagini piccole sono 1000×1120 px, quelle fullscreen 2000×1120 px. I diagrammi e la tabella sono descritti separatamente sotto.

| Slide | Titolo | Layout | Asset | Dimensioni |
| --- | --- | --- | --- | --- |
| 2 | Not everything needs a rewrite. | separator | `component.png` | 1000×1120 |
| 5 | Your next dependency might not be in JavaScript. | separator | `connect.png` | 1000×1120 |
| 9 | What can we build? | separator | `coffee.png` | 1000×1120 |
| 12 | Couldn't we just npm install it? | separator | `confusion.png` | 1000×1120 |
| 15 | Let's get to the action! | separator | `action.png` | 1000×1120 |
| 18 | A small API. A long journey. | image | `sequence.png` | 2000×1120 |
| 24 | Welcome, `node:ffi`. | image | `welcome.png` | 2000×1120 |
| 25 | How do I use it? | separator | `cow.png` | 1000×1120 |
| 27 | With great power comes great responsibility™ | separator | `spider-panda.png` | 1000×1120 |
| 36 | It works. But how fast? | separator | `run.png` | 1000×1120 |
| 41 | One unexpected argument. | separator | `photo.png` | 1000×1120 |
| 44 | So, what happened? | separator | `dog.png` | 1000×1120 |
| 49 | Fallback is part of the design. | separator | `slide.png` | 1000×1120 |
| 50 | Was it worth it? | separator | `run.png` (riuso) | 1000×1120 |
| 54 | What will you connect next? | image | `next.png` | 2000×1120 |

Gli originali sono conservati nella sottocartella `assets/__originals/`. La normalizzazione usa resize proporzionale e crop centrato. Eccezione concordata: per `coffee.png` il crop parte da x=192 sul resize 1256×1120, cioè 64 px a destra rispetto al crop centrato, per conservare più della macchina del caffè.

## Otto brief facoltativi per varianti

I seguenti concetti aggiornano le proposte iniziali. Non sostituiscono le immagini scelte: usarli soltanto su richiesta, adattandoli allo stile dei riferimenti caricati.

### A. Cover — slide 1, “FFI: Crossing the Native Boundary in Node.js”

Due superfici con geometrie diverse collegate da un piccolo ponte luminoso, attraversato da pochi blocchi dello stesso colore che cambiano disposizione. Composizione ampia, molto spazio negativo a sinistra, soggetto sulla destra. Palette blu/sky con un accento verde. Nessun testo. Uso opzionale promozionale: non modificare il layout cover per inserirla automaticamente.

### B. Riuso — slide 2, “Not everything needs a rewrite.”

Un meccanismo solido e già funzionante viene collegato a una console modulare nuova tramite un piccolo adattatore. Riprendere materiali e proporzioni di `component.png`, senza aggiungere scritte o loghi. Evitare macerie o l'idea che il codice precedente sia spazzatura. La sproporzione fra macchina e connettore porta l'ironia; il pannello testuale della slide resta fuchsia.

### C. Dipendenze — slide 5, “Your next dependency might not be in JavaScript.”

Tre moduli di materiali diversi con porte compatibili convergono verso un solo connettore. Forme che evocano audio, immagini e hardware senza marchi. Usare `connect.png` come riferimento di stile, con forme grandi e nessuna etichetta.

### D. Pacchetto — slide 12, “Couldn't we just npm install it?”

Una scatola aperta contiene un adattatore robusto e diversi connettori. La metafora è la distribuzione di componenti nativi con contratti diversi, non un pacchetto guasto. Riprendere il tono di `confusion.png`; il pannello della slide è red, non amber. Nessun logo npm.

### E. Percorso — slide 18, “A small API. A long journey.”

Una serie di prototipi evolve sullo stesso banco fino a un adattatore compatto, richiamando `sequence.png`. Nessuna data o scritta. Se richiesta come sostituzione fullscreen, usare il formato grande 2000×1120; il default per una richiesta senza formato resta piccolo. Non introdurre una scala temporale inventata.

### F. Costo — slide 36, “It works. But how fast?”

Piccoli blocchi attraversano un passaggio con poche stazioni di trasformazione visibili; il lavoro finale è un oggetto minuscolo. Comunicare che il viaggio può costare più dell'operazione finale. Fondo amber/scuro, stile diagrammatico, niente tachimetri con numeri.

### G. Receiver — slide 41, “One unexpected argument.”

Una fila di tre elementi incontra un alloggiamento per due; il primo elemento ha una forma distinta e un piccolo adattatore riallinea i due successivi. Deve evocare il receiver rimosso dalla disposizione degli argomenti, non un dato eliminato per errore. Fondo pink, elementi grandi, nessuna lettera.

### H. Fallback — slide 49, “Fallback is part of the design.”

Due percorsi affiancati, uno diretto e stretto e uno più ampio, raggiungono la stessa destinazione. Un bivio ben costruito seleziona il percorso adatto alla forma dei blocchi. Nessun vicolo cieco, incidente o percorso “sbagliato”. Fondo verde, geometrie ordinate e molto spazio negativo.

## Diagrammi tecnici e tabella benchmark

La slide 52 usa una tabella ASCII monospaziata definita in `slides.yml`, con intestazione HTML e senza asterischi; la legenda è nella slide 51 e il fallback viene spiegato a voce. I dati provengono da `~/Sandbox/ffi-benchmarks/results/2026-09-28T15-55-03.243Z/`; non modificarli per esigenze grafiche. Il confronto generic/shared comprende build locale contro ufficiale; shared/Fast API comprende differenze fra release. `sum-buffer` usa puntatori pre-calcolati, con risultato Number in Koffi/ffi-rs e BigInt in Node. ffi-rs usa `define()` e array degli argomenti riutilizzato, External per il puntatore e Number per la lunghezza `U64`. Metodo, quartili e campioni grezzi sono documentati nella suite esterna e in `summary.md`.

Nella slide 40 le frasi “Fast API can call a typed native entry point directly.” e “But this C function does not expect V8's receiver.” sono HTML sopra il grafico. Il PNG contiene solo i blocchi e le frecce, con “No compile-time adapter available” nel riquadro centrale.

Quattro diagrammi Excalidraw modificabili e una tabella, tutti con testo inglese, font Virgil, sfondo trasparente nell'esportazione PNG, contorni scuri e riempimenti pastello. Blu per JavaScript/V8, arancio per conversioni e adattatore, verde per la funzione nativa. Blocchi allineati, frecce rettilinee, etichette centrate e nessun ritaglio. La 37 mostra il percorso generico a serpentina. Le slide 38 e 42 usano `side`: testo HTML a sinistra e diagramma verticale a destra, con sole etichette brevi nei blocchi e frecce verso il basso. Nella 38, “First optimizations”, attribuzione a Bryan, link alla PR #62918, beneficio e riuso dell'ArrayBuffer sono fuori dal PNG. La 40 resta orizzontale e mostra il collegamento incompatibile in rosso. La 42 riprende gli stessi contratti dall'alto verso il basso: V8 `(receiver, a, b)`, adattatore arancio, C `add_i32(a, b)`. Le spiegazioni sul riallineamento, sul risultato 42 e sulla preparazione RW → RX sono HTML a sinistra, non testo incorporato nel grafico. Non rappresentare un risultato numerico deterministico della chiamata incompatibile. La 52 è una tabella di misure documentate; data e limiti della baseline sono nella guida del relatore. Questi sono contenuti tecnici esatti, non brief per generazione AI.

| Slide | Titolo | Sorgente modificabile | PNG collegato |
| --- | --- | --- | --- |
| 37 | Every crossing has a cost | `diagrams/crossing.excalidraw` | `assets/ffi-crossing.png` |
| 38 | First optimizations | `diagrams/shared-buffer.excalidraw` | `assets/ffi-shared-buffer.png` |
| 40 | V8 already knows a faster route | `diagrams/mismatch.excalidraw` | `assets/ffi-mismatch.png` |
| 42 | A tiny adapter bridges the gap | `diagrams/adapter.excalidraw` | `assets/ffi-adapter.png` |
| 51 | Reading the benchmark columns | Tre voci in `slides.yml` | Nessuno |
| 52 | How fast is Fast FFI? | Tabella ASCII in `slides.yml` | Nessuno |
| 53 | Let's focus on Node.js Fast API vs Koffi | Tabella ASCII in `slides.yml` | Nessuno |

Esportazione tramite il comando PNG dell'interfaccia Excalidraw, scala 2×, con l'opzione Background disattivata per mantenere lo sfondo trasparente, preservando proporzioni e margini; nessun generatore o renderer aggiunto al repository. Il diagramma mostra il ruolo dell'adattatore nel percorso Fast API. Il pseudocodice ARM64 nella slide 46 illustra l'intero flusso, mantenendo simbolici `CHECK_LIBRARY_OPEN` e `LOAD_ADDRESS`: non è un disassemblato letterale. Preparazione e riuso sono spiegati con due punti nella slide 47; i tre percorsi sono riassunti in testo nella slide 48.

## Consegna e uso

Produrre eventuali varianti separatamente, mantenendo materiali, luci e personaggi coerenti con gli asset forniti. Conservare gli originali prima di una sostituzione e mantenere i nomi referenziati dalle slide quando la variante viene approvata. Il contesto e `summary.md` rimangono file sorgente accanto a `slides.yml`, fuori da `assets/`. Nessun generatore o tool di rendering va aggiunto al repository.
