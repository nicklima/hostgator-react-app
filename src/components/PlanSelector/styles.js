import styled from 'styled-components';

import { device } from '~/styles/breakpoints';
import { colors } from '~/styles/variables';

export const Selector = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto 50px;
`;

export const SelectorText = styled.p`
  color: #1d5297;
  font: normal normal normal 14px/26px Montserrat;
  letter-spacing: 0px;
  margin-bottom: 5px;
`;

export const SelectorWrap = styled.div`
  border-radius: 25px;
  background: ${colors.white};
  box-shadow: 0px 2px 4px ${colors.blueWhite};
  border: 2px solid ${colors.blue};
  overflow: hidden;
  width: 285px;

  @media ${device.laptop} {
    width: 330px;
  }
`;

export const SelectorList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SelectorItem = styled.li`
  align-items: center;
  background: ${({ active }) => (active ? colors.blue : 'transparent')};
  border-radius: 25px;
  color: ${({ active }) => (active ? colors.white : colors.blue)};
  cursor: pointer;
  display: flex;
  font: normal normal bold 12px Montserrat;
  padding: 10px 15px;
  position: relative;
  transition: all 0.5s;
  width: 100%;

  @media ${device.laptop} {
    font: normal normal bold 16px Montserrat;
  }
`;

export const SelectorItemText = styled.span`
  margin-left: 5px;
`;
