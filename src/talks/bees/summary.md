# The bees are important: use SDKs wisely

## Impostazione

Guida in italiano alla versione sorgente corrente: **47 slide**, nello stesso ordine di `slides.yml`. I titoli sono riportati con spazi normalizzati e senza markup di impaginazione.

**Messaggio centrale:** Scegliere gli SDK consapevolmente: per alcune operazioni una chiamata HTTP diretta può ridurre dipendenze e costi, assumendosi però le responsabilità prima delegate al kit.

**Contesto e crediti:** Il gioco di parole nasce da bees → api in italiano. Il caso tecnico confronta upload S3 con AWS SDK v2, v3 e firma manuale. Benchmark e dipendenze sono quelli delle versioni del deck, non misure nuove.

## Struttura e ritmo

- **Slide 1–9 — Api e API:** Introdurre il bisogno di integrazioni con un gioco di parole.
- **Slide 10–18 — Benefici e costi degli SDK:** Motivare un confronto concreto.
- **Slide 19–30 — SDK AWS v2 e v3:** Leggere dipendenze, codice e misure del caso S3.
- **Slide 31–44 — HTTP e firma manuale:** Seguire la costruzione di una richiesta autenticata.
- **Slide 45–47 — Scelta consapevole:** Bilanciare prestazioni e costo di manutenzione.

Evento e durata non sono definiti nei metadati del talk. Assegnare i tempi dopo aver concordato lo slot; i separatori sono passaggi brevi, mentre demo, esercizi e domande richiedono tempo dedicato. Le misure o le roadmap citate restano legate alle versioni mostrate.

## Traccia slide per slide

### 1. The bees are important: use SDKs wisely
- **Scopo:** Presentare titolo e promessa del percorso.
- **Traccia:** Scegliere gli SDK consapevolmente: per alcune operazioni una chiamata HTTP diretta può ridurre dipendenze e costi, assumendosi però le responsabilità prima delegate al kit.
- **Transizione:** Passare alla slide 2, «Mothers are always right!».

### 2. Mothers are always right!
- **Scopo:** Segnare un passaggio nella sezione «Api e API».
- **Traccia:** Usare «Mothers are always right!» come domanda o pausa visiva prima del prossimo passaggio. Introdurre il bisogno di integrazioni con un gioco di parole.
- **Transizione:** Passare alla slide 3, «Hello».

### 3. Hello
- **Scopo:** Presentare il relatore.
- **Traccia:** Presentare Paolo Insogna e il ruolo pertinente al tema, usando i dati del tema condiviso senza aggiungere episodi personali.
- **Transizione:** Passare alla slide 4, «Our entire existence is on their shoulders!».

### 4. Our entire existence is on their shoulders!
- **Scopo:** Segnare un passaggio nella sezione «Api e API».
- **Traccia:** Usare «Our entire existence is on their shoulders!» come domanda o pausa visiva prima del prossimo passaggio. Introdurre il bisogno di integrazioni con un gioco di parole.
- **Transizione:** Passare alla slide 5, «How is that?».

### 5. How is that?
- **Scopo:** Introdurre il bisogno di integrazioni con un gioco di parole, attraverso «How is that?».
- **Traccia:** Usare l'impollinazione come apertura narrativa, senza trasformare le percentuali del deck in dati scientifici aggiornati.
- **Transizione:** Passare alla slide 6, «Aren't we here for dev stuff?».

### 6. Aren't we here for dev stuff?
- **Scopo:** Segnare un passaggio nella sezione «Api e API».
- **Traccia:** Usare «Aren't we here for dev stuff?» come domanda o pausa visiva prima del prossimo passaggio. Introdurre il bisogno di integrazioni con un gioco di parole.
- **Transizione:** Passare alla slide 7, «Yes, we do!».

### 7. Yes, we do!
- **Scopo:** Introdurre il bisogno di integrazioni con un gioco di parole, attraverso «Yes, we do!».
- **Traccia:** Il riferimento al 100% è volutamente ironico: la qualità delle API influenza le applicazioni.
- **Transizione:** Passare alla slide 8, «Are you trolling us?».

### 8. Are you trolling us?
- **Scopo:** Segnare un passaggio nella sezione «Api e API».
- **Traccia:** Usare «Are you trolling us?» come domanda o pausa visiva prima del prossimo passaggio. Introdurre il bisogno di integrazioni con un gioco di parole.
- **Transizione:** Passare alla slide 9, «Well, try to translate bees in Italian!».

### 9. Well, try to translate bees in Italian!
- **Scopo:** Segnare un passaggio nella sezione «Api e API».
- **Traccia:** Usare «Well, try to translate bees in Italian!» come domanda o pausa visiva prima del prossimo passaggio. Motivare un confronto concreto.
- **Transizione:** Passare alla slide 10, «Say hello to SDKs», aprendo la sezione «Benefici e costi degli SDK».

