import {MinTablet, Phone} from 'components/core/resolution-containers';
import {useWindowSize} from 'hooks/useWindowSize';
import React, {Children, useRef, useState} from 'react';
import {media} from 'theme/media-queries';
import {
  ContainerButtons,
  ArrowIcon,
  ArrowButton,
  CarouselWrapper,
  ArrowButtonBackground,
  SideArrowButton,
  CarouselContainer,
} from './carousel.styles';

export interface CarouselProps {
  mobileOnly?: boolean;
  carouselTwitter?: boolean;
  breakpoint?: keyof typeof media;
  sideButtons?: boolean;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  mobileOnly = true,
  carouselTwitter = false,
  breakpoint = 'maxTablet',
  sideButtons = false,
  children,
  className,
}) => {
  const {isMobile} = useWindowSize();
  const twitterCard = isMobile ? 0 : 400;
  const refScroll = useRef<HTMLDivElement>(null);
  const childrenCount = Children.toArray(children).length;

  const [counter, setCounter] = useState(0);
  const [moveX, setMoveX] = useState(0);

  const scrollRight = () => {
    if (refScroll.current !== null) {
      if (counter < childrenCount - 1) {
        const maxWidth = refScroll.current.scrollWidth;
        const baseWidth = maxWidth / childrenCount;
        const extraMove = carouselTwitter ? twitterCard : 0;
        setMoveX(moveX - (baseWidth + extraMove));
        setCounter(counter + 1);
      }
    }
  };

  const scrollLeft = () => {
    if (refScroll.current !== null) {
      if (counter > 0) {
        const maxWidth = refScroll.current.scrollWidth;
        const baseWidth = maxWidth / childrenCount;
        const extraMove = carouselTwitter ? twitterCard : 0;
        setMoveX(moveX + (baseWidth + extraMove));
        setCounter(counter - 1);
      }
    }
  };

  return (
    <CarouselContainer sideButtons={sideButtons} className={className}>
      {sideButtons && (
        <MinTablet>
          <SideArrowButton onClick={scrollLeft} atEnd={counter === 0}>
            <ArrowButtonBackground />
            <ArrowIcon left />
          </SideArrowButton>
        </MinTablet>
      )}
      <CarouselWrapper
        ref={refScroll}
        style={{transform: `translate(${moveX}px, 0px)`}}
        mobileOnly={mobileOnly}
        breakpoint={breakpoint}
      >
        {children}
      </CarouselWrapper>
      {sideButtons && (
        <MinTablet>
          <SideArrowButton onClick={scrollRight} atEnd={counter === childrenCount - 1}>
            <ArrowButtonBackground />
            <ArrowIcon />
          </SideArrowButton>
        </MinTablet>
      )}
      <Phone>
        {childrenCount > 1 && (
          <ContainerButtons mobileOnly={mobileOnly} breakpoint={breakpoint}>
            <ArrowButton onClick={scrollLeft} atEnd={counter === 0}>
              <ArrowButtonBackground />
              <ArrowIcon left />
            </ArrowButton>
            <ArrowButton onClick={scrollRight} atEnd={counter === childrenCount - 1}>
              <ArrowButtonBackground />
              <ArrowIcon />
            </ArrowButton>
          </ContainerButtons>
        )}
      </Phone>
      <MinTablet>
        {!sideButtons && (
          <React.Fragment>
            {childrenCount > 3 && !mobileOnly && (
              <ContainerButtons breakpoint={breakpoint}>
                <ArrowButton onClick={scrollLeft}>
                  <ArrowButtonBackground />
                  <ArrowIcon left />
                </ArrowButton>
                <ArrowButton onClick={scrollRight}>
                  <ArrowButtonBackground />
                  <ArrowIcon />
                </ArrowButton>
              </ContainerButtons>
            )}
          </React.Fragment>
        )}
      </MinTablet>
    </CarouselContainer>
  );
};

export default Carousel;
