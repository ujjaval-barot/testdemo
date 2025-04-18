import {gql} from '@apollo/client';
import {QUERY_ARTICLES} from './components';

export const RECENT_ARTICLE_LIMIT = 4;

const RECENT_ARTICLES_QUERY_RAW = `
query getRecentArticles($skip: Int = 0, $filters: [String] = null, $searchTerm: String) {
  articleCollection(
    limit: ${RECENT_ARTICLE_LIMIT}, 
    skip: $skip, 
    order: [sys_firstPublishedAt_DESC],
    where: {
      AND: [
        {
          contentfulMetadata: {
            tags: {
              id_contains_some: $filters
            }
          }
        },
        {
          OR: [
            { title_contains: $searchTerm },
            { content_contains: $searchTerm }
          ]
        }
      ]
    }
  ) {
    total
    items {
      ${QUERY_ARTICLES}
    }
  }
}
`;

export const RECENT_ARTICLES_QUERY = gql`
  ${RECENT_ARTICLES_QUERY_RAW}
`;
