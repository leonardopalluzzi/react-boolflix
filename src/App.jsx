import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MovieProvider } from "./contexts/movieContext"
import { CastProvider } from "./contexts/castContext"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"

function App() {


  return (
    <>
      <MovieProvider>
        <CastProvider>
          <BrowserRouter>
            <Routes>
              <Route Component={DefaultLayout} >
                <Route index Component={Home} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CastProvider>
      </MovieProvider>

    </>
  )
}

export default App
