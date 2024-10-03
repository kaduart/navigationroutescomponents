import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/home"
import About from "./routes/about"
import RoutesMain from "./routes/routesMain"
import Books from "./routes/products/books"
import Computers from "./routes/products/computers"
import Eletronics from "./routes/products/eletronics"
import Products from "./routes/products"
import PageNotFound from "./components/page-not-found"

export default  function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoutesMain />} >
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='products' element={<Products />} >
              <Route index element={<Computers />} />
              <Route path='computers' element={<Computers />} />
              <Route path='eletronics' element={<Eletronics />} />
              <Route path='books' element={<Books />} />
            </Route>
            <Route path='about' element={<About />} />
           <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
