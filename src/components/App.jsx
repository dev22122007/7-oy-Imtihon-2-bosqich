import Header from "./Header"
import Homepage from "./Homepage"
import Footer from "./Footer"
import ProductList from "./ProductList"
import ProductDetail from "./ProductDetail"
import Checkout from "./Checkout"
import { Routes, Route } from "react-router-dom"
import { createContext, useEffect, useState } from "react"
import "../styles/App.css"

const ShoppingCartContext = createContext()
export { ShoppingCartContext }

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching (replace with your actual logic)
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  const [shoppingCart, setShoppingCart] = useState(() => {
    const savedData = localStorage.getItem("shoppingcart")
    const intialValue = JSON.parse(savedData)
    return intialValue || []
  })

  useEffect(() => {
    localStorage.setItem("shoppingcart", JSON.stringify(shoppingCart))
  }, [shoppingCart])

  return (
    <div>
    {isLoading && <div>Loading...</div>}
    {!isLoading && (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      <main className="page-container">

        <div className="content-wrap">
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/ProductList" element={<ProductList />} />
            <Route exact path="/ProductList/ProductDetail" element={<ProductDetail />} />
            <Route exact path="/Checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />

      </main>
    </ShoppingCartContext.Provider>

)}
  </div>)}


