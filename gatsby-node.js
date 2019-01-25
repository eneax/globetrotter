const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        top: allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/src/data/top/*.md" } }) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }

        group: allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/src/data/group/*.md" } }) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }

        promo: allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/src/data/promo/*.md" } }) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      if (results.errors) {
        Promise.reject(results.errors)
      }

      results.data.top.edges.forEach(({ node }) => {
        createPage({
          path: `/top${node.frontmatter.slug}`,
          component: path.resolve('./src/components/topLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          },
        })
      });

      results.data.group.edges.forEach(({ node }) => {
        createPage({
          path: `/groups${node.frontmatter.slug}`,
          component: path.resolve('./src/components/groupLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          },
        })
      });

      results.data.promo.edges.forEach(({ node }) => {
        createPage({
          path: `/promo${node.frontmatter.slug}`,
          component: path.resolve('./src/components/promoLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          },
        })
      });

      resolve()
    })
  });
}
