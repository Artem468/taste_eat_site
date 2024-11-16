import whitePrice from "./assets/whitePrice.png"
import burger from "./assets/burger.svg"
import blackPrice from "./assets/blackPrice.png"
import pizza from "./assets/pizza.svg"
import "./Offers.css"

function Offers() {
    return (
        <section className="Offers">
            <p className="OffersTitle">OFFERS</p>
            <p className="OffersUnderTitle">Our Offer dishes</p>
            <p className="OffersDescription">Our chefs create melt-in-your-mouth dishes that&#39;ll satiate even the fussiest eaters now the dishes are in offers use it based on hunger.</p>
            <div className="OffersFood">
                <div className="FoodItem">
                    <div>
                        <img className="price" src={whitePrice} alt=''/>
                        <div className="priceText burger">
                            <p>ONLY</p>
                            <p>$10</p>
                        </div>
                        <p className="saleOffer">50% Offer Going</p>
                        <p className="FoodName">Chicken Burger</p>
                        <p className="FoodDescription">Chicken burger with the tasty toppings and leaves.</p>
                    </div>
                    <div>
                        <img src={burger} alt=''/>
                    </div>
                </div>
                <div className="FoodItem">
                    <div>
                        <img className="price" src={blackPrice} alt=''/>
                        <div className="priceText pizza">
                            <p>ONLY</p>
                            <p>$9</p>
                        </div>
                        <p className="saleOffer">50% Offer Going</p>
                        <p className="FoodName">Chicken Pizza</p>
                        <p className="FoodDescription">Pizza with multiple flavor and the toping are mixed.</p>
                    </div>
                    <div>
                        <img src={pizza} alt=''/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offers;