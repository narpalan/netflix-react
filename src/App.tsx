import React from 'react';
import './App.css';
import Form from './screens/login/login.screen';
import { ThemeProvider } from 'styled-components';
import theme from "./theme/main/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Form/>
    </ThemeProvider>
    
  );
}

export default App;
