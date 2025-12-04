import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Chat from './components/Chat'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <Features />
        <Chat />
      </main>
      <Footer />
    </div>
  )
}
