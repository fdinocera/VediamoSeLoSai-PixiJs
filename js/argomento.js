import { Text } from "pixi.js";


let txtArgomento;

export function creaArgomento(app) {
    txtArgomento = new Text({
        text: '',
        style: {
            fill: '#016eb4',
            fontFamily: 'BRLNSDB',
            fontSize: 24
        }
    })
    app.stage.addChild(txtArgomento);
}

export function setArgomento(argomento, app) {
    txtArgomento.text = argomento;
    txtArgomento.position.set((app.screen.width - txtArgomento.width) / 2, 50);
}