import React from 'react';
import {Footer} from 'src/components/footer/index';
import {Nav} from 'src/components/nav/index';

import {GetStaticProps} from 'next';
import {DefaultPageProps} from 'src/interfaces';
import getDefaulStaticProps from 'src/utils/getDefaultStaticProps';
import Head from 'components/core/head';
import {List} from 'components/core/list';

export const Landing: React.FC<DefaultPageProps> = ({pageData, navHeaderData, navFooterData}): JSX.Element => {
  return (
    <React.Fragment>
      <Head {...pageData!.seo} />
      <Nav navData={navHeaderData} />
      <List pageData={pageData!} />
      <Footer footerData={navFooterData} />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
  return await getDefaulStaticProps({preview}, {pageSlug: 'homepage'});
};

export default Landing;
