import {Link} from "react-router-dom"
import fullData from "../data.json"
import "../styles/ProductCardMini.css"

function ProductCardMini(props) {
    const data = props.data

    //// finds data of the "other items" in the JSON data given a name
    function findOtherItemData(shortName) {
        let foundData
        for(let i = 0; i < fullData.length; i++) {
            if (fullData[i].shortName === shortName) {
                foundData = fullData[i]
            }
        }
        return foundData
    }

    function renderMiniProductCardElements() {
        let miniProductCardElements = []
        for(let i = 0; i < data.others.length; i++) {
            miniProductCardElements.push(
                <section key={i} className="productCardMini">
                    <div className="productCardMini_img-background">
                        <div alt="image of product" className="productCardMini_img" style={{backgroundImage: `url(.${data.others[i].image.desktop})`}}> </div>
                    </div>
                    <h1 className="productCardMini_name"> {data.others[i].name}</h1>
                    <Link alt="link to more info on the product" to={"/ProductList/ProductDetail"} state={findOtherItemData(data.others[i].name)}><button className="shared-btn-style-orange"> see product </button></Link>
                </section>
            )
        }
        return miniProductCardElements
    }
    
    return (
        <div className="productCardMini_container">
            <h2 className="productCardMini_card-title">you may also like</h2>
            <div className="productCardMini_card-container">
                {renderMiniProductCardElements()}
            </div>
        </div>
        
    )
}

export default ProductCardMini