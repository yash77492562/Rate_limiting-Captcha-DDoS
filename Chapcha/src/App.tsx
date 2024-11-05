import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { Turnstile } from '@marsidev/react-turnstile'

function App() {
  const [token,setToken] = useState<string>('')
  return (
    <>
      <input placeholder='OTP'></input>
      <input placeholder='New password'></input>
      <Turnstile onSuccess={(token)=>{
        setToken(token)
      }} siteKey='0x4AAAAAAAXtEe2JIeAEUcjX' />
      <button onClick={()=>{
        axios.post("http://localhost:3000/reset-password",{
          email:"yashyadavpro@gmail.com",
          otp:"123456",
          token:token
        })
      }}>Update password</button>
    </>
  )
}

export default App
