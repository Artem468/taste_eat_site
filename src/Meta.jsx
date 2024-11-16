import Reservation from "./assets/Reservation.svg"
import OpenHours from "./assets/OpenHours.svg"
import LocateUs from "./assets/LocateUs.svg"
import MetaImage from "./assets/MetaImage.svg"
import painting from "./assets/painting.svg"
import "./Meta.css"

function Meta() {
    return (
        <section className="Meta">
            <datalist>
                <data>
                    <img src={LocateUs} alt=''/>
                    <div>
                        <p>Locate Us</p>
                        <p>Riverside 25, San Diego, California</p>
                    </div>
                </data>
                <data>
                    <img src={OpenHours} alt=''/>
                    <div>
                        <p>Open Hours</p>
                        <p>Mon To Fri 9:00 AM - 9:00 PM</p>
                    </div>
                </data>
                <data>
                    <img src={Reservation} alt=''/>
                    <div>
                        <p>Reservation</p>
                        <p>restaurantate@gmail.com</p>
                    </div>
                </data>
            </datalist>
            <section>
                <div>
                    <img src={MetaImage} alt=''/>
                </div>
                <div className='MetaText'>
                    <div>
                        <p>The Delicious Story</p>
                        <p>The people, food and the prime locations make the perfect place for the friends & family to
                            come together and have great time.</p>
                    </div>
                    <div>
                        <p>2018</p>
                        <p>Plan for this restaurant to deliver healthy food.</p>
                    </div>
                    <div>
                        <p>2022</p>
                        <p>Happily in the fourth year by fulfill the motto.</p>
                    </div>
                    <div>
                        <p>JOSEFINE</p>
                        <img src={painting} alt=''/>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Meta