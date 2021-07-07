import { Switch, Route, HashRouter } from 'react-router-dom';
import Main from '../components/Main';

function AppRouter() {
  return (
    <div>
      <HashRouter basename="country">
        <div>
          <Switch>
            <Route exact path="/" component={Main} />

            <Route
              exact
              path={`details/:id`}
              children={
                <h1 style={{ color: 'white' }}>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Esse, excepturi rem rerum
                  eaque blanditiis maxime sed eum dolore, odit
                  dignissimos delectus quos vitae et atque,
                  consequatur veniam temporibus illum dolorem.
                </h1>
              }
            />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default AppRouter;