### 10. Say hello to SDKs
- **Scopo:** Motivare un confronto concreto, attraverso «Say hello to SDKs».
- **Traccia:** Riconoscere autenticazione, retry e produttività forniti dagli SDK.
- **Transizione:** Passare alla slide 11, «What do we get, in short?».

### 11. What do we get, in short?
- **Scopo:** Motivare un confronto concreto, attraverso «What do we get, in short?».
- **Traccia:** Spiegare l'astrazione e l'idiomaticità come benefici reali.
- **Transizione:** Passare alla slide 12, «Are there just pros?».

### 12. Are there just pros?
- **Scopo:** Segnare un passaggio nella sezione «Benefici e costi degli SDK».
- **Traccia:** Usare «Are there just pros?» come domanda o pausa visiva prima del prossimo passaggio. Motivare un confronto concreto.
- **Transizione:** Passare alla slide 13, «You already know the answer...».

### 13. You already know the answer...
- **Scopo:** Segnare un passaggio nella sezione «Benefici e costi degli SDK».
- **Traccia:** Usare «You already know the answer...» come domanda o pausa visiva prima del prossimo passaggio. Motivare un confronto concreto.
- **Transizione:** Passare alla slide 14, «What do we ALSO get, in short? (1/2)».

### 14. What do we ALSO get, in short? (1/2)
- **Scopo:** Motivare un confronto concreto, attraverso «What do we ALSO get, in short? (1/2)».
- **Traccia:** Distinguere dipendenza dalla roadmap e rischio della catena di dipendenze.
- **Transizione:** Passare alla slide 15, «What do we ALSO get, in short? (2/2)».

### 15. What do we ALSO get, in short? (2/2)
- **Scopo:** Motivare un confronto concreto, attraverso «What do we ALSO get, in short? (2/2)».
- **Traccia:** La generazione automatica può penalizzare API idiomatiche e performance; non estendere il giudizio a ogni SDK.
- **Transizione:** Passare alla slide 16, «Only an example can enlighten us!».

### 16. Only an example can enlighten us!
- **Scopo:** Segnare un passaggio nella sezione «Benefici e costi degli SDK».
- **Traccia:** Usare «Only an example can enlighten us!» come domanda o pausa visiva prima del prossimo passaggio. Motivare un confronto concreto.
- **Transizione:** Passare alla slide 17, «Case study: uploaded a file to AWS S3».

### 17. Case study: uploaded a file to AWS S3
- **Scopo:** Motivare un confronto concreto, attraverso «Case study: uploaded a file to AWS S3».
- **Traccia:** Fissare l'upload S3 come operazione identica per i tre confronti.
- **Transizione:** Passare alla slide 18, «Let's go!».

### 18. Let's go!
- **Scopo:** Segnare un passaggio nella sezione «Benefici e costi degli SDK».
- **Traccia:** Usare «Let's go!» come domanda o pausa visiva prima del prossimo passaggio. Leggere dipendenze, codice e misure del caso S3.
- **Transizione:** Passare alla slide 19, «AWS SDK v2: Dependencies in theory», aprendo la sezione «SDK AWS v2 e v3».

### 19. AWS SDK v2: Dependencies in theory
- **Scopo:** Leggere dipendenze, codice e misure del caso S3, attraverso «AWS SDK v2: Dependencies in theory».
- **Traccia:** Partire dalla singola dipendenza dichiarata per SDK v2.
- **Transizione:** Passare alla slide 20, «AWS SDK v2: Dependencies in reality».

### 20. AWS SDK v2: Dependencies in reality
- **Scopo:** Leggere dipendenze, codice e misure del caso S3, attraverso «AWS SDK v2: Dependencies in reality».
- **Traccia:** Leggere l'albero realmente installato e distinguere dipendenze dirette e transitive.
- **Transizione:** Passare alla slide 21, «AWS SDK v2: The code».

### 21. AWS SDK v2: The code
- **Scopo:** Leggere dipendenze, codice e misure del caso S3, attraverso «AWS SDK v2: The code».
- **Traccia:** Seguire configurazione del client, payload e invio nell'esempio v2.
- **Transizione:** Passare alla slide 22, «AWS SDK v2: How does it perform?».

### 22. AWS SDK v2: How does it perform?
- **Scopo:** Leggere dipendenze, codice e misure del caso S3, attraverso «AWS SDK v2: How does it perform?».
- **Traccia:** Leggere unità, campioni e variabilità del benchmark v2.
- **Transizione:** Passare alla slide 23, «AWS SDK v2: What's happening under the hood?».

