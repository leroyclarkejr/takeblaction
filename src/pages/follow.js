import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import DataListFollow from "../components/datalistfollow"

export const query = graphql`
  query MySocialQuery {
    allSocialCsv {
      edges {
        node {
          Name
          Short_Description
          Long_Description
          Category
          Thumbnail
          Facebook_Page
          Instagram_Page
          Twitter_Page
        }
      }
    }
  }
`

const Follow = ({ data }) => {
  function getFollowData(data) {
    const followArray = []
    data.allSocialCsv.edges.forEach(item =>
      followArray.push(
        <DataListFollow
          title={item.node.Name}
          shortDesc={item.node.Short_Description}
          imgSrc={item.node.Thumbnail}
          longDesc={item.node.Long_Description}
          extLink={item.node.External_Link}
          key={item.node.Name}
          category={item.node.Category}
          facebook={item.node.Facebook_Page}
          instagram={item.node.Instagram_Page}
          twitter={item.node.Twitter_Page}
        />
      )
    )
    return followArray
  }

  return (
    <Layout>
      <div className="category-header">
        <h2>Follow</h2>
        <h4>
          Continue the discussion and keep sharing relevant content amongst on
          your social networks.
        </h4>
      </div>
      <div id="data-container">{getFollowData(data)}</div>
    </Layout>
  )
}

export default Follow
