import styled from 'styled-components';
import {InputTextStyle} from 'components/input/input.styles';

export const InputWithMargin = styled(InputTextStyle)<{invalid: boolean}>`
  margin-top: 15px;
`;
