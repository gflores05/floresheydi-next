import Footer from '@components/Footer'
import Header from '@components/Header'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { ReactNode } from 'react'

const Flowers = dynamic(() => import('@components/Flowers'), { ssr: false })

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Arreglos Florales Heydi</title>
        <meta name="description" content="Arreglos florales Heydi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flowers />
      <Header />
      <div id="main">
        <div className="inner">{children}</div>
      </div>
      <Footer />
    </>
  )
}
