/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;
  createRedirect({
    fromPath: "/project-form",
    toPath: "https://form.jotform.com/200788029904056",
    force: true
  });
  createRedirect({
    fromPath: "/impact-form",
    toPath: "https://form.jotform.com/200788029904056",
    force: true
  });
  createRedirect({
    fromPath: "/contributor-apply",
    toPath: "https://form.jotform.com/200786890019057",
    force: true
  });
  const result = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
            title
            content {
              json
            }
            authors {
              name
              email
            }
            createdAt(formatString: "MMMM DD, YYYY")
            updatedAt(formatString: "MMMM DD, YYYY")
            buttonText
            buttonLocalLink
            buttonExternalLink
          }
        }
      }
      allContentfulChallenge {
        edges {
          node {
            slug
            title
            description {
              json
            }
            tags
            date
            time
            summary {
              json
            }
            outcomes
            applicants
            link
            completed
            createdAt(formatString: "MMMM DD, YYYY")
            updatedAt(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create blog post pages.
  const posts = result.data.allContentfulPost.edges;
  // you'll call `createPage` for each result
  posts.forEach(({ node }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: `/posts/${node.slug}`,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/PostTemplate.js`),
      // You can use the values in this context in
      // our page layout component
      context: {
        post: node
      }
    });
  });
  // Create focus session pages.
  const sessions = result.data.allContentfulChallenge.edges;
  // you'll call `createPage` for each result
  sessions.forEach(({ node }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: `/sessions/${node.slug}`,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/ChallengeTemplate.js`),
      // You can use the values in this context in
      // our page layout component
      context: {
        challenge: node
      }
    });
  });
};

// You can delete this file if you're not using it
