// import React from "react"
// import Layout from "../components/layout"

// class Socials extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { output: "Making sure things are up to date!" }
//   }

//   componentDidMount() {
//     fetch(
//       "https://script.google.com/macros/s/AKfycbwkigQInS7P-ETReftDOC-ei4MfZuhb7Ft4EL0o9V-6TjYZjW9W/exec"
//     )
//       .then(res => {
//         return res.json()
//       })
//       .then(data => {
//         console.log(data)
//         let social = data.social.map(value => {
//           console.log(value)
//           return (
//             <div className="data">
//               <a href={value[1]}>{value[0]}</a>
//             </div>
//           )
//         })
//         this.setState({ output: social })
//       })
//   }

//   render() {
//     return (
//       <Layout>
//         <div id="data-container">{this.state.output}</div>
//       </Layout>
//     )
//   }
// }

// export default Socials
