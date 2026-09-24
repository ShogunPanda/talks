# Contesto immagini — How to breed a good OSS community

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

How to breed a good OSS community

## Abstract esatto

You started creating a new amazing framework, or library, or proof-of-concept. Then you are amazed by your work and
want to enable other to use it. A new Open Source Software (OSS) is just born and you are now responsible for it.

Not too late, new people start using, and contributing to it. The community grows and with it, its maintenance
burden and complexity. If only you knew which good choices to make from the very first day…

Fear no more, this talk will give you a pletora of good indications and advices on how to breed a healthy OSS
community from the very first day.

## Messaggio e background confermato

Una comunità OSS sostenibile cresce con autonomia, gentilezza, processi chiari e responsabilità distribuite.

Il deck alterna principi, workflow e persone, con tre pause e più momenti di domande. Licenza, apertura del codice e disponibilità ad accettare contributi sono aspetti distinti. Le considerazioni economiche e legali sono orientamenti del relatore, non valutazioni di licenze specifiche.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La versione corrente contiene **73 slide**.

- **Slide 1–23 — Motivazioni e responsabilità:** Distinguere collaborazione volontaria e rapporto gerarchico.
- **Slide 24–31 — Licenze e prima pausa:** Collegare apertura, continuità e sostenibilità.
- **Slide 32–44 — Hosting e issue:** Ridurre gli ostacoli alla partecipazione.
- **Slide 45–55 — Review e release:** Costruire un processo di qualità ripetibile.
- **Slide 56–69 — Governance e inclusione:** Distribuire responsabilità e proteggere la comunità.
- **Slide 70–73 — Node.js e chiusura:** Aprire il confronto su un caso reale.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: fuchsia, amber, red, blue, green, sky. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Metafore di giardino, cura, percorsi aperti e tavolo comune; evitare un capo isolato che domina il gruppo. Rispettare le pause e la palette delle sezioni già presenti.

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
| 2 | Don't ask if you can't handle the answers! | `@common/dog-2.png` |
| 4 | Do you want to mess with Open Source? | `@common/code.png` |
| 8 | Beware! | `@common/hell.png` |
| 9 | The devil is in the details | `@talk/sqlite.png` |
| 11 | Wait a sec... | `@common/thinker.png` |
| 12 | Ring a bell? | `@common/bell.png` |
| 14 | How to make it similar? | `@common/wanted.png` |
| 18 | Trust the community! | `@common/community.png` |
| 19 | The world is nice ... | `@common/people.png` |
| 20 | ... but don't be afraid to be harsh ... | `@common/police.png` |
| 21 | ... and don't forget to be kind! | `@common/kindness.png` |
| 22 | But here we're talking about breeding... | `@common/breeding.png` |
| 24 | Nobody wants to be sued! | `@common/justice.png` |
| 28 | Don't try to mess the system | `@common/nodejs-logo.png` |
| 28 | Don't try to mess the system | `@common/terraform.png` |
| 28 | Don't try to mess the system | `@common/rust-logo.png` |
| 29 | Being kind never hurts! | `@common/kindness.png` |
| 30 | Questions? | `@common/questions-2.png` |
| 31 | Coffee Break | `@common/coffee.png` |
| 32 | Let's get to the action! | `@common/action.png` |
| 33 | First of all, choose the hosting | `@common/github.png` |
| 33 | First of all, choose the hosting | `@common/gitlab.png` |
| 33 | First of all, choose the hosting | `@common/bitbucket.png` |
| 35 | How do we get started? | `@common/do-it.png` |
| 36 | Everybody has issues | `@talk/issue.png` |
| 37 | Templates help | `@talk/template.png` |
| 38 | Reproducible examples are crucial for bugs | `@talk/repro.png` |
| 39 | You don't owe anybody anything ... | `@common/baloons.png` |
| 43 | Remember about good first time issues | `@talk/first-issues.png` |
| 44 | The next big pillar | `@common/pillars.png` |
| 46 | Always ask for tests | `@talk/tests.png` |
| 48 | Review must be thorough | `@common/review.png` |
| 53 | (Semi) Automated releasing | `@talk/workflows.png` |
| 54 | Questions? | `@common/questions-2.png` |
| 55 | Coffee Break | `@common/coffee.png` |
| 56 | Humans are social beings | `@common/people.png` |
| 57 | Let's talk about the community | `@common/community.png` |
| 61 | Diversity and Inclusion | `@common/diversity.png` |
| 66 | Everybody is responsible for moderation! | `@common/police.png` |
| 68 | Questions? | `@common/questions-2.png` |
| 69 | Coffee Break | `@common/coffee.png` |
| 70 | What about Node.js? | `@common/node.png` |
| 71 | Questions? | `@common/questions-2.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 4 — Do you want to mess with Open Source?

**Concetto proposto:** Un giardino condiviso con attrezzi accessibili a più persone.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 18 — Trust the community!

**Concetto proposto:** Più mani sostengono una struttura senza una figura dominante.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 24 — Nobody wants to be sued!

**Concetto proposto:** Una porta aperta con regole chiare rappresentate da forme semplici, non testo.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 35 — How do we get started?

**Concetto proposto:** Un sentiero d'ingresso ben visibile verso un laboratorio.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 44 — The next big pillar

**Concetto proposto:** Due persone osservano insieme un oggetto in costruzione: collaborazione in review.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 61 — Diversity and Inclusion

**Concetto proposto:** Sedute diverse intorno a un tavolo comune, tutte realmente accessibili.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
