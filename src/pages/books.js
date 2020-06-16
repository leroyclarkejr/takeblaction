import React from "react"
import Layout from "../components/layout"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"

// class Books extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { output: "Making sure things are up to date!" }
//   }

//   componentDidMount() {
//     const url =
//       "https://script.google.com/macros/s/AKfycbwkigQInS7P-ETReftDOC-ei4MfZuhb7Ft4EL0o9V-6TjYZjW9W/exec"
//     fetch(url)
//       .then(res => {
//         console.log(res)
//         return res.json()
//       })
//       .then(data => {
//         console.log(data)
//         let book = data.books.map(value => {
//           return (
//             <div
//               className="data"
//               // onMouseEnter={this.hover}
//               // onMouseLeave={this.nohover}
//             >
//               <a href={value[3]}>
//                 {value[0]} by {value[1]}
//               </a>

//               <KeyboardArrowRightIcon></KeyboardArrowRightIcon>

//               {/* <hr class="solid"></hr>openlin */}
//             </div>
//           )
//         })
//         this.setState({ output: book })
//       })
//   }

//   // hover(e) {
//   //   e.target.style.backgroundColor = "red"
//   // }

//   // nohover(e) {
//   //   e.target.style.backgroundColor = "#16181c"
//   // }

//   render() {
//     return (
//       <Layout>
//         <div id="data-container">
//           <h2>
//             Take #Blaction now<span> ✊🏾</span>
//           </h2>
//           <h4>Books</h4>
//           {this.state.output}
//         </div>
//       </Layout>
//     )
//   }
// }

// export default Books

const Books = ({ data }) => {
  return (
    <Layout>
      <div id="data-container">
        <h2>
          Take #Blaction now<span> ✊🏾</span>
        </h2>
        <h4>books</h4>

        {getbooksData(data)}
      </div>
    </Layout>
  )
}

function getbooksData(data) {
  const booksArray = []
  data.allBooks.edges.forEach(item =>
    booksArray.push(
      <div className="data">
        <a href={item.node.link}>
          {item.node.title} By {item.node.author}
        </a>

        <KeyboardArrowRightIcon width="10px"></KeyboardArrowRightIcon>
      </div>
    )
  )
  return booksArray
}

export const query = graphql`
  query BooksPageQuery {
    allBooks {
      edges {
        node {
          title
          link
          author
        }
      }
    }
  }
`

export default Books
