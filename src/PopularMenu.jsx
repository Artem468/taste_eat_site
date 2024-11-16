import manjoori from "./assets/Manjoori.svg"
import hotdog from "./assets/Hotdog.svg"
import salmon from "./assets/Salmon.svg"
import vegBurger from "./assets/vegBurger.svg"

import "./PopularMenu.css"

function PopularMenu() {
    return (
        <section className="PopularMenu">
            <p className="PopularMenuTitle">MENU</p>
            <p className="PopularMenuUnderTitle">Popular Dishes</p>
            <p className="PopularMenuDescription">There is a game between the waiters in restaurant to see who serves the food to each table fastest. That led to attempting the Guinness Record.</p>
            <div className="PopularMenuItems">
                <div className="PopularMenuItem">
                    <img src={manjoori} alt=""/>
                    <div>
                        <p>Chicken Manjoori</p>
                        <p>$15</p>
                    </div>
                    <hr/>
                    <p className="PopularMenuItemDesc">Dish relished by all age groups as a starter dish at parties.</p>
                </div>
                <div className="PopularMenuItem">
                    <img src={hotdog} alt=""/>
                    <div>
                        <p>Hotdog</p>
                        <p>$10</p>
                    </div>
                    <hr/>
                    <p className="PopularMenuItemDesc">Grilled sausage served in the slit of a partially sliced bun.</p>
                </div>
                <div className="PopularMenuItem">
                    <img src={salmon} alt=""/>
                    <div>
                        <p>Fresh Salmon</p>
                        <p>$5</p>
                    </div>
                    <hr/>
                    <p className="PopularMenuItemDesc">Beat the health blues with our Super Immune Blue Juice Recipe.</p>
                </div>
                <div className="PopularMenuItem">
                    <img src={vegBurger} alt=""/>
                    <div>
                        <p>Veg Burger</p>
                        <p>$10</p>
                    </div>
                    <hr/>
                    <p className="PopularMenuItemDesc">Burgers may be made from ingredients like beans.</p>
                </div>
            </div>
            <a href="">See all dishes</a>
        </section>
    )
}

export default PopularMenu;