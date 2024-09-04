import { Text } from "pixi.js";
import { playDing } from "./suoni";
import { app } from "./main";

export class Punteggio {
    txtPunti;
    puntiPartita = 0;
    timeCount = 0;

    constructor() {
        this.txtPunti = new Text({
            text: '',
            style: {
                fill: '#016eb4',
                fontFamily: 'BRLNSDB',
                fontSize: 24,
                wordWrap: true,
                wordWrapWidth: 240,
                stroke: { color: '#ffffff', width: 2 }
            }
        })
        this.viewPunti('Punti 0');
        app.stage.addChild(this.txtPunti);
    }

    viewPunti(punti) {
        this.txtPunti.text = punti;
        this.txtPunti.position.set((app.screen.width - this.txtPunti.width) / 2, 490);
    }

    animateIncrementoPunti() {
        let counter = 0;
    
        // Definisce la funzione di callback per l'animazione
        const animatePoints = (time) => {
            this.timeCount += time.deltaTime;
            if (this.timeCount > 14) {
                this.timeCount = 0;
                this.viewPunti('Punti ' + (this.puntiPartita += 5));
                counter++;
                playDing();
                if (counter > 4) {
                    app.ticker.remove(animatePoints); // Ri\muovi solo questa funzione dal ticker
                    this.timeCount = 0;
                }
            }
        };
    
        // Aggiungi la funzione di callback al ticker
        app.ticker.add(animatePoints);
    }    
}