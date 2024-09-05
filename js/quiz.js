import { Assets } from 'pixi.js';

let quizDb;
export async function preloadDbQuiz() {
    quizDb = await Assets.load('./assets/data/dbquiz.txt');
}

export class Quiz {
    quiz;
    quizCounter = 0;
    currentQuiz;

    constructor() {
        this.quiz = quizDb.split('\r\n');
        this.randomize();
        this.currentQuiz = this.quiz[this.quizCounter].split(';');
        this.quizCounter++;
    }

    getArgomento() {
        return this.currentQuiz[0];
    }

    getDomanda() {
        return this.currentQuiz[1];
    }

    getTextPulsante1() {
        return this.currentQuiz[2];
    }
    getTextPulsante2() {
        return this.currentQuiz[3];
    }
    getTextPulsante3() {
        return this.currentQuiz[4];
    }

    getRispostaEsatta() {
        return parseInt(this.currentQuiz[5]);
    }

    // incrementaQuizCounter() {
    //     this.quizCounter++;
    // }

    resetQuizCounter() {
        this.quizCounter = 0;
    }

    next() {
        this.currentQuiz = this.quiz[this.quizCounter].split(';');
        this.quizCounter++;
    }

    randomize() {
        let k = 0;

        for (k = 0; k < this.quiz.length; k++) {
            let n = Math.floor(Math.random() * this.quiz.length);

            let tmp = this.quiz[k];
            this.quiz[k] = this.quiz[n];
            this.quiz[n] = tmp;
        }
    }
}