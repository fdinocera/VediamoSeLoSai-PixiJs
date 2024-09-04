import { Assets, Sprite } from 'pixi.js';
import { app } from './main';

let spuntaVerdeTexture;
export async function preloadSpuntaVerdeTexture() {
    spuntaVerdeTexture = await Assets.load('./assets/img/spunta_verde.png');
}

export class SpuntaVerde {
    spuntaSprite;

    constructor() {
        this.spuntaSprite = Sprite.from(spuntaVerdeTexture);
        this.spuntaSprite.scale = 0.06;
        this.spuntaSprite.position.x = (screen.width - this.spuntaSprite.width) / 2 + 100;
        this.spuntaSprite.visible = false;
        this.spuntaSprite.zIndex=25;
        app.stage.addChild(this.spuntaSprite);
    }
    
    isVisible() {
        return this.spuntaSprite.visible;
    }
    
    show(pulsante) {
        if (pulsante === 1) this.spuntaSprite.position.y = 200;
        if (pulsante === 2) this.spuntaSprite.position.y = 260;
        if (pulsante === 3) this.spuntaSprite.position.y = 330;
        this.spuntaSprite.visible = true;
    }
    
    hide() {
        this.spuntaSprite.visible = false;
    }
}