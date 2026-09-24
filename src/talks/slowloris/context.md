# Contesto immagini — The tale of avoiding a time-based DDOS attack in Node.js

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

The tale of avoiding a time-based DDOS attack in Node.js

## Abstract esatto

Web applications are commonly vulnerable to several Distributed Denial of Service attacks, sometimes in unexpected
ways. An example is the SlowLoris attack, an exploit that leads to service interruption by simply sending the data
to the server as slowest as possible.

In this talk I will tell the tale of how it took almost 13 years for Node to be completely protected by SlowLoris
attack. I will also show that sometimes prioritizing performance can lead to incorrect fixes that can result in a
false sense of protection.

## Messaggio e background confermato

La disponibilità può essere compromessa anche da client lentissimi: timeout corretti devono funzionare anche quando non arrivano nuovi dati.

Il talk ricostruisce il percorso dei timeout HTTP fino a Node.js 18. È un racconto storico delle mitigazioni Slowloris, non una garanzia generale contro ogni DoS. Le note originali includono battute, precisazioni sul keep-alive e il carattere semver-major della modifica.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La versione corrente contiene **33 slide**.

- **Slide 1–9 — Una minaccia inattesa:** Distinguere intensità del traffico e consumo delle risorse.
- **Slide 10–16 — Meccanismo:** Mostrare come connessioni lente esauriscono capacità.
- **Slide 17–23 — Mitigazioni storiche:** Distinguere timeout di inattività, header e richiesta.
- **Slide 24–29 — La correzione:** Spiegare perché serve un controllo indipendente dai dati in ingresso.
- **Slide 30–33 — Lezioni:** Collegare performance e correttezza.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: fuchsia, red, pink, amber, gray, green. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Lentezza rappresentata da gocce che occupano contenitori e code che crescono. Tono ironico con animali lenti simbolici; grafi di socket e risorse devono restare fedeli agli originali.

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
| 2 | Sometimes, your worst enemy is slowness! | `@common/sloth.png` |
| 4 | What do we use everyday? | `@common/online-banking.png` |
| 5 | We are all vulnerable! | `@common/hacking.png` |
| 7 | Fear the real enemy ... | `@common/hacking.png` |
| 8 | Immagine — slowloris.png | `@common/slowloris.png` |
| 9 | The Slowloris attack | `@talk/slowloris-intro.png` |
| 10 | Normal HTTP server activity | `@talk/http-1.png` |
| 11 | Normal HTTP server activity | `@talk/http-2.png` |
| 12 | Normal HTTP server activity | `@talk/http-3.png` |
| 14 | The Slowloris attack | `@talk/slowloris-1.png` |
| 15 | The Slowloris attack | `@talk/slowloris-2.png` |
| 16 | The Slowloris attack | `@talk/slowloris-3.png` |
| 17 | How do we stop it? | `@common/wall.png` |
| 20 | What about Node.js? | `@common/node.png` |
| 24 | Are we safe now? | `@common/completed.png` |
| 25 | Yes, almost! | `@common/hacking.png` |
| 30 | We made it! | `@common/turtle.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 2 — Sometimes, your worst enemy is slowness!

**Concetto proposto:** Una goccia lenta blocca un meccanismo molto più grande.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 5 — We are all vulnerable!

**Concetto proposto:** Molti ingressi aperti consumano progressivamente uno spazio limitato.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 7 — Fear the real enemy ...

**Concetto proposto:** Un animale lento simbolico proietta un'ombra sorprendentemente grande.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 17 — How do we stop it?

**Concetto proposto:** Un cancello con una clessidra limita il tempo di occupazione.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 24 — Are we safe now?

**Concetto proposto:** Un lucchetto apparentemente chiuso lascia un piccolo varco.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 30 — We made it!

**Concetto proposto:** Un flusso torna regolare dopo aver liberato i passaggi bloccati.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
