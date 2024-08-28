import { Assets, Sprite, Text } from 'pixi.js';
import { setRisposteEsatteStage } from './controlloRisposta';
import { getStageCounter } from './livelloStage';
import { viewPunti, getPuntiPartita } from './punti';
import { playDing, playTada } from './suoni';
import { showPannelloLivello } from './pannelloLivello';

let pannelloBonus;
export async function caricaPannelloBonus(app) {
    const pannelloBonusTexture = await Assets.load('./assets/img/pannelloBonus.png');
    pannelloBonus = Sprite.from(pannelloBonusTexture);
    pannelloBonus.scale = 0.28;
    pannelloBonus.position.x = (screen.width - pannelloBonus.width) / 2;
    pannelloBonus.position.y = 90;
    pannelloBonus.visible = false;
    app.stage.addChild(pannelloBonus);

    pannelloBonus.eventMode = 'static';
    pannelloBonus.on('pointerdown', clickPannelloBonus);
    pannelloBonus.cursor = 'pointer';
}

let txt1PannelloBonus;
let txt2PannelloBonus;
let txt3PannelloBonus;

let appRef;

export function creaPannelloBonusSprite(app) {

    appRef = app;   

    //testo1 pannello bonus
    txt1PannelloBonus = new Text({
        text: '',
        style: {
            fill: '#ffffff', fontFamily: 'BRLNSDB',
            fontSize: 22,
            wordWrap: true,
            wordWrapWidth: 180,
            align: 'center'
        }
    })
    app.stage.addChild(txt1PannelloBonus);

    //testo2 pannello
    txt2PannelloBonus = new Text({
        text: '',
        style: {
            fill: '#ffffff', fontFamily: 'BRLNSDB',
            fontSize: 22,
            wordWrap: true,
            wordWrapWidth: 180,
            align: 'center'
        }
    })
    app.stage.addChild(txt2PannelloBonus);

    //testo1 pannello
    txt3PannelloBonus = new Text({
        text: '',
        style: {
            fill: '#ffffff', fontFamily: 'BRLNSDB',
            fontSize: 20,
            wordWrap: true,
            wordWrapWidth: 180,
            align: 'center'
        }
    })
    app.stage.addChild(txt3PannelloBonus);
}

export function showPannelloBonus() {

    //testo1
    txt1PannelloBonus.text = `Stage ${getStageCounter()} completato!`;
    txt1PannelloBonus.position.set((screen.width - txt1PannelloBonus.width) / 2, 110);
    txt1PannelloBonus.visible = true;

    //testo2
    txt2PannelloBonus.text = '4 Risposte Esatte';
    txt2PannelloBonus.position.set((screen.width - txt2PannelloBonus.width) / 2, 170);
    txt2PannelloBonus.visible = true;

    //testo3
    txt3PannelloBonus.text = `100 Punti Bonus!`;
    txt3PannelloBonus.position.set((screen.width - txt3PannelloBonus.width) / 2, 220);
    txt3PannelloBonus.visible = true;

    pannelloBonus.visible = true;
    playTada();
}

export function hidePannelloBonus() {
    pannelloBonus.visible = false;
    txt1PannelloBonus.visible = false;
    txt2PannelloBonus.visible = false;
    txt3PannelloBonus.visible = false;
    animate100Punti(appRef);
}

function clickPannelloBonus() {
    hidePannelloBonus();
    setRisposteEsatteStage(0);

    if (getStageCounter() === 10) {
        showPannelloLivello();
    }
}

let timeCount = 0;
export function animate100Punti(app) {
    let counter = 0;
    let pt = getPuntiPartita();

    // Definisci la funzione di callback per l'animazione
    const animatePoints = (time) => {
        timeCount += time.deltaTime;
        if (timeCount > 13) {
            timeCount = 0;

            viewPunti('Punti ' + (pt += 20), app);
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