// import React from "react"
// import addToMailchimp from "gatsby-plugin-mailchimp"

// class Mailchimp extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = ""
//   }
//   _handleSubmit = e => {
//     e.preventDefault()
//     addToMailchimp(email) // listFields are optional if you are only capturing the email address.
//       .then(data => {
//         // I recommend setting data to React state
//         // but you can do whatever you want (including ignoring this `then()` altogether)
//         console.log(data)
//       })
//       .catch(() => {
//         // unnecessary because Mailchimp only ever
//         // returns a 200 status code
//         // see below for how to handle errors
//         result: string // either `success` or `error` (helpful to use this key to update your state)
//         msg: string
//       })
//   }

//   render() {
//     return (
//       <form onSubmit={this._handleSubmit(email)}>
//         <input type="text" name="email"></input>
//       </form>
//     )
//   }
// }

// export default Mailchimp
