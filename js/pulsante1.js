import { Graphics, Text } from 'pixi.js';
import { hideSpuntaVerde, isSpuntaVerdeVisible } from './spuntaVerde';
import { controllaRisposta } from './controlloRisposta';
import { quizNext } from './quiz';
import { hideIcsRossa } from './icsRossa';
import { controlloFineStage } from './livelloStage';
import { resetPulsante2 } from './pulsante2';
import { resetPulsante3 } from './pulsante3';
import { play3x, playPulsante } from './suoni';

//globali
let pulsante1;
let txtPulsante1;
let appRef;

export function creaPulsante1(app) {

    appRef = app;

    pulsante1 = new Graphics()
        .roundRect(0, 0, 200, 60, 15)
        .fill({
            color: 0x016eb4
        })
    pulsante1.position.set((app.screen.width - pulsante1.width) / 2, 180);
    app.stage.addChild(pulsante1);

    //testo pulsante1
    txtPulsante1 = new Text({
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
    app.stage.addChild(txtPulsante1);

    //rende interattivo pulsante1
    pulsante1.eventMode = 'static';
    pulsante1.on('pointerdown', clickPulsante1);
    pulsante1.cursor = 'pointer';
}

export function setPulsante1(testo, app) {
    txtPulsante1.text = testo;
    let x = (app.screen.width - txtPulsante1.width) / 2
    let y = (pulsante1.height - txtPulsante1.height) / 2 + pulsante1.y
    txtPulsante1.position.set(x, y);
}

export function clickPulsante1() {
    
    if (isSpuntaVerdeVisible()) {
        resetPulsante1();
        resetPulsante2();
        resetPulsante3();
        controlloFineStage(appRef);
        quizNext(appRef);
        play3x();
    } else {
        evidenziaPulsante1();
        controllaRisposta(1, appRef);
        playPulsante();
    }
}

export function resetPulsante1() {

    //ridisegna pulsante per eliminare contorno giallo
    pulsante1.clear();
    pulsante1.roundRect(0, 0, 200, 60, 15);
    pulsante1.fill({ color: 0x016eb4 });

    hideIcsRossa();
    hideSpuntaVerde();
}

function evidenziaPulsante1() {
    pulsante1.stroke({ width: 5, color: 0xffff00 });
}