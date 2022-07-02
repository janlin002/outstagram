import React from 'react';
import {
  BrowserRouter,
  Routes, // swtich
  Route,
} from 'react-router-dom';

import Header from './pages/header';
import Router from './routes';

function App() {
  // console.log(Router, 'Router');
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {
          Router.map((item) => (
            <Route path={item.path} element={<item.Child />} />
          ))
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
