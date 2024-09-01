import { Assets } from 'pixi.js';

let quizDb;
export async function preloadDbQuiz() {
    quizDb = await Assets.load('./assets/data/dbquiz.txt');
}

export class Quiz {
    quiz;
    quizCounter = 0;
    //rispostaEsatta;
    currentQuiz;

    constructor(app) {

        this.quiz = quizDb.split('\r\n');
        this.currentQuiz = this.quiz[this.quizCounter].split(';');
        //argomentoQuiz.setArgomento(currentQuiz[0]);

        //setDomanda(currentQuiz[1], app);
        // giocoDomanda.setDomanda(currentQuiz[1]);
        // setPulsante1(currentQuiz[2], app);
        // setPulsante2(currentQuiz[3], app);
        // setPulsante3(currentQuiz[4], app);
        //this.rispostaEsatta = parseInt(currentQuiz[5]);
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
        //return this.rispostaEsatta;
        return parseInt(this.currentQuiz[5]);
    }

    incrementaQuizCounter() {
        this.quizCounter++;
    }

    resetQuizCounter() {
        this.quizCounter = 0;
    }

    quizNext(app) {

        this.currentQuiz = this.quiz[this.quizCounter].split(';');
        this.quizCounter++;

        //const currentQuiz = quiz[quizCounter].split(';');
        //setArgomento(currentQuiz[0]);

        //gArgomento.setArgomento(currentQuiz[0]);

        // setDomanda(currentQuiz[1], app);
        // setPulsante1(currentQuiz[2], app);
        // setPulsante2(currentQuiz[3], app);
        // setPulsante3(currentQuiz[4], app);
        // rispostaEsatta = parseInt(currentQuiz[5]);

    }
}