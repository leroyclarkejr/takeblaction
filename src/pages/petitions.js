import React from "react"
import Layout from "../components/layout"
import openlink from "../images/openlink.svg"
import LaunchIcon from "@material-ui/icons/Launch"
// import Button from "@material-ui/core/Button"

const url =
  "https://script.googleusercontent.com/macros/echo?user_content_key=mYmgHnlrxwR9YtCB9E_QyG8C7RotfpQmT4Fw9Tn3YA1fTWzgyrNCLloRe6_JOana8EVElZx0Lg_MPfZ-oKRLgo3NlhxxzX_ym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDSs5sRgD1ac-h3oV3AasSem-5e7OFQzXI5YTTJP454RdAgflvzraAzfveALHdp65b3s74y5e3r9&lib=MpXQzipjhDujhrJj9-lpphnKgdv5WXFdI"
class Petitions extends React.Component {
  constructor(props) {
    super(props)
    this.state = { output: "Making sure things are up to date!" }
    // this.hover = this.hover.bind(this)
    // this.nohover = this.nohover.bind(this)
  }

  componentDidMount() {
    const [output, setOutput] = useState(0)

    fetch(url)
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data)
        let petition = data.petitions.map(value => {
          return (
            <div
              className="data"
              // onMouseEnter={this.hover}
              // onMouseLeave={this.nohover}
            >
              <a href={value[1]}>{value[0]}</a>
              <LaunchIcon width="10px"></LaunchIcon>

              {/* <hr class="solid"></hr>openlin */}
            </div>
          )
        })
        this.setState({ output: petition })
      })
  }

  // hover(e) {
  //   e.target.style.backgroundColor = "red"
  // }

  // nohover(e) {
  //   e.target.style.backgroundColor = "#16181c"
  // }

  render() {
    return (
      <Layout>
        <div id="data-container">
          <h2>
            Take #Blaction now<span> ✊🏾</span>
          </h2>
          <h4>Petitions</h4>
          {this.state.output}
        </div>
      </Layout>
    )
  }
}

export default Petitions
