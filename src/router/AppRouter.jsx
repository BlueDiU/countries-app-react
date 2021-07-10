import {
  Switch,
  Route,
  HashRouter,
  Redirect,
} from 'react-router-dom';

/* components */
import Main from '../components/Main';
import CountryDetails from '../components/CountryDetails/CountryDetails';

function AppRouter({ theme, setTheme }) {
  return (
    <div>
      <HashRouter>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              children={
                <Main theme={theme} setTheme={setTheme} />
              }
            />
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
