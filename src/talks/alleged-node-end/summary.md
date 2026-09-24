# The alleged "end" of Node.js is much ado about nothing

## Impostazione

Guida in italiano alla versione sorgente corrente: **73 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** La vitalità di Node.js si valuta con adozione, manutenzione, sicurezza e partecipazione, non con gli annunci di un presunto successore.

**Contesto e crediti:** Talk originariamente di Matteo Collina, esplicitamente accreditato nella slide 5; Paolo lo presenta. Grafici, percentuali, roadmap e nomi delle API fotografano versioni e periodi diversi indicati nelle slide: non considerarli automaticamente dati attuali.

## Struttura e ritmo

- **Slide 1–5 — Apertura e crediti:** Presentare la domanda e riconoscere l'autore originale.
- **Slide 6–28 — Adozione e aggiornamenti:** Distinguere popolarità, download e uso di versioni supportate.
- **Slide 29–37 — Manutenzione e sicurezza:** Rendere visibile il lavoro della comunità.
- **Slide 38–59 — Evoluzione del runtime:** Mostrare funzionalità concrete e la loro disponibilità temporale.
- **Slide 60–73 — Governance e partecipazione:** Invitare a contribuire attraverso processi collettivi.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. The alleged "end" of Node.js is much ado about nothing
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** La vitalità di Node.js si valuta con adozione, manutenzione, sicurezza e partecipazione, non con gli annunci di un presunto successore.
- **Transizione:** Passare alla slide 2, «How can Platformatic help?».

### 2. How can Platformatic help?
- **Scopo:** Presentare la domanda e riconoscere l'autore originale, attraverso «How can Platformatic help?».
- **Traccia:** Presentare l'offerta Platformatic e il QR prima di iniziare la tesi tecnica.
- **Transizione:** Passare alla slide 3, «Don't count your chickens before they hatch.».

### 3. Don't count your chickens before they hatch.
- **Scopo:** Segnare un passaggio nella sezione «Apertura e crediti».
- **Traccia:** Usare «Don't count your chickens before they hatch.» come domanda o pausa visiva prima del prossimo passaggio. Presentare la domanda e riconoscere l'autore originale.
- **Transizione:** Passare alla slide 4, «Hello».

### 4. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Passare alla slide 5, «First of all, let's give credits!».

### 5. First of all, let's give credits!
- **Scopo:** Presentare la domanda e riconoscere l'autore originale, attraverso «First of all, let's give credits!».
- **Traccia:** Dare credito a Matteo Collina; mantenere la battuta sul feedback come tono amichevole.
- **Transizione:** Passare alla slide 6, «I think we should start by looking at numbers.», aprendo la sezione «Adozione e aggiornamenti».

### 6. I think we should start by looking at numbers.
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «I think we should start by looking at numbers.».
- **Traccia:** Mostrare il grafico dei download e distinguere download, utenti e installazioni.
- **Transizione:** Passare alla slide 7, «Usually we read this all over the internet...».

### 7. Usually we read this all over the internet...
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «Usually we read this all over the internet...».
- **Traccia:** Leggere la previsione come esempio satirico di entusiasmo, non come fonte identificata.
- **Transizione:** Passare alla slide 8, «... or, actually, something like this.».

### 8. ... or, actually, something like this.
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «... or, actually, something like this.».
- **Traccia:** Aumentare volutamente il tono della previsione per rendere evidente l'esagerazione.
- **Transizione:** Passare alla slide 9, «This talk is about a question we are trying to answer…».

### 9. This talk is about a question we are trying to answer…
- **Scopo:** Segnare un passaggio nella sezione «Adozione e aggiornamenti».
- **Traccia:** Usare «This talk is about a question we are trying to answer…» come domanda o pausa visiva prima del prossimo passaggio. Distinguere popolarità, download e uso di versioni supportate.
- **Transizione:** Passare alla slide 10, «Is Node.js dead yet?».

### 10. Is Node.js dead yet?
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «Is Node.js dead yet?».
- **Traccia:** Porre la domanda centrale senza anticipare ancora tutte le prove.
- **Transizione:** Passare alla slide 11, «Period.».

