import { Button } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import Head from 'next/head'
import React from 'react'
import { auth, provider } from '../Firebase/firebase'

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider)
  }
  return (
    <div className="grid h-screen w-screen place-items-center overflow-hidden bg-red-400">
      <Head>
        <title>Login</title>
        <link
          rel="icon"
          href="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
        />
      </Head>
      <div className="">
        <Button variant="contained" onClick={() => signIn()}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
