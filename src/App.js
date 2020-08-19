import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreProvider from './components/Store/Provider';
import RoutesPrivate from './components/Routes/Private/Private';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <RoutesPrivate path="/" component={Home} />
        </Switch>
      </StoreProvider>
    </Router>
  );
}

export default App;
