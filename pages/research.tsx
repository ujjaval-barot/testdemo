import React, {useEffect, useRef, useState} from 'react';
import {ArticlesResponse, ArticleTag, DefaultPageProps, RecentArticleVars} from 'interfaces';
import {RECENT_ARTICLE_LIMIT, RECENT_ARTICLES_QUERY} from 'src/queries/pages/research';

import {Footer} from 'components/footer/index';
import {Nav} from 'components/nav/index';
import {Filter} from 'components/filter/';
import {ArticleCardDisplay} from 'components/articleCardDisplay/';

import {GetStaticProps} from 'next';
import getDefaulStaticProps from 'utils/getDefaultStaticProps';
import {useQuery} from '@apollo/client';
import SiteWrap from 'components/common/site-wrap';
import {Head} from 'components';
import {Title} from 'components/titleButtonCard/titleButtonCard.styles';
import {BackToAllButton, Results, TitleRow, TitleSiteWrap} from 'components/research/research.styled';
import {useRouter} from 'next/router';
import {ChevronLeftSmall} from '../src/assets/dynamicIcon';
import {SearchInput} from 'components/searchInput/searchInput';

interface ResearchOverviewProps {
  filters: ArticleTag[] | null;
}

type Props = DefaultPageProps & ResearchOverviewProps;

export const ResearchOverview: React.FC<Props> = ({navHeaderData, navFooterData, filters, pageData}): JSX.Element => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router.query.search ? router.query.search.toString() : '');

  const [currentFilters, setCurrentFilters] = useState<string[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const onFilterChange = (filters: string[]) => {
    setCurrentFilters(filters?.length ? filters : null);
  };

  const {loading, data, error, previousData} = useQuery<ArticlesResponse, RecentArticleVars>(RECENT_ARTICLES_QUERY, {
    variables: {
      skip: currentPage * RECENT_ARTICLE_LIMIT,
      filters: currentFilters,
      searchTerm: searchValue,
    },
  });
  if (error) console.error({filterArticlesError: error.message});

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 200);
  };

  // Sync the searchValue with the query parameter on initial load
  useEffect(() => {
    if (router.query.search && typeof router.query.search === 'string') {
      setSearchValue(router.query.search);
    }
  }, [router.query.search]);

  const handleSearch = (value: string) => {
    // Update the query parameter in the URL
    router.push({
      pathname: router.pathname,
      query: {...router.query, search: value},
    });
  };

  const totalItems = data?.articleCollection.total ?? previousData?.articleCollection.total ?? 0;
  const hasSearch = searchValue?.trim().length > 0;

  return (
    <React.Fragment>
      <Head {...pageData!.seo} />
      <Nav navData={navHeaderData} />
      <TitleSiteWrap>
        <BackToAllButton href="/research">
          <ChevronLeftSmall />
          Back to all
        </BackToAllButton>
        <TitleRow>
          <Title titleCard={false}>{hasSearch ? 'Search results' : 'All Articles'}</Title>
          <SearchInput value={searchValue} onSearch={handleSearch} loading={loading} />
        </TitleRow>
        <Results>
          {hasSearch ? `${totalItems} stories about "${searchValue}"` : ''}
        </Results>
      </TitleSiteWrap>
      <SiteWrap hasPadding={false}>
        {filters && <Filter filters={filters} onFilterChange={onFilterChange} currentFilters={currentFilters} />}
        <ArticleCardDisplay
          ref={scrollRef}
          data={data?.articleCollection.items}
          total={data?.articleCollection.total}
          loading={loading}
          currentPage={currentPage}
          setCurrentPage={(page: number) => handlePageChange(page)}
        />
      </SiteWrap>
      <Footer footerData={navFooterData} />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const customProps: ResearchOverviewProps = {
    filters: null,
  };

  try {
    // Get list of all Contentful meta tags. Not possible through Graphql
    const tagRes = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/tags?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
    );
    const tagJSON = await tagRes.json();

    if (Boolean(tagJSON?.items?.length)) {
      customProps.filters = tagJSON.items;
    }
  } catch (err) {
    console.error(err);
  }

  return await getDefaulStaticProps<ResearchOverviewProps>(customProps, {pageSlug: 'research'});
};

export default ResearchOverview;
