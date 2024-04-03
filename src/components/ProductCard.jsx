import {Link} from "react-router-dom"
import "../styles/ProductCard.css"

function ProductCard(props) {
    const data = props.data
    const shortProductName = data.name.substring(0, data.name.lastIndexOf(" "))
    let flexOrderImage
    let flexOrderText

    function decideFlexOrder() {
        if ((props.itemNum % 2) === 1) {
            flexOrderImage = 1
            flexOrderText = 2
        }else {
            flexOrderImage = 2
            flexOrderText = 1
        }
    }
    
    decideFlexOrder()

    return (
        <section className="productCard">
            <div className="productCard_img-background" style={{order: flexOrderImage}}>
                <div alt="image of product in current category" className="productCard_img" style={{backgroundImage: `url(${data.image.desktop})`}}> </div>
            </div>
            <div className="productCard_content-container" style={{order: flexOrderText}}>
                <p className="productCard_new-product"> {data.new ? "new product" : ""} </p>
                <h1 className="productCard_name"> {shortProductName}<br></br> {data.category} </h1>
                <p className="productCard_desc"> {data.description} </p>
                <Link alt="link to see more about the product" to="/ProductList/ProductDetail" state={data}> <button className="productCard_btn-link shared-btn-style-orange">see product</button> </Link>
            </div>
        </section>
    )
}

export default ProductCard