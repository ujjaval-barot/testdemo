import React from 'react';
import SiteWrap from 'components/common/site-wrap';
import {PageContentProps} from 'src/interfaces';
import getComponentByTypename from 'components/componentMap';
import {ItemText, Spacer} from 'pages/components';
import ConditionalWrapper from 'components/utils/ConditionalWrapper';

interface Props {
  pageData: PageContentProps;
}

export const ComponentsList: React.FC<Props> = ({pageData}) => (
  <React.Fragment>
    {pageData?.contentBlocksCollection?.map((contentBlock, index) => (
      <React.Fragment key={index}>
        <SiteWrap hasPadding={contentBlock.hasHorizonalPadding}>
          <ConditionalWrapper
            condition={!contentBlock.hasHorizonalPadding}
            wrapper={children => <SiteWrap>{children}</SiteWrap>}
          >
            <ItemText>{contentBlock.title}</ItemText>
          </ConditionalWrapper>
          {contentBlock.contentCollection.items.map((content, contentIndex) => (
            <React.Fragment key={contentIndex}>{getComponentByTypename(content)}</React.Fragment>
          ))}
        </SiteWrap>
        <Spacer />
      </React.Fragment>
    ))}
  </React.Fragment>
);
