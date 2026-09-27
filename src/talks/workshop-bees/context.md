# Contesto immagini — Workshop: The bees are important: use SDKs wisely

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

Workshop: The bees are important: use SDKs wisely

## Abstract esatto

It is a well-known fact that if bees go extinct, many things in the world (if not the world itself)
would disappear.

The same goes for third-party APIs (which, with a horrible pun, translates to bees in Italian).
Most of the time vendors provide a SDK for your language to interact with their API. While this
speeds up productivity, it slows down performance and makes you dependent on SDK bugs or supply
chain vulnerabilities, that are not always addressed at the speed you would expect. Moreover, you
never deal with the API directly and this removes the pressure to vendors for a developer-first
designed APIs.

In this workshop, I will show how most of the time you don’t need an SDK since you can easily code
everything you need by yourself using a simple HTTP call.

## Messaggio e background confermato

Implementare un upload S3 con HTTP e Signature V4 permette di capire concretamente ciò che un SDK automatizza.

Workshop collegato al talk bees con cinque esercizi progressivi e repository finale. Servono un ambiente Node.js e risorse AWS concordate dall'organizzatore; credenziali e costi dell'esercitazione non sono forniti dal deck.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La versione corrente contiene **14 slide**.

- **Slide 1–4 — Introduzione e documentazione:** Preparare il contesto e le fonti AWS.
- **Slide 5–7 — Ambiente:** Leggere setup e scheletro prima di iniziare.
- **Slide 8–12 — Cinque esercizi:** Costruire firma e richiesta passo dopo passo.
- **Slide 13–14 — Risorse finali:** Lasciare il codice per proseguire.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: sky, red, green, amber, orange, blue. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Percorso a cinque tappe, un pacco da firmare e consegnare, strumenti pochi e riconoscibili. Non incorporare codice o credenziali nelle immagini; il workshop resta centrato sugli esercizi.

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

| Slide | Titolo                             | Riferimento immagine    |
| ----- | ---------------------------------- | ----------------------- |
| 5     | Let's get to the action!           | `@common/action.png`    |
| 8     | Task 1: Create a Canonical Request | `@common/code.png`      |
| 9     | Task 2: Create a String to Sign    | `@common/algorithm.png` |
| 10    | Task 3: Calculate Signature        | `@common/hacking.png`   |
| 11    | Task 4: REST API call              | `@common/server.png`    |
| 12    | Task 5: Main function              | `@common/completed.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 1 — Workshop: The bees are important: use SDKs wisely

**Concetto proposto:** Una piccola ape accanto a un pacco da consegnare, metafora delle API.

**Uso:** Materiale promozionale o variante di copertina da concordare; non presupporre un layout nuovo.

### B. Slide 5 — Let's get to the action!

**Concetto proposto:** Un banco con cinque strumenti pronti per l'esercitazione.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 8 — Task 1: Create a Canonical Request

**Concetto proposto:** I componenti di una richiesta vengono ordinati in una forma univoca.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 9 — Task 2: Create a String to Sign

**Concetto proposto:** Un piccolo riepilogo astratto viene ricavato da un contenitore più grande.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 10 — Task 3: Calculate Signature

**Concetto proposto:** Un sigillo personale viene applicato a un pacco senza mostrare chiavi o testo.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 11 — Task 4: REST API call

**Concetto proposto:** Il pacco firmato raggiunge un archivio attraverso un percorso diretto.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
