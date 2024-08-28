import { Assets, Sprite, Text } from 'pixi.js';
import { setRisposteEsatteStage } from './controlloRisposta';
import { updateViewLivelloStage, getLivelloCounter, incrementaLivelloStage } from './livelloStage';
import { playTada } from './suoni';


let pannelloLivello;
export async function caricaPannelloLivello(app) {
    const pannelloLivelloTexture = await Assets.load('./assets/img/pannelloLivello.png');
    pannelloLivello = Sprite.from(pannelloLivelloTexture);
    pannelloLivello.scale = 0.28;
    pannelloLivello.position.x = (screen.width - pannelloLivello.width) / 2;
    pannelloLivello.position.y = 90;
    pannelloLivello.visible = false;
    app.stage.addChild(pannelloLivello);
    pannelloLivello.eventMode = 'static';
    pannelloLivello.on('pointerdown', clickPannelloLivello);
    pannelloLivello.cursor = 'pointer';
}

let txt1PannelloLivello;
let txt2PannelloLivello;
let txt3PannelloLivello;

let appRef;

export function creaPannelloLivelloSprite(app) {

    appRef = app;

    //testo1 pannello Livello
    txt1PannelloLivello = new Text({
        text: '',
        style: {
            fill: '#ffffff', fontFamily: 'BRLNSDB',
            fontSize: 22,
            wordWrap: true,
            wordWrapWidth: 180,
            align: 'center'
        }
    })
    app.stage.addChild(txt1PannelloLivello);

    //testo2 pannello
    txt2PannelloLivello = new Text({
        text: '',
        style: {
            fill: '#ffffff', fontFamily: 'BRLNSDB',
            fontSize: 22,
            wordWrap: true,
            wordWrapWidth: 180,
            align: 'center'
        }
    })
    app.stage.addChild(txt2PannelloLivello);

    //testo1 pannello
    txt3PannelloLivello = new Text({
        text: '',
        style: {
            fill: '#ffffff', fontFamily: 'BRLNSDB',
            fontSize: 20,
            wordWrap: true,
            wordWrapWidth: 180,
            align: 'center'
        }
    })
    app.stage.addChild(txt3PannelloLivello);
}

export function showPannelloLivello() {

    //testo1
    txt1PannelloLivello.text = `Livello ${getLivelloCounter()} completato!`;
    txt1PannelloLivello.position.set((screen.width - txt1PannelloLivello.width) / 2, 110);
    txt1PannelloLivello.visible = true;

    //testo2
    // txt2PannelloLivello.text = `Hai guadagnano ${getPuntiPartita()} punti su 2000`;
    // txt2PannelloLivello.position.set((screen.width - txt2PannelloLivello.width) / 2, 170);
    // txt2PannelloLivello.visible = true;

    // //testo3
    // txt3PannelloLivello.text = `100 Punti Livello!`;
    // txt3PannelloLivello.position.set((screen.width - txt3PannelloLivello.width) / 2, 220);
    // txt3PannelloLivello.visible = true;

    pannelloLivello.visible = true;
    playTada();
}

export function hidePannelloLivello() {
    pannelloLivello.visible = false;
    txt1PannelloLivello.visible = false;
    txt2PannelloLivello.visible = false;
    txt3PannelloLivello.visible = false;
}

function clickPannelloLivello() {
    hidePannelloLivello();
    setRisposteEsatteStage(0);
    incrementaLivelloStage();
    updateViewLivelloStage();
}