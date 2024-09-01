import { Graphics, Text } from 'pixi.js';
// import { controllaRisposta } from './controlloRisposta';
// import { controlloFineStage } from './livelloStage';
// import { play3x, playPulsante } from './suoni';

export class Pulsante {
    pulsante;
    txtPulsante1;
    appRef;
    pulsanteClicked = false;

    constructor(app, y, callbackClick) {
        this.appRef = app;
        this.pulsante = new Graphics()
            .roundRect(0, 0, 200, 60, 15)
            .fill({
                color: 0x016eb4
            })
        this.pulsante.position.set((app.screen.width - this.pulsante.width) / 2, y);
        app.stage.addChild(this.pulsante);

        //testo pulsante1
        this.txtPulsante1 = new Text({
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
        app.stage.addChild(this.txtPulsante1);

        //rende interattivo pulsante
        this.pulsante.eventMode = 'static';
        this.pulsante.on('pointerdown', callbackClick);
        this.pulsante.cursor = 'pointer';
    }

    setTextPulsante(testo) {
        this.txtPulsante1.text = testo;
        let x = (this.appRef.screen.width - this.txtPulsante1.width) / 2
        let y = (this.pulsante.height - this.txtPulsante1.height) / 2 + this.pulsante.y
        this.txtPulsante1.position.set(x, y);
    } 

    evidenziaPulsante() {
        this.pulsante.stroke({ width: 5, color: 0xffff00 });
    }

    resetPulsante() {
        //ridisegna pulsante per eliminare contorno giallo
        this.pulsante.clear();
        this.pulsante.roundRect(0, 0, 200, 60, 15);
        this.pulsante.fill({ color: 0x016eb4 });
    }
}


// export function clickPulsante_2() {

//     if (isSpuntaVerdeVisible()) {
//         resetPulsante1();
//         resetPulsante2();
//         resetPulsante3();
//         controlloFineStage(appRef);
//         quizNext(appRef);
//         play3x();
//     } else {
//         evidenziaPulsante1();
//         controllaRisposta(1, appRef);
//         playPulsante();
//     }
// }



