import { Assets, Sprite, Text } from 'pixi.js';
import { app, gQuiz, gDatiGioco, gPannelloBlu, gLivelloStage, gPannelloLivello } from './main';
import { play3x } from './suoni';

let pannelloBluTexture;
export async function preloadPannelloBlu() {
    pannelloBluTexture = await Assets.load('./assets/img/pannelloBlu.png');
}

export class PannelloBlu {
    pannelloBlu;
    txt1PannelloBlu;

    constructor(callback) {
        this.pannelloBlu = Sprite.from(pannelloBluTexture);
        this.pannelloBlu.scale = 0.28;
        this.pannelloBlu.position.x = (screen.width - this.pannelloBlu.width) / 2;
        this.pannelloBlu.position.y = 90;
        this.pannelloBlu.visible = false;
        this.pannelloBlu.zIndex = 20;
        app.stage.addChild(this.pannelloBlu);

        this.pannelloBlu.eventMode = 'static';
        this.pannelloBlu.on('pointerdown', callback);
        this.pannelloBlu.cursor = 'pointer';

        //testo1 pannello
        this.txt1PannelloBlu = new Text({
            text: '',
            style: {
                fill: '#ffffff', fontFamily: 'BRLNSDB',
                fontSize: 24,
                wordWrap: true,
                wordWrapWidth: 180,
                align: 'center'
            }
        })
        this.txt1PannelloBlu.zIndex = 25;
        app.stage.addChild(this.txt1PannelloBlu);

        //testo2 pannello
        this.txt2PannelloBlu = new Text({
            text: '',
            style: {
                fill: '#ffffff', fontFamily: 'BRLNSDB',
                fontSize: 22,
                wordWrap: true,
                wordWrapWidth: 180,
                align: 'center'
            }
        })
        this.txt2PannelloBlu.zIndex = 25;
        app.stage.addChild(this.txt2PannelloBlu);

        //testo3 pannello
        this.txt3PannelloBlu = new Text({
            text: '',
            style: {
                fill: '#ffffff', fontFamily: 'BRLNSDB',
                fontSize: 20,
                wordWrap: true,
                wordWrapWidth: 180,
                align: 'center'
            }
        })
        this.txt3PannelloBlu.zIndex = 25;
        app.stage.addChild(this.txt3PannelloBlu);
    }

    show() {
        //testo1
        this.txt1PannelloBlu.text = `Stage ${gLivelloStage.getStage()} completato!`;
        this.txt1PannelloBlu.position.set((screen.width - this.txt1PannelloBlu.width) / 2, 110);
        this.txt1PannelloBlu.visible = true;

        //testo2        
        if (gDatiGioco.getRisposteEsatteStage() === 1) {
            this.txt2PannelloBlu.text = '1 Risposta Esatta';
        } else {
            this.txt2PannelloBlu.text = `${gDatiGioco.getRisposteEsatteStage()} Risposte Esatte`;
        }
        this.txt2PannelloBlu.position.set((screen.width - this.txt2PannelloBlu.width) / 2, 200);
        this.txt2PannelloBlu.visible = true;

        //testo3
        this.txt3PannelloBlu.text = `Hai guadagnato ${gDatiGioco.getRisposteEsatteStage() * 25} punti!`;
        this.txt3PannelloBlu.position.set((screen.width - this.txt3PannelloBlu.width) / 2, 250);
        this.txt3PannelloBlu.visible = true;

        //visualizza pannello blu    
        this.pannelloBlu.visible = true;
    }

    hide() {
        this.pannelloBlu.visible = false;
        this.txt1PannelloBlu.visible = false;
        this.txt2PannelloBlu.visible = false;
        this.txt3PannelloBlu.visible = false;
    }
}

//callback pannello blu
export function clickPannelloBlu() {

    gPannelloBlu.hide();
    gDatiGioco.resetRisposteEsatteStage();
    
    if (gLivelloStage.getStage() < 10) {
        gLivelloStage.incrementaStage();
        gLivelloStage.updateView();
        gQuiz.next(app);
        gDatiGioco.popolaCampi();
        play3x();
    } else {
        gPannelloLivello.show();
    }
}