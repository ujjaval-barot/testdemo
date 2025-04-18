import React from 'react';
import {useRef} from 'react';

import {AccordionContainer, ButtonContainer, RoundButton} from './accordion.styles';

import Arrow from 'src/components/icons/arrow';

interface AccordionInterface {
  useButton: boolean;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  val: number;
  current: number;
}

const Accordion: React.FC<AccordionInterface> = ({useButton, active, setActive, val, current, children}) => {
  const refClose = useRef<HTMLDivElement>(null);

  const validateActive = (e: React.SyntheticEvent<HTMLDivElement>) => {
    if (e.target !== refClose.current) return;
    if (current === val) {
      setActive(-1);
    } else {
      setActive(val);
    }
  };

  const validateActiveButton = () => {
    if (current === val) {
      setActive(-1);
    } else {
      setActive(val);
    }
  };

  return (
    <React.Fragment>
      <AccordionContainer ref={refClose} onClick={e => validateActive(e)} show={active}>
        {children}
      </AccordionContainer>
      <ButtonContainer useButton={useButton}>
        <RoundButton show={active} onClick={validateActiveButton}>
          <Arrow />
        </RoundButton>
      </ButtonContainer>
    </React.Fragment>
  );
};

export default Accordion;
