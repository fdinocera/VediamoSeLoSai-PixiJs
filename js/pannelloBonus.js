import { Assets, Sprite, Text } from 'pixi.js';
import { app, gDatiGioco, gPannelloBonus, gPunteggio, gPannelloLivello, gQuiz, gLivelloStage } from './main';
import { play3x, playDing, playTada } from './suoni';

let pannelloBonusTexture;
export async function preloadPannelloBonus() {
    pannelloBonusTexture = await Assets.load('./assets/img/pannelloBonus.png');
}

export class PannelloBonus {
    pannelloBonus;
    txt1PannelloBonus;
    txt2PannelloBonus;
    txt3PannelloBonus;

    constructor(callback) {
        this.pannelloBonus = Sprite.from(pannelloBonusTexture);
        this.pannelloBonus.scale = 0.28;
        this.pannelloBonus.position.x = (screen.width - this.pannelloBonus.width) / 2;
        this.pannelloBonus.position.y = 90;
        this.pannelloBonus.visible = false;
        this.pannelloBonus.zIndex = 20;
        this.pannelloBonus.eventMode = 'static';
        this.pannelloBonus.on('pointerdown', callback);
        this.pannelloBonus.cursor = 'pointer';
        app.stage.addChild(this.pannelloBonus);

        //testo1 pannello
        this.txt1PannelloBonus = new Text({
            text: '',
            style: {
                fill: '#ffffff', fontFamily: 'BRLNSDB',
                fontSize: 22,
                wordWrap: true,
                wordWrapWidth: 180,
                align: 'center'
            }
        })
        this.txt1PannelloBonus.zIndex = 25;
        app.stage.addChild(this.txt1PannelloBonus);

        //testo2 pannello
        this.txt2PannelloBonus = new Text({
            text: '',
            style: {
                fill: '#ffffff', fontFamily: 'BRLNSDB',
                fontSize: 22,
                wordWrap: true,
                wordWrapWidth: 180,
                align: 'center'
            }
        })
        this.txt2PannelloBonus.zIndex = 25;
        app.stage.addChild(this.txt2PannelloBonus);

        //testo1 pannello
        this.txt3PannelloBonus = new Text({
            text: '',
            style: {
                fill: '#ffffff', fontFamily: 'BRLNSDB',
                fontSize: 20,
                wordWrap: true,
                wordWrapWidth: 180,
                align: 'center'
            }
        })
        this.txt3PannelloBonus.zIndex = 25;
        app.stage.addChild(this.txt3PannelloBonus);
    }

    show() {
        //testo1
        this.txt1PannelloBonus.text = `Stage ${gLivelloStage.getStage()} completato!`;
        this.txt1PannelloBonus.position.set((screen.width - this.txt1PannelloBonus.width) / 2, 110);
        this.txt1PannelloBonus.visible = true;

        //testo2
        this.txt2PannelloBonus.text = '4 Risposte Esatte';
        this.txt2PannelloBonus.position.set((screen.width - this.txt2PannelloBonus.width) / 2, 170);
        this.txt2PannelloBonus.visible = true;

        //testo3
        this.txt3PannelloBonus.text = `100 Punti Bonus!`;
        this.txt3PannelloBonus.position.set((screen.width - this.txt3PannelloBonus.width) / 2, 220);
        this.txt3PannelloBonus.visible = true;

        this.pannelloBonus.visible = true;
        playTada();
    }

    hide() {
        this.pannelloBonus.visible = false;
        this.txt1PannelloBonus.visible = false;
        this.txt2PannelloBonus.visible = false;
        this.txt3PannelloBonus.visible = false;
        this.animate100Punti();
    }

    timeCount = 0;
    animate100Punti() {
        let counter = 0;
        let pt = gDatiGioco.getPuntiGuadagnati();

        // Definisci la funzione di callback per l'animazione
        const animatePoints = (time) => {
            this.timeCount += time.deltaTime;
            if (this.timeCount > 13) {
                this.timeCount = 0;
                gPunteggio.view('Punti ' + (pt += 20), app);
                counter++;
                playDing();
                if (counter > 4) {
                    app.ticker.remove(animatePoints); // Rimuovi solo questa funzione dal ticker
                    this.timeCount = 0;
                }
            }
        };

        // Aggiungi la funzione di callback al ticker
        app.ticker.add(animatePoints);
    }
}

//callback click pannello Bonus
export function clickPannelloBonus() {

    gPannelloBonus.hide();
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