import { Text } from "pixi.js";
import { app } from "./main";

export class LivelloStage {

    ///////////////////////////////
    livelloCounter = 1;
    stageCounter = 1;
    //////////////////////////////

    txtLivelloStage;
    quizCounter = 0;

    constructor() {
        this.txtLivelloStage = new Text({
            text: '',
            style: {
                fill: '#016eb4',
                fontFamily: 'BRLNSDB',
                fontSize: 24,
                wordWrap: true,
                wordWrapWidth: 240,
                stroke: { color: '#ffffff', width: 2 }
            }
        })
        app.stage.addChild(this.txtLivelloStage);
        this.updateView();
    }

    isFineStage() {
        this.quizCounter++;
        if (this.quizCounter === 4) {
            this.quizCounter = 0;
            return true;
        }
        return false;
    }

    getStage() {
        return this.stageCounter;
    }

    setStage(stage) {
        this.stageCounter = stage;
    }

    getLivello() {
        return this.livelloCounter;
    }

    setLivello(livello) {
        this.livelloCounter = livello;
    }    

    updateView() {
        this.txtLivelloStage.text = `Livello ${this.livelloCounter} - Stage ${this.stageCounter} `;
        this.txtLivelloStage.position.set((app.screen.width - this.txtLivelloStage.width) / 2, 460);
    }

    incrementaStage() {
        this.stageCounter++;
    }

    incrementaLivello() {
        this.livelloCounter++;
    }    
}