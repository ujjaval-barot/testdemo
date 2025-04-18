import {gql} from '@apollo/client';
import client from 'apollo-client';
import {ContentfulPageResponse} from 'src/interfaces';
import {
  QUERY_LOGOS_GRID,
  QUERY_CARDS_CONTAINER,
  QUERY_HEROES,
  QUERY_IMAGE_VIDEO_CARDS,
  QUERY_SECTION_TITLES,
  QUERY_TRENDING_ARTICLES,
  QUERY_ARTICLES,
  QUERY_TITLE_BUTTON_CARD,
  QUERY_NEWS_CARD,
} from './components';
import {ApolloQueryResult} from '@apollo/client';

export const SEO_QUERY = `
  title
  description
  image {
    url
  }
  keywords
  canonical
  isIndexed
`;

export const SEO_QUERY_CALL = `seoCollection(where: {pageSlug: $slug}, limit: 1)`;

const PAGE_QUERY_RAW = `
  query page($slug: String!, $contentBlockLimit: Int = 5) {
    ${SEO_QUERY_CALL} {
      items {
        ${SEO_QUERY}
        linkedFrom {
          pageCollection(limit: 1) {
            items {
              entryField
              contentBlocksCollection(limit: $contentBlockLimit) {
                items {
                  title
                  hasHorizonalPadding
                  hideBorder
                  contentCollection(limit: 10) {
                    items {
                      __typename
                      ... on TitleButtonCard {
                        ${QUERY_TITLE_BUTTON_CARD}
                      }
                      ... on ImagevideoCard {
                        ${QUERY_IMAGE_VIDEO_CARDS}
                      }
                      ... on SectionTitle {
                        ${QUERY_SECTION_TITLES}
                      }
                      ... on Hero {
                        ${QUERY_HEROES}
                      }
                      ... on LogosGrid {
                        ${QUERY_LOGOS_GRID}
                      }
                      ... on CardsContainer {
                        ${QUERY_CARDS_CONTAINER}
                      }
                      ... on TrendingArticles {
                        ${QUERY_TRENDING_ARTICLES}
                      }
                      ... on Article {
                        ${QUERY_ARTICLES}
                      }
                      ... on NewsDisplay {
                        ${QUERY_NEWS_CARD}
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const PAGE_QUERY = gql`
  ${PAGE_QUERY_RAW}
`;

export const getPageBySlug = (
  slug: string,
  contentBlockLimit?: number
): Promise<ApolloQueryResult<ContentfulPageResponse>> =>
  client.query<ContentfulPageResponse>({
    query: PAGE_QUERY,
    variables: {
      slug,
      contentBlockLimit,
    },
  });
