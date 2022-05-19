import Head from 'next/head'
import Header from '../components/Header'
import Mails from '../components/Mails'
import Sidebar from '../components/Sidebar'
function sent() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Head>
        <title>Mail Drafts</title>
        <link rel="icon" href="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" />
      </Head>
      <main> 
        <Header/>
        <div className='flex'>
          <Sidebar/>
          <Mails sent />
        </div>
      </main>
      
    </div>
  )
}

export default sent