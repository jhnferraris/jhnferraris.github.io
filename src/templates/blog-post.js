import React from 'react';
import { Link, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.strapiArticle;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    console.log(this.props);
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={post.description} />
        <h1>{post.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          {post.date_created}
        </p>
        <ReactMarkdown source={post.content} />
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query ArticleTemplate($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    strapiArticle(id: { eq: $id }) {
      id
      title
      content
      date_created
    }
  }
`;
