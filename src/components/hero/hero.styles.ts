import {PrimaryButtonDark} from 'components/buttons/primaryIconDark/primaryIconDark.styles';
import {PrimaryButtonLight} from 'components/buttons/primaryLight';
import FormattedDate from 'components/common/formatted-date';
import S3Logo from 'components/icons/s3-logo';
import styled, {css} from 'styled-components';

export const HeroContainer = styled.div<{border?: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  min-height: 360px;
  overflow: hidden;

  ${({theme}) => theme.media.maxTablet} {
    min-height: 359px;
    border: none;
    flex-direction: column;
  }
`;

export const GenericHero = styled.div<{border?: boolean}>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 120px;
  background: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.typography.primaryFontFamily};

  ${({theme}) => theme.media.maxTablet} {
    padding: 60px 30px;
  }
`;

export const ImageContainer = styled.div<{showS3Logo?: boolean}>`
  display: flex;
  flex: 0 0 34.5%;
  position: relative;
  border-right: 1px solid #1f1f1f;
  align-items: center;
  justify-content: center;

  & + ${GenericHero} {
    padding: 120px 60px;
    flex: 0 0 65.4%;

    ${({theme}) => theme.media.maxTablet} {
      padding: 30px;
    }
  }

  ${({theme}) => theme.media.maxTablet} {
    flex: 1;
    width: 100%;
    justify-content: ${({showS3Logo = false}) => (showS3Logo ? 'flex-start' : 'center')};

    ${({showS3Logo}) =>
      showS3Logo
        ? css`
            padding: 60px 30px 0;
          `
        : css`
            aspect-ratio: 375 / 300;
          `}
  }
`;

export const StyledS3Logo = styled(S3Logo)`
  ${({theme}) => theme.media.maxTablet} {
    width: 37px;
    height: 100px;
  }
`;

export const HeroTitle = styled.h1`
  width: 100%;
  font-size: ${props => props.theme.typography.fontSize.extraHuge}px;
  font-weight: ${props => props.theme.typography.fontWeight.regular};
  margin-bottom: 15px;
  margin: 30px 0 15px;

  ${({theme}) => theme.media.maxTablet} {
    font-size: ${props => props.theme.typography.fontSize.extraLarge}px;
    line-height: 36px;
    margin-top: 0px;
  }
`;

export const Description = styled.div<{hasDate: boolean}>`
  width: 100%;
  line-height: 24px;
  font-size: ${props => props.theme.typography.fontSize.small}px;
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  font-family: ${props => props.theme.typography.secondaryFontFamily};

  p {
    margin: 0;

    & + p {
      margin-top: 15px;
    }
  }

  ${({theme}) => theme.media.desktop} {
    max-width: 620px;
  }
`;

export const ArticleDate = styled(FormattedDate)`
  text-transform: uppercase;
  font-size: ${props => props.theme.typography.fontSize.tiny}px;
  line-height: 120%;
  margin-top: 15px;
`;

export const HeroButton = styled(PrimaryButtonDark)`
  margin-top: 30px;
`;

export const HeroButtonLight = styled(PrimaryButtonLight)`
  margin-top: 30px;
`;
