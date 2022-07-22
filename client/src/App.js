import React, { Suspense } from 'react'
import {
  HashRouter,
  Routes, // swtich
  Route,
} from 'react-router-dom'

import LoadingPage from 'Components/loadingPage'
import Header from './pages/header'
// import Footer from './pages/footer'
import Router from './routes'

function App() {
  return (
    <HashRouter>
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          {
          Router.map((item) => (
            <Route path={item.path} element={<item.Child />} key={item.path} />
          ))
        }
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </HashRouter>
  )
}

export default App
