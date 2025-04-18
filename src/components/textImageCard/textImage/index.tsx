import React from 'react';
import Image from 'next/image';

import {
  Container,
  ImageVideo,
  InsetImage,
  TextPart,
  TextContainer,
  Subtitle,
  SecondSubtitle,
  Title,
  Content,
  VideoWrap,
} from './textImageCard.styles';

import {PrimaryButtonLight} from 'src/components/buttons/primaryLight';
import {ImageVideoCardProps} from 'src/interfaces';
import Video from 'src/components/core/video';
import documentToReactComponents from 'utils/documentToReactComponents';
import {useWindowSize} from 'hooks/useWindowSize';
import {LinkBlockDisplay} from 'components/linkBlockDisplay';

export const TextImageCard: React.FC<ImageVideoCardProps> = props => {
  const {
    internalName,
    subtitle,
    title,
    image,
    videoLink,
    description,
    linkBlocksCollection,
    cta,
    reverse,
    insetImage,
    secondSubtitle,
  } = props;
  const {windowSizes, isMobile} = useWindowSize();

  return (
    <Container id={internalName} imageLeft={reverse}>
      <ImageVideo>
        {videoLink ? (
          <VideoWrap>
            <Video url={videoLink} {...(isMobile && {width: windowSizes.width})} />
          </VideoWrap>
        ) : (
          image?.url &&
          (insetImage ? (
            <InsetImage imageLeft={reverse}>
              <Image src={image.url} layout="fill" objectFit="contain" />
            </InsetImage>
          ) : (
            <Image src={image.url} layout="fill" objectFit="cover" />
          ))
        )}
      </ImageVideo>
      <TextPart imageLeft={reverse}>
        <TextContainer>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {title && <Title>{title}</Title>}
          {secondSubtitle && <SecondSubtitle>{secondSubtitle}</SecondSubtitle>}
          {description && <Content>{documentToReactComponents(description)}</Content>}
          {linkBlocksCollection && <LinkBlockDisplay {...linkBlocksCollection} />}
          {cta?.link && (
            <a href={cta.link}>
              <PrimaryButtonLight>{cta.text}</PrimaryButtonLight>
            </a>
          )}
        </TextContainer>
      </TextPart>
    </Container>
  );
};

export default TextImageCard;
