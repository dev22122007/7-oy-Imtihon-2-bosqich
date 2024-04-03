import {Link} from "react-router-dom"
import { useEffect } from "react"
import data from "../data.json"
import CategoryList from "./CategoryList"
import ProductHighlights from "./ProductHighlights"
import CompanyAbout from "./CompanyAbout"
import "../styles/Homepage.css"

function Homepage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
        <div>
            <section className="homepage_main-img-container">
                <div alt="image of a pair of headphones with a black background" className="homepage_main-img"> </div>
                <div className="homepage_main-img-text-container">
                    <h2 className="homepage_main-img-subtitle"> new product </h2>
                    <h1 className="homepage_main-img-title"> XX99 mark II <br/> headphones </h1>
                    <p className="homepage_main-img-desc"> Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast. </p>
                    <Link to="/ProductList/ProductDetail" state={provideProductInfo("XX99 Mark II Headphones")}> 
                        <button className="homepage_main-img-btn shared-btn-style-orange"> see product </button>
                    </Link>
                </div>
            </section>
            
            <div className="homepage_category-list-container">
                <CategoryList />
            </div>
            <ProductHighlights />
            <CompanyAbout />
        </div>
    )
}

export default Homepage