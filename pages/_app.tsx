import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { auth } from '../Firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from '../components/Login'
import Loading from '../components/Loading'

function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return <Loading />
  }

  if (!user) {
    return <Login />
  }

  const AnyComponent = Component as any
  return <AnyComponent {...pageProps} />
}

export default MyApp
