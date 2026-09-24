# Contesto immagini — The last 5 years of streams in Node.js

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

The last 5 years of streams in Node.js

## Abstract esatto

Thanks to a community of passionate contributors, Node.js is constantly evolving. Streams have been a core feature
since the beginning but are still very much in active development.

In this talk I will guide the audience through the changes that have been added in the last five years of Node.js
development and how they impacted performance. Do you already know how to use them properly?

Finally I’ll introduce readable-stream v4.0.0, a full refactor which brings all these changes to user-land,
regardless of the Node.js version installed on the system.

## Messaggio e background confermato

Gli stream evolvono verso composizione, stato più prevedibile e API moderne; readable-stream porta una versione coerente di quelle capacità anche fuori dal runtime originale.

Talk archiviato su readable-stream 4 e il passaggio dal codice Node.js 10 a Node.js 18. Matteo Collina, Robert Nagy e Benjamin Gruenbaum sono accreditati. Le indicazioni su release corrente e API si riferiscono al periodo del deck.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La versione corrente contiene **29 slide**.

- **Slide 1–11 — Stream e pacchetto:** Definire il modello e il ruolo di readable-stream.
- **Slide 12–21 — Evoluzione delle API:** Spiegare stato, lifecycle e composizione.
- **Slide 22–29 — Toolchain e comunità:** Mostrare il lavoro di compatibilità e riconoscere i contributori.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: fuchsia, amber, blue, red, sky, green. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Flussi di piccoli blocchi, tubazioni componibili e contenitori a capacità limitata. Contrapporre streaming e accumulo totale senza grafici inventati.

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
| 2 | Panta rei! | `@common/lava.png` |
| 4 | What are streams anyway? | `@common/island.png` |
| 7 | Can I use them in the browser? | `@common/laptop.png` |
| 10 | Project status | `@common/server.png` |
| 12 | What has changed in streams since then? | `@common/changes.png` |
| 21 | With great power comes great responsibility™ | `@common/spiderman.png` |
| 23 | Build toolchain | `@common/javascript.png` |
| 23 | Build toolchain | `@common/babel.png` |
| 23 | Build toolchain | `@common/prettier.png` |
| 24 | Testing technologies | `@common/tap.png` |
| 24 | Testing technologies | `@common/tape.png` |
| 24 | Testing technologies | `@common/playwright.png` |
| 25 | We test 100 configurations in the CI! | `@common/100.png` |
| 26 | ... that's all folks!™ | `@common/thats-all-folks.png` |
| 27 | Remember to thank these guys! | `@common/mcollina.png` |
| 27 | Remember to thank these guys! | `@talk/ronag.png` |
| 27 | Remember to thank these guys! | `@talk/benjamingr.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 2 — Panta rei!

**Concetto proposto:** Un flusso continuo di blocchi attraversa un canale pulito.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 4 — What are streams anyway?

**Concetto proposto:** Un grande oggetto viene lavorato un piccolo pezzo alla volta.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 7 — Can I use them in the browser?

**Concetto proposto:** Lo stesso flusso entra in due ambienti con forme differenti.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 12 — What has changed in streams since then?

**Concetto proposto:** Una condotta viene aggiornata con innesti compatibili.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 16 — Let's see the exciting parts!

**Concetto proposto:** Tre segmenti si collegano in una pipeline leggibile.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 22 — What is used under the hood?

**Concetto proposto:** Dietro una superficie semplice, pochi utensili coordinati sostengono il lavoro.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
