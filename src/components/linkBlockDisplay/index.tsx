import {LinkBlocks} from 'interfaces';
import React from 'react';
import {LinkBlockCard} from '../linkBlock';
import {LinkBlockContainer} from './linkBlockCardDisplay.styles';

export const LinkBlockDisplay: React.FC<LinkBlocks> = props => {
  const TrialCards = props.items.map((card, index) => <LinkBlockCard title={card.name} url={card.url} key={index} />);

  return <LinkBlockContainer>{TrialCards}</LinkBlockContainer>;
};