### 11. Period.
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «Period.».
- **Traccia:** Rispondere con decisione e lasciare poi ai dati il compito di sostenere la risposta.
- **Transizione:** Passare alla slide 12, «...let me tell you a secret!».

### 12. ...let me tell you a secret!
- **Scopo:** Segnare un passaggio nella sezione «Adozione e aggiornamenti».
- **Traccia:** Usare «...let me tell you a secret!» come domanda o pausa visiva prima del prossimo passaggio. Distinguere popolarità, download e uso di versioni supportate. Sottotitolo da richiamare: «To all of you that "aim" to destroy other technologies...».
- **Transizione:** Passare alla slide 13, «A technology born in *1959* is on the RAISE!».

### 13. A technology born in *1959* is on the RAISE!
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «A technology born in *1959* is on the RAISE!».
- **Traccia:** Usare COBOL come controesempio alla coincidenza fra anzianità e scomparsa; citare TIOBE.
- **Transizione:** Passare alla slide 14, «jQuery is used by *94.4%* of the JS-enabled sites».

### 14. jQuery is used by *94.4%* of the JS-enabled sites
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «jQuery is used by *94.4%* of the JS-enabled sites».
- **Traccia:** Mostrare la persistenza di jQuery; la percentuale appartiene alla rilevazione citata.
- **Transizione:** Passare alla slide 15, «What about Node.js?».

### 15. What about Node.js?
- **Scopo:** Segnare un passaggio nella sezione «Adozione e aggiornamenti».
- **Traccia:** Usare «What about Node.js?» come domanda o pausa visiva prima del prossimo passaggio. Distinguere popolarità, download e uso di versioni supportate.
- **Transizione:** Passare alla slide 16, «Node.js is the most popular technology according to StackOverflow».

### 16. Node.js is the most popular technology according to StackOverflow
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «Node.js is the most popular technology according to StackOverflow».
- **Traccia:** Specificare che la popolarità mostrata proviene dal sondaggio Stack Overflow 2023.
- **Transizione:** Passare alla slide 17, «No, bundling npm and Node.js was not a mistake».

### 17. No, bundling npm and Node.js was not a mistake
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «No, bundling npm and Node.js was not a mistake».
- **Traccia:** Collegare npm al riuso del software su larga scala, senza confondere quantità e qualità dei moduli.
- **Transizione:** Passare alla slide 18, «Module usage also grew».

### 18. Module usage also grew
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «Module usage also grew».
- **Traccia:** Leggere la crescita di readable-stream come indicatore di attività, non come censimento di sviluppatori.
- **Transizione:** Passare alla slide 19, «Half of Node.js downloads are the headers files».

### 19. Half of Node.js downloads are the headers files
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «Half of Node.js downloads are the headers files».
- **Traccia:** Separare i download degli header da quelli dei binari prima di interpretare il totale.
- **Transizione:** Passare alla slide 20, «What are "headers" downloads?».

### 20. What are "headers" downloads?
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «What are "headers" downloads?».
- **Traccia:** Spiegare perché la compilazione di addon scarica header e perché la cache influisce sul conteggio.
- **Transizione:** Passare alla slide 21, «Downloads of the Node.js binary, per OS».

### 21. Downloads of the Node.js binary, per OS
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «Downloads of the Node.js binary, per OS».
- **Traccia:** Distinguere distribuzione per sistema operativo, sviluppo locale e automazione CI.
- **Transizione:** Passare alla slide 22, «30».

### 22. 30
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «30».
- **Traccia:** Usare il numero isolato come pausa; esplicitare oralmente metrica e unità prima del confronto successivo. Sottotitolo da richiamare: «million monthly downloads in 2021».
- **Transizione:** Passare alla slide 23, «60».

### 23. 60
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «60».
- **Traccia:** Completare il confronto numerico senza lasciare al pubblico il compito di indovinarne il significato. Sottotitolo da richiamare: «million monthly downloads in 2024».
- **Transizione:** Passare alla slide 24, «Node.js v16, v14, v12 are massively popular, while they all have known vulnerabilities».

