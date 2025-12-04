import React from 'react'

export default function Hero(){
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h2 id="hero-title">Fast. Smart. Calm on Your Eyes.</h2>
          <p className="lede">GenZ AI — a lightweight, beautiful AI frontend built for creators and developers. Built with accessibility and performance in mind.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#chat">Try demo</a>
            <a className="btn" href="https://github.com/SmartGenzAI1/GenZ_AI">View on GitHub</a>
          </div>
        </div>
        <aside className="hero-mock" aria-hidden="true">
          <div className="mock-card">Sample chat UI mockup</div>
        </aside>
      </div>
    </section>
  )
}
