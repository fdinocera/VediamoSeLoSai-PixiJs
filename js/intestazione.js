import { Text } from "pixi.js";
import { app } from "./main";

export class Intestazione {    

    constructor() {
        const txtParliamoDi = new Text({
            text: 'Parliamo di...',
            style: {
                fill: '#4FB7E0',
                fontFamily: 'BRLNSDB',
                fontSize: 18
            }
        })
        txtParliamoDi.position.set((app.screen.width - txtParliamoDi.width) / 2, 18);
        app.stage.addChild(txtParliamoDi);
    }
}