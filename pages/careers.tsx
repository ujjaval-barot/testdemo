import React from 'react';
import {CareersResponse} from 'interfaces';
import {CAREERS_QUERY} from 'src/queries/pages/careers';

import {Footer} from 'components/footer/index';
import {Nav} from 'components/nav/index';
import {CareerCards} from 'src/components/careers/display';
import SiteWrap from 'components/common/site-wrap';

import {GetStaticProps} from 'next';
import getDefaulStaticProps from 'utils/getDefaultStaticProps';
import {DefaultPageProps} from 'interfaces';
import {useQuery} from '@apollo/client';
import {List} from 'components/core/list';
import {Head} from 'components';

type Props = DefaultPageProps;

export const CareersOverview: React.FC<Props> = ({navHeaderData, navFooterData, pageData}): JSX.Element => {
  const {data, error} = useQuery<CareersResponse>(CAREERS_QUERY);

  if (error) console.error({filterArticlesError: error.message});
  return (
    <React.Fragment>
      <Head {...pageData!.seo} />
      <Nav navData={navHeaderData} />
      {pageData && <List pageData={pageData} />}
      <SiteWrap hasPadding={false} hideBorder={true}>
        <CareerCards items={data?.careerCollection.items} />
      </SiteWrap>
      <Footer footerData={navFooterData} />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
  return await getDefaulStaticProps({preview}, {pageSlug: 'careers'});
};

export default CareersOverview;
