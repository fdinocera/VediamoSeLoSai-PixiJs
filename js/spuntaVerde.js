import { Assets, Sprite } from 'pixi.js';

//const spuntaTexture = await Assets.load('./assets/img/spunta_verde.png');

export class SpuntaVerde {
    appRef;
    spuntaSprite;

    constructor(app) {
        Assets.load('./assets/img/spunta_verde.png')
        .then(texture =>{
            this.spuntaSprite = Sprite.from(texture);
            this.spuntaSprite.scale = 0.06;
            this.spuntaSprite.position.x = (screen.width - this.spuntaSprite.width) / 2 + 100;
            this.spuntaSprite.visible = false;
            app.stage.addChild(this.spuntaSprite);
        })
        this.appRef = app;
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