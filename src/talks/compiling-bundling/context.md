# Contesto immagini — Compiling and bundling JS, the painless way

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

Compiling and bundling JS, the painless way

## Abstract esatto

In the last years, the JavaScript ecosystem has grown exponentially.

With it, many different compilers and build systems came to life to compete to reach the best possible performances,
better stability, and compatibility with the language features.

While five years ago, we had a few choices for compiling and bundling JavaScript (for either client or server),
today, we have many good alternatives. ESBuild, SWC, Vite, WebPack... what are the differences between those tools?
How do I choose the right one for my project?

What can we predict about the future of the JavaScript ecosystem?

## Messaggio e background confermato

Capire parsing, trasformazione e bundling permette di scegliere strumenti e compromessi invece di subire la complessità della toolchain.

Talk archiviato, originariamente di Michele Riva, accreditato nella slide 4. Confronti fra strumenti, supporto dei runtime e previsioni sul futuro appartengono al periodo del deck. Le trasformazioni mostrate come immagini sono materiale tecnico da preservare.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La versione corrente contiene **58 slide**.

- **Slide 1–9 — Lessico e crediti:** Distinguere compilazione, transpilation e bundling.
- **Slide 10–18 — Motivazioni:** Collegare linguaggi e ambienti di esecuzione.
- **Slide 19–37 — Dentro un transpiler:** Seguire il passaggio dal sorgente all'AST e al nuovo codice.
- **Slide 38–54 — Bundler e alternative:** Confrontare gli approcci descritti nel deck.
- **Slide 55–58 — Scelte e conclusioni:** Separare tendenze storiche e criteri riutilizzabili.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: fuchsia, blue, red, sky, amber, green. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Catena di trasformazione con token, albero e pacchetto finale, senza pseudo-codice decorativo. Illustrazioni semplici per separatori; AST e confronti devono restare diagrammi fedeli.

## Formati e vincoli di generazione

- Se non viene specificato il formato, generare un'immagine **piccola: 1000×1120 px**. Anche **media** significa **1000×1120 px**.
- Usare **2000×1120 px** soltanto quando viene richiesta un'immagine **grande** o **fullscreen**. Rispettare le dimensioni esatte, senza imporre il 16:9.
- Esportare sempre in **PNG**, a circa **150 DPI**.
- Una sola metafora dominante, contrasto elevato e leggibilità a distanza. Niente titoli, lettere, codice, etichette, watermark o testo della slide nell'immagine.
- Lasciare margini generosi e spazio negativo per eventuali titoli. Per i pannelli laterali mantenere il soggetto compatto; il crop ordinario è centrato, salvo indicazioni diverse dell'utente.
- Conservare coerenza di materiali, luce e palette. Preferire poche immagini chiave coordinate, senza sostituire automaticamente quelle già scelte.
- Non generare QR utilizzabili, grafici con misure inventate, schermate di prodotto o false fotografie documentarie. I diagrammi architetturali richiedono Excalidraw con sorgente modificabile e riferimento PNG.
- Non ricreare ritratti di persone reali o scene biografiche senza fotografie e contesto forniti dall'utente.
- Se si evoca un videogioco, usare motivi astratti retro shooter inspired, senza asset, loghi, mostri, screenshot o UI di Doom.

## Immagini già referenziate

Questi sono riferimenti sorgente, non immagini da rigenerare automaticamente. `@talk/` indica un asset specifico del talk, `@common/` un asset condiviso. Caricare gli originali per usarli come riferimento.

