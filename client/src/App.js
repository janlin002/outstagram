import React from 'react';
import {
  HashRouter,
  Routes, // swtich
  Route,
} from 'react-router-dom';

import Header from './pages/header';
import Router from './routes';

function App() {
  console.log(Router, 'Router');
  return (
    <HashRouter>
      <Header />
      <Routes>
        {
          Router.map((item) => (
            <Route path={item.path} element={<item.Child />} />
          ))
        }
      </Routes>
    </HashRouter>
  );
}

export default App;
