// Libs and externals
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
// import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import './App.css';

// Components
import Show from './screens/show/show';
import Guard from './components/guard/guard';

// Screens
import Form from './screens/login/login.screen';
import ShowsList from './screens/shows/shows';

// Themes
import theme from './theme/main/theme';

// Paths
import { LOGIN_PATH } from './screens/login/login.type';
import { SHOWS_PATH } from './screens/shows/shows.type';
import { SHOW_PATH } from './screens/show/show.type';

// Css and styles
import { GlobalStyles } from './theme/main/global-style';

// Utilities
import store from './store/store/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Form />} path={LOGIN_PATH} />
          <Route element={<Guard><ShowsList /></Guard>} path={SHOWS_PATH} />
          <Route element={<Guard><Show /></Guard>} path={SHOW_PATH} />
        </Routes>
      </ThemeProvider>
    </Provider>

  );
}
// {['/', LOGIN_PATH].map((pathString) => <Route path={pathString} element={<Form />} />) }
export default App;
