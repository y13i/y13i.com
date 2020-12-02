import React from "react";
import { graphql, PageProps } from "gatsby";
import styled from "styled-components";
import {
  Grid,
  Typography,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import {
  LocationOnOutlined,
  LanguageOutlined,
  EmailOutlined,
} from "@material-ui/icons";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify-icons/mdi/github";
import flickrIcon from "@iconify-icons/mdi/flickr";
import soundcloudIcon from "@iconify-icons/mdi/soundcloud";
import twitterIcon from "@iconify-icons/mdi/twitter";
import facebookIcon from "@iconify-icons/mdi/facebook";
import linkedinIcon from "@iconify-icons/mdi/linkedin";

import { App } from "../components/App";

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        author {
          url
        }
      }
    }

    dataJson {
      profile {
        name {
          en {
            familyName
            givenName
          }
          ja {
            familyName
            givenName
          }
        }
        social {
          github
          flickr
          soundcloud
          twitter
          facebook
          linkedin
        }
        location
        languages
        email
      }

      works {
        year
        kind
        title
        url
      }
    }
  }
`;

const Name = styled.section`
  margin: 2rem 0;

  h2 {
    font-size: 2.5rem;
  }

  h6 {
    font-size: 1.25rem;
  }
`;

const Profile = styled.section`
  p {
    font-size: 1.25rem;
  }
`;

const Socials = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Social = styled.div`
  margin-right: 0.3rem;
`;

const socialIconSize = 40;

const IconAndText = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0.4rem 0;

  p {
    margin-left: 0.33rem;
  }
`;

const Work = styled(TableRow)`
  td {
    border-bottom: none;
    padding: 16px 6px;
    font-size: 1rem;
  }
`;

const IndexPage: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({
  data,
}) => (
  <App
    head={{
      itemType: "Person",
      ogType: "profile",
      url: data.site?.siteMetadata?.author?.url,
    }}
  >
    <Name>
      <Typography variant="h2" itemProp="name">
        <span itemProp="givenName">
          {data.dataJson?.profile?.name?.en?.givenName}
        </span>{" "}
        <span itemProp="familyName">
          {data.dataJson?.profile?.name?.en?.familyName}
        </span>
      </Typography>
      <Typography variant="subtitle1" itemProp="name" lang="ja">
        <span itemProp="familyName">
          {data.dataJson?.profile?.name?.ja?.familyName}
        </span>{" "}
        <span itemProp="givenName">
          {data.dataJson?.profile?.name?.ja?.givenName}
        </span>
      </Typography>
    </Name>
    <Profile>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={5}>
          <Socials>
            <Social>
              <a
                href={`https://github.com/${data.dataJson?.profile?.social?.github}`}
                title={`GitHub: ${data.dataJson?.profile?.social?.github}`}
              >
                <Icon
                  icon={githubIcon}
                  width={socialIconSize}
                  height={socialIconSize}
                />
              </a>
            </Social>
            <Social>
              <a
                href={`https://facebook.com/${data.dataJson?.profile?.social?.facebook}`}
                title={`Facebook: ${data.dataJson?.profile?.social?.facebook}`}
              >
                <Icon
                  icon={facebookIcon}
                  width={socialIconSize}
                  height={socialIconSize}
                />
              </a>
            </Social>
            <Social>
              <a
                href={`https://linkedin.com/in/${data.dataJson?.profile?.social?.linkedin}/`}
                title={`LinkedIn: ${data.dataJson?.profile?.social?.linkedin}`}
              >
                <Icon
                  icon={linkedinIcon}
                  width={socialIconSize}
                  height={socialIconSize}
                />
              </a>
            </Social>
            <Social>
              <a
                href={`https://www.flickr.com/people/${data.dataJson?.profile?.social?.flickr}/`}
                title={`Flickr: ${data.dataJson?.profile?.social?.flickr}`}
              >
                <Icon
                  icon={flickrIcon}
                  width={socialIconSize}
                  height={socialIconSize}
                />
              </a>
            </Social>
            <Social>
              <a
                href={`https://soundcloud.com/${data.dataJson?.profile?.social?.soundcloud}`}
                title={`SoundCloud: ${data.dataJson?.profile?.social?.soundcloud}`}
              >
                <Icon
                  icon={soundcloudIcon}
                  width={socialIconSize}
                  height={socialIconSize}
                />
              </a>
            </Social>
            <Social>
              <a
                href={`https://twitter.com/${data.dataJson?.profile?.social?.twitter}`}
                title={`Twitter: ${data.dataJson?.profile?.social?.twitter}`}
              >
                <Icon
                  icon={twitterIcon}
                  width={socialIconSize}
                  height={socialIconSize}
                />
              </a>
            </Social>
          </Socials>
          <section>
            <IconAndText>
              <LocationOnOutlined titleAccess="Location" />
              <Typography variant="body1">
                {data.dataJson?.profile?.location}
              </Typography>
            </IconAndText>
            <IconAndText>
              <LanguageOutlined titleAccess="Languages" />
              <Typography variant="body1">
                {data.dataJson?.profile?.languages?.join(", ")}
              </Typography>
            </IconAndText>
            <IconAndText>
              <EmailOutlined titleAccess="Email" />
              <Typography variant="body1">
                <a href={`mailto:${data.dataJson?.profile?.email}`}>
                  {data.dataJson?.profile?.email}
                </a>
              </Typography>
            </IconAndText>
          </section>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <TableContainer>
            <Table>
              <TableBody>
                {data.dataJson?.works?.map(
                  (work, index) =>
                    !work || (
                      <Work key={`work${index}`}>
                        <TableCell>{work.year}</TableCell>
                        <TableCell>{work.kind}</TableCell>
                        <TableCell>
                          <a href={work.url}>{work.title}</a>
                        </TableCell>
                      </Work>
                    )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Profile>
  </App>
);

export default IndexPage;
