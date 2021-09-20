import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
// import Footer from '../components/Footer'

export default function CookieStandAdmin() {

  return (
    <div className="bg-green-50">
      
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main />

    </div>
  )
}