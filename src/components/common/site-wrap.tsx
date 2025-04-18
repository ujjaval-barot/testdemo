import styled, {css} from 'styled-components';
import {WINDOW_SIZES} from 'theme/media-queries';

const MAX_WIDTH = WINDOW_SIZES.giantDesktop;
const DESKTOP_PADDING = 120;
const MOBILE_PADDING = 30;

type Direction = 'row' | 'column';

interface Props {
  direction?: Direction;
  hasPadding?: boolean;
  hideXOverflow?: boolean;
  hideBorder?: boolean;
}

type StyleProps = Omit<Props, 'hasPadding'> & {
  desktopPadding: number;
  mobilePadding: number;
};

export const SiteWrapStyled = styled.div<StyleProps>`
  width: 100%;
  max-width: ${MAX_WIDTH}px;
  padding: 0 ${({desktopPadding}) => desktopPadding}px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${({direction = 'column'}) => direction};
  ${({theme, hideBorder = false}) => !hideBorder && `border-bottom: 1px solid ${theme.colors.darkGrey}`};
  ${({hideXOverflow = false}) =>
    hideXOverflow &&
    css`
      overflow-x: hidden;
    `}

  ${({theme}) => theme.media.maxTablet} {
    padding: 0 ${({mobilePadding}) => mobilePadding}px;
  }
`;

export const SiteWrap: React.FC<Props> = ({
  children,
  hasPadding = true,
  direction,
  hideXOverflow = false,
  hideBorder = false,
}) => {
  const desktopPadding = hasPadding ? DESKTOP_PADDING : 0;
  const mobilePadding = hasPadding ? MOBILE_PADDING : 0;

  return (
    <SiteWrapStyled
      desktopPadding={desktopPadding}
      mobilePadding={mobilePadding}
      direction={direction}
      hideXOverflow={hideXOverflow}
      hideBorder={hideBorder}
    >
      {children}
    </SiteWrapStyled>
  );
};
export default SiteWrap;
