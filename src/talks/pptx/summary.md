# PPTX — Visual regression cases

Guida al confronto visivo, non un intervento da conferenza. Tutte le slide usano i layout esistenti del tema `main`, a 2000×1120. Gli identificativi sono stabili; per il feedback indicare ID, elemento e differenza osservata. La slide `hello` genera il titolo dal tema: il suo ID è nelle note.

Il riferimento iniziale è il rendering HTML. In seguito confrontare lo stesso talk con il PPTX e verificare anche che testo, link e oggetti restino modificabili. I ritagli intenzionali non sono difetti. Non sono previste animazioni progressive. Nessun episodio personale o dato biografico aggiuntivo è necessario; autore e contatti provengono da `common.author`.

## Sequenza

1. **COVER-01 — Original cover.** Scopo: riferimento della copertina reale. Osservare logo, corner SVG, QR con icone e link. Passaggio: confrontare un secondo layout ricco di elementi.
2. **HELLO-01 — Original author layout.** Scopo: verificare la pagina autore originale. Osservare foto, griglia, ruoli e social. Passaggio: verificare la slide aziendale condivisa.
3. **Platformatic is used by.** Scopo: verificare il layout aziendale condiviso. Osservare loghi, griglia e link ai case study di Supabase e Spendesk; titolo e griglie provengono da `src/themes/main/theme.yml`. Passaggio: isolare la tipografia.
4. **TEXT-01 — Rich text is still text.** Scopo: formattazione inline. Confrontare enfasi blu non corsiva, barrato, link, sup/sub, emoji e a capo. Passaggio: aggiungere uno sfondo inline.
5. **TEXT-02 — Fix known vulnerabilities.** Scopo: banner di `alleged-node-end`. Osservare padding, arrotondamento e maiuscole. Passaggio: provocare la frammentazione del banner.
6. **TEXT-03 — Known vulnerabilities across older versions and unsupported applications.** Scopo: banner su più righe. Il wrapping è intenzionale; confrontare ogni frammento. Passaggio: verificare paragrafi e liste.
7. **TEXT-04 — Justified text.** Scopo: giustificazione e rientri nel layout `side`. Osservare ultima riga e bullet. Passaggio: cambiare famiglia e stile del font.
8. **TEXT-05 — Bitter italic.** Scopo: citazione nativa. Confrontare corsivo, virgolette e autore. Passaggio: verificare testo molto grande.
9. **TEXT-06 — Mixed case.** Scopo: variante `tiny` del layout `hero`. Controllare uppercase e centratura. Passaggio: entrare nei blocchi di codice.
10. **CODE-01 — Tokens, spaces and blank lines.** Scopo: baseline del codice. Controllare spazi, righe vuote e numerazione a due cifre. Passaggio: confrontare lo stesso codice evidenziato.
11. **CODE-02 — Highlight and dimming.** Scopo: opacità per riga. Confrontare con CODE-01; righe 3, 7 e 8 evidenziate. Passaggio: cambiare gli sfondi.
12. **CODE-03 — Per-line backgrounds.** Scopo: classi rosse/verdi di `test` e riga lunga. Osservare continuità dei colori e bordo destro. Passaggio: isolare il ritaglio delle immagini.
13. **IMAGE-01 — Cover.** Scopo: immagine a piena slide e callout. Controllare ritaglio e proporzioni. Passaggio: mostrare la stessa immagine intera.
14. **IMAGE-02 — Contain.** Scopo: classe `send-pr` di `alleged-node-end`. Controllare centratura e bande nere. Passaggio: forzare dimensioni esplicite.
15. **IMAGE-03 — Explicit size.** Scopo: classe `logo` di `compiling-bundling`. La deformazione quadrata della freccia è intenzionale. Passaggio: ripristinare l'altezza automatica.
16. **IMAGE-04 — Automatic height.** Scopo: confronto diretto con IMAGE-03. Verificare proporzioni e stessa larghezza. Passaggio: cambiare area e ordine del layout.
17. **IMAGE-05 — Reversed half.** Scopo: griglia invertita con immagine cover. Controllare pannello sinistro e testo destro. Passaggio: dimensionamento legato alla viewport.
18. **IMAGE-06 — Viewport sizing.** Scopo: SVG di sfondo nella variante `troll` del separatore. Controllare `min()`, scala e centratura. Passaggio: sovrapporre più immagini.
19. **STACK-01 — Vite, esbuild and Rollup.** Scopo: composizione originale di `compiling-bundling`. Vite davanti ai loghi laterali. Passaggio: uscire dai bordi della slide.
20. **STACK-02 — Outside the slide.** Scopo: numero decorativo di `slowloris`. Controllare clipping e testo in primo piano. Passaggio: verificare istanze SVG.
21. **SVG-01 — Shared paths and rotation.** Scopo: due `use` della stessa icona. Osservare colori distinti, rotazione di 180° e clipping. Passaggio: confrontare diverse famiglie di grafica.
22. **QR-01 — SVG, QR and raster.** Scopo: item orizzontali e separatori. Verificare proporzioni e nitidezza dei moduli QR. Passaggio: isolare l'opacità.
23. **ALPHA-01 — Nested opacity.** Scopo: classe di `postgresql-webhooks`. Confrontare riferimento, gruppo attenuato con icona ulteriormente attenuata, sola icona attenuata. Passaggio: verificare allineamenti Grid.
24. **GRID-01 — Unequal content.** Scopo: tre colonne con contenuti diversi. Controllare gap e centratura. Passaggio: invertire anche l'ordine verticale.
25. **LAYOUT-01 — Reversed order.** Scopo: varianti native del separatore. Immagine a sinistra, sottotitolo prima del titolo. Passaggio: combinare le criticità.
26. **MIX-01 — Editable.** Scopo: banner, opacità, codice e numero decorativo nel layout `side`. Osservare clipping, contrasto e ordine di disegno. Passaggio: chiudere con il footer reale.
27. **MIX-02 — Original footer.** Scopo: layout `end` completo. Controllare sfondo, callout, contatti nowrap, link e bordo del logo. Chiusura: raccogliere feedback per ID e screenshot.

## Origini e manutenzione

- Layout e tipografia: `src/themes/main` e `src/themes/common`.
- Regole dei casi reali importate da `alleged-node-end`, `compiling-bundling`, `postgresql-webhooks`, `slowloris` e `test`.
- Contenuti inline ispirati a `smart-cats`, `destino` e `kafka`.
- Asset esistenti nelle librerie `@common` e `@theme`; nessuna immagine nuova.
- Gli import CSS seguono intenzionalmente le modifiche ai talk originali: se cambia il riferimento visivo, verificare anche tali sorgenti.
- La durata dipende dalla revisione visiva; non è previsto un tempo da palco.
