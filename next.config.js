/* eslint-disable import/no-commonjs */

require('dotenv').config();

const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD} = require('next/constants');
const {NEXT_TRUSTED_DOMAINS, CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, TWITTER_APP_ACCESS_TOKEN} = process.env;

module.exports = phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER || process.env.NODE_ENV.includes('dev');
  const isStaging = PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';

  const env = {
    API_URL: (() => {
      if (isDev) return 'http://localhost:3000/dev/api';
      if (isProd) return 'http://localhost:3000/prod/api';
      if (isStaging) return 'http://localhost:3000/staging/api';
      return '';
    })(),
    // OTHER KEY:VALUE PAIRS
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN,
    TWITTER_APP_ACCESS_TOKEN,
  };

  return {
    env,
    images: {
      domains: NEXT_TRUSTED_DOMAINS.split(','),
    },
    poweredByHeader: false,
  };
};
