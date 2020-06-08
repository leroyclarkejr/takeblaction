import React from "react"
import { Link } from "gatsby"

class Jumplinks extends React.Component {
  constructor(props) {
    super(props)
    this.state = ""
  }

  render() {
    return (
      <div id="jump-links">
        <Link to="/petitions/" className="main-link">
          <h3>Petitions</h3>
        </Link>
        <Link to="/donations/" className="main-link">
          <h3>Donate</h3>
        </Link>
        <Link to="/books/" className="main-link">
          <h3>books</h3>
        </Link>
        <Link to="/businesses/" className="main-link">
          <h3>businesses</h3>
        </Link>
        <Link to="/documentaries/" className="main-link">
          <h3>Documentaries</h3>
        </Link>
        <Link to="/nonprofit/" className="main-link">
          <h3>Nonprofit</h3>
        </Link>
        <Link to="/podcasts/" className="main-link">
          <h3>Podcasts</h3>
        </Link>
        <Link to="/social/" className="main-link">
          <h3>Social Media</h3>
        </Link>
      </div>
    )
  }
}

export default Jumplinks
