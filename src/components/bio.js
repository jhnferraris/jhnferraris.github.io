/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';
import { FaTwitterSquare, FaList, FaEnvelope } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5)
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`
              }}
              imgStyle={{
                borderRadius: `50%`
              }}
            />
            <p>
              <strong>{author}</strong>
              <br />
              Codes for a living and for fun. Reads fiction and self-help on the side. Runs fast enough to survive a zombie apocalypse.
              {` `}
              <br />
              <a style={{ boxShadow: 'none', textDecoration: 'none', paddingRight: '5px' }} className="social-links" href={`mailto:${social.mail}`}>
                <FaEnvelope />
              </a>
              <a style={{ boxShadow: 'none', textDecoration: 'none', paddingRight: '5px' }} href={`https://twitter.com/${social.twitter}`}>
                <FaTwitterSquare />
              </a>
              <a
                style={{ boxShadow: 'none', textDecoration: 'none', paddingRight: '5px' }}
                className="social-links"
                href={`https://github.com/${social.github}`}
              >
                <GoMarkGithub />
              </a>
              <a style={{ boxShadow: 'none', textDecoration: 'none', paddingRight: '5px' }} className="social-links" href={social.cv}>
                <FaList />
              </a>
            </p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          mail
          twitter
          github
          cv
        }
      }
    }
  }
`;

export default Bio;