### 24. Node.js v16, v14, v12 are massively popular, while they all have known vulnerabilities
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «Node.js v16, v14, v12 are massively popular, while they all have known vulnerabilities».
- **Traccia:** Il grafico sulle release obsolete introduce il rischio di restare su versioni non supportate.
- **Transizione:** Passare alla slide 25, «If you are not updating Node.js...».

### 25. If you are not updating Node.js...
- **Scopo:** Segnare un passaggio nella sezione «Adozione e aggiornamenti».
- **Traccia:** Usare «If you are not updating Node.js...» come domanda o pausa visiva prima del prossimo passaggio. Distinguere popolarità, download e uso di versioni supportate.
- **Transizione:** Passare alla slide 26, «...you are putting yourself at risk!».

### 26. ...you are putting yourself at risk!
- **Scopo:** Segnare un passaggio nella sezione «Adozione e aggiornamenti».
- **Traccia:** Usare «...you are putting yourself at risk!» come domanda o pausa visiva prima del prossimo passaggio. Distinguere popolarità, download e uso di versioni supportate.
- **Transizione:** Passare alla slide 27, «Long Term Support (LTS) Schedule».

### 27. Long Term Support (LTS) Schedule
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «Long Term Support (LTS) Schedule».
- **Traccia:** Leggere le finestre LTS nel calendario rappresentato, chiarendo il periodo della fonte.
- **Transizione:** Passare alla slide 28, «Most teams update their Node.js version every 2 LTS releases».

### 28. Most teams update their Node.js version every 2 LTS releases
- **Scopo:** Distinguere popolarità, download e uso di versioni supportate, attraverso «Most teams update their Node.js version every 2 LTS releases».
- **Traccia:** Descrivere il ritmo di aggiornamento osservato, senza presentarlo come raccomandazione.
- **Transizione:** Passare alla slide 29, «Organization Activity from Nov 2023 to Nov 2024», aprendo la sezione «Manutenzione e sicurezza».

### 29. Organization Activity from Nov 2023 to Nov 2024
- **Scopo:** Rendere visibile il lavoro della comunità, attraverso «Organization Activity from Nov 2023 to Nov 2024».
- **Traccia:** Confrontare stelle, PR, review e issue nel periodo novembre 2023–novembre 2024.
- **Transizione:** Passare alla slide 30, «Commits & Pushes to Node.js Core».

### 30. Commits & Pushes to Node.js Core
- **Scopo:** Rendere visibile il lavoro della comunità, attraverso «Commits & Pushes to Node.js Core».
- **Traccia:** Usare il grafico di commit e push per mostrare continuità del lavoro, non produttività individuale.
- **Transizione:** Passare alla slide 31, «The number of pull requests is (mostly) stable».

### 31. The number of pull requests is (mostly) stable
- **Scopo:** Rendere visibile il lavoro della comunità, attraverso «The number of pull requests is (mostly) stable».
- **Traccia:** La stabilità delle PR è un altro segnale di attività; collegarla alla capacità di revisione.
- **Transizione:** Passare alla slide 32, «We work hard to keep you safe!».

### 32. We work hard to keep you safe!
- **Scopo:** Segnare un passaggio nella sezione «Manutenzione e sicurezza».
- **Traccia:** Usare «We work hard to keep you safe!» come domanda o pausa visiva prima del prossimo passaggio. Rendere visibile il lavoro della comunità.
- **Transizione:** Passare alla slide 33, «Node.js Security Submissions».

### 33. Node.js Security Submissions
- **Scopo:** Rendere visibile il lavoro della comunità, attraverso «Node.js Security Submissions».
- **Traccia:** Separare segnalazioni di sicurezza ricevute da vulnerabilità effettivamente confermate.
- **Transizione:** Passare alla slide 34, «Average time to first response».

### 34. Average time to first response
- **Scopo:** Rendere visibile il lavoro della comunità, attraverso «Average time to first response».
- **Traccia:** Spiegare il tempo alla prima risposta come metrica distinta dal tempo alla correzione.
- **Transizione:** Passare alla slide 35, «Average time to triage».

