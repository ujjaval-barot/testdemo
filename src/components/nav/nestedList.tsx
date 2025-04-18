import React from 'react';
import {useState} from 'react';
import {NavItem} from 'src/interfaces';

import {
  NestedMenuBack,
  MobileChevronLeft,
  MobileChevronRight,
  MobileOption,
  MobileNestedList,
  MenuTitle,
  MenuSubtitle,
  MobileColumn,
} from './nav.styles';

interface NestedProps {
  __typename?: string;
  title: string;
  link?: string;
  dropdownLinksCollection: {
    items: NavItem[];
  };
}

export const NestedList: React.FC<NestedProps> = (props): JSX.Element => {
  const [openMobileNestedMenu, setOpenMobileNestMenu] = useState(false);

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

  const toggleMobileMenu = (force?: boolean) => {
    const menuOpen = force === undefined ? !openMobileNestedMenu : force;
    setOpenMobileNestMenu(menuOpen);
  };

  return (
    <MobileOption onClick={() => toggleMobileMenu()}>
      {props.title}
      <MobileChevronRight />
      <MobileNestedList productDropdown={openMobileNestedMenu}>
        <NestedMenuBack onClick={() => toggleMobileMenu(false)}>
          <MobileChevronLeft />
          <p>{props.title}</p>
        </NestedMenuBack>
        {(() => {
          const formattedItems = formatDropdownColumn(props.dropdownLinksCollection.items);
          return formattedItems.map((col, colIdx) => (
            <MobileColumn key={colIdx}>
              <MenuTitle>{col[0].title}</MenuTitle>
              {col.slice(1).map((nestedItem, nestedIdx) => (
                <MenuSubtitle key={nestedIdx} href={nestedItem.link} onClick={e => e.stopPropagation()}>
                  {nestedItem.title}
                </MenuSubtitle>
              ))}
            </MobileColumn>
          ));
        })()}
      </MobileNestedList>
    </MobileOption>
  );
};
