import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home';
import TxTrack from './pages/txTrack';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/txtrack/:tx" component={TxTrack}/>
            <Route component={Home}/>
          </Switch>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
