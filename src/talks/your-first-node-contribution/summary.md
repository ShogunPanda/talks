# Your First Node.js Contribution

## Impostazione

Guida in italiano alla versione sorgente corrente: **12 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** La prima contribuzione a Node.js diventa accessibile con ambiente pronto, un problema circoscritto e accompagnamento nel workflow del progetto.

**Contesto e crediti:** Workshop con Paolo Insogna e Marco Ippolito, entrambi indicati nei metadati. Le contribuzioni possono riguardare anche documentazione e test. La lista di issue e le istruzioni di build sono riferimenti da consultare prima della sessione.

## Struttura e ritmo

- **Slide 1–4 — Accoglienza:** Ridurre la soglia d'ingresso e presentare i facilitatori.
- **Slide 5–7 — Repository e build:** Preparare una copia locale funzionante.
- **Slide 8–12 — Contributo e verifiche:** Scegliere un task e seguire le convenzioni.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Non equiparare il numero delle slide al tempo necessario ai partecipanti per completare gli esercizi.

## Traccia slide per slide

### 1. Your First Node.js Contribution
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** La prima contribuzione a Node.js diventa accessibile con ambiente pronto, un problema circoscritto e accompagnamento nel workflow del progetto.
- **Transizione:** Passare alla slide 2, «All hope abandon ye who enter here!».

### 2. All hope abandon ye who enter here!
- **Scopo:** Ridurre la soglia d'ingresso e presentare i facilitatori, attraverso «All hope abandon ye who enter here!».
- **Traccia:** Trattare la citazione iniziale come battuta e rassicurare subito i principianti.
- **Transizione:** Passare alla slide 3, «Immagine — marco.png».

### 3. Immagine — marco.png
- **Scopo:** Ridurre la soglia d'ingresso e presentare i facilitatori, attraverso «Immagine — marco.png».
- **Traccia:** Usare l'immagine presente come prosecuzione dell'apertura, senza dedurre dettagli biografici.
- **Transizione:** Passare alla slide 4, «Hello».

### 4. Hello
- **Scopo:** Ridurre la soglia d'ingresso e presentare i facilitatori, attraverso «Hello».
- **Traccia:** Presentare entrambi i facilitatori indicati in info.yml, Paolo Insogna e Marco Ippolito.
- **Transizione:** Passare alla slide 5, «Getting started (1/2)!», aprendo la sezione «Repository e build».

### 5. Getting started (1/2)!
- **Scopo:** Preparare una copia locale funzionante, attraverso «Getting started (1/2)!».
- **Traccia:** Aprire il repository e spiegare fork e clone; gh repo clone clona e non crea da solo un fork.
- **Transizione:** Passare alla slide 6, «Getting started (2/2)!».

### 6. Getting started (2/2)!
- **Scopo:** Preparare una copia locale funzionante, attraverso «Getting started (2/2)!».
- **Traccia:** Clonare il proprio fork e leggere BUILDING.md per i prerequisiti del sistema operativo.
- **Transizione:** Passare alla slide 7, «Build Node.js».

### 7. Build Node.js
- **Scopo:** Preparare una copia locale funzionante, attraverso «Build Node.js».
- **Traccia:** Eseguire la build prevista dall'ambiente e verificare che il binario locale sia utilizzabile.
- **Transizione:** Passare alla slide 8, «Choose an issue», aprendo la sezione «Contributo e verifiche».

### 8. Choose an issue
- **Scopo:** Scegliere un task e seguire le convenzioni, attraverso «Choose an issue».
- **Traccia:** Scegliere una issue delimitata dalla lista del workshop o da quella pubblica, concordandola con i facilitatori.
- **Transizione:** Passare alla slide 9, «Build, then run the tests and the linter».

### 9. Build, then run the tests and the linter
- **Scopo:** Scegliere un task e seguire le convenzioni, attraverso «Build, then run the tests and the linter».
- **Traccia:** Dopo la modifica, ricompilare quando necessario ed eseguire verifiche e lint pertinenti.
- **Transizione:** Passare alla slide 10, «Configure GIT before committing».

### 10. Configure GIT before committing
- **Scopo:** Scegliere un task e seguire le convenzioni, attraverso «Configure GIT before committing».
- **Traccia:** Configurare identità Git coerente prima del commit, senza copiare identità di esempio.
- **Transizione:** Passare alla slide 11, «Make sure to follow commit guidelines».

### 11. Make sure to follow commit guidelines
- **Scopo:** Scegliere un task e seguire le convenzioni, attraverso «Make sure to follow commit guidelines».
- **Traccia:** Leggere le convenzioni correnti del progetto e preparare un messaggio che spieghi la modifica.
- **Transizione:** Passare alla slide 12, «End».

### 12. End
- **Scopo:** Scegliere un task e seguire le convenzioni, attraverso «End».
- **Traccia:** Raccogliere domande e indicare il prossimo passo di review o invio della PR nel workshop.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://nodejs.org>
- <https://nearform.com>
- <https://paoloinsogna.dev>
- <https://github.com/nodejs/node>
- <https://github.com/nodejs/node/blob/main/BUILDING.md>
- <https://docs.google.com/spreadsheets/d/1mqLZafbDSI_2h6hijO4IYxoibjayzHYt__ZMbVc1s2A/edit#gid=0>
- <https://github.com/nodejs/node/issues>
- <https://github.com/nodejs/node/blob/main/doc/contributing/pull-requests.md#commit-message-guidelines>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
