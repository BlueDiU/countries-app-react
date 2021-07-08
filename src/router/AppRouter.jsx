import {
  Switch,
  Route,
  HashRouter,
  Redirect,
} from 'react-router-dom';
import CountryDetails from '../components/CountryDetails/CountryDetails';
import Main from '../components/Main';

function AppRouter() {
  return (
    <div>
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route
              exact
              path={`/details/:name`}
              component={CountryDetails}
            />

            <Redirect to="/" />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default AppRouter;
