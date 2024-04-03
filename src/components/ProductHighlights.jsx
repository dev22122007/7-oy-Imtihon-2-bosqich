import {Link} from "react-router-dom"
import data from "../data.json"
import "../styles/ProductHighlights.css"

function ProductHighlights() {

    function provideProductInfo(givenName) {
        let productData
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === givenName) {
                productData = data[i]
            }
        }
        return productData
    }

    return (
        <section className="productHighlights_container">

            <div className="productHighlights_product-one">
                <img alt="image of the zx9 speaker" className="productHighlights_product-one-img" src="/assets/home/desktop/image-speaker-zx9.png"/>
                <div className="productHighlights_product-one-text-container">
                    <h2 className="productHighlights_product-one-title"> zx9 <br></br> speaker </h2>
                    <p className="productHighlights_product-one-desc"> Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound. </p>
                    <Link to="/ProductList/ProductDetail" state={provideProductInfo("ZX9 Speaker")}> <button className="productHighlights_product-one-btn"> see product </button>  </Link>
                </div>
            </div>
            <div className="productHighlights_image-cover"></div>

            <div alt="image of the zx7 speaker" className="productHighlights_product-two">
                <h1 className="productHighlights_product-two-title"> zx7 speaker</h1>
                <Link to="/ProductList/ProductDetail" state={provideProductInfo("ZX7 Speaker")}> <button className="productHighlights_product-two-btn"> see product </button></Link>
            </div>

            <div className="productHighlights_product-three">
                <div alt="image of the yx1 earphones" className="productHighlights_product-three-img" ></div>
                <div className="productHighlights_product-three-text-container">
                    <h2 className="productHighlights_product-three-title"> yx1 earphones</h2>
                    <Link to="/ProductList/ProductDetail" state={provideProductInfo("YX1 Wireless Earphones")}> <button className="productHighlights_product-three-btn"> see product </button></Link>
                </div>
            </div>

        </section>
    )
}

export default ProductHighlights