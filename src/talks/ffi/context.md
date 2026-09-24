# Brief immagini — FFI: Crossing the Native Boundary in Node.js

## A cosa serve questo documento

Questo brief è autosufficiente: può essere caricato nell'app ChatGPT per generare immagini di supporto alla presentazione senza accesso al repository o alle conversazioni precedenti. La versione finale usa già 14 immagini: le nuove generazioni sono varianti richieste dall'utente, non asset mancanti. Per mantenere lo stile, l'utente può caricare le immagini esistenti. Non generare intere slide, testo, codice o grafici con misure inventate.

## Titolo esatto

FFI: Crossing the Native Boundary in Node.js

## Abstract esatto

We will tell the story of how node:ffi made its way into Node.js core: from the original implementation work by Bryan English, through the renewed initiative started by Colin Ihrig, to the final design and implementation that landed in Node.js.

We'll walk through the original exploration, the technical challenges, and the lessons learned while trying to expose foreign function interfaces safely and ergonomically to JavaScript developers, then cover the final implementation, the API shape, the design trade-offs, and the performance characteristics measured along the way.

This talk is for anyone interested in native interoperability, Node.js internals, performance, or the long path from an experimental idea to a core module.

## Messaggio e background confermato

FFI significa Foreign Function Interface: permette a JavaScript di chiamare funzioni native esportate da librerie condivise nello stesso processo. Una ABI è il contratto binario che specifica rappresentazione dei dati e convenzione di chiamata. C, C++, Rust e Zig possono interoperare quando espongono entry point compatibili; non significa compatibilità automatica fra tutti i tipi di tutti i linguaggi.

Il talk è di Paolo Insogna, membro del Node.js Technical Steering Committee e Principal Engineer in Platformatic. Bryan English ha realizzato l'esplorazione originale del 2023, i primi passi di ottimizzazione e gli esperimenti sui trampolini. tianxiadys ha proposto un'iterazione nel 2025. Colin Ihrig ha rilanciato l'iniziativa nel 2026: nel racconto gli viene attribuita la PR di introduzione del modulo. Paolo ha lavorato all'implementazione integrata e al fast path, con Bryan coautore della PR Fast FFI. Anna Henningsen ha contribuito alla discussione sul receiver V8 e sulle alternative.

Il modulo è stato integrato in core il 14 aprile 2026 e introdotto in Node.js 26.1.0. Fast FFI è stato integrato il 16 giugno, poi esteso ad altre piattaforme. Il riferimento temporale della presentazione è il 23 settembre 2026; il modulo resta sperimentale. L'abstract e il racconto descrivono il lavoro già integrato.

Esistono soluzioni userland presentate nelle slide come node-ffi-napi, Koffi e node-ffi-rs, con link e QR. Il talk confronta limiti specifici e obiettivi, senza rappresentare tutti questi progetti come falliti. Le ragioni per il core sono distribuzione del bridge, integrazione con il runtime e manutenzione della portabilità. La libreria nativa e i vincoli di memoria rimangono anche quando il bridge è incluso nel runtime.

Destino è un esempio reale: Node.js coordina doomgeneric, OpenTUI e SDL_mixer per un gioco nel terminale. La slide 10, “Yes, even Doom.”, gli è dedicata e include un QR code verso https://github.com/platformatic/destino. Non inventare screenshot o scene documentarie del progetto; il QR è generato dal sistema di slide, non dalle immagini.

## Struttura narrativa

La presentazione contiene 46 slide:

