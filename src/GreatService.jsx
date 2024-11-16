import calendar from "./assets/calendar.svg"
import menu from "./assets/menu.svg"
import bike from "./assets/bike.svg"
import "./GreatService.css"

function GreatService() {
    return (
        <section className="GreatService">
            <div className="GreatServiceText">
                <p>WHAT WE OFFER</p>
                <p>Our Great Services</p>
                <p>The atmosphere set the stage. It’s about more than just a dining room away from your home. food takes the spotlight as guests.</p>
            </div>
            <div className="GreatServicePictures">
                <div>
                    <img src={calendar} alt=""/>
                    <p>Opened 24/7</p>
                </div>
                <div>
                    <img src={menu} alt=""/>
                    <p>Special Menus</p>
                </div>
                <div>
                    <img src={bike} alt=""/>
                    <p>Home Delivery</p>
                </div>
            </div>
        </section>
    )
}

export default GreatService;