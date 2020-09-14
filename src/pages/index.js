import React from "react"

import Layout from "../components/layout"

import Header from "../components/header"
import Jumplinks from "../components/jumplinks"

import SEO from "../components/seo"

const IndexPage = ({ children }) => (
  <>
    <div className="header-wrapper">
      <Header />
      <SEO />
      <Jumplinks />
    </div>

    <section id="hero">
      <div className="hero-copy">
        <div className="tb-heading">
          <h1>
            Take <span>Blaction</span>
          </h1>
        </div>
        <p>
          Take Blaction is a collective group invested in making lasting,
          positive and impactful change. We've created a collective working to
          define the term,{" "}
          <strong>
            Blact (verb): to act with the intent of benefitting Black Lives.
          </strong>
        </p>
        <p>
          The goal of this collective is to compile resources for Black racial
          and social justice into one place so that anyone can easily access and
          navigate all of the databanks, resources, and links to black justice
          materials.
        </p>
      </div>
    </section>

    <footer id="footer">
      Take Blaction © {new Date().getFullYear()}, Made with
      {` `}
      <span role="img" aria-label="Heart Icon">
        ❤️
      </span>
    </footer>
  </>
)

export default IndexPage

// <Layout>
//     <section id="hero">
//       <div className="hero-copy">
//         <div className="tb-heading">
//           <h1>
//             Take <span>Blaction</span>
//           </h1>
//         </div>
//         <p>
//           Take Blaction is a collective group invested in making lasting,
//           positive and impactful change. We've created a collective working to
//           define the term, Blact (verb): to act with the intent of benefitting
//           Black Lives.
//         </p>
//         <p>
//           The goal of this collective is to compile resources for Black racial
//           and social justice into one place so that anyone can easily access and
//           navigate all of the databanks, resources, and links to black justice
//           materials.
//         </p>
//       </div>
//     </section>

//     <div id="contact">
//       <div>
//         <h2>How to help:</h2>

//         <p>
//           If you'd like to get more involved with the collective, please email
//           us a message at <strong> takeblaction@gmail.com </strong>for more
//           information.
//         </p>
//         <p>
//           Made with{" "}
//           <span role="img" aria-label="Heart Icon">
//             ❤️
//           </span>
//           <br />
//           the tb. team
//         </p>
//       </div>
//     </div>
//   </Layout>
