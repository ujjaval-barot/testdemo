import React from 'react';
import useSWR from 'swr';

import {TwitterResponse} from 'interfaces';

import {TwitterCard} from 'src/components/twitterCard';

import {ContainerTwitter, ErrorMessageContainer} from './twitter-carousel.styles';
import Carousel from 'components/common/carousel/carousel';

export interface TweetArrayInterface {
  tweet: string;
}

const fetcher = (): Promise<TwitterResponse> => {
  return fetch(`api/twitter`, {
    method: 'GET',
  }).then(res => res.json());
};

export const TwitterCarousel: React.FC = () => {
  const {data, error} = useSWR('/tweets/search/recent', fetcher);
  if (error) console.error('Error getting Twitter feed ', error);
  if (!data) return null;

  return (
    <React.Fragment>
      {data && (
        <ContainerTwitter>
          <ErrorMessageContainer showError={data?.status === 'fail'}>Error obtaining data</ErrorMessageContainer>
          <Carousel carouselTwitter={true} sideButtons={Object.keys(data).length > 1}>
            {data?.data?.map(tweet => (
              <TwitterCard tweet={tweet} key={tweet.id} />
            ))}
          </Carousel>
        </ContainerTwitter>
      )}
    </React.Fragment>
  );
};
