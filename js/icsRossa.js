import { Assets, Sprite } from 'pixi.js';

let icsSprite;
export async function caricaIcsRossa(app) {
    const icsTexture = await Assets.load('./assets/img/ics.png');
    icsSprite = Sprite.from(icsTexture);    
    icsSprite.scale = 0.3;
    icsSprite.position.x = (screen.width - icsSprite.width) / 2 + 100;
    icsSprite.visible = false;
    app.stage.addChild(icsSprite);
}

// export function creaIcsRossa(app) {

// }

export function showIcsRossa(pulsante) {

    if (pulsante === 1) icsSprite.position.y = 200;
    if (pulsante === 2) icsSprite.position.y = 270;
    if (pulsante === 3) icsSprite.position.y = 340;
    icsSprite.visible = true;
};

export function hideIcsRossa() {
    icsSprite.visible = false;
}