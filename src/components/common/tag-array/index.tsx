import {TagArrayProp} from 'interfaces';
import React from 'react';
import {TagContainer, Tag, TagTextContainer} from './styles';

interface Props {
  tags: TagArrayProp[];
  compact?: boolean;
}

export const TagArray: React.FC<Props> = ({tags, compact = false}) => (
  <TagContainer compact={compact}>
    {tags.map((tag, index) => (
      <React.Fragment key={index}>
        <TagTextContainer>
          <Tag>{tag.name}</Tag>
        </TagTextContainer>
      </React.Fragment>
    ))}
  </TagContainer>
);
