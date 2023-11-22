import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home"
import NavBarComponent from "../components/NavBarComponent/NavBarComponents";

const MainRoutes = () => {
    return (
        <BrowserRouter>
          <NavBarComponent/>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes