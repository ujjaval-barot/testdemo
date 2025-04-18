/**
 * You can include shared interfaces/types in a separate file
 * and then use them in any component by importing them.
 */

import {componentMap} from 'components/componentMap';

export interface CommonProps {
  id: number;
  name: string;
}

export interface ActionReturnProps {
  type: string;
  payload: any;
}

/**
 * Contentful
 **/

export type ContentfulRichTextJSON = {
  [key: string]: any;
};

export interface ContentfulSys {
  firstPublishedAt: string;
}

/**
 * SEO
 **/

export enum TITLE_POSITION {
  'BEFORE' = 'BEFORE',
  'AFTER' = 'AFTER',
}

export interface HeadProps {
  title: string;
  description?: string;
  image?: ImageProps;
  keywords?: string[];
  canonical?: string;
  isIndexed?: boolean;
  titleDelimiter?: string;
  titlePosition?: keyof typeof TITLE_POSITION;
}

export type SEO = Omit<HeadProps, 'titleDelimiter' | 'titlePosition'>;

/**
 * Navigation
 **/
export interface NavItem {
  __typename?: 'HeaderLink' | 'HeaderLinkDropdown';
  title: string;
  link?: string;
  isHeader: boolean;
}

export interface NavItemWithDropdown extends NavItem {
  dropdownLinksCollection: {
    items: NavItem[];
  };
}

export type NavigationHeader = {
  linkHome?: string;
  ctaText?: string;
  ctaLink?: string;
  linksCollection?: {items: Array<NavItem | NavItemWithDropdown>};
};

export interface NavigationHeaderResponse {
  siteHeaderCollection: {
    items: NavigationHeader[];
  };
}

export interface NavigationFooter {
  footerLinkCollection: {
    items: NavItem[];
  };
  socialLinksCollection: {
    items: SocialLink[];
  };
  locationInfo: {
    json: ContentfulRichTextJSON;
  };
  copyright: {
    json: ContentfulRichTextJSON;
  };
}

export interface NavigationFooterResponse {
  siteFooterCollection: {
    items: NavigationFooter[];
  };
}

export interface SocialLink {
  link: string;
  icon: ImageProps;
}

/**
 * Pages
 *
 **/

export type DefaultPageProps = {
  pageData?: PageContentProps;
  articleData?: ArticleContentProps;
  navHeaderData: NavigationHeader;
  navFooterData: NavigationFooter;
};

export interface GenericContentProps {
  seo: SEO;
}

export interface PageContentProps extends GenericContentProps {
  contentBlocksCollection: ContentBlock[];
}

export interface ArticleContentProps extends GenericContentProps {
  content: ArticleProps;
}

export interface ContentBlock {
  title: string;
  hasHorizonalPadding: boolean;
  hideBorder: boolean;
  contentCollection: {
    items: Array<ImageVideoCardProps>;
  };
}

export interface GenericContentfulResponse<T> {
  seoCollection: {
    items: Array<
      HeadProps & {
        linkedFrom: T;
      }
    >;
  };
}

export type ContentfulPageResponse = GenericContentfulResponse<{
  pageCollection: {
    items: Array<{
      contentBlocksCollection: {
        items: ContentBlock[];
      };
    }>;
  };
}>;

export type ContentfulArticleResponse = GenericContentfulResponse<{
  articleCollection: {
    items: ArticleProps[];
  };
}>;

/**
 * Common
 **/

export interface CTA {
  link: string;
  text: string;
}

/**
 * Components
 **/

export interface ImageProps {
  url: string;
  description?: string;
}

export interface ImageVideoCardProps {
  __typename: keyof typeof componentMap;
  internalName?: string;
  subtitle?: string;
  title?: string;
  image?: ImageProps;
  videoLink?: string;
  description?: {
    json: ContentfulRichTextJSON;
  };
  linkBlocksCollection?: LinkBlocks;
  cta?: CTA;
  reverse: boolean;
  insetImage: boolean;
  secondSubtitle?: string;
}

export interface HeroProps {
  title?: string;
  bordered?: boolean;
  description?: {
    json: ContentfulRichTextJSON;
  };
  props?: any;
  ctasCollection?: {
    items: CTA[];
  };
  image?: ImageProps;
  showS3Logo?: boolean;
  article?: ArticleProps;
  darkButton?: boolean;
}

export interface TagArrayProp {
  id: string;
  name: string;
}

export interface ArticleTag {
  sys?: {
    id: string;
  };
  id?: string;
  name: string;
  type: string;
  options: any[];
}

export interface ArticleProps {
  seo: {
    pageSlug: string;
  };
  title: string;
  featuredImage?: ImageProps;
  content: {
    json: ContentfulRichTextJSON;
    links?: {
      assets: {
        block: {
          url: string;
        };
      };
    };
  };
  footnote?: {
    content: {
      json: ContentfulRichTextJSON;
    };
  };
  author?: {
    json: ContentfulRichTextJSON;
  };
  relatedArticles?: TrendingCardsProps;
  publishedAt?: string;
  sys: ContentfulSys;
  contentfulMetadata: {
    tags: TagArrayProp[];
  };
}

export interface LogoData {
  logo: ImageProps;
}

export interface LogosGridProps {
  logosCollection: {
    items: LogoData[];
  };
}

export interface FaqData {
  question: string;
  answer: string;
  content: {
    json: ContentfulRichTextJSON;
  };
}

export interface FaqProps {
  faqsCollection: {
    items: FaqData[];
  };
}

export interface CardProps {
  title: string;
  subtitle: string;
  description: {
    json: ContentfulRichTextJSON;
  };
}

export interface CardsContainerProps {
  cardsCollection: {
    items: Array<CardProps>;
  };
}

export interface TrendingCardsProps {
  articlesCollection: {
    items: ArticleProps[];
  };
  tags: ArticleTag[] | null;
}

export interface ArticlesResponse {
  articleCollection: {
    total: number;
    items: ArticleProps[];
  };
}

export interface RecentArticleVars {
  skip?: number;
  filters?: string[] | null;
  searchTerm?: string;
}

export interface Tweet {
  id: string;
  text: string;
  created_at: string;
}

export interface TwitterResponse {
  data?: Tweet[];
  status?: string;
}

export interface CareersResponse {
  careerCollection: {
    items: CareerInterface[];
  };
}

export interface CareerInterface {
  jobDepartment?: string;
  jobTitle?: string;
  time?: string;
  location?: string;
  salary?: string;
  content: {
    json: ContentfulRichTextJSON;
  };
}

export interface LinkBlocks {
  items: LinkBlockCard[];
}

export interface LinkBlockCard {
  name: string;
  url: string;
}

export interface LegalProps {
  legalsCollection: {
    items: Legalnterface[];
  };
}

export interface Legalnterface {
  question: string;
  answer: string;
}
