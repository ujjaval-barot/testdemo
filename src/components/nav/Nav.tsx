import React from 'react';
import {useState} from 'react';
import useScrollLock from 'src/hooks/useScrollLock';
import {NavigationHeader, NavItem, NavItemWithDropdown} from 'src/interfaces';
import SiteWrap from '../common/site-wrap';
import ConditionalWrapper from '../utils/ConditionalWrapper';
import {NestedList} from 'components/nav/nestedList';

import {
  MobileOption,
  MobileDropdownBlock,
  Hamburger,
  NavWrapper,
  BigWrapper,
  SmallWrapper,
  ButtonWrapper,
  NavMainLogo,
  InnerText,
  DesktopChevron,
  NavButtonStyle,
  DropdownBlock,
  DropdownColumn,
  MenuTitle,
  MenuSubtitle,
  LinkWrapper,
  IconContainer,
} from './nav.styles';

interface NavProps {
  navData: NavigationHeader;
}

export const Nav: React.FC<NavProps> = ({navData}): JSX.Element => {
  const [openMobile, setOpenMobile] = useState(false);
  const setScrollLocked = useScrollLock();

  const toggleMobileDropdown = () => {
    const shouldOpen = !openMobile;
    setOpenMobile(shouldOpen);
    setScrollLocked(shouldOpen);
  };

  const formatDropdownColumn = (data: NavItem[]): NavItem[][] => {
    // Split contents by column header
    let currentIndex = 0;
    const output: NavItem[][] = [[]];

    for (const item of data) {
      if (item.isHeader) {
        output.push([item]);
        currentIndex += 1;
      } else {
        output[currentIndex].push(item);
      }
    }

    return output.filter(i => Boolean(i.length));
  };

  return (
    <NavWrapper>
      <SiteWrap direction="row" hideXOverflow={false} hideBorder={true}>
        <BigWrapper mainDropdown={openMobile}>
          <NavMainLogo href={navData.linkHome} mainDropdown={openMobile} />
          <Hamburger onClick={toggleMobileDropdown} mainDropdown={openMobile} />
          <MobileDropdownBlock mainDropdown={openMobile}>
            {navData.linksCollection?.items.map((link, index) => (
              <React.Fragment key={index}>
                {(() => {
                  if (link.__typename === 'HeaderLinkDropdown') {
                    const _link = link as NavItemWithDropdown;
                    return (
                      <NestedList
                        dropdownLinksCollection={_link.dropdownLinksCollection}
                        __typename={_link.__typename}
                        title={_link.title}
                        link={_link.link}
                      />
                    );
                  }

                  return <MobileOption href={link.link}>{link.title}</MobileOption>;
                })()}
              </React.Fragment>
            ))}
          </MobileDropdownBlock>
        </BigWrapper>
        {navData.linksCollection?.items.map((item, index) => (
          <React.Fragment key={index}>
            <LinkWrapper>
              <ConditionalWrapper
                condition={item.__typename !== 'HeaderLinkDropdown'}
                wrapper={children => <a href={item.link}>{children}</a>}
              >
                <SmallWrapper dropdownWrapper={item.__typename === 'HeaderLinkDropdown'}>
                  <InnerText>{item.title}</InnerText>
                  {item.__typename === 'HeaderLinkDropdown' && (
                    <React.Fragment>
                      <IconContainer>
                        <DesktopChevron />
                      </IconContainer>
                      <DropdownBlock>
                        {formatDropdownColumn((item as NavItemWithDropdown).dropdownLinksCollection.items).map(
                          (col, colIndex) => (
                            <DropdownColumn key={colIndex}>
                              <MenuTitle>{col[0].title}</MenuTitle>
                              {col.slice(1).map((item, index) => (
                                <MenuSubtitle key={index} href={item.link}>
                                  {item.title}
                                </MenuSubtitle>
                              ))}
                            </DropdownColumn>
                          )
                        )}
                      </DropdownBlock>
                    </React.Fragment>
                  )}
                </SmallWrapper>
              </ConditionalWrapper>
            </LinkWrapper>
          </React.Fragment>
        ))}
        <ButtonWrapper>
          <a href={navData.ctaLink}>
            <NavButtonStyle>{navData.ctaText}</NavButtonStyle>
          </a>
        </ButtonWrapper>
      </SiteWrap>
    </NavWrapper>
  );
};

Nav.displayName = 'Nav';

export default Nav;
