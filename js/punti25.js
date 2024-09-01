import { Sprite, Assets } from "pixi.js";

let punti25Sprite;
export async function caricaPunti25(app) {
    const punti25texture = await Assets.load('./assets/img/25_punti_rosso.png');
    punti25Sprite = Sprite.from(punti25texture);
    punti25Sprite.scale = 1.2;
    punti25Sprite.position.x = (screen.width - punti25Sprite.width) / 2;
    punti25Sprite.position.y = 300;
    punti25Sprite.visible = false;
    app.stage.addChild(punti25Sprite);
}

export function animazione25Punti(app) {

    let counter = 0;
    let timeCount = 0;
    punti25Sprite.visible = true;
    punti25Sprite.scale = 1.2;

    // Definisci la funzione di callback per l'animazione
    const animatePoints = (time) => {

        timeCount += time.deltaTime;

        if (timeCount > 0.5) {
            timeCount = 0;
            punti25Sprite.position.y = 300 - counter * 10;
            punti25Sprite.width += counter * 0.1;
            punti25Sprite.position.x = (screen.width - punti25Sprite.width) / 2;

            counter++;
            if (counter > 50) {
                app.ticker.remove(animatePoints); // Rimuovi solo questa funzione dal ticker
            }
        }
    };

    // Aggiungi la funzione di callback al ticker
    app.ticker.add(animatePoints);
}