1. Slide 1–16: cover, provocazione “Not everything needs a rewrite.”, presentazione personale, che cos'è FFI, ABI, utilità, separatore sui casi d'uso (8), esempi e invito all'immaginazione (9), Destino con QR (10), userland, motivazione per il core e nuovo separatore “Let's get to the action!” (14), prima funzione C e chiamata JavaScript.
2. Slide 17–23: dalla slide fullscreen “A small API. A long journey.” (17), al lavoro di Bryan, al passaggio del 2025, al rilancio di Colin e all'API integrata. Anche “Welcome, `node:ffi`.” (23) è fullscreen e il sottotitolo ricorda esplicitamente l'introduzione sperimentale in Node.js 26.1.0.
3. Slide 24–30: domanda “How do I use it?” (24), tipi, separatore rosso sulla responsabilità (26), memoria, cleanup, callback e relazione con l'event loop.
4. Slide 31–42: costo delle chiamate, shared buffer, V8 Fast API, sorpresa del receiver (35), trampolini, alternative esplorate, domanda “So, what happened?” (38), landing, ABI e fallback.
5. Slide 43–46: estratto della tabella dei benchmark finali della PR #63068 (43), invito al pubblico con immagine fullscreen (44), citazione di Alan Kay “The best way to predict the future is to invent it.” (45) e chiusura (46). La guida del relatore aiuta a interpretare i risultati storici e i loro limiti; i riferimenti tecnici sono raccolti lì, senza una slide risorse.

## Tono e direzione visiva

**Scelte finali:** apertura provocatoria, ironia leggera, 11 separatori illustrati senza icone e contenuti tecnici leggibili. Cover, hello, quote e end usano i layout esistenti. I separatori scandiscono domanda d'uso (24), responsabilità della memoria (26) ed esito dell'esplorazione (38). Le immagini accompagnano i contenuti, non li sostituiscono. Logo nero nelle slide 2, 4 e 42; bianco nelle 17 e 44: il logo viene gestito dalla slide, non deve essere aggiunto alle nuove immagini.

**Stile effettivo dei riferimenti:** illustrazioni tridimensionali, materiali meccanici, luce calda e tono giocoso. Ricorrono un modulo/adattatore rosso luminoso, componenti nativi e ambienti da officina; diverse immagini includono un panda in tuta gialla. `component.png` collega un modulo verde a una grande macchina tramite l'adattatore. `sequence.png` mostra una lunga serie di prototipi; `welcome.png` il piccolo robot in una culla; `next.png` lo stesso linguaggio meccanico con un robot che offre un attrezzo. Sono metafore, non fotografie del lavoro su Node.js. Per varianti, riprendere i riferimenti caricati dall'utente senza inventare identità dei personaggi o retroscena biografici.

**Significato da conservare:** il collegamento suggerisce compatibilità, non una barriera di sicurezza o un sandbox. Nessuna gerarchia di “linguaggio buono/cattivo”. Il lavoro già esistente viene collegato e riutilizzato.

Palette dei pannelli testuali dei separatori: fuchsia apertura (2), blue dipendenza (4), amber casi d'uso/API/performance (8, 24, 31), red npm/responsabilità (11, 26), sky esempio (14), pink receiver (35), orange esito (38), green fallback (42). Le immagini hanno una propria palette: non colorare automaticamente tutta l'illustrazione come il pannello. Le slide fullscreen 17, 23 e 44 non hanno uno sfondo separatore esplicitamente impostato.

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
- Non rappresentare numeri di benchmark: la slide 43 mostra già come testo un estratto della tabella dei benchmark finali della PR #63068.

## Inventario finale delle immagini

Tutti gli asset elencati sono PNG a circa 150 DPI e sono già collegati nelle slide. Le immagini piccole sono 1000×1120 px, quelle fullscreen 2000×1120 px.

| Slide | Titolo | Layout | Asset | Dimensioni |
| --- | --- | --- | --- | --- |
| 2 | Not everything needs a rewrite. | separator | `component.png` | 1000×1120 |
| 4 | Your next dependency might not be in JavaScript. | separator | `connect.png` | 1000×1120 |
| 8 | What can we build? | separator | `coffee.png` | 1000×1120 |
| 11 | Couldn't we just npm install it? | separator | `confusion.png` | 1000×1120 |
| 14 | Let's get to the action! | separator | `action.png` | 1000×1120 |
| 17 | A small API. A long journey. | image | `sequence.png` | 2000×1120 |
| 23 | Welcome, `node:ffi`. | image | `welcome.png` | 2000×1120 |
| 24 | How do I use it? | separator | `cow.png` | 1000×1120 |
| 26 | With great power comes great responsibility™ | separator | `spider-panda.png` | 1000×1120 |
| 31 | It works. But how fast? | separator | `run.png` | 1000×1120 |
| 35 | One unexpected argument. | separator | `photo.png` | 1000×1120 |
| 38 | So, what happened? | separator | `dog.png` | 1000×1120 |
| 42 | Fallback is part of the design. | separator | `slide.png` | 1000×1120 |
| 44 | What will you connect next? | image | `next.png` | 2000×1120 |

