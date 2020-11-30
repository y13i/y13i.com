import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const Footer: React.FC = () => {
  const { site } = useStaticQuery<GatsbyTypes.FooterQuery>(graphql`
    query Footer {
      site {
        siteMetadata {
          author {
            name
          }
          since

          social {
            github
            flickr
            the500px
            soundCloud
            twitter
            facebook
          }
        }
      }
    }
  `);

  const socials = [
    {
      name: "GitHub",
      url: `https://github.com/${site?.siteMetadata?.social?.github}`,
    },
    {
      name: "Flickr",
      url: `https://flickr.com/photos/${site?.siteMetadata?.social?.flickr}/`,
    },
    {
      name: "500px",
      url: `https://500px.com/${site?.siteMetadata?.social?.the500px}`,
    },
    {
      name: "SoundCloud",
      url: `https://soundcloud.com/${site?.siteMetadata?.social?.soundCloud}`,
    },
    {
      name: "Twitter",
      url: `https://twitter.com/${site?.siteMetadata?.social?.twitter}`,
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/${site?.siteMetadata?.social?.facebook}`,
    },
  ];

  const Footer = styled.footer`
    margin: 1.2rem 0;
  `;

  return (
    <>
      <Divider variant="middle" />
      <Footer>
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs="auto">
            <Typography variant="body1">
              &copy; {site?.siteMetadata?.since}{" "}
              {site?.siteMetadata?.author?.name}
            </Typography>
          </Grid>
          {socials.map((social) => (
            <Grid item xs="auto">
              <Typography variant="body1">
                <Link to={social.url}>{social.name}</Link>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Footer>
    </>
  );
};
