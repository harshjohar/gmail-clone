import { ChevronLeft } from '@mui/icons-material'
import { Button } from '@mui/material'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../Firebase/firebase'

function Compose({ draft }: { draft?: any }) {
  const [user] = useAuthState(auth)
  const [email, setEmail] = useState(draft?draft.to:"")
  const [subject, setSubject] = useState(draft?draft.subject:"")
  const [message, setMessage] = useState(draft?draft.message:"")
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

  const handleDraft = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    addDoc(collection(db, 'drafts'), {
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
      <h2 className="my-4 text-3xl">{draft?"Edit draft":"Compose Mail"}</h2>
      <div
        className="absolute top-5 left-5 text-black"
        onClick={() => router.push('/')}
      >
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
          placeholder="Recipient"
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

        <button onClick={(e) => handleDraft(e)}>Save as draft</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Compose
