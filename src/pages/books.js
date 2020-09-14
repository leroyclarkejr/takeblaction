import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import DataList from "../components/datalist"

export const query = graphql`
  query MyBooksQuery {
    allBooksCsv {
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

    data.allBooksCsv.edges.forEach(item =>
      booksArray.push(
        <DataList
          title={item.node.Name}
          shortDesc={item.node.Short_description}
          imgSrc={item.node.Thumbnail}
          longDesc={item.node.Long_Description}
          key={item.node.Name}
        />
      )
    )
    return booksArray
  }

  return (
    <Layout>
      <div className="category-header">
        <h2>Read</h2>
        <h4>
          It's never too late to educate yourself. If you want to help the
          cause, become a better ally, better understand the experiences of
          Black people and proactively make a change within society, but aren't
          sure how to go about it, diversifying your bookshelf is a great place
          to start.
        </h4>
      </div>
      <div id="data-container">{getBooksData(data)}</div>
    </Layout>
  )
}

export default Books
