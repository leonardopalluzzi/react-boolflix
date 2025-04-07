import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MovieProvider } from "./contexts/movieContext"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Series from "./pages/Series"

function App() {


  return (
    <>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout} >
              <Route index Component={Home} />
              <Route path="/series" Component={Series} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieProvider>

    </>
  )
}

export default App
