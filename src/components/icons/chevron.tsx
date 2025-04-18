import {Svg} from '.';

export const Chevron: React.FC<{className?: string}> = ({className}) => (
  <Svg className={className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.66406 3L17.6641 12L8.66406 21" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Chevron;
