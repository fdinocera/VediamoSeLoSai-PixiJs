import { Text } from "pixi.js";

export class Argomento {
    txtArgomento;
    refApp;

    constructor(app) {
        this.refApp = app;
        this.txtArgomento = new Text({
            text: '',
            style: {
                fill: '#016eb4',
                fontFamily: 'BRLNSDB',
                fontSize: 24
            }
        })
        this.refApp.stage.addChild(this.txtArgomento);
    }

    setArgomento(argomento) {
        this.txtArgomento.text = argomento;
        this.txtArgomento.position.set((this.refApp.screen.width - this.txtArgomento.width) / 2, 50);
    }
}