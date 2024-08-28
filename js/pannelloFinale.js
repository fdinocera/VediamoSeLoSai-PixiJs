import { Assets, Sprite, Text } from 'pixi.js';
import { setRisposteEsatteStage } from './controlloRisposta';
import { setLivello, setStageCounter, updateViewLivelloStage } from './livelloStage';
import { getPuntiPartita, setPuntiPartita, viewPunti } from './punti';
import { playTada } from './suoni';


let pannelloFinale;
export async function caricaPannelloFinale(app) {
    const pannelloFinaleTexture = await Assets.load('./assets/img/pannelloFinale.png');
    pannelloFinale = Sprite.from(pannelloFinaleTexture);
    pannelloFinale.scale = 0.28;
    pannelloFinale.position.x = (screen.width - pannelloFinale.width) / 2;
    pannelloFinale.position.y = 90;
    pannelloFinale.visible = false;
    app.stage.addChild(pannelloFinale);
    pannelloFinale.eventMode = 'static';
    pannelloFinale.on('pointerdown', clickPannelloFinale);
    pannelloFinale.cursor = 'pointer';
}

let txt1PannelloFinale;
let txt2PannelloFinale;
let txt3PannelloFinale;

let appRef;

export function creaPannelloFinaleSprite(app) {

    appRef = app;    
    
    //testo1 pannello Finale
    txt1PannelloFinale = new Text({
        text: '',
        style: {
            fill: '#ffffff', fontFamily: 'BRLNSDB',
            fontSize: 22,
            wordWrap: true,
            wordWrapWidth: 220,
            align: 'center'
        }
    })
    app.stage.addChild(txt1PannelloFinale);

    //testo2 pannello
    txt2PannelloFinale = new Text({
        text: '',
        style: {
            fill: '#ffffff', fontFamily: 'BRLNSDB',
            fontSize: 22,
            wordWrap: true,
            wordWrapWidth: 220,
            align: 'center'
        }
    })
    app.stage.addChild(txt2PannelloFinale);

    //testo1 pannello
    txt3PannelloFinale = new Text({
        text: '',
        style: {
            fill: '#ffffff', fontFamily: 'BRLNSDB',
            fontSize: 20,
            wordWrap: true,
            wordWrapWidth: 180,
            align: 'center'
        }
    })
    app.stage.addChild(txt3PannelloFinale);
}

export function showPannelloFinale() {

    //testo1
    txt1PannelloFinale.text = `Bravo!\nHai totalizzato ${getPuntiPartita()} punti!`;
    txt1PannelloFinale.position.set((screen.width - txt1PannelloFinale.width) / 2, 100);
    txt1PannelloFinale.visible = true;

    //testo2
    txt2PannelloFinale.text = 'Continua a giocare!';
    txt2PannelloFinale.position.set((screen.width - txt2PannelloFinale.width) / 2, 175);
    txt2PannelloFinale.visible = true;

    //testo3
    // txt3PannelloFinale.text = `100 Punti Finale!`;
    // txt3PannelloFinale.position.set((screen.width - txt3PannelloFinale.width) / 2, 220);
    // txt3PannelloFinale.visible = true;

    pannelloFinale.visible = true;
    playTada();
}

export function hidePannelloFinale() {
    pannelloFinale.visible = false;
    txt1PannelloFinale.visible = false;
    txt2PannelloFinale.visible = false;
    txt3PannelloFinale.visible = false;
}

function clickPannelloFinale() {
    hidePannelloFinale();
    setRisposteEsatteStage(0);
    setPuntiPartita(0);
    setStageCounter(1);
    setLivello(1);
    viewPunti('Punti 0', appRef);
    updateViewLivelloStage();
}