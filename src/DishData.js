import dish1 from "./assets/dish/dish1.svg"
import dish2 from "./assets/dish/dish2.svg"
import dish3 from "./assets/dish/dish3.svg"
import dish4 from "./assets/dish/dish4.svg"
import dish5 from "./assets/dish/dish5.svg"
import dish6 from "./assets/dish/dish6.svg"
import dish7 from "./assets/dish/dish7.svg"
import dish8 from "./assets/dish/dish8.svg"
import dish9 from "./assets/dish/dish9.svg"
import dish10 from "./assets/dish/dish10.svg"

export const DishData = [
    {
        name: "Starters",
        dishes: [
            {
                name: "Raw Scallops from Erquy",
                description: "Shuck the scallop to that used for oysters",
                image: dish1,
                price: "$40"
            },
            {
                name: "Spring Roll",
                description: "Add oil to a hot pan spring onion whites",
                image: dish2,
                price: "$20"
            },
            {
                name: "French Onion Soup",
                description: "Wheat flour, apple cider vinegar, bread",
                image: dish3,
                price: "$25"
            },
            {
                name: "Tomato Bruschetta",
                description: "Bread, olive oil, garlic, black pepper",
                image: dish4,
                price: "$30"
            }
        ]
    },
    {
        name: "Main Dish",
        dishes: [
            {
                name: "Grilled Salmon with Dill Sauce",
                description: "Brown sugar, salmon fillet, Dijon mustard",
                image: dish5,
                price: "$40"
            },
            {
                name: "Roast Beef with Vegetable",
                description: "Green beans, rib eye, olive oil, beef",
                image: dish6,
                price: "$20"
            },
            {
                name: "Marrkesh Vegetetarian Curruy",
                description: "Sweet potato, eggplant, garbanzo bean",
                image: dish7,
                price: "$25"
            },
            {
                name: "Spicy Vegan Potato Curry",
                description: "Coconut milk, beans, potatoes, curry powder",
                image: dish8,
                price: "$35"
            }
        ]
    },
    {
        name: "Dessert",
        dishes: [
            {
                name: "Apple Pie with Cream",
                description: "Whipping cream, egg white, cinnamon",
                image: dish9,
                price: "$15"
            },
            {
                name: "Lemon Meringue Pie",
                description: "Frozen pie crust, meringue, lemon",
                image: dish10,
                price: "$30"
            }
        ]
    }
]