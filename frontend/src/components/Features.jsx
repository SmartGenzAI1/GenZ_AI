import React from 'react'

const items = [
  {title: 'React + Vite', desc: 'Lightweight, fast dev experience and tiny build size.'},
  {title: 'FastAPI ready', desc: 'We include a small API client for integrating with your FastAPI backend.'},
  {title: 'Accessible', desc: 'Keyboard friendly, semantic HTML and good color contrast.'},
  {title: 'Responsive', desc: 'Mobile-first layout that adapts to all screen sizes.'}
]

export default function Features(){
  return (
    <section id="features" className="features container">
      <h3>Key Features</h3>
      <div className="grid">
        {items.map(i=> (
          <article key={i.title} className="card">
            <h4>{i.title}</h4>
            <p>{i.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
