import {css} from 'styled-components';

const baseSpacing = 8;
const setSpacing = (num: number): number => num * baseSpacing;

const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const timing = {
  faster: '0.05s',
  fast: '0.1s',
  normal: '0.2s',
  slow: '0.3s',
};

export const utils = {
  absoluteCenter,
  setSpacing,
  timing,
  headerHeight: 70,
};
