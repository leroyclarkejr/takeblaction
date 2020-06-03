import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* children are getting passed into layout component */}
    {/* <SEO title="Home" /> */}

    <h1>its time for change</h1>
    <p>
      #TAKEBLACTION is a diverse group invested in making lasting, positive and
      impactful change. We've created a collective working to define the term,
      #Blact (verb): to act with the intent of benefitting black lives.
    </p>
    <p>
      The goal of this collective is to compile resources for black justice into
      one place so that anyone can easily access and navigate all of the
      databanks, resources, and links to black justice materials.
    </p>
    <p>
      We recognize that credible black justice resources can be difficult to
      find. TakeBlaction is here to make these resources as accessible as
      possible.
    </p>
    <Link to="/petitions/">Petitions</Link>
  </Layout>
)

export default IndexPage
