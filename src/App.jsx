import './App.css'
import Header from "./Header.jsx";
import Welcome from "./Welcome.jsx";
import Meta from "./Meta.jsx";
import Dish from "./Dish.jsx";
import ClientsSay from "./ClientsSay.jsx";
import Offers from "./Offers.jsx";
import PopularMenu from "./PopularMenu.jsx";
import GreatService from "./GreatService.jsx";
import ReadNews from "./ReadNews.jsx";
import BookTable from "./BookTable.jsx";
import Footer from "./Footer.jsx";


function App() {
    return (
        <>
            <Header/>
            <Welcome/>
            <Meta/>
            <Dish/>
            <ClientsSay/>
            <Offers/>
            <PopularMenu/>
            <GreatService/>
            <ReadNews/>
            <BookTable/>
            <Footer/>
        </>
    )
}

export default App
