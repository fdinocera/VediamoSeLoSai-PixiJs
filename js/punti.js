import { Text } from "pixi.js";
import { playDing } from "./suoni";

let txtPunti;
let puntiPartita = 0;
let timeCount = 0;

export function creaPunti(app) {

    txtPunti = new Text({
        text: 'Punti 0',
        style: {
            fill: '#016eb4',
            fontFamily: 'BRLNSDB',
            fontSize: 24,
            wordWrap: true,
            wordWrapWidth: 240,
            stroke: { color: '#ffffff', width: 2 }
        }
    })
    viewPunti('Punti 0', app);
    app.stage.addChild(txtPunti);
}

export function viewPunti(punti, app) {
    txtPunti.text = punti;
    txtPunti.position.set((app.screen.width - txtPunti.width) / 2, 490);
}

export function assegna25Punti(app) {
    let counter = 0;

    // Definisci la funzione di callback per l'animazione
    const animatePoints = (time) => {
        timeCount += time.deltaTime;
        if (timeCount > 14) {
            timeCount = 0;
            viewPunti('Punti ' + (puntiPartita += 5), app);
            counter++;
            playDing();
            if (counter > 4) {
                app.ticker.remove(animatePoints); // Rimuovi solo questa funzione dal ticker
                timeCount = 0;
            }
        }
    };

    // Aggiungi la funzione di callback al ticker
    app.ticker.add(animatePoints);
}

export function setPuntiPartita(punti) {
    puntiPartita = punti;
}

export function getPuntiPartita() {
    return puntiPartita;
}