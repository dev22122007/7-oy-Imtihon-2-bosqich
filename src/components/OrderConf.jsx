import { ShoppingCartContext } from "./App"
import { Link } from "react-router-dom"
import { useContext } from "react"
import * as utils from "../Utils.jsx"
import "../styles/OrderConf.css"

function OrderConf(props) {

    const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext)

    function handleGoHomeClick() {
        props.setCartSubmitted(false)
        localStorage.clear()
        setShoppingCart([])
    }

    return (
        <div className="orderConf_container">
            <div className="orderConf_conf-container">
                <svg alt="orange circle with a white checkmark inside of it" className="orderConf_svg" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#D87D4A" cx="32" cy="32" r="32" /><path stroke="#FFF" strokeWidth="4" d="m20.754 33.333 6.751 6.751 15.804-15.803" /></g></svg>
                <h1 className="orderConf_title">thank you for your order</h1>
                <p className="orderConf_email-text">You will receive an email confirmation shortly.</p>

                <div className="orderConf_content-container">
                    <div className="orderConf_product-container">
                        <div className="orderConf_product-card">
                            <img alt="image of one of the products purchased" className="orderConf_product-img" src={shoppingCart[0].picture} />
                            <div className="orderConf_product-card-inner-container">
                                <div>
                                    <p className="orderConf_product-name">{shoppingCart[0].shortName}</p>
                                    <p className="orderConf_product-price">{utils.formatCurrency(shoppingCart[0].price)}</p>
                                </div>
                                <p className="orderConf_product-count">x{shoppingCart[0].count}</p>
                            </div>
                        </div>
                        {
                            shoppingCart.length > 1 ?
                                <div className="orderConf_additonal-item-count-container">
                                    <p className="orderConf_additonal-item-count">and {shoppingCart.length - 1} other item(s)</p>
                                </div>
                                :
                                <div className="orderConf_additonal-item-count-container">
                                    <p className="orderConf_additonal-item-count">and 0 other item(s)</p>
                                </div>
                        }
                    </div>

                    <div className="orderConf_grand-total-container">
                        <p className="orderConf_grand-total-text"> Grand total</p>
                        <p className="orderConf_grand-total-value"> {utils.formatCurrency(utils.calculateTotals(shoppingCart).grandTotal)}</p>
                    </div>
                </div>
                <Link alt="link to go back to the homepage" to="/"><button onClick={handleGoHomeClick} className="shared-btn-style-orange orderConf_btn"> back to home </button></Link>
            </div>
        </div>
    )
}

export default OrderConf