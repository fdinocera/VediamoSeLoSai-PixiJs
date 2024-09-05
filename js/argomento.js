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
                fontSize: 24,
                wordWrap: true,
                wordWrapWidth: 240,
                align: 'center'
            }
        })
        app.stage.addChild(this.txtArgomento);
    }
    
    setArgomento(argomento){        
        this.txtArgomento.text = argomento;        
        this.txtArgomento.style.fontSize = 24;        
        app.renderer.render(app.stage);

        // Adatta la dimensione del font se necessario
        if (this.txtArgomento.width > 100) {
            this.txtArgomento.style.fontSize = 18;            
            app.renderer.render(app.stage);
        }        
        this.txtArgomento.position.set((app.screen.width - this.txtArgomento.width) / 2, 50);
    }
}