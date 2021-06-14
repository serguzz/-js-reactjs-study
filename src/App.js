import logo from './logo.svg';
import './App.css';

import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import Menu from './Menu';



function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <Ccomponent numbers={[1,77,8,90]}/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://travelearth.zyrosite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          My First React App (Windsurfing Obolon)
        </a>
      </header>
    </div>
  );
}

export default App;
