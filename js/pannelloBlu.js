import { Assets, Sprite, Text } from 'pixi.js';
import { setRisposteEsatteStage, risposteEsatteStage } from './controlloRisposta';
import { getStageCounter } from './livelloStage';
import { showPannelloLivello } from './pannelloLivello';

let pannelloBlu;
export async function caricaPannelloBlu(app) {
    
    const pannelloBluTexture = await Assets.load('./assets/img/pannelloBlu.png');
    pannelloBlu = Sprite.from(pannelloBluTexture);
    pannelloBlu.scale = 0.28;
    pannelloBlu.position.x = (screen.width - pannelloBlu.width) / 2;
    pannelloBlu.position.y = 90;
    pannelloBlu.visible = false;
    app.stage.addChild(pannelloBlu);
    
    pannelloBlu.eventMode = 'static';
    pannelloBlu.on('pointerdown', clickPannelloBlu);
    pannelloBlu.cursor = 'pointer';
}

let txt1PannelloBlu;
let txt2PannelloBlu;
let txt3PannelloBlu;

export function creaPannelloBlu(app) {    

    //testo1 pannello
    txt1PannelloBlu = new Text({
        text: '',
        style: {
            fill: '#ffffff', fontFamily: 'BRLNSDB',
            fontSize: 24,
            wordWrap: true,
            wordWrapWidth: 180,
            align: 'center'
        }
    })
    app.stage.addChild(txt1PannelloBlu);

    //testo2 pannello
    txt2PannelloBlu = new Text({
        text: '',
        style: {
            fill: '#ffffff', fontFamily: 'BRLNSDB',
            fontSize: 22,
            wordWrap: true,
            wordWrapWidth: 180,
            align: 'center'
        }
    })
    app.stage.addChild(txt2PannelloBlu);

    //testo1 pannello
    txt3PannelloBlu = new Text({
        text: '',
        style: {
            fill: '#ffffff', fontFamily: 'BRLNSDB',
            fontSize: 20,
            wordWrap: true,
            wordWrapWidth: 180,
            align: 'center'
        }
    })
    app.stage.addChild(txt3PannelloBlu);   
}

export function showPannelloBlu() {

    //testo1
    txt1PannelloBlu.text = `Stage ${getStageCounter()} completato!`;
    txt1PannelloBlu.position.set((screen.width - txt1PannelloBlu.width) / 2, 110);
    txt1PannelloBlu.visible = true;

    //testo2
    if (risposteEsatteStage === 1) {
        txt2PannelloBlu.text = '1 Risposta Esatta';
    } else {
        txt2PannelloBlu.text = `${risposteEsatteStage} Risposte Esatte`;
    }
    txt2PannelloBlu.position.set((screen.width - txt2PannelloBlu.width) / 2, 200);
    txt2PannelloBlu.visible = true;

    //testo3
    txt3PannelloBlu.text = `Hai guadagnato ${risposteEsatteStage * 25} punti!`;
    txt3PannelloBlu.position.set((screen.width - txt3PannelloBlu.width) / 2, 250);
    txt3PannelloBlu.visible = true;

    //visualizza pannello blu
    pannelloBlu.visible = true;
}

export function hidePannelloBlu() {
    pannelloBlu.visible = false;
    txt1PannelloBlu.visible = false;
    txt2PannelloBlu.visible = false;
    txt3PannelloBlu.visible = false;
}

function clickPannelloBlu() {
    hidePannelloBlu();
    setRisposteEsatteStage(0);

    if (getStageCounter() === 10) {
        showPannelloLivello();
    }
    // incrementaLivelloStage();
    // updateViewLivelloStage();
}