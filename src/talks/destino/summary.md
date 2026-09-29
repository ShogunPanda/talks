# Project Destino: Doom In The Terminal with Node.js and OpenTUI

## Impostazione

Guida in italiano alla versione sorgente corrente: **50 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** Un esperimento ludico rende concreti FFI, rendering nel terminale e coordinamento fra JavaScript e librerie native specializzate.

**Contesto e crediti:** Project Destino combina Node.js, doomgeneric, OpenTUI e SDL3. Node carica tre librerie native attraverso node:ffi: motore Doom, OpenTUI e SDL3. OpenTUI gestisce Kitty Graphics; il backend C produce framebuffer e PCM, mentre Node coordina gioco, parsing della tastiera e invio dell'audio. La musica usa TinyMidiLoader e TinySoundFont. Il packaging SEA usa il VFS di Node e asset passati in memoria. Questi ruoli sono stati verificati nel codice della riscrittura. Il racconto del progetto non autorizza a inventare episodi o screenshot del gioco.

## Struttura e ritmo

- **Slide 1–10 — Dalla battuta al terminale:** Mostrare perché l'esperimento vale la pena.
- **Slide 11–20 — Il confine nativo:** Spiegare ABI, API e responsabilità della memoria.
- **Slide 21–35 — Il gioco funziona:** Separare engine, loop, rendering, input e audio.
- **Slide 36–40 — Distribuzione:** Spiegare come SEA e librerie native convivono.
- **Slide 41–50 — Performance e demo:** Collegare fast path, dimostrazione e riuso.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. Project Destino: Doom In The Terminal with Node.js and OpenTUI
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** Un esperimento ludico rende concreti FFI, rendering nel terminale e coordinamento fra JavaScript e librerie native specializzate.
- **Transizione:** Passare alla slide 2, «STFU!».

### 2. STFU!
- **Scopo:** Mostrare perché l'esperimento vale la pena, attraverso «STFU!».
- **Traccia:** Usare la provocazione iniziale nel tono già scelto dal relatore, poi contestualizzarla.
- **Transizione:** Passare alla slide 3, «Hello».

### 3. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Presentare brevemente Platformatic nella slide 4.

### 4. Platformatic is used by
- **Scopo:** Presentare il contesto aziendale dopo il relatore.
- **Traccia:** Mostrare i loghi e i case study condivisi di Supabase e Spendesk, senza aggiungere metriche o affermazioni non confermate. Titolo e griglie provengono da `src/themes/main/theme.yml`.
- **Transizione:** Raccontare come è nata l'idea di Destino.

### 5. This started as a joke...
- **Scopo:** Segnare un passaggio nella sezione «Dalla battuta al terminale».
- **Traccia:** Usare «This started as a joke...» come domanda o pausa visiva prima del prossimo passaggio. Mostrare perché l'esperimento vale la pena.
- **Transizione:** Passare alla slide 6, «... and now we have Doom in the terminal!».

### 6. ... and now we have Doom in the terminal!
- **Scopo:** Segnare un passaggio nella sezione «Dalla battuta al terminale».
- **Traccia:** Usare «... and now we have Doom in the terminal!» come domanda o pausa visiva prima del prossimo passaggio. Mostrare perché l'esperimento vale la pena.
- **Transizione:** Passare alla slide 7, «The joke was simple».

### 7. The joke was simple
- **Scopo:** Mostrare perché l'esperimento vale la pena, attraverso «The joke was simple».
- **Traccia:** Collegare la tradizione dei porting improbabili alle nuove possibilità native di Node.js.
- **Transizione:** Passare alla slide 8, «The terminal is the new UI.».

### 8. The terminal is the new UI.
- **Scopo:** Segnare un passaggio nella sezione «Dalla battuta al terminale».
- **Traccia:** Usare «The terminal is the new UI.» come domanda o pausa visiva prima del prossimo passaggio. Mostrare perché l'esperimento vale la pena. Sottotitolo da richiamare: «Thanks to AI. 🤷».
- **Transizione:** Passare alla slide 9, «OpenTUI».

### 9. OpenTUI
- **Scopo:** Mostrare perché l'esperimento vale la pena, attraverso «OpenTUI».
- **Traccia:** Presentare OpenTUI e la relazione con OpenCode; il QR apre il progetto.
- **Transizione:** Passare alla slide 10, «They really push the terminal hard».

