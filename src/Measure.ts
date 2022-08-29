import SoundComponent, { BaseSoundComponent, instrument } from "./sounds/SoundComponent";

export interface Measure {
    playAll: Function,
}
export class Measure4_4 implements Measure {
    private duration;
    constructor(
        private bpm: number,
    ) {
        this.bpm = bpm;
        this.duration = calcDuration(bpm);
    }

    async playAll(score: string) {
        for (let s of score.split('')) {
            let t = instrument(s, this.rest);
            await this.play(t, this.duration);
        }
    }

    async play(c: BaseSoundComponent, duration: number) {
        c.play();
        await new Promise(resolve => setTimeout(resolve, duration * 1000))
    }
    rest = (duration: number = this.duration) => {
        new Promise(resolve => setTimeout(resolve, duration * 1000))
    }
}

function calcDuration(bpm: number): number {
    const duration = 1 / (bpm / 60) / 2;
    return duration;
}