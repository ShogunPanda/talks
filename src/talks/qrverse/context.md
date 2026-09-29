# Contesto immagini — Welcome to the QRverse: let's build a rendering service

## Come usare questo documento

Brief autonomo in italiano per generare immagini di supporto senza accesso al repository. Generare una sola immagine richiesta alla volta; non creare intere slide. I riferimenti visuali esistenti vanno caricati dall'utente quando servono per conservarne lo stile. I nuovi concetti qui proposti richiedono scelta dell'utente.

## Titolo esatto

Welcome to the QRverse: let's build a rendering service

## Abstract esatto

Despite being 30 years old, QR codes have only recently started becoming widely used in mainstream applications,
thanks to the availability of mobile phones and ease of implementation.

Have you ever wondered how these codes work? How hard would it be to implement a rendering service?

In this talk, I will show you how Platformatic makes it very easy to create a QR code rendering 
service in just a few minutes.

## Messaggio e background confermato

Comprendere la struttura dei QR code permette di costruire un servizio di rendering e tracciamento senza reinventare l'encoding.

Il caso usa Watt/Platformatic, un servizio database, URL brevi e UI Preact. qrcode-generator calcola i moduli, il codice del talk li rende in SVG. Le capacità massime dipendono da versione, encoding e livello di correzione.

Relatore o facilitatori indicati nei metadati: Paolo Insogna. Il tema condiviso presenta Paolo Insogna come membro del Node.js TSC e Principal Engineer; questo dato non va usato per retrodatare ruoli nei racconti storici. Non inventare incontri, risultati o dettagli biografici.

## Struttura narrativa

La slide 4, subito dopo `hello`, è “Platformatic is used by”: titolo, loghi di Supabase e Spendesk e link ai case study provengono dal tema condiviso (`src/themes/main/theme.yml`). Riutilizzare i loghi originali, senza generarli o aggiungere affermazioni commerciali.

La versione corrente contiene **44 slide**.

- **Slide 1–11 — QR nella vita quotidiana:** Spiegare origine, capacità e resilienza.
- **Slide 12–20 — Anatomia:** Distinguere marker, metadati e dati.
- **Slide 21–30 — Servizio applicativo:** Collegare database, URL e frontend.
- **Slide 31–41 — Rendering:** Seguire helper, matrice dei moduli e SVG.
- **Slide 42–44 — Risorse e chiusura:** Invitare a usare il progetto.

## Tono e direzione visiva

**Scelte presenti:** mantenere layout, immagini e colori già scelti nelle slide. I colori di sfondo esplicitamente impostati sono: fuchsia, amber, pink, green, red, sky, blue. I nomi dei file non descrivono con certezza ciò che è visibile: per riprodurre uno stile servono gli asset caricati dall'utente.

**Direzione proposta:** Grandi moduli geometrici leggibili e ingrandimenti dei componenti del QR. Non generare QR finti per link reali: i codici funzionanti sono prodotti dal software. Preservare gli schemi tecnici originali.

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
| 2 | Phenomenal cosmic powers... Itty bitty living space. | `@common/genius.png` |
| 5 | Have you ever heard of QR codes? | `@talk/qr-intro.png` |
| 6 | Yes, of course! | `@common/troll-white.svg` |
| 10 | QR Codes make our life way easier ... | `@talk/green-pass.png` |
| 11 | ... sometimes in a weird way! | `@common/grave.png` |
| 12 | If we look closely... | `@common/microscope.png` |
| 13 | Position markers (finders) | `@talk/qr-position.png` |
| 14 | Alignment markers | `@talk/qr-alignment.png` |
| 15 | Timing markers | `@talk/qr-timing.png` |
| 16 | Version information | `@talk/qr-version.png` |
| 17 | Format information | `@talk/qr-format.png` |
| 18 | Data and Error correction | `@talk/qr-data-ecc.png` |
| 19 | Quiet zone | `@talk/qr-quiet.png` |
| 20 | The best path might not be the straight one | `@talk/qr-fill.png` |
| 21 | Can we get to the practice please? | `@common/easy.png` |
| 23 | Let's go! | `@common/start.png` |
| 31 | Where are the QR codes? | `@common/dog-1.png` |
| 32 | Let's dive in! | `@common/dive.png` |

## Brief proposti

Le proposte seguenti sono varianti facoltative associate a slide e titoli reali, non nuove scelte già approvate.

### A. Slide 2 — Phenomenal cosmic powers... Itty bitty living space.

**Concetto proposto:** Un piccolo cubo contiene una struttura ampia e ordinata, senza imitare un QR valido.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### B. Slide 5 — Have you ever heard of QR codes?

**Concetto proposto:** Un oggetto quotidiano presenta un piccolo simbolo astratto a celle.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### C. Slide 10 — QR Codes make our life way easier ...

**Concetto proposto:** Un telefono inquadra una matrice geometrica senza schermate testuali.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### D. Slide 12 — If we look closely...

**Concetto proposto:** Una lente ingrandisce tre blocchi angolari di una griglia astratta.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### E. Slide 21 — Can we get to the practice please?

**Concetto proposto:** Un banco di lavoro prepara componenti per un servizio.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

### F. Slide 32 — Let's dive in!

**Concetto proposto:** Un'immersione metaforica dentro una griglia di moduli grandi.

**Uso:** Soggetto compatto nel pannello laterale, margini generosi; evitare dettagli indispensabili ai bordi.

## Consegna e uso

Conservare le immagini approvate negli asset del talk e collegarle dalla presentazione. Il brief e la guida del relatore rimangono documenti sorgente separati dagli asset. Nessun generatore o strumento di rendering deve essere aggiunto al repository.