### 10. They really push the terminal hard
- **Scopo:** Mostrare perché l'esperimento vale la pena, attraverso «They really push the terminal hard».
- **Traccia:** Le UI da terminale combinano testo e grafica attraverso protocolli dedicati. Geometria e refresh fanno parte del problema; OpenTUI resta il componente che gestisce Kitty Graphics in Destino.
- **Transizione:** Passare alla slide 11, «But this is not only about Doom.», aprendo la sezione «Il confine nativo».

### 11. But this is not only about Doom.
- **Scopo:** Segnare un passaggio nella sezione «Il confine nativo».
- **Traccia:** Usare «But this is not only about Doom.» come domanda o pausa visiva prima del prossimo passaggio. Spiegare ABI, API e responsabilità della memoria.
- **Transizione:** Passare alla slide 12, «What is FFI?».

### 12. What is FFI?
- **Scopo:** Spiegare ABI, API e responsabilità della memoria, attraverso «What is FFI?».
- **Traccia:** Definire FFI come chiamata a funzioni native tramite un contratto binario comune.
- **Transizione:** Passare alla slide 13, «Before FFI, we had choices.».

### 13. Before FFI, we had choices.
- **Scopo:** Segnare un passaggio nella sezione «Il confine nativo».
- **Traccia:** Usare «Before FFI, we had choices.» come domanda o pausa visiva prima del prossimo passaggio. Spiegare ABI, API e responsabilità della memoria.
- **Transizione:** Passare alla slide 14, «The "choice"».

### 14. The "choice"
- **Scopo:** Spiegare ABI, API e responsabilità della memoria, attraverso «The "choice"».
- **Traccia:** Distinguere addon, wrapper e i limiti storici di alcune astrazioni; non estenderli a ogni addon Node-API.
- **Transizione:** Passare alla slide 15, «Say hello to `node:ffi`.».

### 15. Say hello to `node:ffi`.
- **Scopo:** Segnare un passaggio nella sezione «Il confine nativo».
- **Traccia:** Usare «Say hello to `node:ffi`.» come domanda o pausa visiva prima del prossimo passaggio. Spiegare ABI, API e responsabilità della memoria.
- **Transizione:** Passare alla slide 16, «`node:ffi` changes the shape.».

### 16. `node:ffi` changes the shape.
- **Scopo:** Spiegare ABI, API e responsabilità della memoria, attraverso «`node:ffi` changes the shape.».
- **Traccia:** Seguire caricamento della libreria e dichiarazione delle firme. Il simbolo nativo reale è doomgeneric_Tick; arguments e return descrivono il contratto ABI.
- **Transizione:** Passare alla slide 17, «The boundary is explicit».

### 17. The boundary is explicit
- **Scopo:** Spiegare ABI, API e responsabilità della memoria, attraverso «The boundary is explicit».
- **Traccia:** Rendere espliciti simboli, tipi e lifetime invece di nasconderli nel glue code.
- **Transizione:** Passare alla slide 18, «FFI is very powerful.».

### 18. FFI is very powerful.
- **Scopo:** Segnare un passaggio nella sezione «Il confine nativo».
- **Traccia:** Usare «FFI is very powerful.» come domanda o pausa visiva prima del prossimo passaggio. Spiegare ABI, API e responsabilità della memoria.
- **Transizione:** Passare alla slide 19, «What can go wrong?».

### 19. What can go wrong?
- **Scopo:** Segnare un passaggio nella sezione «Il confine nativo».
- **Traccia:** Usare «What can go wrong?» come domanda o pausa visiva prima del prossimo passaggio. Spiegare ABI, API e responsabilità della memoria.
- **Transizione:** Passare alla slide 20, «Pretty much everything».

### 20. Pretty much everything
- **Scopo:** Spiegare ABI, API e responsabilità della memoria, attraverso «Pretty much everything».
- **Traccia:** Spiegare perché una firma sbagliata o memoria scaduta può compromettere il processo.
- **Transizione:** Passare alla slide 21, «OK, but what about Doom?», aprendo la sezione «Il gioco funziona».

### 21. OK, but what about Doom?
- **Scopo:** Segnare un passaggio nella sezione «Il gioco funziona».
- **Traccia:** Usare «OK, but what about Doom?» come domanda o pausa visiva prima del prossimo passaggio. Separare engine, loop, rendering, input e audio.
- **Transizione:** Passare alla slide 22, «Say hi to Destino.».

### 22. Say hi to Destino.
- **Scopo:** Segnare un passaggio nella sezione «Il gioco funziona».
- **Traccia:** Usare «Say hi to Destino.» come domanda o pausa visiva prima del prossimo passaggio. Separare engine, loop, rendering, input e audio.
- **Transizione:** Passare alla slide 23, «The Destino stack».

