import { ShoppingCartContext } from "./App"
import { useContext, useState} from "react"
import { useNavigate} from "react-router-dom"
import OrderConf from "./OrderConf"
import CheckoutSummary from "./CheckoutSummary"
import "../styles/Checkout.css"

function Checkout() {

    const {shoppingCart} = useContext(ShoppingCartContext)
    const [paymentType, setPaymentType] = useState("e-money")
    const [cartSubmitted, setCartSubmitted] = useState(false)
    const navigate = useNavigate()


    function addDashesToPhoneNumber(event) {
        if (event.key != 'Backspace' && (event.target.value.length === 3 || event.target.value.length === 7)){
            event.target.value += '-';
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        setCartSubmitted(true)
    }

    return (
        <div>
            {
                cartSubmitted 
                ?
                <>
                    <div className="checkout_page-cover"></div>
                    <div> 
                        <OrderConf setCartSubmitted={setCartSubmitted} />
                    </div>
                </>
                :
                    <></>
            }
            <p onClick={() => navigate(-1)} className="checkout_go-back-text">Go Back</p>
           
            <form className="checkout_form" onSubmit={handleSubmit} >
                <section className="checkout_form-container">
                    <h1 className="checkout_title">Checkout</h1>
                    
                        <h2 className="checkout_section-title"> Billing Details </h2>
                        <div className="checkout_name-email-container">
                            <div className="checkout_input-container">
                                <label className="checkout_input-label"> Name</label>
                                <input alt="name input" required placeholder="Alexei Ward" className="checkout_input" />
                            </div>
                            <div className="checkout_input-container">
                                <label className="checkout_input-label"> Email Address </label>
                                <input type="email" alt="email"placeholder="alexei@mail.com" className="checkout_input"/>
                            </div>
                        </div>

                        <div className="checkout_input-container">
                            <label className="checkout_input-label"> Phone Number </label>
                            <input alt="phone number input" onChange={addDashesToPhoneNumber} maxLength="12" required type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="202-555-0136" className="checkout_input"/>
                        </div>


                        <h2 className="checkout_section-title">Shipping Info</h2>

                        <div className="checkout_input-container checkout_address-container">
                            <label className="checkout_input-label"> Your Address </label>
                            <input alt="address input" required placeholder="1137 Williams Avenue" className="checkout_input"/>
                        </div>

                        <div className="checkout_zipcode-city-container">
                            <div className="checkout_input-container">
                                <label className="checkout_input-label"> Zip Code </label>
                                <input alt="zip code input" inputMode="numeric" maxLength="5" placeholder="10001" className="checkout_input"/>
                            </div>

                            <div className="checkout_input-container">
                                <label className="checkout_input-label"> City </label>
                                <input alt="city input" required placeholder="New York" className="checkout_input"/>
                            </div>
                        </div>
                    
                        <div className="checkout_input-container">
                            <label className="checkout_input-label"> Country </label>
                            <input alt="country input" required placeholder="United States" className="checkout_input"/>
                        </div>

                        <h2 className="checkout_section-title"> Payment Details</h2>
                        <div className="checkout_input-container checkout_payment-method-container">
                            <label className="checkout_input-label"> Payment Method </label>
                            <div className="checkout_radio-btns-container">
                                <label className="checkout_radio-inner-container">
                                    <input alt="e money selection" onChange={() => setPaymentType("e-money")} defaultChecked name="payment-type" required type="radio" className="checkout_radio-input" />
                                    <p className="checkout_radio-label">e-Money</p>
                                </label>

                                <label className="checkout_radio-inner-container">
                                    <input alt="cash on delivery selection" onChange={() => setPaymentType("cash")} name="payment-type" required type="radio" className="checkout_radio-input"/>
                                    <p className="checkout_radio-label">Cash on Delivery</p>
                                </label>
                            </div>
                        </div>
                        {
                            paymentType === "e-money" 
                            ?
                            <div className="checkout_e-money-container">
                                <div className="checkout_input-container">
                                    <label className="checkout_input-label"> e-Money Number </label>
                                    <input alt="e money number input"  required inputMode="numeric" placeholder="238521993" maxLength="9" className="checkout_input"/>
                                </div>
                                <div className="checkout_input-container">
                                    <label className="checkout_input-label"> e-Money PIN </label>
                                    <input alt="e money pin input" required inputMode="numeric"  placeholder="6891" maxLength="4" className="checkout_input"/>
                                </div>
                            </div>
                            :
                            <div className="checkout_cash-option-container">
                                <img alt="image showing cash" className="checkout_cash-img" src="\assets\checkout\icon-cash-on-delivery.svg" />
                                <p className="checkout_cash-text"> The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                            </div>
                        }
                </section>
                <CheckoutSummary shoppingCartData={shoppingCart} />
            </form>
        </div>
    )
}

export default Checkout