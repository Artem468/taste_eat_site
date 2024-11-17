import logo from "./assets/logo.svg"
import facebook from "./assets/facebook.svg"
import inst from "./assets/inst.svg"
import pinterest from "./assets/pinterest.svg"
import twitter from "./assets/twitter.svg"
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div>
                <p className="TagTastEat">#TheTastEat</p>
                <div className="FooterLogo">
                    <img src={logo} alt=""/>
                    <p>Join our mailing list for updates, Get news & offers events.</p>
                </div>
                <div className="FooterImgs">
                    <div>
                        <img src={facebook} alt=""/>
                        <img src={inst} alt=""/>
                        <img src={pinterest} alt=""/>
                        <img src={twitter} alt=""/>
                    </div>
                </div>
            </div>

            <div>
                <div className="FooterContacts">
                    <p>Contact</p>
                    <p>5 Rue Dalou, 75015 Paris</p>
                    <p className="highlightText">+123 456 789</p>
                    <p className="highlightText">josefin@mail.com</p>
                </div>
                <div className="FooterEmail">
                    <input placeholder="Email"/>
                    <button>Subscribe</button>
                </div>
                <div className="WorkTime">
                    <p>WORKING HOURS</p>
                    <p><span>Mon – Fri:</span>7.00am – 6.00pm</p>
                    <p><span>Sat:</span>7.00am – 6.00pm</p>
                    <p><span>Sun:</span>8.00am – 6.00pm</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;