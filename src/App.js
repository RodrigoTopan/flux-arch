import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
        {/*<Header/> The header component will have access to all of the routes */ }
        <Routes />
    </BrowserRouter>
  );
}

export default App;
