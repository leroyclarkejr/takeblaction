import React from "react"
import Layout from "../components/layout"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
import { graphql } from "gatsby"

const Podcasts = ({ data }) => {
  return (
    <Layout>
      <div id="data-container">
        <h2>
          Take #Blaction now<span> ✊🏾</span>
        </h2>
        <h4>podcasts</h4>

        {getPodcastsData(data)}
      </div>
    </Layout>
  )
}

function getPodcastsData(data) {
  const podcastsArray = []
  data.allPodcasts.edges.forEach(item =>
    podcastsArray.push(
      <div className="data">
        <a href={item.node.link}>{item.node.title}</a>

        <KeyboardArrowRightIcon width="10px"></KeyboardArrowRightIcon>
      </div>
    )
  )
  return podcastsArray
}

export const query = graphql`
  query PodcastsPageQuery {
    allPodcasts {
      edges {
        node {
          title
          link
        }
      }
    }
  }
`

export default Podcasts
