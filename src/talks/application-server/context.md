# Contesto immagini — Why Node.js needs an application server

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

Why Node.js needs an application server

## Abstract esatto

With over 2 billion annual downloads, Node.js is one of the most used web development tools today.

However, its single-threaded nature poses challenges for scaling in modern, high-demand environments. 

In this talk, we’ll explore how an application server can optimize Node.js resource management, streamline development, and enable smoother transitions to microservices.

## Messaggio e background confermato

Separare applicazioni, coordinamento e osservabilità in thread diversi rende più gestibile l'esecuzione di Node.js in produzione.

Il talk presenta Watt e il problema dell'event loop che deve osservare sé stesso. I worker condividono il processo: isolamento JavaScript e riavvio del worker non equivalgono a isolamento da qualunque crash nativo o esaurimento globale di memoria.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La slide 3, subito dopo `hello`, è “Platformatic is used by”: titolo, loghi di Supabase e Spendesk e link ai case study provengono dal tema condiviso (`src/themes/main/theme.yml`). Riutilizzare i loghi originali, senza generarli o aggiungere affermazioni commerciali.

La versione corrente contiene **40 slide**.

- **Slide 1–10 — Node.js e parallelismo:** Superare la semplificazione del runtime esclusivamente single-threaded.
- **Slide 11–17 — Osservabilità sotto carico:** Spiegare il limite del monitoraggio nello stesso event loop.
- **Slide 18–24 — Architettura Watt:** Separare esecuzione applicativa e supervisione.
- **Slide 25–30 — Guasti e recupero:** Descrivere rilevamento, sostituzione e instradamento.
- **Slide 31–40 — Più applicazioni e conclusione:** Collegare orchestrazione e uso delle risorse.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: orange, red, amber, sky, pink. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Schemi semplici con un coordinatore distinto dai worker, colori coerenti per ruolo e poche frecce. Rispettare i diagrammi già presenti; i nuovi schemi architetturali vanno disegnati in Excalidraw.

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
| 4 | Node.js is everywhere | `@common/node-mascot.svg` |
| 6 | But there's a catch... | `@common/danger-strip.png` |
| 8 | Is this still true? | `@common/questions-2.png` |
| 9 | Did you hide in a cave? | `@common/cave.png` |
| 11 | Running Node.js in production | `@common/server.png` |
| 13 | How do we monitor health? | `@common/health-monitor.png` |
| 14 | The Node.js event loop | `@talk/event-loop.png` |
| 17 | We need a better architecture! | `@common/deserve.png` |
| 21 | What about metrics? | `@common/metrics.png` |
| 23 | Monitoring architecture | `@talk/metrics.png` |
| 25 | Handling failures | `@common/firefighter.png` |
| 28 | Why is this approach better? | `@common/dog-1.png` |
| 29 | Because I'm telling you! | `@common/troll-black.svg` |
| 31 | Not convinced yet? | `@common/fry-money.png` |
| 33 | Watt in action: the mesh network | `@talk/mesh.png` |
| 35 | Watt in action: multiple workers | `@talk/multiple-workers.png` |
| 37 | Please, just let me go! | `@common/dog-2.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 6 — But there's a catch...

**Concetto proposto:** Un piccolo ingranaggio sovraccarico accanto a un sistema apparentemente efficiente.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 13 — How do we monitor health?

**Concetto proposto:** Un osservatore dentro una ruota occupata non riesce a vedere il resto; metafora del monitoraggio.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 17 — We need a better architecture!

**Concetto proposto:** Una torre di controllo esterna a tre postazioni operative distinte.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 25 — Handling failures

**Concetto proposto:** Una postazione viene sostituita mentre le altre continuano il lavoro.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 31 — Not convinced yet?

**Concetto proposto:** Più laboratori sotto lo stesso tetto, ciascuno con un ingresso distinto.

**Uso:** Composizione adatta al formato richiesto, con spazio negativo dove verrà sovrapposto il titolo.

### F. Slide 37 — Please, just let me go!

**Concetto proposto:** Una valigia chiusa accanto a tre oggetti essenziali: preparare il riepilogo.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
