import {gql} from '@apollo/client';
import {QUERY_FAQ_CARDS} from './components';

const QUERY_FAQ_CARDS_RAW = `
query getAllFAQs {
  ${QUERY_FAQ_CARDS}
}
`;

export const FAQ_QUERY = gql`
  ${QUERY_FAQ_CARDS_RAW}
`;
