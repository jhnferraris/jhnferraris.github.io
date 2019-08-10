const path = require(`path`);

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        return result;
      })
    );
  });

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const getArticles = makeRequest(
    graphql,
    `
  {
    allStrapiArticle {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
  }
  `
  ).then(result => {
    // Create pages for each article.
    const articles = result.data.allStrapiArticle.edges;
    articles.forEach(({ node }, index) => {
      const previous = index === articles.length - 1 ? null : articles[index + 1].node;
      const next = index === 0 ? null : articles[index - 1].node;
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/blog-post.js`),
        context: {
          id: node.id,
          slug: node.slug,
          previous,
          next
        }
      });
    });
  });

  // Query for articles nodes to use in creating pages.
  return getArticles;
};