### 23. The Destino stack
- **Scopo:** Separare engine, loop, rendering, input e audio, attraverso «The Destino stack».
- **Traccia:** Tre librerie native, un coordinatore JavaScript: engine.js carica Doom, video.js carica OpenTUI, audio.js carica SDL3, tutti tramite node:ffi. OpenTUI presenta immagini tramite Kitty Graphics; il protocollo tastiera Kitty fornisce eventi di rilascio; SDL3 riproduce PCM. Anticipare soltanto il ruolo dell'input, approfondito nelle slide 33–34.
- **Transizione:** Passare alla slide 24, «How doomgeneric works».

### 24. How doomgeneric works
- **Scopo:** Separare engine, loop, rendering, input e audio, attraverso «How doomgeneric works».
- **Traccia:** La piccola interfaccia di piattaforma permette di riusare l'engine.
- **Transizione:** Passare alla slide 25, «Everyone owns a piece».

### 25. Everyone owns a piece
- **Scopo:** Separare engine, loop, rendering, input e audio, attraverso «Everyone owns a piece».
- **Traccia:** Node coordina tick, caricamento, video e consegna audio. TerminalParser interpreta gli eventi tastiera in JavaScript e li mappa ai comandi Doom. Il codice nativo produce pixel e miscela campioni; OpenTUI e SDL3 gestiscono l'output. SDL3 non è il mixer del gioco.
- **Transizione:** Passare alla slide 26, «Keep the native boundary explicit.».

### 26. Keep the native boundary explicit.
- **Scopo:** Segnare un passaggio nella sezione «Il gioco funziona».
- **Traccia:** Il codice nativo ora comprende anche audio e file in memoria: il valore è un confine esplicito, non una promessa di pochissime righe C. Separare engine, loop, rendering, input e audio.
- **Transizione:** Passare alla slide 27, «The C platform layer».

### 27. The C platform layer
- **Scopo:** Separare engine, loop, rendering, input e audio, attraverso «The C platform layer».
- **Traccia:** Raggruppare il contratto in inizializzazione degli asset e cleanup, tick/input, e accesso a framebuffer e blocchi PCM. Distinguere il contratto esposto dai dettagli interni del backend.
- **Transizione:** Passare alla slide 28, «The 35 Hz loop».

### 28. The 35 Hz loop
- **Scopo:** Separare engine, loop, rendering, input e audio, attraverso «The 35 Hz loop».
- **Traccia:** Seguire setInterval a 1000 / 35 ms: avanzamento del gioco, produzione e invio PCM, presentazione attraverso OpenTUI e richiesta di uscita. Il renderer viene chiamato a ogni tick anche senza un nuovo frame segnalato dal motore. Lo snippet è un estratto semplificato: omette gestione errori, conservazione del timer e dettagli del cleanup. Non esiste più lo sblocco audio dopo il primo frame.
- **Transizione:** Passare alla slide 29, «Now render Doom in a terminal.».

### 29. Now render Doom in a terminal.
- **Scopo:** Segnare un passaggio nella sezione «Il gioco funziona».
- **Traccia:** Usare «Now render Doom in a terminal.» come domanda o pausa visiva prima del prossimo passaggio. Separare engine, loop, rendering, input e audio.
- **Transizione:** Passare alla slide 30, «Framebuffer to terminal».

### 30. Framebuffer to terminal
- **Scopo:** Separare engine, loop, rendering, input e audio, attraverso «Framebuffer to terminal».
- **Traccia:** Seguire framebuffer BGRA → Buffer preso in prestito → conversione RGBA in JavaScript → FFI verso OpenTUI → Kitty Graphics. La vista iniziale dipende dal lifetime della memoria nativa; la conversione scrive in un buffer separato, quindi la pipeline completa non è zero-copy. OpenTUI genera l'output nativo, che VideoOutput recupera, copia e scrive su stdout. Renderer e output feed condividono lo stesso handle della libreria; i thread nativi di rendering sono disabilitati.
- **Transizione:** Passare alla slide 31, «Terminals are weird».

### 31. Terminals are weird
- **Scopo:** Separare engine, loop, rendering, input e audio, attraverso «Terminals are weird».
- **Traccia:** Spiegare geometria delle celle, resize e cambi di font. OpenTUI avvia la negoziazione Kitty Graphics; Destino inoltra le risposte al renderer e verifica supporto grafico e dimensioni in pixel. Mancata conferma entro 1,5 secondi causa DESTINO_VIDEO: non esiste fallback sixel o a caratteri. Il workaround CMUX modifica il placement delle immagini nell'output, senza riscrivere i payload grafici.
- **Transizione:** Passare alla slide 32, «Input is the awkward part.».

