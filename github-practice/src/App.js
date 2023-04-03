import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>

          Hi class!!! This is JSX. I can put html directly into my JavaScript files with React! How cool!!!

          Whoa baby, this is totally different text from last time. What will happen if I try to merge???? 🤔

        </h1>
        <p>
          I'm not spaced strangely. Isn't that great! 😊
        </p>

        <p>
          But I want to keep all this stuff.
        </p>
      </header>
    </div>
  );
}

export default App;
