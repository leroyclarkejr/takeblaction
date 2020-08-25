/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const axios = require("axios")
const _ = require("lodash")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  const fetchFormItems = () =>
    axios.get(
      `https://script.google.com/macros/s/AKfycbwkigQInS7P-ETReftDOC-ei4MfZuhb7Ft4EL0o9V-6TjYZjW9W/exec`
    )

  const response = await fetchFormItems()

  function createDonationNodes() {
    const arrayOfDonations = response.data.donations
    let rows = []
    for (var i = 1; i < arrayOfDonations.length; i++) {
      var rowObject = {}
      for (var j = 0; j < arrayOfDonations[i].length; j++) {
        rowObject[arrayOfDonations[0][j]] = arrayOfDonations[i][j]
      }
      rows.push(rowObject)
    }

    let newArray = rows.map(function (donations) {
      donations = { ...donations }
      return donations
    })

    newArray.map((donations, i) => {
      const itemNode = {
        id: createNodeId(`${i}`),
        parent: `__SOURCE__`,
        internal: {
          type: `donations`, // name of the graphQL query --> allItem {}
          contentDigest: createContentDigest(donations),
        },

        children: [],
        name: donations.name,
        link: donations.link,
      }

      createNode(itemNode)
    })
  }

  createDonationNodes()
}

//WEBFLOW
