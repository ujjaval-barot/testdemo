import React from 'react';
import {FaqProps} from 'interfaces';
import {FAQ_QUERY} from 'src/queries/pages/faq';

import {Footer} from 'components/footer/index';
import {Nav} from 'components/nav/index';
import {TitleButtonCard} from 'components/titleButtonCard/';
import {FaqCards} from 'src/components/faq/display';
import SiteWrap from 'components/common/site-wrap';

import {GetStaticProps} from 'next';
import getDefaulStaticProps from 'utils/getDefaultStaticProps';
import {DefaultPageProps} from 'interfaces';
import {useQuery} from '@apollo/client';
import {List} from 'components/core/list';
import {Head} from 'components';

type Props = DefaultPageProps;

export const CareersOverview: React.FC<Props> = ({navHeaderData, navFooterData, pageData}): JSX.Element => {
  const {data, error} = useQuery<FaqProps>(FAQ_QUERY);

  if (error) console.error({filterArticlesError: error.message});

  return (
    <React.Fragment>
      <Head {...pageData!.seo} />
      <Nav navData={navHeaderData} />
      <SiteWrap hasPadding={false} hideBorder={true}>
        <TitleButtonCard title="Frequently Asked Questions" />
      </SiteWrap>
      <FaqCards items={data?.faqsCollection.items} />
      {pageData && <List pageData={pageData} />}
      <Footer footerData={navFooterData} />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
  return await getDefaulStaticProps({preview}, {pageSlug: 'faq'});
};

export default CareersOverview;
