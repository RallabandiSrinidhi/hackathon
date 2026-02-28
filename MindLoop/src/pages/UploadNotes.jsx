import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function UploadNotes() {
  const [fileName, setFileName] = useState('')

  const handleChange = (e) => {
    const f = e.target.files[0]
    if (f) setFileName(f.name)
  }

  return (
    <div className="container">
      <h1>Upload Notes</h1>
      <input type="file" accept="application/pdf" onChange={handleChange} />
      {fileName && <p>Uploaded: {fileName}</p>}
      <Link to="/home"><button className="secondary">Back</button></Link>
    </div>
  )
}
