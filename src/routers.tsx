import { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { isAuth } from './store/actions/AuthAction'
function Routers(auth: any) {
  const {dispatch} = auth
  useEffect(() => {
    if (localStorage.getItem('token')) {
      isAuth(dispatch)
    }
  },[])

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

const mapStateToProps = (state:any) => ({
  auth: state.authReducer.auth
});

export default connect(mapStateToProps)(Routers)