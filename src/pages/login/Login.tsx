import {connect} from 'react-redux'
import {useEffect} from 'react'
import api from '../../api'
import { AuthLogin } from '../../store/actions/AuthAction'
function Login(auth: any) {
  
  const {dispatch} = auth;

  return (
    <div>
      <button type='button' onClick={() => AuthLogin(dispatch)}>Logar</button>
    </div>
  )
}

const mapStateToProps = (state:any) => ({
  auth: state.authReducer.auth
});


export default connect(mapStateToProps)(Login)