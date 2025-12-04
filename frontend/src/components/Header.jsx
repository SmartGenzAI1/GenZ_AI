import React from 'react'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <img src="/static/logo.png" alt="GenZ AI" className="logo"/>
          <div>
            <h1>GenZ AI</h1>
            <p className="subtitle">Fast · Smart · Calm on your eyes</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#chat">Chat</a>
          <a href="#contact">Contact</a>
          <a className="cta" href="#">Get Started</a>
        </nav>
      </div>
    </header>
  )
}
