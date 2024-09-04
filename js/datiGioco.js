import { gArgomento, gDomanda, gPulsante1, gPulsante2, gPulsante3, gQuiz } from "./main";

export class DatiGioco {

    risposteEsatteStage = 0;
    puntiGuadagnati = 0;   

    resetRisposteEsatteStage() {
        this.risposteEsatteStage = 0;
    }

    getRisposteEsatteStage() {
        return this.risposteEsatteStage;
    }

    incrementaRisposteEsatteStage() {
        this.risposteEsatteStage++;
    }

    incrementaPuntiGuadagnati(punti) {
        this.puntiGuadagnati += punti;
    }

    resetPuntiGuadagnati() {
        this.puntiGuadagnati = 0;
    }

    getPuntiGuadagnati() {
        return this.puntiGuadagnati;
    }

    popolaCampi() {
        gArgomento.setArgomento(gQuiz.getArgomento());
        gDomanda.setDomanda(gQuiz.getDomanda());
        gPulsante1.setTextPulsante(gQuiz.getTextPulsante1());
        gPulsante2.setTextPulsante(gQuiz.getTextPulsante2());
        gPulsante3.setTextPulsante(gQuiz.getTextPulsante3());
    }
}