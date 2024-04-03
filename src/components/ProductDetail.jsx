import * as utils from "../Utils.jsx"
import { useLocation, useNavigate} from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import {ShoppingCartContext} from "./App.jsx"
import CategoryList from "./CategoryList"
import CompanyAbout from "./CompanyAbout"
import ProductCardMini from "./ProductCardMini"
import "../styles/ProductDetail.css"

function ProductDetail() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const [productCount, setProductCount] = useState(1)
    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext)
    const navigate = useNavigate()

    const location = useLocation()
    const data = location.state
    
    const shortProductName = data.name.substring(0, data.name.lastIndexOf(" "))
    const featureTextFirstHalf = data.features.match(/^(.*)(.{3})/).slice(1).join('')
    const featureTextSecondHalf = data.features.replace(featureTextFirstHalf, "")

    let price = utils.formatCurrency(data.price)

    useEffect(() => {
        setProductCount(1)
    }, [data])

    function increaseProductCount() {
        setProductCount(prevState => prevState + 1)
    }

    function decreaseProductCount() {
        if (productCount > 1) {
            setProductCount(prevState => prevState - 1)
        }
    }

   function handleAddToCart() {
        
        if (checkForItemInCart().itemFound) {
            let newCount = productCount + checkForItemInCart().previousCount

            setShoppingCart(prevState => prevState.filter((_, i) => i === checkForItemInCart.itemIndex))
            setShoppingCart(prevState => {
                return (
                    [
                        ...prevState,
                        {
                            "name": data.name,
                            "shortName": data.shortName,
                            "price": data.price,
                            "picture": data.image.mobile,
                            "count": newCount
                        }
                    ]
                )
            })

        }else {
            setShoppingCart(prevState => {
                return (
                 [
                     ...prevState,
                     {
                         "name": data.name,
                         "shortName": data.shortName,
                         "price": data.price,
                         "picture": data.image.mobile,
                         "count": productCount
                     }
                 ]
                ) 
            })
        }
    }

    function checkForItemInCart() {
        let itemFound = false
        let itemIndex
        let previousCount
        for(let i = 0; i < shoppingCart.length; i++) {
            if (shoppingCart[i].name === data.name) {
                itemIndex = i
                itemFound = true
                previousCount = shoppingCart[i].count
            }
        }
        return {itemFound, itemIndex, previousCount}
    }

    function renderInTheBoxElements() {
        let inTheBoxElements = []
        for(let i = 0; i < data.includes.length; i++) {
            inTheBoxElements.push(
                <div key={i} className="productDetail_in-box-inner-container">
                    <p className="productDetail_in-box-quantity">{data.includes[i].quantity}x</p>
                    <p className="productDetail_in-box-item">{data.includes[i].item}</p>
                </div>
            )
        }
        return inTheBoxElements
    }

    return (
        <section className="productDetail">
            <p onClick={() => navigate(-1)} className="productDetail_go-back-text">Go Back</p>
            
            <div className="productDetail_upper-section-container">
                <div className="productDetail_product-img-background">
                    <div alt={`image of ${data.name}`} className="productDetail_product-img" style={{backgroundImage: `url(.${data.image.desktop})`}}> </div>
                </div>
                <div className="productDetail_product-main-info">
                    <p className="productDetail_new-product">{data.new ? "new product" : ""}</p>
                    <h2 className="productDetail_name">{shortProductName}<br></br> {data.category}</h2>
                    <p className="productDetail_desc">{data.description}</p>
                    <p className="productDetail_price">{price}</p>
                    <div className="productDetail_count-cart-container">
                        <div className="productDetail_plus-minus-container">
                            <button onClick={decreaseProductCount} className="productDetail_minus">-</button>
                            <p className="productDetail_product-count">{productCount}</p>
                            <button onClick={increaseProductCount} className="productDetail_plus">+</button>
                        </div>
                        <button onClick={handleAddToCart} className="shared-btn-style-orange"> add to cart </button>
                    </div>
                </div>
            </div>
            
            <div className="productDetail_features-in-box-container">
                <div className="productDetail_features-container">
                    <h2 className="productDetail_features-title"> Features </h2>
                    <p className="productDetail_features-text"> {featureTextFirstHalf}</p>
                    <p className="productDetail_features-text">{featureTextSecondHalf}</p>
                </div>

                <div className="productDetail_in-the-box-container">
                    <h2 className="productDetail_in-box-title">in the box</h2>
                    <div className="productDetail_in-box-outer-container">
                        {renderInTheBoxElements()}
                    </div>
                </div>
            </div>

            <div className="productDetail_extra-img-container">
                <div className="productDetail_extra-img-inner-container">
                    <img alt="image showing off the product in everyday life" src={`.${data.gallery.first.mobile}`} className="productDetail_extra-img" />
                    <img alt="image showing off the product in everyday life" src={`.${data.gallery.second.mobile}`} className="productDetail_extra-img" />
                </div>
                <img alt="image showing off the product in everyday life" src={`.${data.gallery.third.mobile}`} className="productDetail_extra-img productDetail_extra-img-right"/>
            </div>

            <ProductCardMini data={data} />
            <CategoryList />
            <CompanyAbout />
        </section>
    )
}

export default ProductDetail