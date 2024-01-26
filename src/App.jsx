import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import "./index.css"
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<MainLayout/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App
