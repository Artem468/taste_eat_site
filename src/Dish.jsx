import DishImages from "./assets/DishImage.svg"
import {DishData} from "./DishData.js";
import "./Dish.css"
import PropTypes from "prop-types";

function Dish() {
    return (
        <section className="Dishes">
            <div>
                <p>MENU</p>
                <p>Try Our Special dishes</p>
                <p>Every time you perfectly dine with us, it should happy for great inspired food in an environment
                    designed with individual touches unique to the local area.</p>
                <img src={DishImages} alt=''/>
                <button>See all dishes</button>
            </div>
            <div>
                {
                    DishData.map(
                        (item, index) =>
                            <DishesItem key={index} name={item.name} dishes={item.dishes}/>
                    )
                }
            </div>
        </section>
    )
}

function DishesItem({name, dishes}) {
    return (
        <datalist>
            <p id='dishesName'>{name}</p>
            <data>
                {
                    dishes.map(
                        (item, index) =>
                            <DishItem
                                key={index}
                                name={item.name}
                                image={item.image}
                                description={item.description}
                                price={item.price}
                            />
                    )
                }
            </data>
        </datalist>
    )
}


DishesItem.propTypes = {
    name: PropTypes.string,
    dishes: PropTypes.array
}

function DishItem({name, image, description, price}) {
    return (
        <div className="DishItem">
            <img src={image} alt=''/>
            <div>
                <p>{name}</p>
                <p>{description}</p>
            </div>
            <p>{price}</p>
        </div>

    )
}

DishItem.propTypes = {
    name: PropTypes.string,
    image: PropTypes.any,
    description: PropTypes.string,
    price: PropTypes.string
}

export default Dish