interface Props {
  top?: number;
  bottom?: number;
  vertical?: number;
  left?: number;
  right?: number;
  horizontal?: number;
}

const Spacing: React.FC<Props> = ({top, bottom, vertical, left, right, horizontal, children}) => {
  const style: Record<string, any> = {display: 'block', width: '100%'};

  if (top || vertical) {
    style.marginTop = top ?? vertical;
  } else if (bottom || vertical) {
    style.marginBottom = bottom ?? vertical;
  } else if (left || horizontal) {
    style.marginLeft = left ?? horizontal;
  } else if (right || horizontal) {
    style.marginRight = right ?? horizontal;
  }

  return <div style={style}>{children}</div>;
};

export default Spacing;
