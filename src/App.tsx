import logo from './logo.svg';
import './App.css';
import BassPlayButton from './BassPlayButton';
import HiHatPlayButton from './HiHatPlayButton';
import SamplePlayButton from './SamplePlayButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <BassPlayButton />
        <HiHatPlayButton />
        <SamplePlayButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
