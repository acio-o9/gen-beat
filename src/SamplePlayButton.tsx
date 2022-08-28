import SoundComponent from './sounds/SoundComponent';
import { SE } from './sounds/SoundEnum';

const SamplePlayButton = () => (
  <div>
    <button onTouchStart={playSound}>8beat</button>
  </div>
)

const bpm = 160;
const hihat = new SoundComponent({filepath: SE.HiHat});
const bassDrum = new SoundComponent({filepath: SE.BassDrum});
const snare = new SoundComponent({filepath: SE.Snare});

const playSound = async (): Promise<void> => {
  const measureNum = 2;
  const duartion = calcDuration(bpm);

  for (let i = 0; i < measureNum; i++) {
    bassDrum.play();
    await sleep(duartion);
    hihat.play();
    await sleep(duartion);
    snare.play();
    await sleep(duartion);
    bassDrum.play();
    await sleep(duartion / 2);
    bassDrum.play();
    await sleep(duartion / 2);

    bassDrum.play();
    await sleep(duartion);
    hihat.play();
    await sleep(duartion);
    snare.play();
    await sleep(duartion);
    hihat.play();
    await sleep(duartion);
  }
}

function calcDuration(bpm: number): number {
  const duration = 1 / (bpm / 60) / 2;
  return duration;
}

const sleep = (second: number) => {
  return new Promise(resolve => setTimeout(resolve, second * 1000))
}

export default SamplePlayButton;