### 23. AWS SDK v2: What's happening under the hood?
- **Scopo:** Leggere dipendenze, codice e misure del caso S3, attraverso «AWS SDK v2: What's happening under the hood?».
- **Traccia:** Mostrare il profilo originale e localizzare il lavoro aggiuntivo del client.
- **Transizione:** Passare alla slide 24, «Let's get modern!».

### 24. Let's get modern!
- **Scopo:** Segnare un passaggio nella sezione «SDK AWS v2 e v3».
- **Traccia:** Usare «Let's get modern!» come domanda o pausa visiva prima del prossimo passaggio. Leggere dipendenze, codice e misure del caso S3.
- **Transizione:** Passare alla slide 25, «AWS SDK v3: Dependencies in theory».

### 25. AWS SDK v3: Dependencies in theory
- **Scopo:** Leggere dipendenze, codice e misure del caso S3, attraverso «AWS SDK v3: Dependencies in theory».
- **Traccia:** Presentare i pacchetti modulari dichiarati per SDK v3.
- **Transizione:** Passare alla slide 26, «AWS SDK v3: Dependencies in reality».

### 26. AWS SDK v3: Dependencies in reality
- **Scopo:** Leggere dipendenze, codice e misure del caso S3, attraverso «AWS SDK v3: Dependencies in reality».
- **Traccia:** Confrontare l'albero transitivo con l'apparente semplicità del manifest.
- **Transizione:** Passare alla slide 27, «AWS SDK v3: The code».

### 27. AWS SDK v3: The code
- **Scopo:** Leggere dipendenze, codice e misure del caso S3, attraverso «AWS SDK v3: The code».
- **Traccia:** Seguire la stessa operazione S3 con comandi e client v3.
- **Transizione:** Passare alla slide 28, «AWS SDK v3: How does it perform?».

### 28. AWS SDK v3: How does it perform?
- **Scopo:** Leggere dipendenze, codice e misure del caso S3, attraverso «AWS SDK v3: How does it perform?».
- **Traccia:** Confrontare il risultato con v2 usando le condizioni del deck.
- **Transizione:** Passare alla slide 29, «AWS SDK v3: What's happening under the hood?».

### 29. AWS SDK v3: What's happening under the hood?
- **Scopo:** Leggere dipendenze, codice e misure del caso S3, attraverso «AWS SDK v3: What's happening under the hood?».
- **Traccia:** Leggere il profilo v3 senza dedurre colpe da un solo stack frame.
- **Transizione:** Passare alla slide 30, «Quod Erat Demonstrandum».

### 30. Quod Erat Demonstrandum
- **Scopo:** Leggere dipendenze, codice e misure del caso S3, attraverso «Quod Erat Demonstrandum».
- **Traccia:** Riassumere la complessità nascosta, poi chiedere quanto ne serva per questa operazione.
- **Transizione:** Passare alla slide 31, «Do we have the solution?», aprendo la sezione «HTTP e firma manuale».

### 31. Do we have the solution?
- **Scopo:** Segnare un passaggio nella sezione «HTTP e firma manuale».
- **Traccia:** Usare «Do we have the solution?» come domanda o pausa visiva prima del prossimo passaggio. Seguire la costruzione di una richiesta autenticata.
- **Transizione:** Passare alla slide 32, «Yes, use the APIs directly!».

### 32. Yes, use the APIs directly!
- **Scopo:** Segnare un passaggio nella sezione «HTTP e firma manuale».
- **Traccia:** Usare «Yes, use the APIs directly!» come domanda o pausa visiva prima del prossimo passaggio. Seguire la costruzione di una richiesta autenticata.
- **Transizione:** Passare alla slide 33, «How many will you use?».

### 33. How many will you use?
- **Scopo:** Seguire la costruzione di una richiesta autenticata, attraverso «How many will you use?».
- **Traccia:** Collegare PutObject e Signature V4 alle rispettive specifiche AWS.
- **Transizione:** Passare alla slide 34, «Let's get to the action!».

### 34. Let's get to the action!
- **Scopo:** Segnare un passaggio nella sezione «HTTP e firma manuale».
- **Traccia:** Usare «Let's get to the action!» come domanda o pausa visiva prima del prossimo passaggio. Seguire la costruzione di una richiesta autenticata.
- **Transizione:** Passare alla slide 35, «No SDK: Setup».

### 35. No SDK: Setup
- **Scopo:** Seguire la costruzione di una richiesta autenticata, attraverso «No SDK: Setup».
- **Traccia:** Mostrare il progetto senza dipendenze SDK e gli strumenti già disponibili in Node.js.
- **Transizione:** Passare alla slide 36, «No SDK: Signing the call».

