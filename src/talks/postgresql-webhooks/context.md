# Contesto immagini — How to create a PostgreSQL based webhook system

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

How to create a PostgreSQL based webhook system

## Abstract esatto

Webhooks are essential in modern API interactions, as they eliminate the need for polling-based 
architectures and significantly improve latency in distributed workflows by providing 
near-instantaneous responses to changes, enabling more efficient and real-time data 
synchronization across systems.

In this talk, I will demonstrate how to leverage PostgreSQL as a centralized message store for
queuing and managing webhook events with transactional integrity. 
Additionally, I will cover the implementation of a dead-letter queue (DLQ) to gracefully handle failures, 
cron jobs for managing recurring events, and a leader election mechanism to enforce an exactly-once
execution model, ensuring reliable and consistent event processing across distributed systems.

## Messaggio e background confermato

PostgreSQL può sostenere una coda webhook con persistenza, retry, DLQ e coordinamento; le garanzie di consegna vanno distinte dagli effetti sul destinatario.

Il progetto usa servizi Platformatic, PostgreSQL e un target Fastify con errori simulati. La leader election tramite advisory lock impedisce alcuni accessi concorrenti, ma non garantisce da sola exactly-once end-to-end su HTTP: gli effetti richiedono idempotenza o deduplicazione del destinatario.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La slide 4, subito dopo `hello`, è “Platformatic is used by”: titolo, loghi di Supabase e Spendesk e link ai case study provengono dal tema condiviso (`src/themes/main/theme.yml`). Riutilizzare i loghi originali, senza generarli o aggiungere affermazioni commerciali.

La versione corrente contiene **48 slide**.

- **Slide 1–13 — Distribuzione e aggiornamenti:** Confrontare batch, polling e push.
- **Slide 14–20 — Coda e failure:** Definire consegna, retry, DLQ e ricorrenza.
- **Slide 21–27 — Coordinamento:** Spiegare leader election e advisory lock.
- **Slide 28–38 — Implementazione:** Seguire schema, loop e consegna HTTP.
- **Slide 39–48 — Scheduling e chiusura:** Gestire notifiche, retry e creazione eventi.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: fuchsia, amber, green, orange, red. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Code ordinate, una corsia separata per messaggi falliti e un solo coordinatore attivo. Schemi tecnici in Excalidraw; non suggerire che una serratura elimini ogni duplicazione di rete.

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
| 2 | Don't shoot a fly with a cannon! | `@common/cannon.png` |
| 7 | How do we keep updated? | `@common/server.png` |
| 11 | Which one shall we choose? | `@common/alternatives.png` |
| 12 | Say hello to Webhooks! | `@common/hook.png` |
| 14 | Let's implement a real one! | `@common/action.png` |
| 18 | What about failures? | `@common/firefighter.png` |
| 21 | What about race conditions? | `@common/horses-race.png` |
| 25 | How do you easily get such a lock implementation? | `@common/algorithm.png` |
| 26 | PostgreSQL Advisory Locks | `@common/semaphore.png` |
| 28 | Stop talking please. Show me the code! | `@common/code.png` |
| 29 | Technical stack | `@common/nodejs.png` |
| 29 | Technical stack | `@common/postgresql.png` |
| 29 | Technical stack | `@common/fastify.png` |
| 35 | And now, let's deliver some messages! | `@common/letter.png` |
| 39 | Why all those delays? | `@common/confused.png` |
| 43 | Remember, successful message cannot be retried! | `@common/danger-line.png` |
| 45 | Mission completed! | `@common/completed.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 2 — Don't shoot a fly with a cannon!

**Concetto proposto:** Un utensile piccolo adatto al lavoro accanto a uno sproporzionato.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 7 — How do we keep updated?

**Concetto proposto:** Due postazioni devono aggiornarsi su un oggetto condiviso.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 12 — Say hello to Webhooks!

**Concetto proposto:** Una notifica parte quando cambia un oggetto, senza interrogazioni continue.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 18 — What about failures?

**Concetto proposto:** Una corsia laterale conserva con ordine i messaggi non consegnati.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 21 — What about race conditions?

**Concetto proposto:** Due mani raggiungono lo stesso oggetto, con un segnale che regola il turno.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 39 — Why all those delays?

**Concetto proposto:** Un campanello sveglia un lavoratore soltanto quando arriva un nuovo incarico.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
