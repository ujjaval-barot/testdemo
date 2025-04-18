import React from 'react';
import {LegalProps} from 'interfaces';
import {LEGAL_QUERY} from 'src/queries/pages/legal';

import {Footer} from 'components/footer/index';
import {Nav} from 'components/nav/index';
import {TitleButtonCard} from 'components/titleButtonCard/';
import {LegalCards} from 'src/components/legal/';
import SiteWrap from 'components/common/site-wrap';

import {GetStaticProps} from 'next';
import getDefaulStaticProps from 'utils/getDefaultStaticProps';
import {DefaultPageProps} from 'interfaces';
import {useQuery} from '@apollo/client';
import {List} from 'components/core/list';
import {Head} from 'components';

type Props = DefaultPageProps;

export const LegalOverview: React.FC<Props> = ({navHeaderData, navFooterData, pageData}): JSX.Element => {
  const {data, error} = useQuery<LegalProps>(LEGAL_QUERY);

  if (error) console.error({filterArticlesError: error.message});

  return (
    <React.Fragment>
      <Head {...pageData!.seo} />
      <Nav navData={navHeaderData} />
      <SiteWrap hasPadding={false} hideBorder={true}>
        <TitleButtonCard title="Privacy and Disclosure" />
      </SiteWrap>
      <LegalCards items={data?.legalsCollection.items} />
      {pageData && <List pageData={pageData} />}
      <Footer footerData={navFooterData} />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
  return await getDefaulStaticProps({preview}, {pageSlug: 'privacy'});
};

export default LegalOverview;
