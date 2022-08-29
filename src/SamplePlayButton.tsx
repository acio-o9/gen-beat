import { Measure4_4 } from './Measure';

const SamplePlayButton = () => (
  <div>
    <button onTouchStart={playSound}>8beat</button>
  </div>
)

const playSound = async () => {
  const measure = new Measure4_4(120);
  measure.playAll('b-hsbhsb');
}

export default SamplePlayButton;
