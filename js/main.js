import { Application, Assets } from 'pixi.js';
import { caricaSpuntaVerde } from './spuntaVerde.js';
import { caricaIcsRossa } from './icsRossa.js';
import { creaPulsante1 } from './pulsante1.js';
import { creaPulsante2 } from './pulsante2.js';
import { creaPulsante3 } from './pulsante3.js';
import { caricaQuiz } from './quiz.js';
import { creaArgomento } from './argomento.js';
import { creaDomanda } from './domanda.js';
import { creaPunti } from './punti.js';
import { caricaPunti25 } from './punti25.js';
import { caricaPannelloBlu, creaPannelloBlu } from './pannelloBlu.js';
import { caricaPannelloBonus, creaPannelloBonusSprite } from './pannelloBonus.js';
import { creaLivelloStage, } from './livelloStage.js';
import { Intestazione } from './intestazione.js';
import { caricaPannelloLivello, creaPannelloLivelloSprite } from './pannelloLivello.js';
import { caricaPannelloFinale, creaPannelloFinaleSprite } from './pannelloFinale.js';
import { caricaBackground } from './background.js';


(async () => {
    //app
    const app = new Application();
    await app.init({
        resizeTo: window,
        antialias: true
    });
    app.canvas.style.position = 'absolute';
    document.body.appendChild(app.canvas);

    //variabili per debug/
    globalThis.__PIXI_STAGE__ = app.stage;
    globalThis.__PIXI_RENDERER__ = app.renderer;


    caricaBackground(app);
    caricaFont();
    caricaQuiz(app);
    caricaSpuntaVerde(app);
    caricaIcsRossa(app);
    caricaPannelloBlu(app);
    caricaPannelloBonus(app);
    caricaPannelloFinale(app);
    caricaPannelloLivello(app);
    caricaPunti25(app);

    //carica font
    async function caricaFont() {
        await Assets.load('./assets/font/BRLNSDB.TTF');
    }

    new Intestazione(app);
    creaArgomento(app);
    creaDomanda(app);
    creaPulsante1(app);
    creaPulsante2(app);
    creaPulsante3(app);
    //creaSpuntaVerde(app);
    //creaIcsRossa(app);
    //creaPunti25(app);
    creaPannelloBlu(app);
    creaPannelloBonusSprite(app);
    creaPannelloLivelloSprite(app);
    creaPannelloFinaleSprite(app);
    creaPunti(app);
    creaLivelloStage(app);
    //quizNext(app);

    // rectangle.cursor = 'pointer';

    // //rende interattivo rectangle
    // rectangle.eventMode = 'static';
    // rectangle.on('mousedown', moveRectangle);

    // function moveRectangle() {
    //     rectangle.position.x -= 10;
    //     rectangle.position.y += 10;
    // }

    // const text2 = new Text({
    //     text: 'Parliamo di...',
    //     align: center,
    //     style: {
    //         // `fill` is the same as the `color` property
    //         // in  CSS.
    //         fill: '#ffffff',
    //         // Make sure you have the font is installed
    //         // before you use it.
    //         fontFamily: 'Berlin Sans FB Demi Grassetto',
    //         fontSize: 14,
    //         //stroke: { color: '#4a1850', width: 5 },
    //         // dropShadow: {
    //         //     color: '#4a1850',
    //         //     //blur: 4,
    //         //     //angle: Math.PI / 6,
    //         //     distance: 6,
    //         // },
    //         wordWrap: true,
    //         wordWrapWidth: 440
    //     }
    // });

    // const rectangle = new Graphics()
    //     .rect(200, 200, 100, 150)
    //     .fill({
    //         color: 0xffea00,
    //         alpha: 0.8
    //     })
    //     .stroke({
    //         width: 8,
    //         color: 0x00ff00
    //     });

    // rectangle.cursor = 'pointer';

    // //rende interattivo rectangle
    // rectangle.eventMode = 'static';
    // rectangle.on('mousedown', moveRectangle);

    // function moveRectangle() {
    //     rectangle.position.x -= 10;
    //     rectangle.position.y += 10;
    // }

    // window.addEventListener('keyup', function (e) {
    //     switch (e.key) {
    //         case 'ArrowRight': {
    //             rectangle.x += 10;
    //             break;
    //         }
    //         case 'ArrowLeft': {
    //             rectangle.x -= 10;
    //             break;
    //         }
    //         case 'ArrowUp': {
    //             rectangle.y -= 10;
    //             break;
    //         }
    //         case 'ArrowDown': {
    //             rectangle.y += 10;
    //         }
    //     }
    // });

    // app.stage.addChild(rectangle);

    // const line = new Graphics()
    //     .moveTo(100, 700)
    //     .lineTo(900, 400)
    //     .stroke({
    //         color: 0x55faff
    //     });
    // app.stage.addChild(line);

    // const triangle = new Graphics()
    //     .poly([
    //         600, 50,
    //         720, 400,
    //         420, 400
    //     ])
    //     .fill({
    //         color: 0x8f5ff2
    //     })
    //     .stroke({
    //         color: 0xf5fa2f
    //     });
    // app.stage.addChild(triangle);

    // const star = new Graphics()
    //     .star(1000, 250, 12, 80, 2)
    //     .fill({
    //         color: 0xffffff
    //     })
    // app.stage.addChild(star);

    // const text = new Text({
    //     text: 'Hello Pixi',
    //     style: {
    //         // `fill` is the same as the `color` property
    //         // in CSS.
    //         fill: '#ffffff',
    //         // Make sure you have the font is installed
    //         // before you use it.
    //         fontFamily: 'Montserrat Medium',
    //         fontSize: 72,
    //         fontStyle: 'italic',
    //         fontWeight: 'bold',
    //         stroke: { color: '#4a1850', width: 5 },
    //         dropShadow: {
    //             color: '#4a1850',
    //             blur: 4,
    //             angle: Math.PI / 6,
    //             distance: 6,
    //         },
    //         wordWrap: true,
    //         wordWrapWidth: 440
    //     }
    // });
    // app.stage.addChild(text);

    // const style = new TextStyle({
    //     fill: '#ffffff',
    //     fontFamily: 'Playwrite US Trad',
    //     fontSize: 72,
    //     stroke: { color: '#4a1850', width: 5 },
    //     dropShadow: {
    //         color: '#4a1850',
    //         blur: 4,
    //         angle: Math.PI / 6,
    //         distance: 6,
    //     },
    //     wordWrap: true,
    //     wordWrapWidth: 440
    // });

    // const text2 = new Text({
    //     text: 'Hello Pixi',
    //     style
    // });

    // //creazione e manipolazione sprite
    // // Step 1
    // const texture = await Assets.load('./foglia.avif');

    // // Step 2
    // const sprite = Sprite.from(texture);
    // // Or
    // //const sprite2 = new Sprite(texture);

    // // Sets the width to 0.5 of its original width
    // sprite.scale = 0.5;
    // sprite.position.set(100, 100);
    // sprite.skew.set(Math.PI / 6, 0);
    // sprite.rotation = Math.PI / 4;
    // sprite.pivot.set(100, 200);

    // // Step 3
    // app.stage.addChild(sprite);

    // //ticker
    // const circle = new Graphics();
    // app.ticker.add(() => {
    //     circle.circle(
    //         // Random x-coordinate
    //         Math.random() * app.screen.width,
    //         // Random y-coordinate
    //         Math.random() * app.screen.height,
    //         // Circle radius
    //         20
    //     )
    //         .fill({
    //             color: 0xffffff
    //         });
    //     //app.stage.addChild(circle);
    // });

    // //container
    // const warriorsContainer = new Container();
    // app.stage.addChild(warriorsContainer);
    // warriorsContainer.position.set(100, 100)

    // const girlTexture = await Assets.load('./ragazzo.png');
    // const girlSprite = Sprite.from(girlTexture);
    // warriorsContainer.addChild(girlSprite);

    // const guyTexture = await Assets.load('./ragazza.png');
    // const guySprite = Sprite.from(guyTexture);
    // warriorsContainer.addChild(guySprite);

    // console.log(`x: ${girlSprite.x}, y: ${girlSprite.y}`);

    // const x = girlSprite.getGlobalPosition().x;
    // const y = girlSprite.getGlobalPosition().y;
    // // x:200, y:200
    // console.log(`x: ${x}, y: ${y}`);

    // //carica font
    // const font = await Assets.load('impact.ttf');

    // // This will not be executed unless the font is loaded.
    // const text3 = new Text({
    //     text: 'Font iMPACT',
    //     style: {
    //         fill: '#ffffff',
    //         // font.family contains the name of the font
    //         fontFamily: font.family,
    //         fontSize: 72
    //     },
    // });
    // text3.position.set(400, 300)
    // app.stage.addChild(text3);

    // //creazione bundle (caricamento di piu risorse con Assets.)
    // Assets.addBundle('warriors', {
    //     girl_warrior: '/images/girl_warrior.png',
    //     guy_warrior: '/images/guy_warrior.png'
    // });







    //init


})();