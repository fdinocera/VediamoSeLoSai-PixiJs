import { Sprite, Assets } from "pixi.js";
import { app } from "./main";

let punti25texture;
export async function preloadScritta25Punti() {
    punti25texture = await Assets.load('./assets/img/25_punti_rosso.png');
}

export class ScrittaPunti25 {
    punti25Sprite;

    constructor() {
        
        this.punti25Sprite = Sprite.from(punti25texture);
        this.punti25Sprite.scale = 1.2;
        this.punti25Sprite.position.x = (screen.width - this.punti25Sprite.width) / 2;
        this.punti25Sprite.position.y = 300;
        this.punti25Sprite.visible = false;
        this.punti25Sprite.zIndex = 30;
        app.stage.addChild(this.punti25Sprite);
    }

    animateScritta25Punti() {

        let counter = 0;
        let timeCount = 0;
        this.punti25Sprite.visible = true;
        this.punti25Sprite.scale = 1.2;

        // Definisci la funzione di callback per l'animazione
        const animatePoints = (time) => {

            timeCount += time.deltaTime;

            if (timeCount > 0.5) {
                timeCount = 0;
                this.punti25Sprite.position.y = 300 - counter * 10;

                this.punti25Sprite.width += counter * 0.1;
                this.punti25Sprite.position.x = (screen.width - this.punti25Sprite.width) / 2;

                counter++;
                if (counter > 50) {
                    app.ticker.remove(animatePoints); // Rimuovi solo questa funzione dal ticker                
                }
            }
        };

        // Aggiungi la funzione di callback al ticker
        app.ticker.add(animatePoints);
    }
}