### 32. Input is the awkward part.
- **Scopo:** Segnare un passaggio nella sezione «Il gioco funziona».
- **Traccia:** Usare «Input is the awkward part.» come domanda o pausa visiva prima del prossimo passaggio. Separare engine, loop, rendering, input e audio.
- **Transizione:** Passare alla slide 33, «Every game needs input».

### 33. Every game needs input
- **Scopo:** Separare engine, loop, rendering, input e audio, attraverso «Every game needs input».
- **Traccia:** Distinguere pressione, ripetizione e rilascio dei tasti.
- **Transizione:** Passare alla slide 34, «Why the Kitty keyboard protocol?».

### 34. Why the Kitty keyboard protocol?
- **Scopo:** Separare engine, loop, rendering, input e audio, attraverso «Why the Kitty keyboard protocol?».
- **Traccia:** Il protocollo tastiera Kitty è distinto da Kitty Graphics. TerminalParser in input.js richiede e verifica i flag per disambiguazione, press/repeat/release e codifica di tutti i tasti; attende la conferma entro 1,5 secondi, senza fallback ASCII/xterm legacy. OpenTUI configura gli stessi flag durante il setup, ma parsing e mappatura dei comandi restano in JavaScript.
- **Transizione:** Passare alla slide 35, «Native mixing. JavaScript orchestration.».

### 35. Native mixing. JavaScript orchestration.
- **Scopo:** Separare engine, loop, rendering, input e audio, attraverso «Audio stays native».
- **Traccia:** MUS/MIDI viene convertito e schedulato con il convertitore DoomGeneric e TinyMidiLoader; TinySoundFont sintetizza la musica, il backend C miscela gli effetti. Node preleva 1.260 frame stereo per tick a 44,1 kHz e li accoda a SDL3, limitando il backlog. JavaScript gestisce il flusso senza sintetizzare ogni campione e senza callback JS sul thread audio SDL.
- **Transizione:** Passare alla slide 36, «How did we package this monster?», aprendo la sezione «Distribuzione».

### 36. How did we package this monster?
- **Scopo:** Segnare un passaggio nella sezione «Distribuzione».
- **Traccia:** Usare «How did we package this monster?» come domanda o pausa visiva prima del prossimo passaggio. Spiegare come SEA e librerie native convivono.
- **Transizione:** Passare alla slide 37, «Node.js SEA works, with a catch».

### 37. Node.js SEA works, with a catch
- **Scopo:** Spiegare come SEA e librerie native convivono, attraverso «Node.js SEA works, with a catch».
- **Traccia:** SEA incorpora le tre librerie native (Doom, OpenTUI e SDL3) e gli asset, esponendoli tramite useVfs. Il problema da risolvere è che fopen del codice C non attraversa automaticamente il filesystem virtuale di Node. Node può materializzare internamente le librerie native: non promettere l'assenza assoluta di file temporanei.
- **Transizione:** Passare alla slide 38, «How would you solve that?».

### 38. How would you solve that?
- **Scopo:** Segnare un passaggio nella sezione «Distribuzione».
- **Traccia:** Chiedere come far leggere gli asset a un motore C che usa stdio quando i dati sono nel VFS di Node. Lasciare una breve pausa prima della soluzione attraverso buffer e adattamento dell'I/O nativo.
- **Transizione:** Passare alla slide 39, «Don't forget about K.I.S.S.ing!».

### 39. Don't forget about K.I.S.S.ing!
- **Scopo:** Segnare un passaggio nella sezione «Distribuzione».
- **Traccia:** Il principio è passare dati già letti da Node attraverso FFI, evitando l'estrazione manuale di tutti gli asset. L'adattatore stdio nativo resta lavoro reale: non presentare il VFS Node come una soluzione automatica all'I/O C.
- **Transizione:** Passare alla slide 40, «Assets in memory. Saves on disk.».

### 40. Assets in memory. Saves on disk.
- **Scopo:** Spiegare come SEA e librerie native convivono, attraverso «Assets in memory. Saves on disk.».
- **Traccia:** Node legge WAD e SF2 e passa buffer al nativo. In SEA l'adattatore offre file in memoria al motore, mentre i salvataggi persistono in saves/<nome-WAD> nella directory corrente, inclusi quelli temporanei e di recupero. Configurazione interna di Doom, demo e screenshot restano in memoria; la modalità sorgente mantiene il normale filesystem. Un destino.json assente nel SEA usa default in memoria.
- **Transizione:** Passare alla slide 41, «Then comes performance.», aprendo la sezione «Performance e demo».

