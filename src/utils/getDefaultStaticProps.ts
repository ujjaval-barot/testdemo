import {GetStaticPropsResult} from 'next';
import {
  ContentfulPageResponse,
  DefaultPageProps,
  NavigationFooter,
  NavigationHeader,
  PageContentProps,
} from 'src/interfaces';
import {getPageBySlug} from 'src/queries/pages';
import {getArticleBySlug} from 'src/queries/pages/research-article';
import {getFooterData, getHeaderData} from '../queries/navigation';

type CustomProps<T> = T | {[key: string]: any};
type Props<T> = CustomProps<T> & {
  preview?: boolean;
};

const formatPageData = (data: ContentfulPageResponse): PageContentProps => {
  const item = data.seoCollection.items[0];

  return {
    seo: {...item},
    contentBlocksCollection: item.linkedFrom.pageCollection.items.flatMap(i => i.contentBlocksCollection.items),
  };
};

/**
 * getStaticProps
 *
 * Middleware to provide page with a default set of props required for all pages
 *
 **/
export default async function getDefaulStaticProps<T>(
  customProps: Props<T> | null,
  {
    pageSlug,
    articleSlug,
  }: {
    pageSlug?: string;
    articleSlug?: string;
  },
  contentBlockLimit?: number
): Promise<GetStaticPropsResult<DefaultPageProps>> {
  let navHeaderData: NavigationHeader = {
    linkHome: undefined,
    ctaText: undefined,
    ctaLink: undefined,
    linksCollection: {items: []},
  };
  let navFooterData: NavigationFooter = {
    footerLinkCollection: {items: []},
    socialLinksCollection: {items: []},
    locationInfo: {json: {}},
    copyright: {json: {}},
  };

  const context: {props: DefaultPageProps; revalidate: number} = {
    props: {
      navHeaderData,
      navFooterData,
      ...customProps,
    },
    revalidate: 60,
  };

  try {
    navHeaderData = (await getHeaderData())?.data?.siteHeaderCollection?.items?.[0];
    navFooterData = (await getFooterData())?.data?.siteFooterCollection?.items?.[0];

    context.props.navHeaderData = navHeaderData;
    context.props.navFooterData = navFooterData;

    if (pageSlug) {
      const pageData = await getPageBySlug(pageSlug, contentBlockLimit);

      if (Boolean(pageData?.data?.seoCollection?.items[0]?.linkedFrom?.pageCollection?.items?.length)) {
        context.props.pageData = formatPageData(pageData.data);
      } else {
        return {
          notFound: true,
        };
      }
    } else if (articleSlug) {
      const articleData = await getArticleBySlug(articleSlug);

      if (Boolean(articleData?.data?.seoCollection?.items[0]?.linkedFrom?.articleCollection?.items?.length)) {
        const seo = articleData.data.seoCollection.items[0];
        const data = seo.linkedFrom?.articleCollection?.items?.[0];

        context.props.articleData = {
          seo: {...seo},
          content: {...data},
        };
      } else {
        return {
          notFound: true,
        };
      }
    }
  } catch (error) {
    console.error({error});
  }

  return context;
}
