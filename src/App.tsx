import {Route, Routes} from "react-router-dom";
import HomePage from "./components/homePage/HomePage.tsx";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import MainContent from "./components/mainContent/MainContent.tsx";
import GlobalProvider from "./context/GlobalContext.tsx";
import CartPage from "./components/cartPage/CartPage.tsx";
import ProductPage from "./components/productPage/ProductPage.tsx";

function App() {
    return (
        <div>
            <GlobalProvider>
                <Header/>
                <Routes>
                    <Route path={"/ebs-fe-test/"} element={<MainContent/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path={"cart"} element={<CartPage/>}/>
                        <Route path={"product/:id"} element={<ProductPage/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </GlobalProvider>
        </div>
    )
}

export default App