### 36. No SDK: Signing the call
- **Scopo:** Seguire la costruzione di una richiesta autenticata, attraverso «No SDK: Signing the call».
- **Traccia:** Presentare gli input della firma e la sequenza di trasformazioni.
- **Transizione:** Passare alla slide 37, «No SDK: CanonicalRequest».

### 37. No SDK: CanonicalRequest
- **Scopo:** Seguire la costruzione di una richiesta autenticata, attraverso «No SDK: CanonicalRequest».
- **Traccia:** Costruire la CanonicalRequest: metodo, URI, query, header e hash del payload devono coincidere con la richiesta.
- **Transizione:** Passare alla slide 38, «No SDK: StringToSign».

### 38. No SDK: StringToSign
- **Scopo:** Seguire la costruzione di una richiesta autenticata, attraverso «No SDK: StringToSign».
- **Traccia:** Unire algoritmo, data, scope e hash della richiesta nella StringToSign.
- **Transizione:** Passare alla slide 39, «No SDK: Signature».

### 39. No SDK: Signature
- **Scopo:** Seguire la costruzione di una richiesta autenticata, attraverso «No SDK: Signature».
- **Traccia:** Derivare la chiave di firma e calcolare l'HMAC finale senza mostrare credenziali reali.
- **Transizione:** Passare alla slide 40, «No SDK: REST API call».

### 40. No SDK: REST API call
- **Scopo:** Seguire la costruzione di una richiesta autenticata, attraverso «No SDK: REST API call».
- **Traccia:** Inviare la richiesta HTTP con gli header firmati e gestire la risposta.
- **Transizione:** Passare alla slide 41, «No SDK: Main loop».

### 41. No SDK: Main loop
- **Scopo:** Seguire la costruzione di una richiesta autenticata, attraverso «No SDK: Main loop».
- **Traccia:** Mostrare il ciclo di chiamate che rende confrontabili gli esempi.
- **Transizione:** Passare alla slide 42, «No SDK: How does it perform?».

### 42. No SDK: How does it perform?
- **Scopo:** Seguire la costruzione di una richiesta autenticata, attraverso «No SDK: How does it perform?».
- **Traccia:** Leggere il risultato della versione manuale come misura del caso selezionato.
- **Transizione:** Passare alla slide 43, «No SDK: What's happening under the hood?».

### 43. No SDK: What's happening under the hood?
- **Scopo:** Seguire la costruzione di una richiesta autenticata, attraverso «No SDK: What's happening under the hood?».
- **Traccia:** Confrontare il profilo finale con quelli degli SDK.
- **Transizione:** Passare alla slide 44, «Mission completed!».

### 44. Mission completed!
- **Scopo:** Segnare un passaggio nella sezione «HTTP e firma manuale».
- **Traccia:** Usare «Mission completed!» come domanda o pausa visiva prima del prossimo passaggio. Bilanciare prestazioni e costo di manutenzione.
- **Transizione:** Passare alla slide 45, «Take home lessons», aprendo la sezione «Scelta consapevole».

### 45. Take home lessons
- **Scopo:** Bilanciare prestazioni e costo di manutenzione, attraverso «Take home lessons».
- **Traccia:** Non proporre una rimozione universale: ottimizzare dove il vantaggio giustifica il codice da mantenere.
- **Transizione:** Passare alla slide 46, «Don't take candies from strangers».

### 46. Don't take candies from strangers
- **Scopo:** Fissare il messaggio con la citazione scelta nel deck.
- **Traccia:** Leggere «Don't take candies from strangers», attribuita nella slide a Every mother in the world. Collegarla al tema: Scegliere gli SDK consapevolmente: per alcune operazioni una chiamata HTTP diretta può ridurre dipendenze e costi, assumendosi però le responsabilità prima delegate al kit.
- **Transizione:** Passare alla slide 47, «End».

### 47. End
- **Scopo:** Concludere e lasciare i contatti.
- **Traccia:** Ringraziare il pubblico e raccogliere domande sul percorso appena concluso.
- **Transizione:** Domande e confronto con il pubblico.

## Fonti e materiale di supporto

Le fonti seguenti sono i collegamenti presenti nelle slide, raccolti per approfondire; questa guida non implica una nuova verifica esterna di ogni fonte. Grafici, screenshot e risultati restano quelli del deck. Le attribuzioni delle citazioni sono quelle già indicate nelle slide; documentare la fonte primaria prima di usarle come riferimento storico.

- <https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html>
- <https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html>

## Preparazione e dettagli da confermare

- Concordare evento, durata e spazio per domande o attività pratiche.
- Per eventuali demo, preparare le versioni del codice e dei servizi corrispondenti al deck; questi esempi non sono stati eseguiti durante la redazione della guida.
- Integrare episodi personali soltanto quando forniti dal relatore.
- Usare `context.md` per le proposte visive e l'inventario dei riferimenti alle immagini.
