import {gql} from '@apollo/client';
import {QUERY_LEGAL_CARDS} from './components';

const QUERY_LEGAL_CARDS_RAW = `
query getAllLegal {
  ${QUERY_LEGAL_CARDS}
}
`;

export const LEGAL_QUERY = gql`
  ${QUERY_LEGAL_CARDS_RAW}
`;
