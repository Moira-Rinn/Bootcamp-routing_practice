import { Router } from '@reach/router';
import Home from './components/Home';
// import Number from './components/Number';
import Hello from './components/Hello';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Hello path="/:word/" />
        <Hello path="/:word/:color" />
        <Hello path="/:word/:color/:bgcolor" />
        {/* <Number path="/:num" /> */}
      </Router>

    </div>
  );
}

export default App;
