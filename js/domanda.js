import { Text } from "pixi.js";

export class Domanda {
    txtDomanda;
    appRef;

    constructor(app) {
        this.appRef = app;
        this.txtDomanda = new Text({
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
        app.stage.addChild(this.txtDomanda);
    }

    setDomanda(domanda) {
        // Imposta il testo
        this.txtDomanda.text = domanda;

        // Imposta prima una dimensione del font di base
        this.txtDomanda.style.fontSize = 24;

        // Forza il ridisegno per ottenere l'altezza corretta
        this.appRef.renderer.render(this.appRef.stage);

        // Adatta la dimensione del font se necessario
        if (this.txtDomanda.height > 100) {
            this.txtDomanda.style.fontSize = 18;
            // Forza di nuovo il ridisegno per ottenere la nuova altezza
            this.appRef.renderer.render(this.appRef.stage);
        }

        // Centra il testo orizzontalmente
        this.txtDomanda.position.set((this.appRef.screen.width - this.txtDomanda.width) / 2, 90);
    }
}