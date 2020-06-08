import React from "react"
import Layout from "../components/layout"
import LaunchIcon from "@material-ui/icons/Launch"

class Books extends React.Component {
  constructor(props) {
    super(props)
    this.state = { output: "Making sure things are up to date!" }
  }

  componentDidMount() {
    const url =
      "https://script.google.com/macros/s/AKfycbwkigQInS7P-ETReftDOC-ei4MfZuhb7Ft4EL0o9V-6TjYZjW9W/exec"
    fetch(url)
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data)
        let book = data.books.map(value => {
          return (
            <div
              className="data"
              // onMouseEnter={this.hover}
              // onMouseLeave={this.nohover}
            >
              <a href={value[3]}>
                {value[0]} by {value[1]}
              </a>

              <LaunchIcon></LaunchIcon>

              {/* <hr class="solid"></hr>openlin */}
            </div>
          )
        })
        this.setState({ output: book })
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
          <h4>Books</h4>
          {this.state.output}
        </div>
      </Layout>
    )
  }
}

export default Books
