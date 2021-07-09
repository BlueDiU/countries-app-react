import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './context/store';
import { GlobalStyle } from './App.styles';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />

      <AppRouter />
    </Provider>
  );
}

export default App;
