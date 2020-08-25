import React from "react"
import Layout from "../components/layout"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
import { graphql } from "gatsby"

const Donations = ({ data }) => {
  return (
    <Layout>
      <div id="data-container">
        <h2>
          Take #Blaction now<span> ✊🏾</span>
        </h2>
        <h4>Donate</h4>

        {getDonationData(data)}
      </div>
    </Layout>
  )
}

function getDonationData(data) {
  const donationsArray = []
  data.allDonations.edges.forEach(item =>
    donationsArray.push(
      <div className="data">
        <a href={item.node.link}>{item.node.name}</a>
        <KeyboardArrowRightIcon width="10px"></KeyboardArrowRightIcon>
      </div>
    )
  )
  return donationsArray
}

export const query = graphql`
  query DonationPageQuery {
    allDonations {
      edges {
        node {
          name
          link
        }
      }
    }
  }
`

export default Donations
