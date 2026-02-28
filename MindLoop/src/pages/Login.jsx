import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [name, setName] = useState('')
  const [classYear, setClassYear] = useState('')
  const [course, setCourse] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // dummy, just navigate
    navigate('/home')
  }

  return (
    <div className="container">
      <h1>MindLoop Login</h1>
      <form onSubmit={handleLogin}>
        <label>Student Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Class</label>
        <input
          value={classYear}
          onChange={(e) => setClassYear(e.target.value)}
          required
        />
        <label>Course</label>
        <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
