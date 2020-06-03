import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* children are getting passed into layout component */}
    {/* <SEO title="Home" /> */}
    <Link to="/petitions/">Petitions</Link>
    <br />
    <h1>Taking action for black lives</h1>
    <p>
      We've formed a collective working toward defining a word we have termed as
      #Blact (vverb): to act with the intent of benefitting black lives. Join us
      as we #takeblaction.
    </p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
