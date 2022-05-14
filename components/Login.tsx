import { Button } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { auth, provider } from '../Firebase/firebase'

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider)
  }
  return (
    <div className="grid h-screen w-screen place-items-center overflow-hidden">
      <Head>
        <title>Login</title>
        <link
          rel="icon"
          href="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
        />
      </Head>
      <div className="flex flex-col items-center space-y-6">
        <Image src={'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png'} height={120} width={300} />
        <Button variant="contained" onClick={() => signIn()}>
          Login With Google
        </Button>
      </div>
    </div>
  )
}

export default Login