### 35. Average time to triage
- **Scopo:** Rendere visibile il lavoro della comunità, attraverso «Average time to triage».
- **Traccia:** Spiegare la fase di triage e confrontarla con la prima risposta.
- **Transizione:** Passare alla slide 36, «Node.js was one of the first project sponsored by».

### 36. Node.js was one of the first project sponsored by
- **Scopo:** Rendere visibile il lavoro della comunità, attraverso «Node.js was one of the first project sponsored by».
- **Traccia:** Riconoscere Alpha-Omega e il sostegno al lavoro di sicurezza dell'ecosistema.
- **Transizione:** Passare alla slide 37, «Total funding for Security work».

### 37. Total funding for Security work
- **Scopo:** Rendere visibile il lavoro della comunità, attraverso «Total funding for Security work».
- **Traccia:** Leggere il finanziamento dal grafico originale; evitare di ricostruire importi dal nome dell'asset.
- **Transizione:** Passare alla slide 38, «What did we ship in the last few years?», aprendo la sezione «Evoluzione del runtime».

### 38. What did we ship in the last few years?
- **Scopo:** Segnare un passaggio nella sezione «Evoluzione del runtime».
- **Traccia:** Usare «What did we ship in the last few years?» come domanda o pausa visiva prima del prossimo passaggio. Mostrare funzionalità concrete e la loro disponibilità temporale.
- **Transizione:** Passare alla slide 39, «ESM».

### 39. ESM
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «ESM».
- **Traccia:** Seguire export e import nel piccolo esempio ESM.
- **Transizione:** Passare alla slide 40, «Threads».

### 40. Threads
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «Threads».
- **Traccia:** Mostrare creazione del worker e passaggio di dati di ambiente fra thread.
- **Transizione:** Passare alla slide 41, «Fetch».

### 41. Fetch
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «Fetch».
- **Traccia:** Seguire richiesta fetch e lettura della risposta JSON.
- **Transizione:** Passare alla slide 42, «Web Platform Compatibility».

### 42. Web Platform Compatibility
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «Web Platform Compatibility».
- **Traccia:** Raggruppare le API web per rete, dati e ciclo di vita invece di leggere l'intero elenco.
- **Transizione:** Passare alla slide 43, «Promises».

### 43. Promises
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «Promises».
- **Traccia:** Mostrare lettura asincrona con fs/promises e gestione dell'errore.
- **Transizione:** Passare alla slide 44, «`node:` only core modules».

### 44. `node:` only core modules
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «`node:` only core modules».
- **Traccia:** Spiegare il prefisso node: e il caso dei moduli che lo richiedono.
- **Transizione:** Passare alla slide 45, «Watch mode».

### 45. Watch mode
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «Watch mode».
- **Traccia:** Distinguere riavvio automatico, file osservati e limiti della versione descritta.
- **Transizione:** Passare alla slide 46, «AsyncLocalStorage».

### 46. AsyncLocalStorage
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «AsyncLocalStorage».
- **Traccia:** Spiegare il contesto asincrono con AsyncLocalStorage e il suo uso nei framework.
- **Transizione:** Passare alla slide 47, «WebCrypto».

### 47. WebCrypto
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «WebCrypto».
- **Traccia:** Seguire generazione della chiave e firma HMAC tramite WebCrypto.
- **Transizione:** Passare alla slide 48, «util.parseArgs()».

### 48. util.parseArgs()
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «util.parseArgs()».
- **Traccia:** Leggere definizione e parsing degli argomenti; distinguere valori e argomenti posizionali.
- **Transizione:** Passare alla slide 49, «Single Executable Applications».

### 49. Single Executable Applications
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «Single Executable Applications».
- **Traccia:** Descrivere packaging SEA, file incorporato e ruolo di postject nel workflow mostrato.
- **Transizione:** Passare alla slide 50, «Permission System».

### 50. Permission System
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «Permission System».
- **Traccia:** Presentare il Permission Model come funzionalità versionata; controllare i nomi dei flag prima di una demo.
- **Transizione:** Passare alla slide 51, «Test Runner».

