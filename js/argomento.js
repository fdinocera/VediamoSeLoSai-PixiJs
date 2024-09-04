import { Text } from "pixi.js";
import { app } from "./main";

export class Argomento {
    txtArgomento;
    
    constructor() {        
        this.txtArgomento = new Text({
            text: '',
            style: {
                fill: '#016eb4',
                fontFamily: 'BRLNSDB',
                fontSize: 24
            }
        })
        app.stage.addChild(this.txtArgomento);
    }
    
    setArgomento(argomento){
        this.txtArgomento.text = argomento;
        this.txtArgomento.position.set((app.screen.width - this.txtArgomento.width) / 2, 50);
    }
}