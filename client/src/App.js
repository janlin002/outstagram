import React from 'react';
import {
  BrowserRouter,
  Routes, // swtich
  Route,
} from 'react-router-dom';

import Home from 'Pages/home';
import Router from './routes';

function App() {
  // console.log(Router, 'Router');
  return (
    <BrowserRouter>
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
