import { Text } from "pixi.js";
import { showPannelloBlu } from "./pannelloBlu";
import { showPannelloBonus } from "./pannelloBonus";
import { risposteEsatteStage } from "./controlloRisposta";
import { showPannelloFinale } from "./pannelloFinale";

let quizCounter = 0;
let txtLivelloStage;
let appRef;
////////////////////////////////////
let stageCounter = 1;
////////////////////////////////////
let livelloCounter = 1;

export function creaLivelloStage(app) {
    appRef = app;
    txtLivelloStage = new Text({
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
    app.stage.addChild(txtLivelloStage);
    updateViewLivelloStage();
}

export function controlloFineStage(app) {

    quizCounter++;

    if (quizCounter === 4) {
        quizCounter = 0;

        if (risposteEsatteStage < 4) {
            showPannelloBlu();
        } else {
            showPannelloBonus();
        }
    }
}

export function getStageCounter() {
    return stageCounter;
}

export function setStageCounter() {
    stageCounter = 1;
}

export function getLivello() {
    return livelloCounter;
}

export function setLivello(livello) {
    livelloCounter = livello;
}

export function getLivelloCounter() {
    return livelloCounter;
}

export function updateViewLivelloStage() {
    txtLivelloStage.text = `Livello ${livelloCounter} - Stage ${stageCounter} `;
    txtLivelloStage.position.set((appRef.screen.width - txtLivelloStage.width) / 2, 460);
}

export function incrementaLivelloStage() {

    if (stageCounter === 10) {
        if (livelloCounter === 10) {
            showPannelloFinale();
        } else {
            stageCounter = 1;
            livelloCounter++;
        }
    } else {
        stageCounter++;
    }
}