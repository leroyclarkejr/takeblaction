import React from "react"
import Layout from "../components/layout"

class Petitions extends React.Component {
  constructor(props) {
    super(props)
    this.state = { output: "...loading" }
  }

  componentDidMount() {
    fetch(
      "https://script.google.com/macros/s/AKfycbysa1LMXQQQGOb7uYzmVZkF4IQLP9F7oYYiCM4QPnXE_I94COM/exec"
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        let petition = data.posts.map(val => {
          console.log(val)
          return <div>{val}</div>
        })
        this.setState({ output: petition })
      })
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <a href="https://google.com">{this.state.output}</a>
        </div>
      </Layout>
    )
  }
}

export default Petitions
