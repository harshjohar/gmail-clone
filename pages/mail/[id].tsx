import { doc, getDoc } from 'firebase/firestore'
import Head from 'next/head'
import React from 'react'
import Header from '../../components/Header'
import MailPage from '../../components/MailPage'
import Sidebar from '../../components/Sidebar'
import { db } from '../../Firebase/firebase'

function mailInfo({ mailData }: { mailData: any }) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Head>
        <title>{mailData.subject}</title>
        <link
          rel="icon"
          href="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
        />
      </Head>
      <main>
        <Header />
        <div className="flex">
          <Sidebar />
          <MailPage mailData={mailData} />
        </div>
      </main>
    </div>
  )
}

export default mailInfo

export async function getServerSideProps(context: any) {
  const docRef = doc(db, 'mails', context.query.id)
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
