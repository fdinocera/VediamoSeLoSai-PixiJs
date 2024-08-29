import { Howl } from 'howler';

const ding = new Howl({
    //src: './assets/sound/ding.wav',
    src: './ding.wav',
    volume: 0.6
});

const dingErrore = new Howl({
    src: './assets/sound/ding_errore.wav'
});

const trittico = new Howl({
    src: './assets/sound/x3.wav'
});

const suonoPulsante = new Howl({
    src: './assets/sound/pulsante.wav'
})

const tada = new Howl({
    src: './assets/sound/tada.flac'
})

export function playDing() {
    ding.play();
}

export function playDingErrore() {
    dingErrore.play();
}

export function play3x() {
    trittico.play();
}

export function playPulsante() {
    suonoPulsante.play();
}

export function playTada() {
    tada.play();
}