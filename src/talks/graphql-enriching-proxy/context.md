# Contesto immagini — Don’t break GraphQL, extend it!

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

Don’t break GraphQL, extend it!

## Abstract esatto

GraphQL is powerful technology to retrieve and send complex structures from remote locations with a simple and
effective syntax. One of its perks is avoid under-fetching and over-fetching as the client specifically requests the
fields it’s interested in. 

But what happens if we need to enrich or customize the data set and we can’t modify the upstream GraphQL server?
Shall we break the spec?

In this talk I will show you how to use the resources the GraphQL specification already gives us to solve this issue
without having to break the rules.

## Messaggio e background confermato

Le estensioni previste da GraphQL permettono di aggiungere metadati senza alterare i campi richiesti dal client o violare il contratto della risposta.

Il progetto graphql-enrich-proxy usa parsing, AST e visita della risposta della reference implementation GraphQL. Il talk distingue dati richiesti, informazioni temporanee sui tipi e arricchimenti in extensions.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La versione corrente contiene **40 slide**.

- **Slide 1–8 — GraphQL e contratti:** Motivare il bisogno di arricchimento.
- **Slide 9–16 — Vincoli dei client:** Spiegare perché non basta aggiungere campi alla risposta.
- **Slide 17–23 — Il proxy:** Seguire analisi, tipi temporanei e cache.
- **Slide 24–30 — Visita dei dati:** Associare arricchimenti ai nodi della risposta.
- **Slide 31–40 — Esempio completo:** Dimostrare la conservazione del contratto.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: fuchsia, amber, gray, red, green, sky, blue. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Alberi semplici, rami aggiuntivi esterni al nucleo e un involucro che protegge il contratto originale. Nessun codice o JSON generato come decorazione; conservare gli esempi tecnici esistenti.

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
| 2 | Being kind never hurts! | `@common/kindness.png` |
| 4 | Let's celebrate GraphQL! | `@common/graphql.png` |
| 8 | The server knows it better | `@common/server.png` |
| 9 | How to be proactive? | `@common/what-now.png` |
| 11 | Are we done? | `@common/happiness.png` |
| 12 | You already know the answer... | `@common/laugh.png` |
| 15 | Do we have a choice? | `@common/alternatives.png` |
| 16 | Yes, let's make an enriching proxy! | `@common/san-bernardo.png` |
| 25 | Depth first tree traversal | `@talk/tree.png` |
| 31 | Only an example can enlighten us! | `@common/sun.png` |
| 37 | Mission completed! | `@common/completed.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 2 — Being kind never hurts!

**Concetto proposto:** Un pacco viene arricchito con un involucro esterno senza modificarne il contenuto.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 9 — How to be proactive?

**Concetto proposto:** Una persona offre un oggetto aggiuntivo rispettando un contenitore già concordato.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 16 — Yes, let's make an enriching proxy!

**Concetto proposto:** Un ponte intermedio aggiunge un piccolo ramo laterale a un flusso intatto.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 24 — Let me introduce two friends...

**Concetto proposto:** Un albero essenziale e un percorso che visita ogni nodo.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 31 — Only an example can enlighten us!

**Concetto proposto:** Tre stazioni mostrano ingresso, lavoro intermedio e uscita coerente.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 37 — Mission completed!

**Concetto proposto:** Il contenitore originale e un allegato distinto arrivano insieme a destinazione.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
