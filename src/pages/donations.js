import React from "react"
import Layout from "../components/layout"

class Donate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { output: "Making sure things are up to date!" }
  }

  componentDidMount() {
    fetch(
      "https://script.google.com/macros/s/AKfycbysa1LMXQQQGOb7uYzmVZkF4IQLP9F7oYYiCM4QPnXE_I94COM/exec"
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        let donation = data.donations.map(value => {
          console.log(value)
          return (
            <div className="data">
              <a href={value[1]}>{value[0]}</a>
            </div>
          )
        })
        this.setState({ output: donation })
      })
  }

  render() {
    return (
      <Layout>
        <div id="data-container">{this.state.output}</div>
      </Layout>
    )
  }
}

export default Donate
