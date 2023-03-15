import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import ChannelBar from '@/components/ChannelBar'
import Chat from '@/components/Chat'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ChannelBar />
      <Chat />
      <Sidebar />
    </>
  )
}
