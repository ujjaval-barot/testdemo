import {EXAMPLE_ACTION} from '../constants/actions';
import {ActionReturnProps} from '../interfaces';

export const setExampleText = (text: string): ActionReturnProps => ({
  type: EXAMPLE_ACTION,
  payload: {
    text,
  },
});