### 51. Test Runner
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «Test Runner».
- **Traccia:** Selezionare tre capacità del test runner e distinguerne stato stabile o sperimentale nel periodo del talk.
- **Transizione:** Passare alla slide 52, «Test Runner».

### 52. Test Runner
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «Test Runner».
- **Traccia:** Mostrare un test sincrono riuscito e uno asincrono fallito intenzionalmente.
- **Transizione:** Passare alla slide 53, «WebSocket».

### 53. WebSocket
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «WebSocket».
- **Traccia:** Riconoscere Matthew Aitken e il supporto WebSocket mostrato.
- **Transizione:** Passare alla slide 54, «Are you using the latest Node.js features?».

### 54. Are you using the latest Node.js features?
- **Scopo:** Segnare un passaggio nella sezione «Evoluzione del runtime».
- **Traccia:** Usare «Are you using the latest Node.js features?» come domanda o pausa visiva prima del prossimo passaggio. Mostrare funzionalità concrete e la loro disponibilità temporale. Sottotitolo da richiamare: «Or are you still stuck in 2015?».
- **Transizione:** Passare alla slide 55, «What's coming?».

### 55. What's coming?
- **Scopo:** Segnare un passaggio nella sezione «Evoluzione del runtime».
- **Traccia:** Usare «What's coming?» come domanda o pausa visiva prima del prossimo passaggio. Mostrare funzionalità concrete e la loro disponibilità temporale. Sottotitolo da richiamare: «Let's look at the two most exciting things in v22!».
- **Transizione:** Passare alla slide 56, «require(esm)».

### 56. require(esm)
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «require(esm)».
- **Traccia:** Aprire il tema dell'interoperabilità fra require ed ESM. Sottotitolo da richiamare: «.mjs is not needed anymore».
- **Transizione:** Passare alla slide 57, «require(esm)».

### 57. require(esm)
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «require(esm)».
- **Traccia:** Attribuire il lavoro citato a Joyee Cheung e Geoffrey Booth; spiegare i vincoli dell'esempio.
- **Transizione:** Passare alla slide 58, «Typescript».

### 58. Typescript
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «Typescript».
- **Traccia:** Introdurre TypeScript nel runtime senza equiparare esecuzione e controllo dei tipi.
- **Transizione:** Passare alla slide 59, «Automatic TypeScript support».

### 59. Automatic TypeScript support
- **Scopo:** Mostrare funzionalità concrete e la loro disponibilità temporale, attraverso «Automatic TypeScript support».
- **Traccia:** Confrontare i due frammenti e chiarire il ruolo del type stripping.
- **Transizione:** Passare alla slide 60, «Node.js is not always relaxing...», aprendo la sezione «Governance e partecipazione».

### 60. Node.js is not always relaxing...
- **Scopo:** Segnare un passaggio nella sezione «Governance e partecipazione».
- **Traccia:** Usare «Node.js is not always relaxing...» come domanda o pausa visiva prima del prossimo passaggio. Invitare a contribuire attraverso processi collettivi.
- **Transizione:** Passare alla slide 61, «...because we need you!».

### 61. ...because we need you!
- **Scopo:** Segnare un passaggio nella sezione «Governance e partecipazione».
- **Traccia:** Usare «...because we need you!» come domanda o pausa visiva prima del prossimo passaggio. Invitare a contribuire attraverso processi collettivi.
- **Transizione:** Passare alla slide 62, «Project Governance».

### 62. Project Governance
- **Scopo:** Invitare a contribuire attraverso processi collettivi, attraverso «Project Governance».
- **Traccia:** Spostare il focus dalle funzionalità alle decisioni collettive.
- **Transizione:** Passare alla slide 63, «Immagine — openjs.png».

### 63. Immagine — openjs.png
- **Scopo:** Invitare a contribuire attraverso processi collettivi, attraverso «Immagine — openjs.png».
- **Traccia:** Mostrare l'asset OpenJS come contesto istituzionale della governance.
- **Transizione:** Passare alla slide 64, «Node.js core collaborators maintain the nodejs/node GitHub repository».

