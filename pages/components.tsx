import React from 'react';
import styled from 'styled-components';

import {Footer} from 'src/components/footer/index';
import {Nav} from 'src/components/nav/index';
import {DefaultPageProps} from 'src/interfaces';
import getDefaulStaticProps from 'src/utils/getDefaultStaticProps';
import SiteWrap from 'src/components/common/site-wrap';
import {GetStaticProps} from 'next';
import slugify from 'utils/slugify';
import {List} from 'components/core/list';

const CategoryTextStyled = styled.h4`
  font-size: ${({theme}) => `${theme.typography.fontSize.medium}px`};
  letter-spacing: 5px;
  color: ${({theme}) => theme.colors.darkGrey};
  margin: 50px 0px 40px;
`;

export const Spacer = styled.div`
  height: 40px;
  width: 100%;
`;

const ItemTextStyled = styled.h6`
  font-family: sans-serif;
  font-size: ${({theme}) => `${theme.typography.fontSize.extraSmall}px`};
  font-weight: ${({theme}) => theme.typography.fontWeight.regular};
  letter-spacing: 1px;
  color: ${({theme}) => theme.colors.greyText};
  margin: 20px 0px 20px;
`;

const copy = (slug: string) => {
  const url = `${location.href.split('#')[0]}#${slug}`;
  navigator.clipboard.writeText(url);
};
export const ItemText: React.FC = ({children}) => {
  const slug = slugify(children?.toString() ?? '');
  return (
    <a href={`#${slug}`} id={slug} onClick={() => copy(slug)}>
      <ItemTextStyled>{children}</ItemTextStyled>
    </a>
  );
};

const CategoryText: React.FC = ({children}) => {
  const slug = slugify(children?.toString() ?? '');
  return (
    <a href={`#${slug}`} id={slug} onClick={() => copy(slug)}>
      <CategoryTextStyled>{children}</CategoryTextStyled>
    </a>
  );
};

export const Components: React.FC<DefaultPageProps> = ({navHeaderData, navFooterData, pageData}): JSX.Element => {
  return (
    <React.Fragment>
      <Nav navData={navHeaderData} />
      <SiteWrap>
        <CategoryText>Contentful Components</CategoryText>
      </SiteWrap>
      <List pageData={pageData!} />
      <SiteWrap hasPadding={true}>
        <CategoryText>Footer</CategoryText>
      </SiteWrap>
      <Footer footerData={navFooterData} />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return getDefaulStaticProps(null, {pageSlug: 'components'}, 20);
};

export default Components;
