import { Howl } from 'howler';

const BassPlayButton = () => (
  <div>
    <button onClick={playSound}>Bass</button>
  </div>
)

const playSound = () => {
  console.log('play now.');
  const sound = new Howl({
    src: ['sound_effects/bass_drum.mp3'],
    onend: () => {
      console.log('played.');
    }
  });
  sound.play();
}

export default BassPlayButton;
