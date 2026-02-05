import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import Help from './components/Help';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Onboarding} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/reports" component={Reports} />
          <Route path="/help" component={Help} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;