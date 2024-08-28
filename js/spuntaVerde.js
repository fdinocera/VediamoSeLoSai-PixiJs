import { Assets, Sprite } from 'pixi.js';

let spuntaSprite;
export async function  caricaSpuntaVerde(app){
    const spuntaTexture = await Assets.load('./assets/img/spunta_verde.png');
    spuntaSprite = Sprite.from(spuntaTexture);
    spuntaSprite.scale = 0.06;
    spuntaSprite.position.x = (screen.width - spuntaSprite.width) / 2 + 100;
    spuntaSprite.visible = false;
    app.stage.addChild(spuntaSprite);
}

// export function creaSpuntaVerde(app) {

// }   

export function showSpuntaVerde(pulsante) {

    if (pulsante === 1) spuntaSprite.position.y = 200;
    if (pulsante === 2) spuntaSprite.position.y = 260;
    if (pulsante === 3) spuntaSprite.position.y = 330;
    spuntaSprite.visible = true;
};

export function hideSpuntaVerde() {
    spuntaSprite.visible = false;
}

export function isSpuntaVerdeVisible() {
    return spuntaSprite.visible;
}