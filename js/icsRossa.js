import { Assets, Sprite } from 'pixi.js';
import { app } from './main';

export class IcsRossa {
    icsSprite;

    constructor() {
         Assets.load('./assets/img/ics.png')
            .then(sprite => {
                this.icsSprite = Sprite.from(sprite);
                this.icsSprite.scale = 0.3;
                this.icsSprite.position.x = (screen.width - this.icsSprite.width) / 2 + 100;
                this.icsSprite.visible = false;
                this.icsSprite.zIndex = 10;
                app.stage.addChild(this.icsSprite);
            })
    }

    show(pulsante) {
        if (pulsante === 1) this.icsSprite.position.y = 200;
        if (pulsante === 2) this.icsSprite.position.y = 270;
        if (pulsante === 3) this.icsSprite.position.y = 340;
        this.icsSprite.visible = true;
    };

    hide() {
        this.icsSprite.visible = false;
    }
}