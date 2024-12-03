import {Route, Routes} from "react-router-dom";
import HomePage from "./components/homePage/HomePage.tsx";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import MainContent from "./components/mainContent/MainContent.tsx";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/"} element={<MainContent/>}>
                    <Route index element={<HomePage/>}/>
                </Route>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App
