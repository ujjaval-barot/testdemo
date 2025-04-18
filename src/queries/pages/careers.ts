import {gql} from '@apollo/client';
import {QUERY_CAREER} from './components';

export const CAREERS_LIMIT = 10;

const CAREERS_QUERY_RAW = `
query getAllCareers {
  ${QUERY_CAREER}
}
`;

export const CAREERS_QUERY = gql`
  ${CAREERS_QUERY_RAW}
`;
