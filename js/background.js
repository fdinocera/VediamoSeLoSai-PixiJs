import { Assets, Sprite } from "pixi.js";
import { gQuiz, gSpuntaVerde, gIcsRossa } from "./main";
import { gPulsante1, gPulsante2, gPulsante3, gLivelloStage } from "./main";
import { app, gDatiGioco, gPannelloBlu, gPannelloBonus } from "./main";
import { play3x } from "./suoni";

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
        gPulsante1.reset();
        gPulsante2.reset();
        gPulsante3.reset();
        gSpuntaVerde.hide();
        gIcsRossa.hide();

        if (gLivelloStage.isFineStage()) {
            if (gDatiGioco.getRisposteEsatteStage() < 4) {
                gPannelloBlu.show();
            } else {
                gPannelloBonus.showPannelloBonus();
            }
        } else {
            gQuiz.next();
            gDatiGioco.popolaCampi();
            play3x();
        }
    }
}