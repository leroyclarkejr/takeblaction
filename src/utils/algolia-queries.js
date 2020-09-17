const myQuery = `
  {
    allDonateCsv {
      edges {
        node {
          objectID: id
          Name
          Short_Description
          Slug
        }
      }
    }
  }
`

// const donationKeys = node => {
//   const { objectID, id, Name, Short_Description, Slug } = node
//   return {
//     ...objectID,
//     ...id,
//     ...Name,
//     ...Short_Description,
//     ...Slug,
//   }
// }

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.allDonateCsv.edges.map(({ node }) => node),
    matchFields: ["Slug"],
  },
]

module.exports = queries
