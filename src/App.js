import { BrowserRouter, Routes, Route, Switch, Link } from 'react-router-dom';

//pages
import Home from './pages/Home/Home';

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
          <Route>
            <Home exact path="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
