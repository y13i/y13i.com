import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export type HeadProps = Partial<{
  title: string;
  description: string;
  lang: string;
  url: string;
  meta: React.DetailedHTMLProps<
    React.MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >[];
  itemType: string; // https://schema.org/docs/full.html
  ogType: string; // https://ogp.me/#types
  twitterCardType: string; // https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
}>;

export const Head: React.FC<HeadProps> = (props = {}) => {
  const { site } = useStaticQuery<GatsbyTypes.HeadQuery>(
    graphql`
      query Head {
        site {
          siteMetadata {
            title
            description
            language
            url
            image

            author {
              email
              url
            }

            social {
              twitter
              facebook
            }
          }
        }
      }
    `
  );

  const title = props.title
    ? `${props.title} | ${site?.siteMetadata?.title}`
    : site?.siteMetadata?.title;
  const description = props.description || site?.siteMetadata?.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: props.lang || site?.siteMetadata?.language,
        itemScope: true,
        itemType: `https://schema.org/${props.itemType || "Thing"}`,
      }}
      title={title}
      link={[
        { rel: "cannonical", href: props.url || site?.siteMetadata?.url },
        { rel: "author", href: site?.siteMetadata?.author?.url },
      ]}
      meta={props.meta}
    >
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={props.ogType || "website"} />
      <meta property="og:email" content={site?.siteMetadata?.author?.email} />
      <meta property="og:image" content={site?.siteMetadata?.image} />
      <meta
        property="fb:admins"
        content={site?.siteMetadata?.social?.facebook}
      />
      <meta name="twitter:card" content={props.twitterCardType || "summary"} />
      <meta
        name="twitter:creator"
        content={`@${site?.siteMetadata?.social?.twitter}`}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={props.url || site?.siteMetadata?.url} />
      <meta name="twitter:image" content={site?.siteMetadata?.image} />
    </Helmet>
  );
};
