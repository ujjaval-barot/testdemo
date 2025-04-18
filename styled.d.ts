import 'styled-components';
import {colors} from './theme/colors';
import {media} from './theme/media-queries';
import {typography} from './theme/typography';
import {utils} from './theme/utils';
import {resets} from './theme/resets';
import {zIndex} from './theme/zIndex';
declare module 'styled-components' {
  export interface DefaultTheme {
    typography: typeof typography;
    zIndex: typeof zIndex;
    colors: typeof colors;
    utils: typeof utils;
    resets: typeof resets;
    media: typeof media;
  }
}
