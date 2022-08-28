import { Howl } from "howler";

type Props = {
    filepath: string
}

class SoundComponent {
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

export default SoundComponent
