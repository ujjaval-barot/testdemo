/**
 * Link component
 * Use for all linking (external and internal)
 */

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface NextLinkProps {
  href: string; // The path inside pages directory
  children: React.ReactNode;
  as?: string; // The path that will be rendered in the browser URL bar. Used for dynamic routes
  scroll?: boolean; // Scroll to the top of the page after a navigation
  target?: string;
  prefetch?: boolean; // Prefetch the page in the background
  replace?: boolean; // Replace the current history state instead of adding a new url into the stack
  isExternal?: boolean; // Does the link navigate outside this app?
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaHidden?: boolean;
}

const StyledAnchor = styled.a`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
    text-decoration: inherit;
  }
`;

const isAbsoluteUrl = (url: string): boolean => url.includes('://') || url.includes('//') || url.includes('mailto');

export const NextLink: React.FC<NextLinkProps> = ({
  href,
  as,
  children,
  scroll = true,
  target = '_blank',
  prefetch = true,
  replace = false,
  isExternal = false,
  ariaLabel,
  ariaLabelledby,
  ariaHidden,
  ...rest
}) => {
  if (isAbsoluteUrl(href) || isExternal) {
    return (
      <StyledAnchor
        href={href}
        target={target}
        rel="noopener noreferrer"
        aria-labelledby={ariaLabelledby}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        {...rest}
      >
        {children}
      </StyledAnchor>
    );
  }

  return (
    <Link href={href} as={as} prefetch={prefetch} replace={replace} scroll={scroll} passHref {...rest}>
      <StyledAnchor aria-labelledby={ariaLabelledby} aria-label={ariaLabel} aria-hidden={ariaHidden}>
        {children}
      </StyledAnchor>
    </Link>
  );
};

NextLink.displayName = 'NextLink';

export default NextLink;
