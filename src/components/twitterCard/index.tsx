import FormattedDate from 'components/common/formatted-date';
import {Tweet} from 'interfaces';
import React, {useMemo} from 'react';
import {
  CardContainer,
  LogoContainer,
  PartnersContainer,
  ContentContainer,
  DateContainer,
  PartnersStyle,
  ContentStyle,
  DateStyle,
  ImageTwitter,
} from './twitterCard.styles';

interface CardProps {
  tweet: Tweet;
}

export const TwitterCard: React.FC<CardProps> = ({tweet}) => {
  const formattedTweet = useMemo(() => {
    return tweet.text
      .replace(/http(s|):\/\/([^\s]+)/g, '<a href="http$1://$2">http$1://$2</a>')
      .replace(/\\n/g, '<br />')
      .replace(/\@(\w+)/g, '<a href="https://twitter.com/$1">@$1</a>')
      .replace(/\#(\w+)/g, '<a href="https://twitter.com/hashtag/$1">#$1</a>');
  }, [tweet]);

  return (
    <CardContainer>
      <LogoContainer>
        <ImageTwitter />
      </LogoContainer>
      <PartnersContainer>
        <PartnersStyle href="https://twitter.com/S3Partners">S3 partners</PartnersStyle>
      </PartnersContainer>
      <ContentContainer>
        <ContentStyle dangerouslySetInnerHTML={{__html: formattedTweet}} />
      </ContentContainer>
      <DateContainer>
        <DateStyle>
          <FormattedDate date={tweet.created_at} />
        </DateStyle>
      </DateContainer>
    </CardContainer>
  );
};
