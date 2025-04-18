import styled from 'styled-components';

export const BorderBlock = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid ${props => props.theme.colors.darkGrey};
  margin: 0;
`;

export const CareerBlock = styled.div`
  width: 93%;
  height: auto;
  display: block;
  position: relative;
  margin: 60px 0 60px auto;

  ${({theme}) => theme.media.maxTablet} {
    width: 90%;
    margin: 60px auto;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const GroupBlock = styled.div`
  width: 100%;
  height: auto;
  display: inline-block;
  padding-bottom: 15px;

  ${({theme}) => theme.media.maxTablet} {
    padding-bottom: 30px;
  }
`;

export const JobTitle = styled.div<{mobile: boolean}>`
  width: 70%;
  height: auto;
  padding-bottom: 15px;
  display: ${({mobile}) => (mobile ? 'none' : 'inline-block')};

  ${({theme}) => theme.media.maxTablet} {
    padding-top: 15px;
    width: 90%;
    display: ${({mobile}) => (mobile ? 'inline-block' : 'none')};
  }
`;

export const SummaryDescription = styled.div`
  display: block;
  width: 70%;
  height: auto;

  ul {
    padding: 20px;
  }

  li {
    font-family: ${({theme}) => theme.typography.secondaryFontFamily};
    font-size: ${({theme}) => theme.typography.fontSize.small}px;
    font-weight: ${({theme}) => theme.typography.fontWeight.semiThin};
    margin: 0;
    padding: 0;
    line-height: 24px;
  }

  p {
    font-family: ${({theme}) => theme.typography.secondaryFontFamily};
    font-size: ${({theme}) => theme.typography.fontSize.small}px;
    font-weight: ${({theme}) => theme.typography.fontWeight.semiThin};
    line-height: 24px;
  }

  ${({theme}) => theme.media.maxTablet} {
    width: 100%;
  }
`;

export const InfoBar = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;

  ${({theme}) => theme.media.maxTablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const IconContainer = styled.div`
  width: auto;
  height: auto;
  display: inline-block;
  margin-right: 15px;
`;

export const InfoBarText = styled.div`
  width: auto;
  height: auto;
  display: inline-block;
  font-size: ${props => props.theme.typography.fontSize.tiny}px;
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  margin-right: 33px;
  padding: 0px;
  vertical-allign: middle;
  text-transform: uppercase;
`;

export const ContactFormCarrer = styled.div`
  display: block;
  width: 50%;
  height: auto;
  margin-bottom: 20px;

  ${({theme}) => theme.media.maxTablet} {
    width: 100%;
  }
`;
