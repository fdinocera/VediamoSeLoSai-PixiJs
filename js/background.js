import { Assets, Sprite } from "pixi.js";
import { play3x } from "./suoni";


//const bgTexture = await Assets.load('./assets/img/g2423.png');

let bgSprite;
export async function caricaBackground(app) {

    Assets.load('./assets/img/g2423.png')
        .then(texture => {

            bgSprite = Sprite.from(texture);
            app.stage.addChild(bgSprite);

            bgSprite.width = 720 * 0.4;
            bgSprite.height = 1480 * 0.4;
            bgSprite.position.x = (screen.width - bgSprite.width) / 2;
            bgSprite.eventMode = 'static';
            bgSprite.on('pointerdown', clickSfondo);
            bgSprite.zIndex = -100;
        })
}

function clickSfondo() {

    if (isSpuntaVerdeVisible()) {
        resetPulsante1();
        resetPulsante2();
        resetPulsante3();
        controlloFineStage(app);
        quizNext(app);
        play3x();
    }
    console.log('click sfondo')
}