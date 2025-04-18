import React from 'react';
import Image from 'next/image';

import {
  Container,
  ImageVideo,
  TextPart,
  ImageDisplay,
  TextContainer,
  BigText,
  Title,
  Content,
  ButtonContainer,
  CustomVideo,
  CustomLI,
  CustomUL,
} from './textImageBulletCard.styles';

import {PrimaryButtonLight} from 'src/components/buttons/primaryLight';

export interface TextVideoBulletProps {
  imgSrc: string;
  vidSrc?: string;
  textCTA?: string;
  title?: string;
  content: Array<ArrayContent>;
  list: Array<ArrayContent>;
  urlCTA?: string;
  image: boolean;
  left: boolean;
}

interface ArrayContent {
  content: string;
}

export const TextImageBulletCard: React.FC<TextVideoBulletProps> = props => {
  const Description = props.content.map((cont, index) => (
    <React.Fragment key={index}>
      <Content>{cont.content}</Content>
    </React.Fragment>
  ));
  const listItems = props.list.map((l, index) => <CustomLI key={index}>{l.content}</CustomLI>);

  return (
    <Container imageLeft={props.left}>
      <ImageVideo>
        <ImageDisplay videoDisplay={props.image}>
          <Image src={props.imgSrc} alt="BulletImage" layout="fill" />
        </ImageDisplay>
        <CustomVideo loop autoPlay muted videoDisplay={props.image} key={props.vidSrc}>
          <source src={props.vidSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </CustomVideo>
      </ImageVideo>
      <TextPart>
        <TextContainer>
          <BigText>Trial Our App</BigText>
          <Title>{props.title}</Title>
          {Description}
          <CustomUL>{listItems}</CustomUL>
          <ButtonContainer>
            <a href={props.urlCTA}>
              <PrimaryButtonLight>{props.textCTA}</PrimaryButtonLight>
            </a>
          </ButtonContainer>
        </TextContainer>
      </TextPart>
    </Container>
  );
};
