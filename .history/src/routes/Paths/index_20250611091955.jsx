import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../../SiteLayout";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Account from "../../pages/Account";
import About from "../../pages/About";
import  from "../../pages/Account";
import Contact from "../../pages/Contact";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/account" element={<Account/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/mangas" element={<Mangas/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;