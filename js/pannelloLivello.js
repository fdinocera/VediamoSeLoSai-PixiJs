import { Assets, Sprite, Text } from 'pixi.js';
import { app, gLivelloStage, gDatiGioco, gPannelloLivello, gQuiz, gPannelloFinale } from './main';
import { play3x, playTada } from './suoni';

let pannelloLivelloTexture;
export async function preloadPannelloLivelloTexture() {
    pannelloLivelloTexture = await Assets.load('./assets/img/pannelloLivello.png');
}

export class PannelloLivello {
    pannelloLivello;
    txt1PannelloLivello;
    txt2PannelloLivello;
    txt3PannelloLivello;

    constructor(callback) {
        this.pannelloLivello = Sprite.from(pannelloLivelloTexture);
        this.pannelloLivello.scale = 0.28;
        this.pannelloLivello.position.x = (screen.width - this.pannelloLivello.width) / 2;
        this.pannelloLivello.position.y = 90;
        this.pannelloLivello.visible = false;
        this.pannelloLivello.eventMode = 'static';
        this.pannelloLivello.on('pointerdown', callback);
        this.pannelloLivello.cursor = 'pointer';
        this.pannelloLivello.zIndex = 20;
        app.stage.addChild(this.pannelloLivello);

        //testo1 pannello Livello
        this.txt1PannelloLivello = new Text({
            text: '',
            style: {
                fill: '#ffffff', fontFamily: 'BRLNSDB',
                fontSize: 22,
                wordWrap: true,
                wordWrapWidth: 180,
                align: 'center'
            }
        })
        this.txt1PannelloLivello.zIndex = 20;
        app.stage.addChild(this.txt1PannelloLivello);

        //testo2 pannello
        this.txt2PannelloLivello = new Text({
            text: '',
            style: {
                fill: '#ffffff', fontFamily: 'BRLNSDB',
                fontSize: 22,
                wordWrap: true,
                wordWrapWidth: 180,
                align: 'center'
            }
        })
        this.txt2PannelloLivello.zIndex = 20;
        app.stage.addChild(this.txt2PannelloLivello);

        //testo1 pannello
        this.txt3PannelloLivello = new Text({
            text: '',
            style: {
                fill: '#ffffff', fontFamily: 'BRLNSDB',
                fontSize: 20,
                wordWrap: true,
                wordWrapWidth: 180,
                align: 'center'
            }
        })
        this.txt3PannelloLivello.zIndex = 20;
        app.stage.addChild(this.txt3PannelloLivello);
    }

    show() {
        this.txt1PannelloLivello.text = `Livello ${gLivelloStage.getLivello()} completato!`;
        this.txt1PannelloLivello.position.set((screen.width - this.txt1PannelloLivello.width) / 2, 110);
        this.txt1PannelloLivello.visible = true;
        this.pannelloLivello.visible = true;
        playTada();
    }

    hide() {
        this.pannelloLivello.visible = false;
        this.txt1PannelloLivello.visible = false;
        this.txt2PannelloLivello.visible = false;
        this.txt3PannelloLivello.visible = false;
    }
}

//callback Pannello Livello
export function clickPannelloLivello() {
    
    gPannelloLivello.hide();
    gDatiGioco.resetRisposteEsatteStage();

    if (gLivelloStage.getLivello() === 10) {
        gPannelloFinale.show();
    }else{
        gLivelloStage.setStage(1)
        gLivelloStage.incrementaLivello();
        gLivelloStage.updateView();
        gQuiz.next();
        gDatiGioco.popolaCampi();
        play3x();
    }    
}