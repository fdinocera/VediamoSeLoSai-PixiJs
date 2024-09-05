import { Assets, Sprite, Text } from 'pixi.js';
import { app, gLivelloStage, gDatiGioco, gPannelloFinale, gPunteggio, gQuiz } from './main';
import { play3x, playTada } from './suoni';

let pannelloFinaleTexture;
export async function preloadPannelloFinaleTexture() {
    pannelloFinaleTexture = await Assets.load('./assets/img/pannelloFinale.png');
}

export class PannelloFinale {
    pannelloFinale;
    txt1PannelloFinale;
    txt2PannelloFinale;
    txt3PannelloFinale;

    constructor(callback) {
        this.pannelloFinale = Sprite.from(pannelloFinaleTexture);
        this.pannelloFinale.scale = 0.28;
        this.pannelloFinale.position.x = (screen.width - this.pannelloFinale.width) / 2;
        this.pannelloFinale.position.y = 90;
        this.pannelloFinale.visible = false;
        this.pannelloFinale.eventMode = 'static';
        this.pannelloFinale.on('pointerdown', callback);
        this.pannelloFinale.cursor = 'pointer';
        this.pannelloFinale.zIndex = 20;
        app.stage.addChild(this.pannelloFinale);

        this.txt1PannelloFinale = new Text({
            text: '',
            style: {
                fill: '#ffffff', fontFamily: 'BRLNSDB',
                fontSize: 22,
                wordWrap: true,
                wordWrapWidth: 220,
                align: 'center'
            }
        })
        this.txt1PannelloFinale.zIndex = 25;
        app.stage.addChild(this.txt1PannelloFinale);

        //testo2 pannello
        this.txt2PannelloFinale = new Text({
            text: '',
            style: {
                fill: '#ffffff', fontFamily: 'BRLNSDB',
                fontSize: 22,
                wordWrap: true,
                wordWrapWidth: 220,
                align: 'center'
            }
        })
        this.txt2PannelloFinale.zIndex = 25;
        app.stage.addChild(this.txt2PannelloFinale);

        //testo1 pannello
        this.txt3PannelloFinale = new Text({
            text: '',
            style: {
                fill: '#ffffff', fontFamily: 'BRLNSDB',
                fontSize: 20,
                wordWrap: true,
                wordWrapWidth: 180,
                align: 'center'
            }
        })
        this.txt3PannelloFinale.zIndex = 25;
        app.stage.addChild(this.txt3PannelloFinale);
    }

    show() {
        //testo1
        this.txt1PannelloFinale.text = `Bravo!\nHai totalizzato ${gDatiGioco.getPuntiGuadagnati()} punti!`;
        this.txt1PannelloFinale.position.set((screen.width - this.txt1PannelloFinale.width) / 2, 100);
        this.txt1PannelloFinale.visible = true;

        //testo2
        this.txt2PannelloFinale.text = 'Continua a giocare!';
        this.txt2PannelloFinale.position.set((screen.width - this.txt2PannelloFinale.width) / 2, 175);
        this.txt2PannelloFinale.visible = true;

        this.pannelloFinale.visible = true;
        playTada();
    }

    hide() {
        this.pannelloFinale.visible = false;
        this.txt1PannelloFinale.visible = false;
        this.txt2PannelloFinale.visible = false;
        this.txt3PannelloFinale.visible = false;
    }
}

export function clickPannelloFinale() {
    gPannelloFinale.hide();
    gDatiGioco.resetRisposteEsatteStage();
    gDatiGioco.resetPuntiGuadagnati();
    gLivelloStage.setStage(1);
    gLivelloStage.setLivello(1);
    gPunteggio.view('Punti 0');
    gLivelloStage.updateView();
    gQuiz.resetQuizCounter();
    gQuiz.next();
    gDatiGioco.popolaCampi();
    play3x();
}