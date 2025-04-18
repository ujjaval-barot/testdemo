import React from 'react';
import Image from 'next/image';
import documentToReactComponents from 'utils/documentToReactComponents';

import {
  FooterLogoStyle,
  FooterSubtitleStyle,
  LowerBlock,
  FooterLinkStyle,
  LowerWrapper,
  FooterStyle,
  FooterLogoDiv,
  FooterTitleStyle,
  LinkStyle,
  SocialLinkWrapper,
} from './footer.styles';
import {NavigationFooter, NavItem} from 'src/interfaces';
import splitNavItemsIntoColumns from 'src/utils/splitNavItemsIntoColumns';
import {MinTablet, Phone} from '../core/resolution-containers';
import Spacing from '../common/spacing';
import {useWindowSize} from 'hooks/useWindowSize';
import SiteWrap from '../common/site-wrap';

interface FooterProps {
  footerData: NavigationFooter;
}

const footerColumns = (footerData: NavigationFooter): NavItem[][] => {
  let output: NavItem[][] = [];

  output = splitNavItemsIntoColumns(footerData.footerLinkCollection.items);

  return output;
};

const FooterCol: React.FC<{col: NavItem[]}> = ({col}) => (
  <LowerBlock>
    <FooterTitleStyle>{col[0].title}</FooterTitleStyle>
    {col.slice(1).map((footerLink, index) => (
      <FooterLinkStyle key={index}>
        <LinkStyle href={footerLink.link}>{footerLink.title}</LinkStyle>
      </FooterLinkStyle>
    ))}
  </LowerBlock>
);

export const Footer: React.FC<FooterProps> = ({footerData}): JSX.Element => {
  const {isMobile} = useWindowSize();
  const socialIconSize = isMobile ? 40 : 22;

  return (
    <FooterStyle>
      <SiteWrap>
        <FooterLogoDiv>
          <FooterLogoStyle>
            <Image src="/img/logoWhite.svg" width="123.88px" height="30px" alt="LogoWhie" />
          </FooterLogoStyle>
        </FooterLogoDiv>

        <LowerWrapper>
          {(() => {
            const cols = footerColumns(footerData);
            return (
              <React.Fragment>
                {cols.slice(0, 2).map((col, colIdx) => (
                  <React.Fragment key={colIdx}>
                    <FooterCol col={col} />
                  </React.Fragment>
                ))}
                <MinTablet>
                  <FooterSubtitleStyle>{documentToReactComponents(footerData.locationInfo)}</FooterSubtitleStyle>
                </MinTablet>
                <Phone>
                  <Spacing top={80} />
                </Phone>
                {cols.slice(2).map((col, colIdx) => (
                  <React.Fragment key={colIdx}>
                    <FooterCol col={col} />
                  </React.Fragment>
                ))}
                {Boolean(footerData?.socialLinksCollection?.items?.length) && (
                  <LowerBlock>
                    <SocialLinkWrapper>
                      {footerData.socialLinksCollection.items.map((social, socialIdx) => (
                        <LinkStyle href={social.link} key={socialIdx}>
                          <Image
                            src={social.icon.url}
                            width={socialIconSize}
                            height={socialIconSize}
                            objectFit="contain"
                          />
                        </LinkStyle>
                      ))}
                    </SocialLinkWrapper>
                  </LowerBlock>
                )}
              </React.Fragment>
            );
          })()}
          <Phone>
            <FooterSubtitleStyle>{documentToReactComponents(footerData.locationInfo)}</FooterSubtitleStyle>
          </Phone>
          <FooterSubtitleStyle>{documentToReactComponents(footerData.copyright)}</FooterSubtitleStyle>
        </LowerWrapper>
      </SiteWrap>
    </FooterStyle>
  );
};

export default Footer;
