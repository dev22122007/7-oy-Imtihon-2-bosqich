import * as utils from "../Utils.jsx"
import "../styles/CheckoutSummary.css"

function CheckoutSummary(props) {
    const shoppingCartData = props.shoppingCartData
    
    function renderSummaryElements() {
        let summaryElements = []
        for(let i = 0; i < shoppingCartData.length; i++) {
            summaryElements.push(
                <div className="checkoutSummary_product-container" key={i}>
                    <div className="checkoutSummary_product-container-inner">
                        <img alt=" pciture of item in checkout " className="checkoutSummary_product-img" src={`${shoppingCartData[i].picture}`}/>
                        <div>
                            <p className="checkoutSummary_name"> {shoppingCartData[i].shortName} </p>
                            <p className="checkoutSummary_price"> {utils.formatCurrency(shoppingCartData[i].price)}</p>
                        </div>
                    </div>
                    <p className="checkoutSummary_count"> x{shoppingCartData[i].count} </p>
                </div>
            )
        }
        return summaryElements
    }

    return (
        <section className="checkoutSummary_container">
            <h1 className="checkoutSummary_title">Summary</h1>
            {renderSummaryElements()}

            <div className="checkoutSummary_price-breakdown-container">
                <p className="checkoutSummary_breakdown-line-title">Total</p>
                <p className="checkoutSummary_breakdown-line-value">{utils.formatCurrency(utils.calculateTotals(shoppingCartData).total)}</p>
            </div>

            <div className="checkoutSummary_price-breakdown-container">
                <p className="checkoutSummary_breakdown-line-title">Shipping</p>
                <p className="checkoutSummary_breakdown-line-value">{utils.formatCurrency(utils.calculateTotals(shoppingCartData).shipping)}</p>
            </div>

            <div className="checkoutSummary_price-breakdown-container">
                <p className="checkoutSummary_breakdown-line-title">Vat (Included)</p>
                <p className="checkoutSummary_breakdown-line-value">{utils.formatCurrency(utils.calculateTotals(shoppingCartData).vat)}</p>
            </div>

            <div className="checkoutSummary_price-breakdown-container checkoutSummary_grand-total-container">
                <p className="checkoutSummary_breakdown-line-title">Grand Total</p>
                <p className="checkoutSummary_breakdown-line-value checkoutSummary_grand-total-text">{utils.formatCurrency(utils.calculateTotals(shoppingCartData).grandTotal)}</p>
            </div>
            <button type="submit" className="shared-btn-style-orange checkout_btn"> Continue & Pay </button>
        </section>
    )
}

export default CheckoutSummary