import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Flashcards() {
  const cards = [
    { front: 'Question A', back: 'Answer A' },
    { front: 'Question B', back: 'Answer B' },
    { front: 'Question C', back: 'Answer C' }
  ]
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const next = () => {
    setFlipped(false)
    setIdx((p)=> (p+1)%cards.length)
  }

  return (
    <div className="container">
      <h1>Flashcards</h1>
      <div
        onClick={()=>setFlipped((p)=>!p)}
        style={{
          border:'1px solid #ccc',
          padding:'2rem',
          textAlign:'center',
          cursor:'pointer',
          marginBottom:'1rem'
        }}
      >
        {flipped ? cards[idx].back : cards[idx].front}
      </div>
      <button onClick={next}>Next</button>
      <Link to="/home"><button className="secondary">Back</button></Link>
    </div>
  )
}
