// import { Graphics, Text } from "pixi.js";
// //import {  hide } from "./spuntaVerde";
// import { quizNext } from "./quiz";
// import { controllaRisposta } from "./controlloRisposta";
// //import { hideIcsRossa } from "./icsRossa";
// import { controlloFineStage } from "./livelloStage";
// import { resetPulsante1 } from "./pulsante";
// import { resetPulsante2 } from "./pulsante2";
// import { play3x, playPulsante } from "./suoni";

// let pulsante3;
// let txtPulsante3;
// let appRef;

// export function creaPulsante3(app) {

//     appRef = app;

//     pulsante3 = new Graphics()
//         .roundRect(0, 0, 200, 60, 15)
//         .fill({
//             color: 0x016eb4
//         })
//     pulsante3.position.set((app.screen.width - pulsante3.width) / 2, 320);
//     app.stage.addChild(pulsante3);

//     //testo pulsante3
//     txtPulsante3 = new Text({
//         text: '',
//         style: {
//             fill: '#ffffff',
//             fontFamily: 'BRLNSDB',
//             fontSize: 18,
//             wordWrap: true,
//             wordWrapWidth: 180,
//             align: 'center'
//         }
//     })
//     app.stage.addChild(txtPulsante3);

//     //rende interattivo pulsante3
//     pulsante3.eventMode = 'static';
//     pulsante3.on('pointerdown', clickPulsante3);
//     pulsante3.cursor = 'pointer';
// }

// export function setPulsante3(testo, app) {
//     txtPulsante3.text = testo;
//     let x = (app.screen.width - txtPulsante3.width) / 2
//     let y = (pulsante3.height - txtPulsante3.height) / 2 + pulsante3.y
//     txtPulsante3.position.set(x, y);
// }

// function clickPulsante3() {

    
//     if (isSpuntaVerdeVisible()) {
//         resetPulsante1();
//         resetPulsante2();
//         resetPulsante3();
//         controlloFineStage(appRef);
//         quizNext(appRef);
//         play3x();
//     } else {
//         evidenziaPulsante3();
//         controllaRisposta(3, appRef);
//         playPulsante();
//     }
// }

// export function resetPulsante3() {
//     //ridisegna pulsante per eliminare contorno giallo
//     pulsante3.clear();
//     pulsante3.roundRect(0, 0, 200, 60, 15);
//     pulsante3.fill({ color: 0x016eb4 });

//     hideIcsRossa();
//     hide();
// }

// function evidenziaPulsante3() {
//     pulsante3.stroke({ width: 5, color: 0xffff00 });
// }