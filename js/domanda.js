import { Text } from "pixi.js";

let txtDomanda;

export function creaDomanda(app) {

    txtDomanda = new Text({
        text: '',
        style: {
            fill: '#ffffff',
            fontFamily: 'BRLNSDB',
            fontSize: 24,
            wordWrap: true,
            wordWrapWidth: 240,
            stroke: { color: '#000000', width: 2 },
            align: 'center'
        }
    })
    app.stage.addChild(txtDomanda);
}

export function setDomanda(domanda, app) {
    // Imposta il testo
    txtDomanda.text = domanda;

    // Imposta prima una dimensione del font di base
    txtDomanda.style.fontSize = 24;

    // Forza il ridisegno per ottenere l'altezza corretta
    app.renderer.render(app.stage);

    // Adatta la dimensione del font se necessario
    if (txtDomanda.height > 100) {
        txtDomanda.style.fontSize = 18;
        // Forza di nuovo il ridisegno per ottenere la nuova altezza
        app.renderer.render(app.stage);
    }

    // Centra il testo orizzontalmente
    txtDomanda.position.set((app.screen.width - txtDomanda.width) / 2, 90);
}