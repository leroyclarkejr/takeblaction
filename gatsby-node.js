/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.createPages = ({ actions: { createPage } }) => {
//   const data = require("./data/alldata.json")
//   data.forEach(category => {
//     createPage({
//       path: `/${category[0]}/`,
//       component: require.resolve("./src/pages/petitions.js"),
//       context: {
//         title: category[0],
//         link: category[1],
//       },
//     })
//   })
// }

// exports.createPages = ({ actions: { createPage } }) => {
//   createPage({
//     path: "/petitions/",
//     component: require.resolve("./src/pages/petitions.js"),
//     context: {
//       title: "We Don’t Need No Stinkin’ GraphQL!",
//       content: "<p>This is page content.</p><p>No GraphQL required!</p>",
//     },
//   })
// }

// exports.createPages = async ({ actions: { createPage }, graphql }) => {
//   const results = await graphql(`
//     {
//       allProductsJson {
//         edges {
//           node {
//             petitions
//           }
//         }
//       }
//     }
//   `)

//   results.data.allProductsJson.edges.forEach(edge => {
//     const category = edge.node

//     createPage({
//       path: `/gql/${category.petitions}/`,
//       component: require.resolve("./src/pages/petitions.js"),
//       context: {
//         petitions: category.petitions,
//       },
//     })
//   })
// }
