import React from 'react'
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <div>
          <p> This is a About Page</p>
          <p><Link to={"/"}>Back to home</Link> </p>
    </div>
  );
}

export default AboutPage
