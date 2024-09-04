import { Text } from "pixi.js";
import { app } from "./main";

export class Domanda {
    txtDomanda;

    constructor() {        
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
        this.txtDomanda.text = domanda;        
        this.txtDomanda.style.fontSize = 24;        
        app.renderer.render(app.stage);

        // Adatta la dimensione del font se necessario
        if (this.txtDomanda.height > 100) {
            this.txtDomanda.style.fontSize = 18;            
            app.renderer.render(app.stage);
        }        
        this.txtDomanda.position.set((app.screen.width - this.txtDomanda.width) / 2, 90);
    }
}