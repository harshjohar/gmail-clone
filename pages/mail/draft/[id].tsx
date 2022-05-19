import { doc, getDoc } from 'firebase/firestore'
import Head from 'next/head'
import React from 'react'
import Compose from '../../../components/Compose'
import { db } from '../../../Firebase/firebase'

function mailInfo({ mailData }: { mailData: any }) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Head>
        <title>Draft | {mailData.subject}</title>
        <link
          rel="icon"
          href="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
        />
      </Head>
      <Compose draft={mailData} />
    </div>
  )
}

export default mailInfo

export async function getServerSideProps(context: any) {
  const docRef = doc(db, 'drafts', context.query.id)
  const mailRef = await getDoc(docRef)
  const mailData = {
    ...mailRef.data(),
    id: mailRef.id,
    time: mailRef.data()!.time.toDate().getTime(),
  }

  return {
    props: {
      mailData,
    },
  }
}
