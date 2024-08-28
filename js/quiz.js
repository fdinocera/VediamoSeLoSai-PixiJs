import { Assets } from 'pixi.js';
import { setArgomento } from './argomento';
import { setDomanda } from './domanda';
import { setPulsante1 } from './pulsante1';
import { setPulsante2 } from './pulsante2';
import { setPulsante3 } from './pulsante3';

let quiz;
let quizCounter = 0;
export let rispostaEsatta;

//carica quiz
export async function caricaQuiz(app) {
    
    const quizDb = await Assets.load('./assets/data/dbquiz.txt')
    quiz = quizDb.split('\r\n');
    
    const currentQuiz = quiz[quizCounter].split(';');
    setArgomento(currentQuiz[0], app);
    setDomanda(currentQuiz[1], app);
    setPulsante1(currentQuiz[2], app);
    setPulsante2(currentQuiz[3], app);
    setPulsante3(currentQuiz[4], app);
    rispostaEsatta = parseInt(currentQuiz[5]);
    quizCounter++;
}

export function quizNext(app) {

    //if (quiz !== undefined) {
        const currentQuiz = quiz[quizCounter].split(';');
        setArgomento(currentQuiz[0], app);
        setDomanda(currentQuiz[1], app);
        setPulsante1(currentQuiz[2], app);
        setPulsante2(currentQuiz[3], app);
        setPulsante3(currentQuiz[4], app);
        rispostaEsatta = parseInt(currentQuiz[5]);
        quizCounter++;
    //}
}