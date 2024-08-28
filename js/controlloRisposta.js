import { rispostaEsatta } from "./quiz";
import { showSpuntaVerde } from "./spuntaVerde";
import { showIcsRossa } from "./icsRossa";
import { assegna25Punti } from "./punti";
import { animazionePunti25 } from "./punti25";
import { playDingErrore } from "./suoni";

export let puntiGuadagnati = 0;
export let risposteEsatteStage = 0;

export function controllaRisposta(pulsante, app) {

    if (rispostaEsatta === pulsante) {
        showSpuntaVerde(pulsante);
        assegna25Punti(app);
        animazionePunti25(app);

        risposteEsatteStage++;
        puntiGuadagnati += 25;
    } else {
        playDingErrore();
        showSpuntaVerde(rispostaEsatta);
        showIcsRossa(pulsante);
    }
}

export function setRisposteEsatteStage(n) {
    risposteEsatteStage = n;
}