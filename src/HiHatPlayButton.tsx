import { Howl } from 'howler';

const HiHatPlayButton = () => (
  <div>
    <button onClick={playSound}>HiHat</button>
  </div>
)

const playSound = () => {
  console.log('play now.');
  const sound = new Howl({
    src: ['sound_effects/closed_hihat.mp3'],
    onend: () => {
      console.log('played.');
    }
  });
  sound.play();
}

export default HiHatPlayButton;
