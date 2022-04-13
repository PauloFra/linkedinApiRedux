import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
function Routers() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile /> } />
        </Routes>
        <Footer />
    </BrowserRouter>
    
  )
}

export default Routers