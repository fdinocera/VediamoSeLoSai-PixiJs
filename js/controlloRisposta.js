//import { rispostaEsatta } from "./quiz";
//import { show } from "./spuntaVerde";
//import { showIcsRossa } from "./icsRossa";
import { assegna25Punti } from "./punti";
import { animazione25Punti } from "./punti25";
import { playDingErrore } from "./suoni";
import { gQuiz } from "./main";

export let puntiGuadagnati = 0;
export let risposteEsatteStage = 0;

export function controllaRisposta(pulsante, app) {

    if (gQuiz.getRispostaEsatta() === pulsante) {
        show(pulsante);
        assegna25Punti(app);
        animazione25Punti(app);

        risposteEsatteStage++;
        puntiGuadagnati += 25;
    } else {
        playDingErrore();
        show(rispostaEsatta);
        showIcsRossa(pulsante);
    }
}

export function setRisposteEsatteStage(n) {
    risposteEsatteStage = n;
}