Gli originali sono conservati nella sottocartella `assets/__originals/`. La normalizzazione usa resize proporzionale e crop centrato. Eccezione concordata: per `coffee.png` il crop parte da x=192 sul resize 1256×1120, cioè 64 px a destra rispetto al crop centrato, per conservare più della macchina del caffè.

## Otto brief facoltativi per varianti

I seguenti concetti aggiornano le proposte iniziali. Non sostituiscono le immagini scelte: usarli soltanto su richiesta, adattandoli allo stile dei riferimenti caricati.

### A. Cover — slide 1, “FFI: Crossing the Native Boundary in Node.js”

Due superfici con geometrie diverse collegate da un piccolo ponte luminoso, attraversato da pochi blocchi dello stesso colore che cambiano disposizione. Composizione ampia, molto spazio negativo a sinistra, soggetto sulla destra. Palette blu/sky con un accento verde. Nessun testo. Uso opzionale promozionale: non modificare il layout cover per inserirla automaticamente.

### B. Riuso — slide 2, “Not everything needs a rewrite.”

Un meccanismo solido e già funzionante viene collegato a una console modulare nuova tramite un piccolo adattatore. Riprendere materiali e proporzioni di `component.png`, senza aggiungere scritte o loghi. Evitare macerie o l'idea che il codice precedente sia spazzatura. La sproporzione fra macchina e connettore porta l'ironia; il pannello testuale della slide resta fuchsia.

### C. Dipendenze — slide 4, “Your next dependency might not be in JavaScript.”

Tre moduli di materiali diversi con porte compatibili convergono verso un solo connettore. Forme che evocano audio, immagini e hardware senza marchi. Usare `connect.png` come riferimento di stile, con forme grandi e nessuna etichetta.

### D. Pacchetto — slide 11, “Couldn't we just npm install it?”

Una scatola aperta contiene un adattatore robusto e diversi connettori. La metafora è la distribuzione di componenti nativi con contratti diversi, non un pacchetto guasto. Riprendere il tono di `confusion.png`; il pannello della slide è red, non amber. Nessun logo npm.

### E. Percorso — slide 17, “A small API. A long journey.”

Una serie di prototipi evolve sullo stesso banco fino a un adattatore compatto, richiamando `sequence.png`. Nessuna data o scritta. Se richiesta come sostituzione fullscreen, usare il formato grande 2000×1120; il default per una richiesta senza formato resta piccolo. Non introdurre una scala temporale inventata.

### F. Costo — slide 31, “It works. But how fast?”

Piccoli blocchi attraversano un passaggio con poche stazioni di trasformazione visibili; il lavoro finale è un oggetto minuscolo. Comunicare che il viaggio può costare più dell'operazione finale. Fondo amber/scuro, stile diagrammatico, niente tachimetri con numeri.

### G. Receiver — slide 35, “One unexpected argument.”

Una fila di tre elementi incontra un alloggiamento per due; il primo elemento ha una forma distinta e un piccolo adattatore riallinea i due successivi. Deve evocare il receiver rimosso dalla disposizione degli argomenti, non un dato eliminato per errore. Fondo pink, elementi grandi, nessuna lettera.

### H. Fallback — slide 42, “Fallback is part of the design.”

Due percorsi affiancati, uno diretto e stretto e uno più ampio, raggiungono la stessa destinazione. Un bivio ben costruito seleziona il percorso adatto alla forma dei blocchi. Nessun vicolo cieco, incidente o percorso “sbagliato”. Fondo verde, geometrie ordinate e molto spazio negativo.

## Consegna e uso

Produrre eventuali varianti separatamente, mantenendo materiali, luci e personaggi coerenti con gli asset forniti. Conservare gli originali prima di una sostituzione e mantenere i nomi referenziati dalle slide quando la variante viene approvata. Il contesto e `summary.md` rimangono file sorgente accanto a `slides.yml`, fuori da `assets/`. Nessun generatore o tool di rendering va aggiunto al repository.
