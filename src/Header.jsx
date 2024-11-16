import logo from "./assets/logo.svg"
import facebook from "./assets/facebook.svg"
import inst from "./assets/inst.svg"
import pinterest from "./assets/pinterest.svg"
import twitter from "./assets/twitter.svg"
import "./Header.css"

function Header() {
    return (
        <header>
            <section>
                <button>Call - 123 456 789</button>
                <img src={logo} alt=""/>
                <button>Reservation</button>
            </section>
            <hr/>
            <nav>
                <div>
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Our Menu</a>
                    <a href="">Pages</a>
                    <a href="">Blog</a>
                    <a href="">Contact Us</a>
                </div>
                <div>
                    <a href=""><img src={inst} alt=''/></a>
                    <a href=""><img src={facebook} alt=''/></a>
                    <a href=""><img src={twitter} alt=''/></a>
                    <a href=""><img src={pinterest} alt=''/></a>
                </div>
            </nav>
        </header>
    )
}

export default Header