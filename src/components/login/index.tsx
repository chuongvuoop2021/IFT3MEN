import React from 'react'
import { GoogleLogin } from 'react-google-login'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { loginUser } from '../../redux/actions/index'

export default function Login() {
  const dispatch = useDispatch()
  const googleClientId =
    '894226948730-9hc6svmh1ghekdn2ghvstel7p42u53td.apps.googleusercontent.com'

  const handleResponse = async (response: any) => {
    // console.log(response.tokenObj.id_token )
    let res = await axios.post(
      'http://localhost:2000/api/v1/users/google-authenticate',
      { id_token: response.tokenObj.id_token }
    )
    dispatch(loginUser(res.data))
    localStorage.setItem('token', JSON.stringify(res.data.token))
  }
  return (
    <>
      <GoogleLogin
        clientId={googleClientId}
        buttonText="Login with Google"
        onSuccess={handleResponse}
        onFailure={handleResponse}
      />
    </>
  )
}
