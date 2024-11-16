import MainFrame from "./assets/MainFrame.svg"
import "./Welcome.css"

function Welcome() {
    return (
        <section className="Welcome">
            <div>
                <p>Welcome to Restaurant</p>
                <p>The people, food and the prime locations make the perfect place good friends & family to come together and have great time.</p>
                <button>View Menu</button>
            </div>
            <div>
                <img src={MainFrame} alt=''/>
            </div>
        </section>
    )
}

export default Welcome