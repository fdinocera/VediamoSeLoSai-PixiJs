import { Graphics, Text } from "pixi.js";
import { isSpuntaVerdeVisible, hideSpuntaVerde } from "./spuntaVerde";
import { controllaRisposta } from "./controlloRisposta";
import { quizNext } from "./quiz";
import { hideIcsRossa } from "./icsRossa";
import { controlloFineStage } from "./livelloStage";
import { resetPulsante1 } from "./pulsante1";
import { resetPulsante3 } from "./pulsante3";
import { play3x, playPulsante } from "./suoni";

//globali
let pulsante2;
let txtPulsante2;
let appRef;

export function creaPulsante2(app) {

    appRef = app;

    pulsante2 = new Graphics()
        .roundRect(0, 0, 200, 60, 15)
        .fill({
            color: 0x016eb4
        });
    app.stage.addChild(pulsante2);
    pulsante2.position.set((app.screen.width - pulsante2.width) / 2, 250);

    //testo pulsante2
     txtPulsante2 = new Text({
        text: '',
        style: {
            fill: '#ffffff',
            fontFamily: 'BRLNSDB',
            fontSize: 18,
            wordWrap: true,
            wordWrapWidth: 180,
            align: 'center'
        }
    })
    app.stage.addChild(txtPulsante2);

    //rende interattivo pulsante2
    pulsante2.eventMode = 'static';
    pulsante2.on('pointerdown', clickPulsante2);
    pulsante2.cursor = 'pointer';
}

export function setPulsante2(testo, app) {
    txtPulsante2.text = testo;
    let x = (app.screen.width - txtPulsante2.width) / 2
    let y = (pulsante2.height - txtPulsante2.height) / 2 + pulsante2.y
    txtPulsante2.position.set(x, y);
}

export function clickPulsante2() {
    
    if (isSpuntaVerdeVisible()) {
        resetPulsante1();
        resetPulsante2();
        resetPulsante3();
        controlloFineStage(appRef);
        quizNext(appRef);
        play3x();
    } else {
        evidenziaPulsante2();
        controllaRisposta(2, appRef);
        playPulsante();
    }
}

export function resetPulsante2() {
    
    //ridisegna pulsante per eliminare contorno giallo
    pulsante2.clear();
    pulsante2.roundRect(0, 0, 200, 60, 15);
    pulsante2.fill({ color: 0x016eb4 });
    
    hideIcsRossa();
    hideSpuntaVerde();
}

function evidenziaPulsante2() {
    pulsante2.stroke({ width: 5, color: 0xffff00 });
}