### 41. Then comes performance.
- **Scopo:** Segnare un passaggio nella sezione «Performance e demo».
- **Traccia:** Usare «Then comes performance.» come domanda o pausa visiva prima del prossimo passaggio. Collegare fast path, dimostrazione e riuso.
- **Transizione:** Passare alla slide 42, «Destino is not the hottest case».

### 42. Destino is not the hottest case
- **Scopo:** Collegare fast path, dimostrazione e riuso, attraverso «Destino is not the hottest case».
- **Traccia:** Distinguere frequenza dei campioni e frequenza delle chiamate: 44.100 frame audio al secondo sono prelevati in 35 blocchi da 1.260 frame, non con una chiamata per campione. Questo non è il conteggio totale delle chiamate FFI del runtime. Il batching limita gli attraversamenti; distinguere costo del confine e lavoro utile senza inventare benchmark.
- **Transizione:** Passare alla slide 43, «(Very) Fast FFI is now in Node.js.».

### 43. (Very) Fast FFI is now in Node.js.
- **Scopo:** Segnare un passaggio nella sezione «Performance e demo».
- **Traccia:** Usare «(Very) Fast FFI is now in Node.js.» come domanda o pausa visiva prima del prossimo passaggio. Collegare fast path, dimostrazione e riuso. Sottotitolo da richiamare: «Starting in Node.js 26.4.0».
- **Transizione:** Passare alla slide 44, «What was added?».

### 44. What was added?
- **Scopo:** Collegare fast path, dimostrazione e riuso, attraverso «What was added?».
- **Traccia:** Presentare Fast API, trampolini e fallback come percorsi compatibili sotto la stessa API.
- **Transizione:** Passare alla slide 45, «Why trampolines?».

### 45. Why trampolines?
- **Scopo:** Collegare fast path, dimostrazione e riuso, attraverso «Why trampolines?».
- **Traccia:** Il trampolino adatta la forma V8 alla ABI del simbolo trovato a runtime.
- **Transizione:** Passare alla slide 46, «DEMO».

### 46. DEMO
- **Scopo:** Collegare fast path, dimostrazione e riuso, attraverso «DEMO».
- **Traccia:** Eseguire la demo con Node.js 26.10.0+, OpenTUI/Kitty Graphics, SDL3 e asset disponibili. Mostrare audio e rendering; se utile mostrare resize, barra di stato e persistenza dei salvataggi. Tenere una registrazione reale come alternativa. Sottotitolo da richiamare: «TIME».
- **Transizione:** Passare alla slide 47, «Check it out!».

### 47. Check it out!
- **Scopo:** Collegare fast path, dimostrazione e riuso, attraverso «Check it out!».
- **Traccia:** Lasciare il repository del progetto per provare e contribuire.
- **Transizione:** Passare alla slide 48, «WHAT'S NEXT?».

### 48. WHAT'S NEXT?
- **Scopo:** Aprire la conclusione e invitare a riutilizzare quanto mostrato.
- **Traccia:** Collegare FFI, responsabilità esplicite e coordinamento JavaScript ad altri esperimenti con librerie native. Non annunciare funzionalità o roadmap non confermate.
- **Transizione:** Passare alla slide 49, la citazione di Arthur C. Clarke.

### 49. The only way of discovering the limits of the possible is to venture a little way past them into the impossible.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «The only way of discovering the limits of the possible is to venture a little way past them into the impossible.», attribuita nella slide a Arthur C. Clarke. Collegarla al tema: Un esperimento ludico rende concreti FFI, rendering nel terminale e coordinamento fra JavaScript e librerie native specializzate.
- **Transizione:** Passare alla slide 50, «End».

### 50. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti includono i collegamenti presenti nelle slide e i riferimenti ai componenti discussi, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://github.com/anomalyco/opentui>
- <https://github.com/nodejs/node>
- <https://github.com/ozkl/doomgeneric>
- <https://github.com/libsdl-org/SDL>
- <https://github.com/schellingb/TinySoundFont>
- <https://sw.kovidgoyal.net/kitty/graphics-protocol/>
- <https://sw.kovidgoyal.net/kitty/keyboard-protocol/>
- <https://github.com/nodejs/node/pull/63068>
- <https://github.com/platformatic/destino>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Snippet, ownership dei buffer, scheduling del rendering e gestione input sono stati confrontati con il codice della riscrittura; la verifica è statica e non sostituisce la prova della demo.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
