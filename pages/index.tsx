import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Head>
        <title>Gmail Clone | Harshjohar</title>
        <link rel="icon" href="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" />
      </Head>
      <main> 
        <Header/>
        <div className='flex'>
          <Sidebar/>
        </div>
      </main>
      
    </div>
  )
}

export default Home
