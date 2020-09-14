import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import DataList from "../components/datalist"

export const query = graphql`
  query MyWatchQuery {
    allWatchCsv {
      edges {
        node {
          Name
          Short_description
          Long_description
          Thumbnail
          External_Link
          Category
        }
      }
    }
  }
`

const Watch = ({ data }) => {
  function getWatchData(data) {
    const watchArray = []
    data.allWatchCsv.edges.forEach(item =>
      watchArray.push(
        <DataList
          title={item.node.Name}
          shortDesc={item.node.Short_description}
          imgSrc={item.node.Thumbnail}
          longDesc={item.node.Long_description}
          extLink={item.node.External_Link}
          key={item.node.Name}
          category={item.node.Category}
        />
      )
    )
    return watchArray
  }

  return (
    <Layout>
      <div className="category-header">
        <h2>Watch</h2>
        <h4>
          Documentaries, movies, and shows that provide insight into the Black
          experience
        </h4>
      </div>
      <div id="data-container">{getWatchData(data)}</div>
    </Layout>
  )
}

export default Watch
