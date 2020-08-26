import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import DataList from "../components/datalist"

export const query = graphql`
  query MyBooksQuery {
    allTakeBlactionBooksCsv {
      edges {
        node {
          Name
          Short_description
          Long_Description
          Thumbnail
        }
      }
    }
  }
`

const Books = ({ data }) => {
  function getBooksData(data) {
    const booksArray = []
    data.allTakeBlactionBooksCsv.edges.forEach(item =>
      booksArray.push(
        <DataList
          title={item.node.Name}
          shortDesc={item.node.Short_description}
          imgSrc={item.node.Thumbnail}
          longDesc={item.node.Long_Description}
        />
      )
    )
    return booksArray
  }

  return (
    <Layout>
      <div className="category-header">
        <h2>
          Books<span> ✊🏾</span>
        </h2>
        <h4>Support organizations fighting for change.</h4>
      </div>
      <div id="data-container">{getBooksData(data)}</div>
    </Layout>
  )
}

export default Books
