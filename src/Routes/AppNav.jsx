import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from '../App'
import SignIn from './SignIn'
import RetrievePassword from './RetrievePassword'

export default function AppNav() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/cadastro" element={<SignIn />} />
                <Route path="/recuperarsenha" element={<RetrievePassword />} />
            </Routes>
        </BrowserRouter>
    )
}
