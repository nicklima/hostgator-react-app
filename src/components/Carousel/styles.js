import styled from 'styled-components';
import { device } from '~/styles/breakpoints';

export const CarouselNav = styled.button`
  background: transparent;
  border: none;
  color: transparent;
  cursor: pointer;
  font-size: 0;
  height: 40px;
  line-height: 0;
  outline: none;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 40px;
  z-index: 3;

  &:before {
    content: '';
  }

  &.prev {
    left: 2%;

    @media ${device.laptopM} {
      left: 5%;
    }

    & svg {
      transform: rotate(180deg);
    }
  }

  &.next {
    right: 2%;

    @media ${device.laptopM} {
      right: 5%;
    }
  }
`;
