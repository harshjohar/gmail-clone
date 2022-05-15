import { ChevronLeft } from '@mui/icons-material'
import { Button } from '@mui/material'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../Firebase/firebase'

function Compose() {
  const [user] = useAuthState(auth)
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addDoc(collection(db, 'mails'), {
      from: user?.email,
      to: email,
      subject,
      message,
      time: serverTimestamp(),
    })
      .then(() => {
        router.push('/')
      })
      .catch((err) => console.log(err.message))
  }
  return (
    <div className="relative flex w-full flex-col items-center">
      <h2 className="my-4 text-3xl">Compose Mail</h2>
      <div className="absolute top-5 left-5 text-black" onClick={()=>router.push('/')}>
        <Button color="inherit">
          <ChevronLeft color="inherit" />
        </Button>
      </div>
      <form
        onSubmit={(e) => submitForm(e)}
        className="flex w-3/5 flex-col space-y-5"
      >
        <input
          type="text"
          name="to"
          placeholder="Recipients"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-b border-gray-400 py-4  outline-none"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border-b border-gray-400 py-4  outline-none"
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message here.."
          className="h-72 break-words break-all border-b py-4 outline-none"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Compose
