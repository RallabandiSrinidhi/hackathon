import { Link } from 'react-router-dom'

export default function Summary() {
  return (
    <div className="container">
      <h1>Summary</h1>
      <p>This is a hardcoded summary of the material.</p>
      <ul>
        <li>Important point one</li>
        <li>Important point two</li>
        <li>Important point three</li>
      </ul>
      <Link to="/home"><button className="secondary">Back</button></Link>
    </div>
  )
}
