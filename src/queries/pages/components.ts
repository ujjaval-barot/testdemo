const LONG_TEXT = `
{
  json
}
`;

const IMAGE = `
{
  url
  description
}
`;

const CONTENTFUL_SYS = `
  sys {
    firstPublishedAt
  }
`;

export const QUERY_SECTION_TITLES = `
  title
`;

export const QUERY_IMAGE_VIDEO_CARDS = `
  internalName
  title
  subtitle
  image ${IMAGE}
  videoLink
  description ${LONG_TEXT}
  linkBlocksCollection(limit: 6) {
    items {
      name
      url
    }
  }
  cta {
    text
    link
  }
  reverse
  insetImage
  secondSubtitle
`;

export const QUERY_CAREER = `
  careerCollection(limit: 8) {
    items {
      jobDepartment
      jobTitle
      time
      location
      salary
      content ${LONG_TEXT}
    }
  }
`;

export const ARTICLE_FOOTNOTE = `
  footnote {
    content {
      json
    }
  }
`;

export const QUERY_ARTICLES = `
  title
  featuredImage ${IMAGE}
  seo {
    pageSlug
  }
  publishedAt
  contentfulMetadata {
    tags {
      id
      name
    }
  }
  ${CONTENTFUL_SYS}
`;

export const QUERY_LOGOS_GRID = `
  logosCollection(limit: 15) {
    items {
      logo {
        url
        description
      }
    }
  }
`;

export const QUERY_FAQ_CARDS = `
  faqsCollection(limit: 15) {
    items {
      question
      content ${LONG_TEXT}
    }
  }
`;

export const QUERY_CARDS_CONTAINER = `
  cardsCollection(limit: 4) {
    items {
      title
      subtitle
      description ${LONG_TEXT}
    }
  }
`;

export const QUERY_TITLE_BUTTON_CARD = `
  title
  subtitle
  ctas {
    text
    link
  }
  extraHorizontalPadding
  blueBackground
`;

export const QUERY_HEROES = `
    __typename
    title
    image ${IMAGE}
    showS3Logo
    description ${LONG_TEXT}
    ctasCollection(limit: 2) {
      items {
        link
        text
      }
    }
    article {
      __typename
      ... on Article {
        ${QUERY_ARTICLES}
      }
    }
`;

export const QUERY_TRENDING_ARTICLES = `
  articlesCollection(limit: 5) {
    items {
      ${QUERY_ARTICLES}
    }
  }
`;

export const QUERY_HORIZONTAL_RULE = `
  show
`;

export const QUERY_LEGAL_CARDS = `
  legalsCollection(limit: 20) {
    items {
      question
      answer
    }
  }
`;

export const QUERY_NEWS_CARD = `
  newsCardsCollection(limit: 20) {
    items {
      title
      date
      source
      image ${IMAGE}
      cta {
        text
        link
      }
    }
  }
`;
