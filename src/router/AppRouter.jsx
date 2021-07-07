import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from '../components/Main';

function AppRouter() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />

            <Route
              exact
              path="/hola"
              children={<h1>test ruta</h1>}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default AppRouter;
