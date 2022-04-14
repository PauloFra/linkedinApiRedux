import { setgroups, setuid } from 'process'
import {useEffect} from 'react'
import api from '../../api'
import axios from 'axios';
function Login() {
  
async function setup() {
   
   try{
    const values = {
      grant_type:"client_credentials",
      client_id:"782lqkjjev09jc",
      client_secret:"HokZAQuRL1fuQMGT"

    }
        const {data} = await api.post('/oauth/v2/accessToken' , values)
        console.log(data);
    }
    catch(error){
      console.log(error);
      
    }
    
  }

useEffect(()=>{
  setup()
},[])

  return (
    <div>Login</div>
  )
}

export default Login