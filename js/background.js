import { Assets, Sprite } from "pixi.js";
import { play3x } from "./suoni";
import { gQuiz, gSpuntaVerde, gIcsRossa } from "./main";
import { gPulsante1, gPulsante2, gPulsante3, gLivelloStage } from "./main";
import { gDatiGioco, gPannelloBlu, gPannelloBonus } from "./main";
import { app } from "./main";


let backgroundTexture;
export async function preloadBackgroundTexture() {
    backgroundTexture = await Assets.load('./assets/img/g2423.png');
}

export class Background {
    bgSprite;

    constructor(callback) {
        this.bgSprite = Sprite.from(backgroundTexture);
        this.bgSprite.width = 720 * 0.4;
        this.bgSprite.height = 1480 * 0.4;
        this.bgSprite.position.x = (screen.width - this.bgSprite.width) / 2;
        this.bgSprite.eventMode = 'static';
        this.bgSprite.on('pointerdown', callback);
        this.bgSprite.zIndex = -100;
        app.stage.addChild(this.bgSprite);
    }
}

//callback click sfondo
export function clickSfondo() {

    if (gSpuntaVerde.isVisible()) {
        gPulsante1.resetPulsante();
        gPulsante2.resetPulsante();
        gPulsante3.resetPulsante();
        gSpuntaVerde.hide();
        gIcsRossa.hide();

        if (gLivelloStage.isFineStage()) {
            if (gDatiGioco.getRisposteEsatteStage() < 4) {
                gPannelloBlu.show();
            } else {
                gPannelloBonus.showPannelloBonus();
            }
        } else {
            gQuiz.quizNext();
            gDatiGioco.popolaCampi();
            play3x();
        }
    }
}