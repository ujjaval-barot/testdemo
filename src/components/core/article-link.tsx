import React from 'react';
import SiteWrap from 'components/common/site-wrap';
import {PageContentProps} from 'src/interfaces';
import getComponentByTypename from 'components/componentMap';

interface Props {
  pageData: PageContentProps;
}

export const List: React.FC<Props> = ({pageData}) => (
  <React.Fragment>
    {pageData?.contentBlocksCollection?.map((contentBlock, index) => (
      <SiteWrap hasPadding={contentBlock.hasHorizonalPadding} key={index}>
        {contentBlock.contentCollection.items.map((content, contentIndex) => (
          <React.Fragment key={contentIndex}>{getComponentByTypename(content)}</React.Fragment>
        ))}
      </SiteWrap>
    ))}
  </React.Fragment>
);
