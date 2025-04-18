import styled from 'styled-components';

interface TitleProps {
  readonly isActive: boolean;
}

export const CustomSelectBar = styled.div<{invalid: boolean}>`
  width: 100%;
  height: 50px;
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  color: ${({theme}) => theme.colors.mediumGrey};
  box-sizing: border-box;
  border-radius: 100px;
  align-items: center;
  display: flex;
  padding-left: 3.8%;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  border: ${props =>
    props.invalid ? `1px solid ${props.theme.colors.red}` : `1px solid ${props.theme.colors.mediumGrey}`};
`;

export const DownLogo = styled.img`
  position: relative;
  width: 20px;
  height: 8px;
  text-align: right;
  margin-right: 3.8%;
`;

export const OptionsMenu = styled.div<TitleProps>`
  display: ${props => (props.isActive ? 'inline-block' : 'none')};
  position: absolute;
  background: ${({theme}) => theme.colors.darkGrey};
  border: 1px solid ${({theme}) => theme.colors.darkGrey};
  color: ${({theme}) => theme.colors.white};
  border-radius: 10px;
  z-index: ${props => (props.isActive ? 99999 : 1)};
  overflow: hidden;

  top: 0;
  left: 0;
  right: 0;
`;

export const CheckedOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3.122%;
  height: 53px;
`;

export const CheckedLogo = styled.div`
  background-image: url('/img/checked.svg');
  width: 20px;
  height: 12px;
  background-repeat: no-repeat;
  margin-right: 3.8%;
`;

export const MenuOption = styled.div`
  padding-left: 3.122%;
  height: 53px;
  margin: auto 0;
  border-top: 1px solid ${({theme}) => theme.colors.white};
  font-weight: ${({theme}) => theme.typography.fontWeight.semiThin};

  &:hover {
    background: ${({theme}) => theme.colors.blue};
  }
`;

export const CustomInput = styled.input`
  display: none;
`;

export const CustomLabel = styled.label`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 15px 0;
`;

export const CustomTitle = styled.div<{invalid: boolean}>`
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: ${props => (props.invalid ? ({theme}) => theme.colors.red : ({theme}) => theme.colors.mediumGrey)};
`;

export const InvalidLabel = styled.div<{invalid: boolean}>`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-weight: ${({theme}) => theme.typography.fontWeight.semiThin};
  width: 100%;
  height: auto;
  opacity: ${props => (props.invalid ? '1' : '0')};
  display: block;
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  color: ${({theme}) => theme.colors.red};
  padding-left: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
