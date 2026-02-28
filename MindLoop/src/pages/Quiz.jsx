import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Quiz() {
  const questions = [
    {
      q: 'What is 1+1?',
      options: ['1','2','3'],
      answer: 1
    },
    {
      q: 'Color of sky?',
      options: ['blue','green','red'],
      answer: 0
    },
    {
      q: 'React is a __',
      options: ['library','language','tool'],
      answer: 0
    }
  ]
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(null)

  const handleChange = (qi, idx) => {
    setAnswers(prev => ({ ...prev, [qi]: idx }))
  }
  const handleSubmit = () => {
    let s=0
    questions.forEach((q,i)=>{ if(answers[i]===q.answer) s++ })
    setScore(s)
  }

  return (
    <div className="container">
      <h1>Quiz</h1>
      {questions.map((q,i)=>(
        <div key={i} style={{marginBottom:'1rem'}}>
          <p>{q.q}</p>
          {q.options.map((opt,oi)=>(
            <label key={oi} style={{display:'block'}}>
              <input
                type="radio"
                name={`q${i}`}
                onChange={()=>handleChange(i,oi)}
              /> {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {score!==null && <p>Your score: {score}/{questions.length}</p>}
      <Link to="/home"><button className="secondary">Back</button></Link>
    </div>
  )
}
