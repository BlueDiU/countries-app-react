import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './context/store';
import { GlobalStyle } from './App.styles';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';

// get selected theme for ls or  put default "dark"
const lsTheme = localStorage.getItem('theme') || 'dark';

const LightTheme = {
  mainColor: ' hsl(0, 0%, 100%)',
  cardColor: ' hsl(0, 0%, 100%)',
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
  const [theme, setTheme] = useState('dark'); // light

  useEffect(() => {
    setTheme(lsTheme);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <AppRouter theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
