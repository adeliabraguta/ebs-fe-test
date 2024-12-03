import {Route, Routes} from "react-router-dom";
import HomePage from "./components/homePage/HomePage.tsx";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import MainContent from "./components/mainContent/MainContent.tsx";
import GlobalProvider from "./context/GlobalContext.tsx";

function App() {
    return (
        <div>
            <GlobalProvider>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<MainContent/>}>
                        <Route index element={<HomePage/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </GlobalProvider>
        </div>
    )
}

export default App
