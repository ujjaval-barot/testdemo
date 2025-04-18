/**
 * Head Component
 * Used for setting meta data on pages
 */

import React from 'react';
import NextHead from 'next/head';
import {HeadProps, TITLE_POSITION} from 'src/interfaces';

enum DEFAULT_PROPS {
  SITE_NAME = '',
  TWITTER_USERNAME = '',
  DEFAULT_DESCRIPTION = '',
  DEFAULT_URL = '',
  DEFAULT_IMAGE = '',
  DEFAULT_TITLE_DELIMITER = '-',
}

const DEFAULT_KEYWORDS: string[] = ['key', 'words', 'here'];

const joinKeywords = (keywords?: string[]): string => {
  const keywordsArray = Array.isArray(keywords) ? keywords : DEFAULT_KEYWORDS;
  return keywordsArray.join(',');
};

const formatTitle = (
  title = '',
  delimiter: string = DEFAULT_PROPS.DEFAULT_TITLE_DELIMITER,
  titlePosition: keyof typeof TITLE_POSITION = TITLE_POSITION.AFTER
): string => {
  const defaultPosition = `${DEFAULT_PROPS.SITE_NAME} ${title && ` ${delimiter} ${title}`}`;
  switch (titlePosition) {
    case TITLE_POSITION.BEFORE:
      return `${title && `${title} ${delimiter} `} ${DEFAULT_PROPS.SITE_NAME}`;
    case TITLE_POSITION.AFTER:
      return defaultPosition;
    default:
      return defaultPosition;
  }
};

export const Head: React.FC<HeadProps> = ({
  title,
  description,
  image,
  keywords,
  canonical,
  isIndexed = true,
  titleDelimiter,
  titlePosition,
}): JSX.Element => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    {!isIndexed && <meta name="robots" content="noindex" />}
    <title>{title}</title>
    <meta name="og:title" content={formatTitle(title, titleDelimiter, titlePosition)} />
    <meta name="description" property="og:description" content={description || DEFAULT_PROPS.DEFAULT_DESCRIPTION} />
    <meta name="url" property="og:url" content={canonical || DEFAULT_PROPS.DEFAULT_URL} />
    <meta name="og:image" content={image?.url || DEFAULT_PROPS.DEFAULT_IMAGE} />
    <meta name="keywords" content={joinKeywords(keywords)} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={DEFAULT_PROPS.SITE_NAME} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={`@${DEFAULT_PROPS.TWITTER_USERNAME}`} />
    <meta name="twitter:creator" content={`@${DEFAULT_PROPS.TWITTER_USERNAME}`} />
    <link rel="canonical" href={canonical || DEFAULT_PROPS.DEFAULT_URL} />
  </NextHead>
);

Head.displayName = 'Head';

export default Head;
