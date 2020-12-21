import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { device } from '~/styles/breakpoints';
import { colors, theme } from '~/styles/variables';
import waves from '~/assets/bg-wave.svg';

export const HeroSec = styled.section`
  align-items: center;
  background-color: ${colors.blueMedium};
  display: flex;
  height: 350px;
  justify-content: flex-start;
  position: relative;

  @media ${device.mobileM} {
    height: 405px;
  }

  @media ${device.tablet} {
    height: 409px;
  }

  @media ${device.desktopL} {
    height: 450px;
  }

  @media ${device.desktopXL} {
    height: 449px;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1800px;
  width: 100%;
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  text-align: center;

  @media ${device.laptopL} {
    margin: ${({ margin }) => margin || 'auto'};
  }

  @media ${device.desktopL} {
    margin: auto;
  }

  & > svg {
    display: none;

    @media ${device.laptopL} {
      display: initial;
    }
  }
`;

export const HeroGrid = styled.div`
  width: 100%;
  overflow: hidden;

  @media ${device.laptopL} {
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 350px auto 350px;
    margin-top: -80px;
    position: absolute;
    z-index: 3;
  }

  @media ${device.desktop} {
    grid-template-columns: 320px auto 320px;
  }

  @media ${device.desktopL} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const HeroInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;

  @media ${device.laptopL} {
    margin-top: -20%;
  }
`;

export const HeroTitleSmall = styled.span`
  color: ${colors.blueLight};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1.6px;
  margin-bottom: 10px;
  text-align: center;
`;

export const HeroTitle = styled.h2`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0px;
  line-height: 1.2;
  margin-bottom: 20px;
  text-align: center;

  @media ${device.tablet} {
    font-size: 25px;
    max-width: 800px;
  }

  @media ${device.desktopL} {
    font-size: 30px;
  }
`;

export const HeroList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const HeroListItem = styled.li`
  color: ${colors.blueLight};
  display: flex;
  padding: 10px;
  justify-content: center;
  transition: all 0.5s;
  width: auto;

  & svg {
    margin-right: 5px;
    transition: all 0.5s;
  }

  &:first-child {
    width: 100%;
  }
`;

export const HeroArrow = styled(AnchorLink)`
  bottom: -90px;
  cursor: pointer;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 5;
  animation: moveArrow 1.5s infinite;

  @media ${device.desktopL} {
    bottom: -75px;
  }

  &:hover {
    animation-play-state: paused;
  }

  & svg circle {
    transition: all 0.5s;
  }

  @keyframes moveArrow {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translate(-50%, -50%);
    }
    40% {
      transform: translate(-50%, -65%);
    }
    60% {
      transform: translate(-50%, -65%);
    }
  }
`;

export const HeroWaves = styled.div`
  background-color: ${theme.background};
  height: 59px;
  overflow: hidden;
  position: relative;
  z-index: 2;

  &:before {
    background-color: ${theme.background};
    background-image: url(${waves});
    background-position: right top;
    background-repeat: no-repeat;
    bottom: 0;
    content: '';
    height: 60px;
    left: 0;
    margin-left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 2995px;
    z-index: 2;

    @media ${device.desktopL} {
      background-size: cover;
      width: 100vw;
    }
  }
`;
