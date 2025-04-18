import {NavItem} from 'src/interfaces';

export default function splitNavItemsIntoColumns(data: NavItem[]): NavItem[][] {
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
}
