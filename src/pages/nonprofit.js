import React from "react"
import Layout from "../components/layout"

class Nonprofit extends React.Component {
  constructor(props) {
    super(props)
    this.state = { output: "Making sure things are up to date!" }
  }

  componentDidMount() {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=mYmgHnlrxwR9YtCB9E_QyG8C7RotfpQmT4Fw9Tn3YA1fTWzgyrNCLloRe6_JOana8EVElZx0Lg_MPfZ-oKRLgo3NlhxxzX_ym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDSs5sRgD1ac-h3oV3AasSem-5e7OFQzXI5YTTJP454RdAgflvzraAzfveALHdp65b3s74y5e3r9&lib=MpXQzipjhDujhrJj9-lpphnKgdv5WXFdI"
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        let nonprofit = data.nonprofits.map(value => {
          console.log(value)
          return (
            <div className="data">
              <a href={value[1]}>{value[0]}</a>
            </div>
          )
        })
        this.setState({ output: nonprofit })
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

export default Nonprofit
