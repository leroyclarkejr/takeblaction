import React, { version } from "react"
import Layout from "../components/layout"

class Nonprofit extends React.Component {
  constructor(props) {
    super(props)
    this.state = { output: "Making sure things are up to date!" }
  }

  componentDidMount() {
    const Webflow = require("webflow-api")
    const webflow = new Webflow({ token: `${process.env.WEBFLOW_TOKEN}` })
    const myHeaders = new Headers()

    // myHeaders.append("content-type", "application/json")
    // myHeaders.append("Authorization", `Bearer ${process.env.WEBFLOW_TOKEN}`)

    webflow.headers = {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.WEBFLOW_TOKEN}`,
      "accept-version": version,
      "Content-type": "application/json",
    }

    const collections = webflow.collections({
      siteId: "5f0e5fc6c8a30b6296ab60d5",
    })

    collections.then(c => console.log(c))

    // fetch(
    //   "https://script.google.com/macros/s/AKfycbwkigQInS7P-ETReftDOC-ei4MfZuhb7Ft4EL0o9V-6TjYZjW9W/exec"
    // )
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(data => {
    //     console.log(data)
    //     let nonprofit = data.nonprofits.map(value => {
    //       console.log(value)
    //       return (
    //         <div className="data">
    //           <a href={value[1]}>{value[0]}</a>
    //         </div>
    //       )
    //     })
    //     this.setState({ output: nonprofit })
    //   })
  }

  render() {
    return (
      <Layout>
        <div id="data-container">{this.state.output}</div>
      </Layout>
    )
  }
}

export default Nonprofit
