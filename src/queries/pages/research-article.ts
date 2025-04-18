import {gql} from '@apollo/client';
import client from 'apollo-client';
import {ContentfulArticleResponse} from 'src/interfaces';
import {SEO_QUERY, SEO_QUERY_CALL} from '.';
import {ARTICLE_FOOTNOTE, QUERY_TRENDING_ARTICLES} from './components';

const QUERY_RAW = `
    query article($slug: String!) {
      ${SEO_QUERY_CALL} {
        items {
          ${SEO_QUERY}
          linkedFrom {
            articleCollection(limit: 1) {
              items {
                title
                contentfulMetadata {
                  tags {
                    id
                    name
                  }
                }
                featuredImage {
                  url
                  description
                }
                content {
                  json
                  links {
                    assets {
                      block {
                        url
                        sys {
                          id
                        }
                      }
                    }
                  }
                }
                author {
                  json
                }
                seo {
                  pageSlug
                }
                publishedAt
                ${ARTICLE_FOOTNOTE}
                sys {
                  firstPublishedAt
                }
                relatedArticles {
                  ${QUERY_TRENDING_ARTICLES}
                }
              }
            }
          }
        }
      }
    }
`;

export const getArticleBySlug = (slug: string) =>
  client.query<ContentfulArticleResponse>({
    query: gql`
      ${QUERY_RAW}
    `,
    variables: {slug},
  });
