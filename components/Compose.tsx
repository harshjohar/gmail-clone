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
      time: serverTimestamp()
    })
      .then(() => {
        router.push('/')
      })
      .catch((err) => console.log(err.message))
  }
  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <label htmlFor="to">To</label>
        <input
          type="text"
          name="to"
          placeholder="Recipients"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Compose
