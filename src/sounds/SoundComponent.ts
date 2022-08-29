import { Howl } from "howler";
import { SE } from "./SoundEnum";

type Props = {
    filepath: string
}

export interface BaseSoundComponent {
    play: Function,
}

class SoundComponent implements BaseSoundComponent {
    private readonly howl;
    constructor(
        private readonly props: Props,
    ) {
        this.howl = new Howl({
            src: props.filepath
        })
    }

    async play() {
        this.howl.play();
    }
}
class RestComponent implements BaseSoundComponent {
    constructor(private sleepfn: Function) {
        this.sleepfn = sleepfn;
    }
    async play() {
        await this.sleepfn();
    }
}

const hihat = new SoundComponent({filepath: SE.HiHat});
const bassDrum = new SoundComponent({filepath: SE.BassDrum});
const snare = new SoundComponent({filepath: SE.Snare});

export function instrument(key: string, sleepfn: Function): BaseSoundComponent {
    if (key === 'h') {
        return hihat;
    }
    if (key === 's') {
        return snare;
    }
    if (key === '-') {
        return new RestComponent(sleepfn);
    }
    return bassDrum;
}

export default SoundComponent
