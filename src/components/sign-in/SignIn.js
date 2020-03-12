import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { loginUser } from '../../redux/actions/index'

import './SignIn.scss'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    setEmail('')
    setPassword('')
  }

  const dispatch = useDispatch()
  const googleClientId =
    '894226948730-9hc6svmh1ghekdn2ghvstel7p42u53td.apps.googleusercontent.com'

  const handleResponse = async response => {
    // console.log(response.tokenObj.id_token )
    let res = await axios.post(
      'http://localhost:2000/api/v1/users/google-authenticate',
      { id_token: response.tokenObj.id_token }
    )
    dispatch(loginUser(res.data))
    localStorage.setItem('token', JSON.stringify(res.data.token))
  }

  const { currentUser } = useSelector(state => state.user)

  if (!currentUser.name) {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            setEmail={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            setPassword={password}
            label="password"
            required
          />
          <CustomButton type="submit"> Sign in </CustomButton>
          <GoogleLogin
            clientId={googleClientId}
            buttonText="Login with Google"
            onSuccess={handleResponse}
            onFailure={handleResponse}
          />
        </form>
      </div>
    )
  }
  return (
    <>
      <p>Hello {currentUser.name}</p>
    </>
  )
}

export default SignIn