### 64. Node.js core collaborators maintain the nodejs/node GitHub repository
- **Scopo:** Invitare a contribuire attraverso processi collettivi, attraverso «Node.js core collaborators maintain the nodejs/node GitHub repository».
- **Traccia:** Distinguere chi propone una PR dai collaborator che possono revisionarla e integrarla.
- **Transizione:** Passare alla slide 65, «The review process».

### 65. The review process
- **Scopo:** Invitare a contribuire attraverso processi collettivi, attraverso «The review process».
- **Traccia:** Spiegare responsabilità dell'approvazione, opposizioni e ricerca del consenso; le regole riportate sono quelle del deck.
- **Transizione:** Passare alla slide 66, «The Node.js Technical Steering Committee».

### 66. The Node.js Technical Steering Committee
- **Scopo:** Invitare a contribuire attraverso processi collettivi, attraverso «The Node.js Technical Steering Committee».
- **Traccia:** Riassumere le responsabilità tecniche e organizzative del TSC.
- **Transizione:** Passare alla slide 67, «In case of disagreements, the TSC votes».

### 67. In case of disagreements, the TSC votes
- **Scopo:** Invitare a contribuire attraverso processi collettivi, attraverso «In case of disagreements, the TSC votes».
- **Traccia:** Distinguere membri votanti e non votanti e spiegare il limite di affiliazione aziendale riportato.
- **Transizione:** Passare alla slide 68, «No one can control Node.js».

### 68. No one can control Node.js
- **Scopo:** Invitare a contribuire attraverso processi collettivi, attraverso «No one can control Node.js».
- **Traccia:** La distribuzione delle responsabilità impedisce di ridurre il progetto a una sola persona o azienda.
- **Transizione:** Passare alla slide 69, «We all have to to COMPROMISE to achieve our objectives».

### 69. We all have to to COMPROMISE to achieve our objectives
- **Scopo:** Segnare un passaggio nella sezione «Governance e partecipazione».
- **Traccia:** Usare «We all have to to COMPROMISE to achieve our objectives» come domanda o pausa visiva prima del prossimo passaggio. Invitare a contribuire attraverso processi collettivi.
- **Transizione:** Passare alla slide 70, «Do you want to have a say in the future of Node.js?».

### 70. Do you want to have a say in the future of Node.js?
- **Scopo:** Segnare un passaggio nella sezione «Governance e partecipazione».
- **Traccia:** Usare «Do you want to have a say in the future of Node.js?» come domanda o pausa visiva prima del prossimo passaggio. Invitare a contribuire attraverso processi collettivi.
- **Transizione:** Passare alla slide 71, «Start contributing!».

### 71. Start contributing!
- **Scopo:** Segnare un passaggio nella sezione «Governance e partecipazione».
- **Traccia:** Usare «Start contributing!» come domanda o pausa visiva prima del prossimo passaggio. Invitare a contribuire attraverso processi collettivi.
- **Transizione:** Passare alla slide 72, «It is not how old you are but how you are old.».

### 72. It is not how old you are but how you are old.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «It is not how old you are but how you are old.», attribuita nella slide a Jules Renard. Collegarla al tema: La vitalità di Node.js si valuta con adozione, manutenzione, sicurezza e partecipazione, non con gli annunci di un presunto successore.
- **Transizione:** Passare alla slide 73, «End».

### 73. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://qr.link/uCLwdt>
- <https://qr.link/uCLwdt](https://qr.link/uCLwdt>
- <https://twitter.com/@matteocollina>
- <https://www.tiobe.com/tiobe-index/>
- <https://w3techs.com/technologies/overview/javascript_library>
- <https://survey.stackoverflow.co/2023/#technology-most-popular-technologies>
- <http://www.modulecounts.com/>
- <https://nodedownloads.nodeland.dev/>
- <https://next.ossinsight.io/analyze/nodejs?period=past_12_months#overview>
- <https://ossinsight.io/analyze/nodejs/node>
- <https://joyeecheung.github.io/blog/2024/03/18/require-esm-in-node-js/>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
