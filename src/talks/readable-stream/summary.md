# The last 5 years of streams in Node.js

## Impostazione

Guida in italiano alla versione sorgente corrente: **29 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** Gli stream evolvono verso composizione, stato più prevedibile e API moderne; readable-stream porta una versione coerente di quelle capacità anche fuori dal runtime originale.

**Contesto e crediti:** Talk archiviato su readable-stream 4 e il passaggio dal codice Node.js 10 a Node.js 18. Matteo Collina, Robert Nagy e Benjamin Gruenbaum sono accreditati. Le indicazioni su release corrente e API si riferiscono al periodo del deck.

## Struttura e ritmo

- **Slide 1–11 — Stream e pacchetto:** Definire il modello e il ruolo di readable-stream.
- **Slide 12–21 — Evoluzione delle API:** Spiegare stato, lifecycle e composizione.
- **Slide 22–29 — Toolchain e comunità:** Mostrare il lavoro di compatibilità e riconoscere i contributori.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. The last 5 years of streams in Node.js
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** Gli stream evolvono verso composizione, stato più prevedibile e API moderne; readable-stream porta una versione coerente di quelle capacità anche fuori dal runtime originale.
- **Transizione:** Passare alla slide 2, «Panta rei!».

### 2. Panta rei!
- **Scopo:** Segnare un passaggio nella sezione «Stream e pacchetto».
- **Traccia:** Usare «Panta rei!» come domanda o pausa visiva prima del prossimo passaggio. Definire il modello e il ruolo di readable-stream.
- **Transizione:** Passare alla slide 3, «Hello».

### 3. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Passare alla slide 4, «What are streams anyway?».

### 4. What are streams anyway?
- **Scopo:** Segnare un passaggio nella sezione «Stream e pacchetto».
- **Traccia:** Usare «What are streams anyway?» come domanda o pausa visiva prima del prossimo passaggio. Definire il modello e il ruolo di readable-stream.
- **Transizione:** Passare alla slide 5, «Pretty simple, isn't it?».

### 5. Pretty simple, isn't it?
- **Scopo:** Definire il modello e il ruolo di readable-stream, attraverso «Pretty simple, isn't it?».
- **Traccia:** Leggere la definizione del modello a flusso prima delle proprietà tecniche.
- **Transizione:** Passare alla slide 6, «They are powerful».

### 6. They are powerful
- **Scopo:** Definire il modello e il ruolo di readable-stream, attraverso «They are powerful».
- **Traccia:** Collegare chunk, memoria e asincronia; il codice utente può comunque bloccare l'event loop.
- **Transizione:** Passare alla slide 7, «Can I use them in the browser?».

### 7. Can I use them in the browser?
- **Scopo:** Segnare un passaggio nella sezione «Stream e pacchetto».
- **Traccia:** Usare «Can I use them in the browser?» come domanda o pausa visiva prima del prossimo passaggio. Definire il modello e il ruolo di readable-stream.
- **Transizione:** Passare alla slide 8, «Meet readable-stream».

### 8. Meet readable-stream
- **Scopo:** Definire il modello e il ruolo di readable-stream, attraverso «Meet readable-stream».
- **Traccia:** Presentare readable-stream come copia adattata del modulo Node.js e lasciare il link.
- **Transizione:** Passare alla slide 9, «How is the package built?».

### 9. How is the package built?
- **Scopo:** Definire il modello e il ruolo di readable-stream, attraverso «How is the package built?».
- **Traccia:** Seguire download, copia, sostituzione dei riferimenti e moduli compatibili.
- **Transizione:** Passare alla slide 10, «Project status».

### 10. Project status
- **Scopo:** Definire il modello e il ruolo di readable-stream, attraverso «Project status».
- **Traccia:** Contestualizzare v4, rilascio del 2022 e baseline Node.js 18 rispetto alla serie precedente.
- **Transizione:** Passare alla slide 11, «Sorry for the long wait!».

### 11. Sorry for the long wait!
- **Scopo:** Segnare un passaggio nella sezione «Stream e pacchetto».
- **Traccia:** Usare «Sorry for the long wait!» come domanda o pausa visiva prima del prossimo passaggio. Spiegare stato, lifecycle e composizione.
- **Transizione:** Passare alla slide 12, «What has changed in streams since then?», aprendo la sezione «Evoluzione delle API».

### 12. What has changed in streams since then?
- **Scopo:** Segnare un passaggio nella sezione «Evoluzione delle API».
- **Traccia:** Usare «What has changed in streams since then?» come domanda o pausa visiva prima del prossimo passaggio. Spiegare stato, lifecycle e composizione.
- **Transizione:** Passare alla slide 13, «Broader status handling».

### 13. Broader status handling
- **Scopo:** Spiegare stato, lifecycle e composizione, attraverso «Broader status handling».
- **Traccia:** Distinguere stato leggibile, fine dello stream e completamento della scrittura.
- **Transizione:** Passare alla slide 14, «More predictable event flow».

### 14. More predictable event flow
- **Scopo:** Spiegare stato, lifecycle e composizione, attraverso «More predictable event flow».
- **Traccia:** Seguire end/finish, destroy, error e close nel lifecycle illustrato.
- **Transizione:** Passare alla slide 15, «... so boring ...».

