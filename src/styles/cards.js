import styled from 'styled-components';

import Button from '~/components/Button';
import ToolTip from '~/components/ToolTip';

import { device } from '~/styles/breakpoints';
import { colors } from '~/styles/variables';

export const CardSlick = styled.div`
  padding: 20px 5px;

  @media ${device.laptop} {
    padding: 20px 10px;
    width: 330px;
  }

  @media ${device.laptopM} {
    width: 365px;
  }

  @media ${device.laptopL} {
    padding: 20px 5px;
  }

  @media ${device.desktop} {
    width: 374px;
  }

  @media ${device.desktopL} {
    padding: 20px 15px;
  }
`;

export const Card = styled.div`
  background: ${colors.white};
  border-radius: 10px;
  position: relative;
  transition: all 0.5s;
  width: 100%;

  &:before,
  &:after {
    background: ${({ recommended }) =>
      recommended ? colors.orange : colors.blue};
    content: '';
    height: 10px;
    left: 50%;
    position: absolute;
    transition: all 0.5s;
    transform: translate(-50%, -50%);
    width: 98%;

    @media ${device.laptop} {
      height: ${({ recommended }) => (recommended ? 10 : 0)}px;
      opacity: ${({ recommended }) => (recommended ? 1 : 0)};
    }
  }

  &:before {
    border-radius: 5px 5px 0 0;
    top: 0;
  }

  &:after {
    border-radius: 0 0 5px 5px;
    bottom: -10px;

    @media ${device.laptop} {
      bottom: ${({ recommended }) => (recommended ? '-10' : 0)}px;
    }
  }

  &:hover {
    &:before {
      height: 10px;
      opacity: 1;
    }

    &:after {
      bottom: -10px;
      height: 10px;
      opacity: 1;
    }

    & #monthValue {
      transform: scale(1.2);
    }

    & #savedMoneyTag {
      background: ${colors.grayDark};
    }
  }
`;

export const CardHeader = styled.div`
  align-items: center;
  background-color: ${colors.white};
  border: 1px solid ${colors.whiteBlue};
  border-bottom: 0;
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 40px;
  position: relative;
  z-index: 5;
`;

export const CardBody = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.whiteBlue};
  padding: 20px 40px;
`;

export const CardBase = styled(CardBody)`
  border-radius: 0 0 5px 5px;
  border-top: 0;
  position: relative;
  z-index: 5;
`;

export const CardIcon = styled.span`
  height: 48px;
  width: 48px;
  margin-bottom: 8px;
`;

export const CardTitle = styled.h2`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 0px;
  color: ${colors.blueDark};
`;

export const CardPrices = styled.div`
  align-items: center;
  color: ${colors.grayDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
`;

export const CardPricesRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardPriceOld = styled.span`
  font-size: 13px;
  letter-spacing: 0px;
  margin-right: 10px;
  text-decoration: line-through;
`;

export const CardPriceNew = styled.span`
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0px;
`;

export const CardPriceText = styled.p`
  font-size: 13px;
  letter-spacing: 0px;
  text-align: center;
`;

export const CardPriceMonth = styled.div`
  align-items: baseline;
  color: ${colors.blueMedium};
  display: flex;
  justify-content: center;
  margin-top: 3px;
  transition: all 0.5s;
`;

export const CardPriceMonthValue = styled.span`
  font-size: 35px;
  font-weight: bold;
  margin: 0 3px;
  letter-spacing: 0px;
  line-height: 1.2;
`;

export const CardPriceMonthText = styled.span`
  font-size: 20px;
  letter-spacing: 0px;
  text-align: center;
`;

export const CardButton = styled(Button)``;

export const CardInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
`;

export const CardInfoClick = styled.button`
  background-color: transparent;
  cursor: pointer;
`;

export const CardInfoText = styled.p`
  color: ${colors.grayDark};
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0px;

  @media ${device.laptop} {
    font-size: 15px;
  }
`;

export const CardSavedMoney = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const CardSavedMoneyText = styled.span`
  color: ${colors.blueMedium};
  font-size: 12px;
  letter-spacing: 0px;
  margin-right: 5px;

  @media ${device.laptop} {
    font-size: 14px;
  }
`;

export const CardSavedMoneyTag = styled.span`
  background-color: ${colors.green};
  border-radius: 25px;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0px;
  line-height: 1.2;
  padding: 5px;
  text-transform: uppercase;
  transition: all 0.5s;
`;

export const CardList = styled.ul``;
export const CardListItem = styled.li`
  color: ${colors.grayDark};
  font: normal normal normal 15px/32px Montserrat;
  letter-spacing: 0px;

  & b,
  & strong {
    font: normal normal bold 15px/32px Montserrat;
  }

  @media ${device.laptop} {
    font: normal normal normal 16px/32px Montserrat;

    & b,
    & strong {
      font: normal normal bold 16px/32px Montserrat;
    }
  }

  & p {
    border-bottom: ${({ tip }) =>
      tip ? `1px dashed ${colors.blueGray}` : '0'};
    display: ${({ tip }) => (tip ? 'inline' : 'initial')};
  }
`;

export const CardTip = styled(ToolTip)``;
