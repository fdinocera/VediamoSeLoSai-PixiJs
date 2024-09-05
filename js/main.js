import { Application, Assets } from 'pixi.js';
import { Domanda } from './domanda.js';
import { IcsRossa } from './icsRossa.js';
import { Pulsante } from './pulsante.js';
import { Argomento } from './argomento.js';
import { Punteggio } from './punteggio.js';
import { DatiGioco } from './datiGioco.js';
import { play3x, playDingErrore, playPulsante } from './suoni.js';
import { Intestazione } from './intestazione.js';
import { LivelloStage } from './livelloStage.js';
import { preloadDbQuiz, Quiz } from './quiz.js';
import { preloadScritta25Punti, ScrittaPunti25 } from './punti25.js';
import { preloadSpuntaVerdeTexture, SpuntaVerde } from './spuntaVerde.js';
import { clickPannelloBonus, PannelloBonus, preloadPannelloBonus } from './pannelloBonus.js';
import { Background, preloadBackgroundTexture, clickSfondo } from './background.js';
import { PannelloBlu, preloadPannelloBlu, clickPannelloBlu } from './pannelloBlu.js';
import { PannelloFinale, preloadPannelloFinaleTexture, clickPannelloFinale } from './pannelloFinale.js';
import { clickPannelloLivello, PannelloLivello, preloadPannelloLivelloTexture } from './pannelloLivello.js';

//OGGETTI GLOBALI
export let app;
export let gQuiz;
export let gArgomento;
export let gDomanda;
export let gDatiGioco;
export let gPulsante1;
export let gPulsante2;
export let gPulsante3;
export let gPunteggio;
export let gPannelloBlu;
export let gPannelloBonus;
export let gPannelloLivello;
export let gPannelloFinale
export let gBackground;
export let gSpuntaVerde;
export let gIcsRossa;
export let gLivelloStage;


(async () => {
    //app
    app = new Application();
    await app.init({
        resizeTo: window,
        antialias: true
    });
    app.canvas.style.position = 'absolute';
    document.body.appendChild(app.canvas);

    //variabili per debug/
    globalThis.__PIXI_STAGE__ = app.stage;
    globalThis.__PIXI_RENDERER__ = app.renderer;

    // PRE-LOADING RISORSE
    await preloadDbQuiz();
    await Assets.load('./assets/font/BRLNSDB.TTF');
    await preloadScritta25Punti();
    await preloadPannelloBlu();
    await preloadPannelloBonus();
    await preloadBackgroundTexture();
    await preloadSpuntaVerdeTexture();
    await preloadPannelloFinaleTexture();
    await preloadPannelloLivelloTexture();

    //CREAZIONE OGGETTI GIOCO
    new Intestazione();
    const gScrittaPunti25 = new ScrittaPunti25();
    gBackground = new Background(clickSfondo);
    gArgomento = new Argomento();
    gQuiz = new Quiz();
    gDomanda = new Domanda();
    gIcsRossa = new IcsRossa();
    gSpuntaVerde = new SpuntaVerde();
    gDatiGioco = new DatiGioco();
    gPannelloBlu = new PannelloBlu(clickPannelloBlu);
    gPannelloBonus = new PannelloBonus(clickPannelloBonus);
    gPannelloLivello = new PannelloLivello(clickPannelloLivello);
    gPannelloFinale = new PannelloFinale(clickPannelloFinale);
    gPunteggio = new Punteggio();
    gPulsante1 = new Pulsante(180, pulsante1Click);
    gPulsante2 = new Pulsante(250, pulsante2Click);
    gPulsante3 = new Pulsante(320, pulsante3Click);
    gLivelloStage = new LivelloStage();
    
    gQuiz.next();
    gDatiGioco.popolaCampi();

    function pulsante1Click() {
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
                    gPannelloBonus.show();
                }
            } else {
                gQuiz.next();
                gDatiGioco.popolaCampi();
                play3x();
            }
        } else {
            gPulsante1.evidenzia();
            playPulsante();
            if (gQuiz.getRispostaEsatta() === 1) {
                gSpuntaVerde.show(1);
                gDatiGioco.incrementaPuntiGuadagnati(25);
                gPunteggio.animateIncrementoPunti();
                gScrittaPunti25.animate();
                gDatiGioco.incrementaRisposteEsatteStage();
            } else {                
                playDingErrore()
                gIcsRossa.show(1);
                gSpuntaVerde.show(gQuiz.getRispostaEsatta());
            }
        }
    }

    function pulsante2Click() {
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
                    gPannelloBonus.show();
                }
            } else {
                gQuiz.next();
                gDatiGioco.popolaCampi();
                play3x();
            }
        } else {
            gPulsante2.evidenzia();
            playPulsante();
            if (gQuiz.getRispostaEsatta() === 2) {
                gSpuntaVerde.show(2);
                gDatiGioco.incrementaPuntiGuadagnati(25);
                gPunteggio.animateIncrementoPunti();
                gScrittaPunti25.animate();
                gDatiGioco.incrementaRisposteEsatteStage();
            } else {                
                playDingErrore();
                gIcsRossa.show(2);
                gSpuntaVerde.show(gQuiz.getRispostaEsatta());
            }
        }
    }

    function pulsante3Click() {
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
                    gPannelloBonus.show();
                }
            } else {
                gQuiz.next();
                gDatiGioco.popolaCampi();
                play3x();
            }
        } else {
            gPulsante3.evidenzia();
            playPulsante();
            if (gQuiz.getRispostaEsatta() === 3) {
                gSpuntaVerde.show(3);
                gDatiGioco.incrementaPuntiGuadagnati(25);
                gPunteggio.animateIncrementoPunti();
                gScrittaPunti25.animate();
                gDatiGioco.incrementaRisposteEsatteStage();
            } else {                
                playDingErrore();
                gIcsRossa.show(3);
                gSpuntaVerde.show(gQuiz.getRispostaEsatta());
            }
        }
    }
})();