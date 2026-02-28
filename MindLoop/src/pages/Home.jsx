import { useNavigate, Link } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <h1>Welcome to MindLoop</h1>
      <div className="nav">
        <Link to="/upload">Upload Notes</Link>
        <Link to="/summary">Summary</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/flashcards">Flashcards</Link>
      </div>
      <p>Select a feature above to continue.</p>
    </div>
  )
}
