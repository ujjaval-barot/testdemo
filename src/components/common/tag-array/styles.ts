import styled from 'styled-components';

export const TagTextContainer = styled.a`
  pointer-events: none;
  cursor: default;
`;

export const Tag = styled.li`
  line-height: 14px;
  font-size: ${props => props.theme.typography.fontSize.tiny}px;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const TagContainer = styled.ul<{compact?: boolean}>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0 0 30px;

  a:not(:last-child) {
    ${Tag} {
      border-right: ${({theme}) => `2px solid ${theme.colors.darkGrey}`};
      padding-right: ${({compact}) => (compact ? '5px' : '15px')};
      margin-right: ${({compact}) => (compact ? '5px' : '15px')};

      ${({theme}) => theme.media.maxTablet} {
        padding-right: 8px;
        margin-right: 8px;
      }
    }
  }

  ${({theme}) => theme.media.maxTablet} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;
