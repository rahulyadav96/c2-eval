import { Navbar } from './components/Navbar';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import './App.css';
import {Route, Switch} from "react-router-dom"
import { Dashboard } from './components/Dashboard';
import { Home } from './components/Home';
import { About } from './components/About';
import { Newshows } from './components/Newshow';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch >
          <Route exact path = "/">
           <Home />
          </Route>
          <PrivateRoute path = "/dashboard">
              <Dashboard />
          </PrivateRoute>
          <Route  path = "/newshows">
           <Newshows />
          </Route>
          <Route  path = "/about">
            <About />
          </Route>
          <Route path = "/login">
              <Login />
          </Route>
          <Route >
            <h1>Page not exist</h1>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
