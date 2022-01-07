import { BrowserRouter, Route, Switch } from 'react-router-dom';

//pages
import Home from './pages/home/Home';
import Character from './pages/character/Character';

//components
import { Navbar } from './components/navbar/Navbar';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/character/:id" component={Character} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
