import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Mailchimp from "../components/mailchimp"
// import change from "../images/change.png"
import tbblk from "../images/tb-bgwht.png"
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
        <img src={tbblk} alt="Take blaction"></img>
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
        <img src={sign} alt="This is where you can sign petitions."></img>
        <h3>Petitions</h3>
      </Link>
      <Link to="/donations/" className="main-link">
        <img
          src={donate}
          alt="This is where you can donate to charities and non-profit organizations"
        ></img>
        <h3>Donate</h3>
      </Link>
      <Link to="/books/" className="main-link">
        <img src={sign} alt="This is where you can sign books."></img>
        <h3>books</h3>
      </Link>
      <Link to="/businesses/" className="main-link">
        <img src={sign} alt="This is where you can sign businesses."></img>
        <h3>businesses</h3>
      </Link>
      <Link to="/documentaries/" className="main-link">
        <img src={sign} alt="This is where you can sign petitions."></img>
        <h3>Documentaries</h3>
      </Link>
      <Link to="/nonprofit/" className="main-link">
        <img src={sign} alt="This is where you can sign petitions."></img>
        <h3>Nonprofit</h3>
      </Link>
      <Link to="/podcasts/" className="main-link">
        <img src={sign} alt="This is where you can sign petitions."></img>
        <h3>Podcasts</h3>
      </Link>
      <Link to="/social/" className="main-link">
        <img src={sign} alt="This is where you can sign petitions."></img>
        <h3>Social Media</h3>
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
          We've made it easy to<span class="bold"> share information </span>with
          your friends and communities compiling all of the circulating
          <span class="bold"> black justice resources </span>
          into one place
        </p>

        <p>
          We are looking for more volunteers to curate more resources
          and empower the black community!
        </p>

        <p>
          If you'd like to get more involved with the collective, please email
          us a message at <strong> takeblaction@gmail.com </strong>for more
          information.
        </p>
        <p>
          Made with <span role="img">❤️</span>
          <br />
          the tb. team
        </p>
      </div>
    </div>

    <div id="cta">
      <h3>
        #Blact (verb): to act with the intent of benefiting black lives. Join us
        as we #takeblaction
      </h3>
      <Mailchimp />
    </div>
  </Layout>
)

export default IndexPage

{
  /* <form action="//mc.us10.list-manage.com/signup-form/subscribe?u=1265fbb10296b33af3ae2993b&amp;id=00d69fe1f0 */
}
