import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {' '}
          {/* Wrap your routes in a Switch component */}
          <Route path="/" exact component={Home} />
          <Route path="/docs" component={Documentation} />
          <Route path="/login" exact component={Login} />
          {/* Handle all unmatched routes and redirect to home page: */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
