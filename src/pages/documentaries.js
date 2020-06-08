import React from "react"
import Layout from "../components/layout"

class Documentaries extends React.Component {
  constructor(props) {
    super(props)
    this.state = { output: "Making sure things are up to date!" }
  }

  componentDidMount() {
    fetch(
      "https://script.google.com/macros/s/AKfycbwkigQInS7P-ETReftDOC-ei4MfZuhb7Ft4EL0o9V-6TjYZjW9W/exec"
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        let documentary = data.documentaries.map(value => {
          console.log(value)
          return (
            <div className="data">
              <a href={value[1]}>{value[0]}</a>
            </div>
          )
        })
        this.setState({ output: documentary })
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

export default Documentaries
