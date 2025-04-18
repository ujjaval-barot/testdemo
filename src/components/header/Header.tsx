import React from 'react';

interface HeaderProps {
  prop?: any;
}

export const Header: React.FC<HeaderProps> = (): JSX.Element => {
  return <h1>Header</h1>;
};

Header.displayName = 'Header';

export default Header;
