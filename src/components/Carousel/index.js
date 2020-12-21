import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Arrow } from '~/icons';
import { CarouselNav } from './styles';

export const NavNext = ({ onClick }) => (
  <CarouselNav className="next" onClick={onClick}>
    <Arrow />
  </CarouselNav>
);

export const NavPrev = ({ onClick }) => (
  <CarouselNav className="prev" onClick={onClick}>
    <Arrow />
  </CarouselNav>
);

NavNext.propTypes = {
  onClick: PropTypes.func,
};

NavNext.defaultProps = {
  onClick: null,
};

NavPrev.propTypes = {
  onClick: PropTypes.func,
};

NavPrev.defaultProps = {
  onClick: null,
};

const Carousel = ({ children }) => {
  const settings = {
    arrows: true,
    centerPadding: '0',
    dots: false,
    nextArrow: <NavNext />,
    prevArrow: <NavPrev />,
    speed: 500,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          variableWidth: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Carousel;
