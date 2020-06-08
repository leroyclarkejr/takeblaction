import React from "react"
import { Link } from "gatsby"

class Jumplinks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
    this.toggleClass = this.toggleClass.bind(this)
  }

  toggleClass() {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  render() {
    return (
      <div id="jump-links">
        <Link to="/petitions/" className="main-link" activeClassName="active">
          <h3>Sign Petitions</h3>
        </Link>
        <Link to="/donations/" className="main-link" activeClassName="active">
          <h3>Donate</h3>
        </Link>
        <Link to="/books/" className="main-link" activeClassName="active">
          <h3>Books</h3>
        </Link>
        <Link to="/businesses/" className="main-link" activeClassName="active">
          <h3>Black Owned Businesses</h3>
        </Link>
        <Link
          to="/documentaries/"
          className="main-link"
          activeClassName="active"
        >
          <h3>Documentaries</h3>
        </Link>
        <Link to="/nonprofit/" className="main-link" activeClassName="active">
          <h3>Non Profit Organizations</h3>
        </Link>
        <Link to="/podcasts/" className="main-link" activeClassName="active">
          <h3>Podcasts</h3>
        </Link>
        <Link to="/social/" className="main-link" activeClassName="active">
          <h3>Social Media</h3>
        </Link>
      </div>
    )
  }
}

export default Jumplinks