| Slide | Titolo | Riferimento immagine |
| --- | --- | --- |
| 2 | Fight your fears! | `@common/skydiving.png` |
| 4 | First of all, let's give credits! | `@common/michele.png` |
| 5 | Compiling and bundling JavaScript is often a pain ... | `@common/complicated.png` |
| 6 | …but it should not! | `@common/easy.png` |
| 12 | Who are you missing the most? | `@common/scala.png` |
| 12 | Who are you missing the most? | `@common/opal.png` |
| 13 | An example: transpilation of Scala.js | `@talk/scala-js-transpile.png` |
| 14 | Where do we (mostly) run? | `@common/chrome.png` |
| 14 | Where do we (mostly) run? | `@common/firefox.png` |
| 14 | Where do we (mostly) run? | `@common/safari.png` |
| 14 | Where do we (mostly) run? | `@common/edge.png` |
| 14 | Where do we (mostly) run? | `@talk/node.png` |
| 14 | Where do we (mostly) run? | `@common/deno.png` |
| 14 | Where do we (mostly) run? | `@common/bun.png` |
| 15 | There is a transpiler for everything…™ | `@common/f-sharp.png` |
| 15 | There is a transpiler for everything…™ | `@common/kotlin.png` |
| 15 | There is a transpiler for everything…™ | `@common/gleam.png` |
| 15 | There is a transpiler for everything…™ | `@common/reasonml.png` |
| 15 | There is a transpiler for everything…™ | `@common/elm.png` |
| 15 | There is a transpiler for everything…™ | `@common/rescript.png` |
| 16 | … and that's thanks to LLVM! | `@common/llvm.png` |
| 17 | What are you missing the most? | `@talk/babel-pipe-from.png` |
| 17 | What are you missing the most? | `@talk/babel-transform.png` |
| 17 | What are you missing the most? | `@talk/babel-pipe-to.png` |
| 18 | There is no end to what we can achieve | `@talk/babel-ts-from.png` |
| 18 | There is no end to what we can achieve | `@talk/babel-transform.png` |
| 18 | There is no end to what we can achieve | `@talk/babel-ts-to.png` |
| 19 | Transpiling, in depth | `@common/server.png` |
| 20 | Generated code is not always readable… | `@talk/clojurescript-from.png` |
| 20 | Generated code is not always readable… | `@common/arrow-down.png` |
| 20 | Generated code is not always readable… | `@talk/clojurescript-to.png` |
| 21 | …but some transpilers are really good! | `@talk/reasonml-from.png` |
| 21 | …but some transpilers are really good! | `@common/arrow-right.png` |
| 21 | …but some transpilers are really good! | `@talk/reasonml-to.png` |
| 22 | Each language has its own transpiler | `@common/javascript.png` |
| 22 | Each language has its own transpiler | `@common/typescript.png` |
| 22 | Each language has its own transpiler | `@common/reasonml.png` |
| 22 | Each language has its own transpiler | `@talk/clojurescript.png` |
| 23 | No transpiler is perfect! | `@common/incomplete.png` |
| 24 | Problem #1: Transpilation time | `@common/javascript.png` |
| 24 | Problem #1: Transpilation time | `@common/typescript.png` |
| 24 | Problem #1: Transpilation time | `@common/reasonml.png` |
| 24 | Problem #1: Transpilation time | `@talk/clojurescript.png` |
| 25 | Problem #2: Output optimization | `@common/javascript.png` |
| 25 | Problem #2: Output optimization | `@common/typescript.png` |
| 25 | Problem #2: Output optimization | `@common/rescript.png` |
| 25 | Problem #2: Output optimization | `@talk/clojurescript.png` |
| 26 | Let's focus on the popular one! | `@common/javascript.png` |
| 26 | Let's focus on the popular one! | `@common/typescript.png` |
| 28 | Parsing step #1: Tokenization | `@talk/parsing-1-1.png` |
| 28 | Parsing step #1: Tokenization | `@talk/parsing-1-2.png` |
| 29 | Parsing step #2: Syntactical Analysis | `@talk/parsing-2-1.png` |
| 29 | Parsing step #2: Syntactical Analysis | `@talk/parsing-2-2.png` |
| 30 | Parsing step #3: Prepare the AST | `@talk/ast.png` |
| 31 | Parsing step #4: Build the AST | `@talk/ast-js.png` |
| 32 | Traversing the AST | `@talk/traversing-1.png` |
| 33 | Transforming the AST | `@talk/traversing-2.png` |
| 34 | Code generation | `@talk/codegen-input.png` |
| 34 | Code generation | `@talk/codegen-output.png` |
| 35 | All your popular tools use this flow | `@common/babel.png` |
| 35 | All your popular tools use this flow | `@common/prettier.png` |
| 35 | All your popular tools use this flow | `@common/eslint.png` |
| 36 | A more complex example: the problem | `@talk/jscodeshift-from.png` |
| 36 | A more complex example: the problem | `@talk/jscodeshift-to.png` |
| 37 | A more complex example: the solution | `@talk/jscodeshift-solution.png` |
| 40 | The three horsemen | `@common/webpack.png` |
| 40 | The three horsemen | `@common/rollup.png` |
| 40 | The three horsemen | `@common/parcel.png` |
| 41 | Is webpack still worth it? | `@common/webpack.png` |
| 42 | Are there any better alternatives? | `@common/esbuild.png` |
| 42 | Are there any better alternatives? | `@common/swc.png` |
| 42 | Are there any better alternatives? | `@common/vite.png` |
| 42 | Are there any better alternatives? | `@common/snowpack.png` |
| 43 | ESBuild | `@common/esbuild.png` |
| 44 | How fast ESBuild is? | `@talk/esbuild-performances.png` |
| 45 | Ok, it's fast. What about configuration? | `@talk/esbuild-cli.png` |
| 46 | SWC | `@common/swc.png` |
| 47 | How does it compare to ESBuild? | `@talk/esbuild-vs-swc-es2019.png` |
| 47 | How does it compare to ESBuild? | `@talk/esbuild-vs-swc-es2020.png` |
| 48 | An example of SWC configuration | `@talk/swc-config.png` |
| 49 | SWC can run in a browser thanks to WASM | `@common/matrioska.png` |
| 50 | Vite | `@common/vite.png` |
| 52 | Vite leverages existing tools | `@common/esbuild.png` |
| 52 | Vite leverages existing tools | `@common/vite.png` |
| 52 | Vite leverages existing tools | `@common/rollup.png` |
| 53 | Snowpack | `@common/snowpack.png` |
| 54 | And now something completely different™ | `@common/skypack.png` |
| 55 | The greatest gain in new bundlers | `@talk/compile.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 5 — Compiling and bundling JavaScript is often a pain ...

**Concetto proposto:** Un groviglio di utensili che diventa una sequenza ordinata.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 10 — Transpilation

**Concetto proposto:** Un oggetto cambia forma mantenendo un nucleo riconoscibile.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 19 — Transpiling, in depth

**Concetto proposto:** Un albero geometrico con pochi nodi grandi e un ramo trasformato.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 38 — Bundling

**Concetto proposto:** Moduli distinti raccolti in un pacco senza perdere le connessioni.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 43 — ESBuild

**Concetto proposto:** Una linea di montaggio corta con pochi passaggi essenziali.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 50 — Vite

**Concetto proposto:** Un banco di lavoro aggiorna solo il pezzo toccato, lasciando gli altri al loro posto.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
