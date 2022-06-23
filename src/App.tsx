import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

import './App.css';
import Form from './screens/login/login.screen';
import MoviesList from './screens/movies-list/movies-list';

import theme from './theme/main/theme';
import { GlobalStyles } from './theme/main/global-style';

import { LOGIN_PATH } from './screens/login/login.type';
import { MOVIES_LIST_PATH } from './screens/movies-list/movies-list.type';

import store from './store/store/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>

          <Route element={<Form />} path="/" />
          <Route element={<Form />} path={LOGIN_PATH} />
          <Route element={<MoviesList />} path={MOVIES_LIST_PATH} />
        </Routes>
      </ThemeProvider>
    </Provider>

  );
}

export default App;
