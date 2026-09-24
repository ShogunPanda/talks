# Contesto immagini — From Smart Home to Smart Cats: extending my home automation to my pets

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

From Smart Home to Smart Cats: extending my home automation to my pets

## Abstract esatto

When going online and searching for new gadgets for our home, we often find Alexa, HomeKit or Google Assistant
compatibility badges. Are these compatibility layers hard to code? What if I want to code mine?

The truth is that every gadget that is connected to the internet is probably speaking to an HTTP or MQTT API. And
this means you know how to use it.

In this talk, I will show you how I easily made my cat’s life way technological.

## Messaggio e background confermato

Le integrazioni domestiche e per animali diventano accessibili quando si riconoscono i protocolli già noti dietro app e dispositivi.

Racconto personale di Paolo: casa, moglie, gatti, Bree e Cleo sono già citati nelle slide. Il deck dichiara assenza di sponsorizzazione e codice privato. Modelli, compatibilità, risparmi e difficoltà sono esperienze riportate, non raccomandazioni universali o stato aggiornato dei prodotti.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La versione corrente contiene **50 slide**.

- **Slide 1–11 — Casa e motivazione:** Collegare IoT e bisogni personali.
- **Slide 12–22 — Impianti ed energia:** Mostrare protocolli dietro dispositivi diversi.
- **Slide 23–32 — Automazione per i gatti:** Collegare alimentazione e accesso controllato.
- **Slide 33–38 — Altre integrazioni:** Mostrare l'estensione del sistema domestico.
- **Slide 39–50 — Stack e chiusura personale:** Ricondurre i casi a tecnologie comuni.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: fuchsia, blue, pink, sky, amber, red, gray, green. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Tono affettuoso e ironico, casa connessa e gatti come protagonisti. Le scene familiari reali richiedono fotografie fornite; per nuove immagini usare metafore dichiarate, senza ricostruire ricordi o loghi dei produttori.

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
| 2 | No automation, no party! | `@common/smart-home.png` |
| 5 | I'm literally surrounded by lovely chubby cats... | `@talk/ciurma-1.png` |
| 6 | ...and I deeply love them! | `@talk/io.png` |
| 8 | I automated their lives... | `@talk/mangioni.png` |
| 9 | ...since my wife kept collecting new cats! | `@talk/kuro-loki.png` |
| 11 | Let's start! | `@talk/bree-1.png` |
| 12 | The beginning | `@talk/ksenia.png` |
| 14 | It's hot... no wait, it's cold! | `@talk/cali.png` |
| 15 | Let's optimize | `@talk/aquarea.png` |
| 17 | Shall I buy a power plant? | `@talk/cleo.png` |
| 18 | With the power of the Sun I will win! | `@talk/fronius.png` |
| 20 | Don't brag, you still use gas to move! | `@talk/freya-1.png` |
| 21 | What have I told you about the sun? | `@talk/abb.png` |
| 23 | Gimme the cats! | `@talk/freya-2.png` |
| 24 | It all started with Bree | `@talk/bree-2.png` |
| 26 | Thanks progress | `@talk/petkit.png` |
| 28 | Why don't you complicate things? | `@talk/yuna.png` |
| 30 | Let's protect them! | `@talk/kuro.png` |
| 31 | Can't beat a classic | `@talk/petdoor.png` |
| 33 | Did you really believe it was just about cats? | `@talk/bracio-1.png` |
| 34 | Sadly, I couldn't automate his life (yet)... | `@talk/bracio-2.png` |
| 35 | ... but I could automate his. Why not? | `@talk/oscar.png` |
| 36 | What is the fastest way to get a divorce? | `@common/shelly.png` |
| 37 | It also helps with X-Mas! | `@talk/albero.png` |
| 38 | And that's my house! | `@talk/loki.png` |
| 39 | Home assistants | `@common/homekit.png` |
| 39 | Home assistants | `@common/google-home.png` |
| 39 | Home assistants | `@common/alexa.png` |
| 39 | Home assistants | `@common/home-assistant.png` |
| 41 | The Perseveranza™ technical stack (1/2) | `@common/nodejs.png` |
| 41 | The Perseveranza™ technical stack (1/2) | `@common/redis.png` |
| 41 | The Perseveranza™ technical stack (1/2) | `@common/mosquitto.png` |
| 42 | The Perseveranza™ technical stack (2/2) | `@common/fastify.png` |
| 42 | The Perseveranza™ technical stack (2/2) | `@common/homebridge.png` |
| 42 | The Perseveranza™ technical stack (2/2) | `@talk/graphql.png` |
| 43 | Gimme the details! | `@talk/mora.png` |
| 45 | What is her name? | `@talk/cleo.png` |
| 46 | Cleo! | `@talk/cleo.png` |
| 50 | But this talk is special. Thank you! | `@talk/bree-freya.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 2 — No automation, no party!

**Concetto proposto:** Una casa con pochi collegamenti luminosi e un gatto soddisfatto.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 14 — It's hot... no wait, it's cold!

**Concetto proposto:** Un ambiente domestico bilancia caldo e freddo con due zone cromatiche.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 17 — Shall I buy a power plant?

**Concetto proposto:** La luce solare alimenta piccoli oggetti quotidiani, senza cifre di risparmio.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 23 — Gimme the cats!

**Concetto proposto:** Un gatto simbolico reclama attenzione davanti a un dispositivo semplice.

**Uso:** Composizione adatta al formato richiesto, con spazio negativo dove verrà sovrapposto il titolo.

### E. Slide 30 — Let's protect them!

**Concetto proposto:** Un passaggio domestico protetto lascia entrare il gatto di casa.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 38 — And that's my house!

**Concetto proposto:** Una vista simbolica della casa integra energia, comfort e cura degli animali.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
