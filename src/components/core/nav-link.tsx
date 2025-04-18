/**
 * Navigation Link component
 * Differs from regular Link component, because this component is aware
 * of the routers current location, therefore it can apply active states
 * to inform users which page they're on
 */

import React from 'react';
import {useRouter} from 'next/router';
import NextLink from './link';
import styled from 'styled-components';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
}

interface StyledNavLinkProps {
  readonly isActive: boolean;
}

const StyledNavLink = styled.a<StyledNavLinkProps>`
  color: ${({isActive, theme}) => (isActive ? theme.colors.blue3 : theme.colors.grey)};
  text-decoration: ${({isActive}) => (isActive ? 'underline' : 'none')};
`;

export const NavLink: React.FC<NavLinkProps> = ({href, isExternal, children}): JSX.Element => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <StyledNavLink isActive={isActive}>
      <NextLink href={href} isExternal={isExternal}>
        {children}
      </NextLink>
    </StyledNavLink>
  );
};

NavLink.displayName = 'NavLink';

export default NavLink;
