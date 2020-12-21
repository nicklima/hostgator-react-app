import styled from 'styled-components';

import { device } from '~/styles/breakpoints';
import { Container } from '~/styles/shared';
import { colors } from '~/styles/variables';

export const PlansSec = styled.section`
  padding: 80px 0;
  width: 100%;
`;

export const PlansContainer = styled(Container)`
  padding: 0;

  @media ${device.laptop} {
    padding: 0 15px;
    width: 1150px;
  }
`;

export const PlansConditions = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  @media ${device.desktop} {
    justify-content: flex-end;
  }
`;

export const PlansConditionsButton = styled.button`
  background-color: transparent;
  color: ${colors.blue};
  cursor: pointer;
  display: flex;
  font: normal normal normal 12px/12px Montserrat;
  letter-spacing: 0px;
  opacity: 0.7;
  padding: 20px 0;
  text-decoration: underline;
  transition: all 0.5s;

  &:hover {
    opacity: 1;
  }
`;
