import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom'
import Form1 from './Form';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Form1 />
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
