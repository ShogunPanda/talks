# Contesto — PPTX visual regression

## Titolo e abstract esatti

**Titolo:** PPTX — Visual regression cases

**Abstract:** A visual reference for editable PPTX export: typography, inline decorations, code, image cropping, SVG, QR codes, transparency and overlapping layouts, using the existing Freya main theme.

## Obiettivo e contesto confermato

Questo talk tecnico è una raccolta di 26 casi per confrontare il rendering HTML di Freya con un futuro export PowerPoint modificabile. Freya usa dati YAML e layout Preact. Si utilizzano esclusivamente i layout esistenti del tema principale, con canvas 2000×1120. La fedeltà ai talk reali è prioritaria: testo e grafica devono poter essere confrontati senza redesign.

Il percorso parte da copertina e autore, prosegue con tipografia, codice e immagini, quindi sovrapposizioni, SVG, QR, opacità e griglie, e termina con casi combinati. Gli identificativi nelle slide e nelle note permettono un feedback puntuale. Tono tecnico, concreto, contrastato, coerente con la presentazione esistente. Non servono nuovi dettagli biografici.

## Scelte concordate

Si riutilizzano immagini, loghi, SVG e fotografie già presenti. Non è richiesta la generazione di immagini: sostituire gli asset altererebbe il riferimento del confronto. I QR devono essere prodotti dal software; non vanno generati dentro un'immagine. Titoli, callout e codice devono restare elementi del layout.

## Brief facoltativi per un'estensione futura

Questi sono soltanto concetti proposti, non sostituzioni approvate:

- **Slide 12–13, IMAGE-01 / IMAGE-02:** un'unica scena geometrica astratta 2000×1120, con soggetti riconoscibili al centro e vicino ai quattro bordi, per distinguere cover e contain. Usare esattamente lo stesso asset nelle due slide.
- **Slide 16, IMAGE-05:** scena astratta verticale 1000×1120, con margini riconoscibili per verificare il ritaglio del pannello. Lasciare il testo nel pannello separato del layout.
- **Slide 26, MIX-02:** sfondo astratto 2000×1120 con spazio negativo nella parte bassa per callout e footer; non includere testo, marchi o contatti.

Se richiesti in futuro, esportare PNG a circa 150 DPI, con coerenza cromatica e geometrica, alto contrasto e nessun testo incorporato. Non ricreare fotografie documentarie o biografie con immagini sintetiche. Conservare gli asset attuali come riferimento prima di introdurre eventuali nuove varianti.
