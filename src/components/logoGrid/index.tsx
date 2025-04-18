import React from 'react';
import Image from 'next/image';
import {LogosGridProps} from 'src/interfaces';

import {GridLogos, ImageWrap, ImageSpace} from './logoGrid.styles';

export const LogosGrid: React.FC<LogosGridProps> = props => {
  const imageLogo = props.logosCollection?.items?.map(({logo: {url, description}}, index) => (
    <ImageSpace key={index}>
      <ImageWrap>
        <Image src={url} alt={description} width="100%" height="100%" layout="responsive" objectFit="contain" />
      </ImageWrap>
    </ImageSpace>
  ));

  return <GridLogos>{imageLogo}</GridLogos>;
};
