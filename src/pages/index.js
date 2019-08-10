import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allStrapiArticle.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.title;
          return (
            <div key={node.id}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4)
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.date_created}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.description || node.excerpt
                }}
              />
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allStrapiArticle {
      edges {
        node {
          id
          slug
          title
          content
          date_created
          description
        }
      }
    }
  }
`;
