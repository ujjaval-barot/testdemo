import {ApolloQueryResult, gql} from '@apollo/client';
import {NavigationFooterResponse, NavigationHeaderResponse} from 'src/interfaces';
import client from '../../apollo-client';

const headerQuery = gql`
  query getSiteHeader {
    siteHeaderCollection(limit: 1) {
      items {
        linkHome
        ctaText
        ctaLink
        linksCollection(limit: 100) {
          items {
            __typename
            ... on HeaderLink {
              title
              link
            }
            ... on HeaderLinkDropdown {
              title
              link
              dropdownLinksCollection(limit: 100) {
                items {
                  __typename
                  ... on HeaderLink {
                    title
                    link
                    isHeader
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

export const getHeaderData = (): Promise<ApolloQueryResult<NavigationHeaderResponse>> => {
  return client.query<NavigationHeaderResponse>({query: headerQuery});
};

const footerQuery = gql`
  query getSiteFooter {
    siteFooterCollection(limit: 1) {
      items {
        footerLinkCollection(limit: 100) {
          items {
            ... on HeaderLink {
              title
              link
              isHeader
            }
          }
        }
        socialLinksCollection(limit: 10) {
          items {
            ... on IconLink {
              link
              icon {
                url
              }
            }
          }
        }
        locationInfo {
          json
        }
        copyright {
          json
        }
      }
    }
  }
`;

export const getFooterData = (): Promise<ApolloQueryResult<NavigationFooterResponse>> => {
  return client.query<NavigationFooterResponse>({
    query: footerQuery,
  });
};
