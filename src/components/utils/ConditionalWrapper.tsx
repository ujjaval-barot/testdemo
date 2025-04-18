import React from 'react';

type Wrapper = (children?: React.ReactNode) => React.ReactElement;

interface ConditionalWrapperProps {
  children: React.ReactNode;
  condition: boolean;
  elseWrapper?: Wrapper;
  wrapper: Wrapper;
}

const DefaultWrapper: Wrapper = children => <React.Fragment>{children}</React.Fragment>;

export const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({
  children,
  condition,
  wrapper = DefaultWrapper,
  elseWrapper,
}) => {
  if (!elseWrapper) elseWrapper = DefaultWrapper;
  return condition ? wrapper(children) : elseWrapper(children);
};

export default ConditionalWrapper;
