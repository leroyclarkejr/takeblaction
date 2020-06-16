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

  function createPetitionNodes() {
    const arrayOfItems = response.data.petitions
    let rows = []
    for (var i = 1; i < arrayOfItems.length; i++) {
      var rowObject = {}
      for (var j = 0; j < arrayOfItems[i].length; j++) {
        rowObject[arrayOfItems[0][j]] = arrayOfItems[i][j]
      }
      rows.push(rowObject)
    }

    let newArray = rows.map(function (item) {
      item = { ...item }
      return item
    })

    newArray.map((item, i) => {
      const itemNode = {
        id: createNodeId(`${i}`),
        parent: `__SOURCE__`,
        internal: {
          type: `petitions`, // name of the graphQL query --> allItem {}
          contentDigest: createContentDigest(item),
        },

        children: [],
        name: item.name,
        link: item.link,
        category: item.category,

        short: item.short_desc,
        long: item.long_desc,
      }

      createNode(itemNode)
    })
  }

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
  function createBookNodes() {
    const arrayOfBooks = response.data.books
    let rows = []
    for (var i = 1; i < arrayOfBooks.length; i++) {
      var rowObject = {}
      for (var j = 0; j < arrayOfBooks[i].length; j++) {
        rowObject[arrayOfBooks[0][j]] = arrayOfBooks[i][j]
      }
      rows.push(rowObject)
    }

    let newArray = rows.map(function (books) {
      books = { ...books }
      return books
    })

    newArray.map((books, i) => {
      const itemNode = {
        id: createNodeId(`${i}`),
        parent: `__SOURCE__`,
        internal: {
          type: `books`, // name of the graphQL query --> allItem {}
          contentDigest: createContentDigest(books),
        },

        children: [],
        title: books.title,
        author: books.author,
        link: books.link,
      }

      createNode(itemNode)
    })
  }

  function createPodcastNodes() {
    const arrayOfPodcasts = response.data.podcasts
    let rows = []
    for (var i = 1; i < arrayOfPodcasts.length; i++) {
      var rowObject = {}
      for (var j = 0; j < arrayOfPodcasts[i].length; j++) {
        rowObject[arrayOfPodcasts[0][j]] = arrayOfPodcasts[i][j]
      }
      rows.push(rowObject)
    }

    let newArray = rows.map(function (podcasts) {
      podcasts = { ...podcasts }
      return podcasts
    })

    newArray.map((podcasts, i) => {
      const itemNode = {
        id: createNodeId(`${i}`),
        parent: `__SOURCE__`,
        internal: {
          type: `podcasts`, // name of the graphQL query --> allItem {}
          contentDigest: createContentDigest(podcasts),
        },

        children: [],
        title: podcasts.title,
        link: podcasts.link,
      }

      createNode(itemNode)
    })
  }

  function createDocumentaryNodes() {
    const arrayOfDocumentaries = response.data.documentaries
    let rows = []
    for (var i = 1; i < arrayOfDocumentaries.length; i++) {
      var rowObject = {}
      for (var j = 0; j < arrayOfDocumentaries[i].length; j++) {
        rowObject[arrayOfDocumentaries[0][j]] = arrayOfDocumentaries[i][j]
      }
      rows.push(rowObject)
    }

    let newArray = rows.map(function (documentaries) {
      documentaries = { ...documentaries }
      return documentaries
    })

    newArray.map((documentaries, i) => {
      const itemNode = {
        id: createNodeId(`${i}`),
        parent: `__SOURCE__`,
        internal: {
          type: `documentaries`, // name of the graphQL query --> allItem {}
          contentDigest: createContentDigest(documentaries),
        },

        children: [],
        title: documentaries.title,
        platform: documentaries.platform,
        short: documentaries.short,
        long: documentaries.long,
      }

      createNode(itemNode)
    })
  }

  function createBusinessNodes() {
    const arrayOfBusinesses = response.data.business
    let rows = []
    for (var i = 1; i < arrayOfBusinesses.length; i++) {
      var rowObject = {}
      for (var j = 0; j < arrayOfBusinesses[i].length; j++) {
        rowObject[arrayOfBusinesses[0][j]] = arrayOfBusinesses[i][j]
      }
      rows.push(rowObject)
    }

    let newArray = rows.map(function (businesses) {
      businesses = { ...businesses }
      return businesses
    })

    newArray.map((businesses, i) => {
      const itemNode = {
        id: createNodeId(`${i}`),
        parent: `__SOURCE__`,
        internal: {
          type: `businesses`, // name of the graphQL query --> allItem {}
          contentDigest: createContentDigest(businesses),
        },

        children: [],
        name: businesses.name,
        category: businesses.category,
        website: businesses.website,
      }

      createNode(itemNode)
    })
  }

  createBusinessNodes()
  createDocumentaryNodes()
  createPodcastNodes()
  createBookNodes()
  createPetitionNodes()
  createDonationNodes()
}
