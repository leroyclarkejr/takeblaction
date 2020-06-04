import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import EmailListForm from "../components/mailchimp"
import change from "../images/change.png"
import tbblk from "../images/tb-bgblk.png"
import donate from "../images/donate.png"
import sign from "../images/sign.png"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* children are getting passed into layout component */}
    {/* <SEO title="Home" /> */}
    <div></div>
    <div id="hero">
      <div>
        <img src={tbblk}></img>
      </div>

      <div>
        <h2>its time for change.</h2>
        <p>
          The goal of this collective is to compile{" "}
          <span className="bold">resources for black justice </span>
          into one place so that anyone can easily access and navigate all of
          the databanks, resources, and links to black justice materials.
        </p>
      </div>
    </div>

    <div id="take-blaction">
      <Link to="/petitions/" className="main-link">
        <img src={sign}></img>
        <h3>Petitions</h3>
      </Link>
      <Link to="/donations/" className="main-link">
        <img src={donate}></img>
        <h3>Donate</h3>
      </Link>
    </div>
    {/* <p>
        #TAKEBLACTION is a diverse group invested in making lasting, positive
        and impactful change. We've created a collective working to define the
        term, #Blact (verb): to act with the intent of benefitting black lives.
      </p> */}
    {/* 
      <p>
        We recognize that credible black justice resources can be difficult to
        find. TakeBlaction is here to make these resources as accessible as
        possible.
      </p> */}

    <div id="about-us"></div>

    <div id="contact">
      <div>
        <h2>How to help:</h2>
        <p>
          We've made it easy to <span class="bold">share information </span>with
          your friends and communities compiling all of the circulating{" "}
          <span class="bold">black justice resources </span>
          into <span class="bold"></span>one place.
        </p>

        <p>
          We are looking for more <span class="bold">volunteers</span> to curate
          more resources and
          <span class="bold">empower the black community!</span>
        </p>

        <p>
          If you'd like to get more involved with the collective, please email
          us a message at takingblaction@gmail.com for more information.
        </p>
        <p>- Delia and the Take Blaction Team</p>
      </div>
    </div>

    <div id="cta">
      <h3>
        #Blact (verb): to act with the intent of benefiting black lives. <br />
        Join us as we #takeblaction
      </h3>
      {/* <EmailListForm /> */}
    </div>
  </Layout>
)

export default IndexPage

{
  /* <form action="//mc.us10.list-manage.com/signup-form/subscribe?u=1265fbb10296b33af3ae2993b&amp;id=00d69fe1f0 */
}
