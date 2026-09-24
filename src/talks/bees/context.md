# Contesto immagini — The bees are important: use SDKs wisely

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

The bees are important: use SDKs wisely

## Abstract esatto

It is a well-known fact that if bees go extinct, many things in the world (if not the world itself)
would disappear.

The same goes for third-party APIs (which, with a horrible pun, translates to bees in Italian).
Most of the time vendors providea SDK for your language to interact with their API. While this
speeds up productivity, it slows down performance and makes you dependent on SDK bugs or supply
chain vulnerabilities, that are not always addressed at the speed you would expect. Moreover, you
never deal with the API directly and this removes the pressure to vendors for a developer-first
designed APIs.

In this talk, I will show how most of the time you don’t need an SDK since you can easily code
everything you need by yourself using a simple HTTP call.

## Messaggio e background confermato

Scegliere gli SDK consapevolmente: per alcune operazioni una chiamata HTTP diretta può ridurre dipendenze e costi, assumendosi però le responsabilità prima delegate al kit.

Il gioco di parole nasce da bees → api in italiano. Il caso tecnico confronta upload S3 con AWS SDK v2, v3 e firma manuale. Benchmark e dipendenze sono quelli delle versioni del deck, non misure nuove.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La versione corrente contiene **47 slide**.

- **Slide 1–9 — Api e API:** Introdurre il bisogno di integrazioni con un gioco di parole.
- **Slide 10–18 — Benefici e costi degli SDK:** Motivare un confronto concreto.
- **Slide 19–30 — SDK AWS v2 e v3:** Leggere dipendenze, codice e misure del caso S3.
- **Slide 31–44 — HTTP e firma manuale:** Seguire la costruzione di una richiesta autenticata.
- **Slide 45–47 — Scelta consapevole:** Bilanciare prestazioni e costo di manutenzione.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: fuchsia, blue, amber, pink, gray, sky, green. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Api come metafora di connessioni utili, pacchi annidati per dipendenze e un percorso diretto per HTTP. Ironia leggera, colori pieni del tema e oggetti leggibili; non generare grafici o output di benchmark.

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
| 2 | Mothers are always right! | `@common/lollipops.png` |
| 4 | Our entire existence is on their shoulders! | `@common/bee.png` |
| 6 | Aren't we here for dev stuff? | `@common/dog-1.png` |
| 8 | Are you trolling us? | `@common/troll-black.svg` |
| 12 | Are there just pros? | `@common/happiness.png` |
| 13 | You already know the answer... | `@common/laugh.png` |
| 16 | Only an example can enlighten us! | `@common/sun.png` |
| 18 | Let's go! | `@common/start.png` |
| 23 | AWS SDK v2: What's happening under the hood? | `@talk/flame-sdk-v2.png` |
| 24 | Let's get modern! | `@common/modern.png` |
| 29 | AWS SDK v3: What's happening under the hood? | `@talk/flame-sdk-v3.png` |
| 30 | Quod Erat Demonstrandum | `@common/iceberg.png` |
| 31 | Do we have the solution? | `@common/solution-1.png` |
| 32 | Yes, use the APIs directly! | `@common/bee.png` |
| 34 | Let's get to the action! | `@common/action.png` |
| 43 | No SDK: What's happening under the hood? | `@talk/flame-direct.png` |
| 44 | Mission completed! | `@common/completed.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 4 — Our entire existence is on their shoulders!

**Concetto proposto:** Un piccolo gruppo di api sostiene una rete di fiori, senza percentuali o etichette.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 8 — Are you trolling us?

**Concetto proposto:** Un'ape osserva una presa di rete con espressione interrogativa, senza testo.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 12 — Are there just pros?

**Concetto proposto:** Un pacco utile proietta l'ombra di molti pacchi più piccoli.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 16 — Only an example can enlighten us!

**Concetto proposto:** Tre percorsi portano lo stesso oggetto allo stesso deposito: preparare il confronto.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 32 — Yes, use the APIs directly!

**Concetto proposto:** Un percorso diretto verso un archivio, con un solo sigillo di autenticazione.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 44 — Mission completed!

**Concetto proposto:** Una consegna completata con una cassetta di strumenti essenziale.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