### 15. ... so boring ...
- **Scopo:** Segnare un passaggio nella sezione «Evoluzione delle API».
- **Traccia:** Usare «... so boring ...» come domanda o pausa visiva prima del prossimo passaggio. Spiegare stato, lifecycle e composizione.
- **Transizione:** Passare alla slide 16, «Let's see the exciting parts!».

### 16. Let's see the exciting parts!
- **Scopo:** Segnare un passaggio nella sezione «Evoluzione delle API».
- **Traccia:** Usare «Let's see the exciting parts!» come domanda o pausa visiva prima del prossimo passaggio. Spiegare stato, lifecycle e composizione.
- **Transizione:** Passare alla slide 17, «Stream from iterables».

### 17. Stream from iterables
- **Scopo:** Spiegare stato, lifecycle e composizione, attraverso «Stream from iterables».
- **Traccia:** Readable.from trasforma un iterabile, anche asincrono, in una sorgente stream.
- **Transizione:** Passare alla slide 18, «Duplex stream from anything».

### 18. Duplex stream from anything
- **Scopo:** Spiegare stato, lifecycle e composizione, attraverso «Duplex stream from anything».
- **Traccia:** Esplorare gli input supportati da Duplex.from usando il piccolo gioco previsto nella slide.
- **Transizione:** Passare alla slide 19, «Promises API».

### 19. Promises API
- **Scopo:** Spiegare stato, lifecycle e composizione, attraverso «Promises API».
- **Traccia:** Mostrare pipeline e finished nella API promise.
- **Transizione:** Passare alla slide 20, «Functional style helpers».

### 20. Functional style helpers
- **Scopo:** Spiegare stato, lifecycle e composizione, attraverso «Functional style helpers».
- **Traccia:** Raggruppare helper per trasformazione, ricerca e raccolta.
- **Transizione:** Passare alla slide 21, «With great power comes great responsibility™».

### 21. With great power comes great responsibility™
- **Scopo:** Spiegare stato, lifecycle e composizione, attraverso «With great power comes great responsibility™».
- **Traccia:** toArray raccoglie tutto in memoria: esplicitare quando questo è accettabile.
- **Transizione:** Passare alla slide 22, «What is used under the hood?», aprendo la sezione «Toolchain e comunità».

### 22. What is used under the hood?
- **Scopo:** Segnare un passaggio nella sezione «Toolchain e comunità».
- **Traccia:** Usare «What is used under the hood?» come domanda o pausa visiva prima del prossimo passaggio. Mostrare il lavoro di compatibilità e riconoscere i contributori.
- **Transizione:** Passare alla slide 23, «Build toolchain».

### 23. Build toolchain
- **Scopo:** Mostrare il lavoro di compatibilità e riconoscere i contributori, attraverso «Build toolchain».
- **Traccia:** Spiegare il ruolo di ESM, Babel e Prettier nella toolchain storica.
- **Transizione:** Passare alla slide 24, «Testing technologies».

### 24. Testing technologies
- **Scopo:** Mostrare il lavoro di compatibilità e riconoscere i contributori, attraverso «Testing technologies».
- **Traccia:** Distinguere test Node.js, test browser e automazione Playwright.
- **Transizione:** Passare alla slide 25, «We test 100 configurations in the CI!».

### 25. We test 100 configurations in the CI!
- **Scopo:** Mostrare il lavoro di compatibilità e riconoscere i contributori, attraverso «We test 100 configurations in the CI!».
- **Traccia:** Il numero di configurazioni illustra il costo della compatibilità mantenuta.
- **Transizione:** Passare alla slide 26, «... that's all folks!™».

### 26. ... that's all folks!™
- **Scopo:** Mostrare il lavoro di compatibilità e riconoscere i contributori, attraverso «... that's all folks!™».
- **Traccia:** Richiamare le capacità scelte senza pretendere di aver coperto l'intero changelog.
- **Transizione:** Passare alla slide 27, «Remember to thank these guys!».

### 27. Remember to thank these guys!
- **Scopo:** Mostrare il lavoro di compatibilità e riconoscere i contributori, attraverso «Remember to thank these guys!».
- **Traccia:** Ringraziare esplicitamente Matteo Collina, Robert Nagy e Benjamin Gruenbaum.
- **Transizione:** Passare alla slide 28, «The man who is swimming against the stream knows the strength of it.».

### 28. The man who is swimming against the stream knows the strength of it.
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «The man who is swimming against the stream knows the strength of it.», attribuita nella slide a Woodrow Wilson. Collegarla al tema: Gli stream evolvono verso composizione, stato più prevedibile e API moderne; readable-stream porta una versione coerente di quelle capacità anche fuori dal runtime originale.
- **Transizione:** Passare alla slide 29, «End».

### 29. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://www.npmjs.com/package/readable-stream>
- <https://www.npmjs.com/package/readable-stream](https://www.npmjs.com/package/readable-stream>
- <https://github.com/mcollina>
- <https://github.com/ronag>
- <https://github.com/benjamingr>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
