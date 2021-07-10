import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './context/store';
import { GlobalStyle } from './App.styles';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

const LightTheme = {
  mainColor: ' hsl(0, 0%, 100%)',
  fontColor: 'hsl(207, 26%, 17%)',
};

const DarkTheme = {
  cardColor: 'hsl(209, 23%, 22%)',
  mainColor: 'hsl(207, 26%, 17%)',
  fontColor: ' hsl(0, 0%, 100%)',
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={themes[theme]}>
        <AppRouter theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
