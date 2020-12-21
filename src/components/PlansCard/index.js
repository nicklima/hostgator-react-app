import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { colors, buttons } from '~/styles/variables';
import {
  CardSlick,
  Card,
  CardHeader,
  CardBody,
  CardBase,
  CardIcon,
  CardTitle,
  CardPrices,
  CardPricesRow,
  CardPriceOld,
  CardPriceNew,
  CardPriceText,
  CardPriceMonth,
  CardPriceMonthValue,
  CardPriceMonthText,
  CardButton,
  CardInfo,
  CardInfoText,
  CardInfoClick,
  CardSavedMoney,
  CardSavedMoneyText,
  CardSavedMoneyTag,
  CardList,
  CardListItem,
  CardTip,
} from '../../styles/cards';

import { Info, PlanoP, PlanoM, PlanoTurbo } from '~/icons';
import {
  currencyBRL,
  getDiscount,
  getMonthPrice,
  getPriceSaved,
} from '~/helper';

const PlansCard = ({ coupon, data, renewOn }) => {
  const [cardColor, setCardColor] = useState(buttons.bgColor);
  const { name, id, cycle } = data;
  const prices = cycle[renewOn];
  const { priceOrder, months } = prices;

  const priceDiscount = getDiscount(priceOrder, 40);
  const priceMonth = getMonthPrice(priceDiscount, months);
  const priceSaved = getPriceSaved(priceOrder, priceDiscount);

  const isActive = plan => {
    switch (plan) {
      case 'Plano M':
        return true;
      default:
        return false;
    }
  };

  const selectPlan = plan => {
    switch (plan) {
      case 'Plano P':
        return <PlanoP />;
      case 'Plano M':
        return <PlanoM />;
      case 'Plano Turbo':
        return <PlanoTurbo />;
      default:
        return <PlanoP />;
    }
  };

  return (
    <CardSlick>
      <Card
        className={isActive(name) ? 'recommended' : 'default'}
        onMouseEnter={() => setCardColor(buttons.bgHover)}
        onMouseLeave={() => setCardColor(buttons.bgColor)}
        recommended={isActive(name)}
      >
        <CardHeader>
          <CardIcon>{selectPlan(name)}</CardIcon>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardPrices>
            <CardPricesRow>
              <CardPriceOld>{currencyBRL(priceOrder)}</CardPriceOld>
              <CardPriceNew>{currencyBRL(priceDiscount)}</CardPriceNew>
            </CardPricesRow>
            <CardPriceText>
              {months === 1 ? 'apenas ' : 'equivalente à'}
            </CardPriceText>
            <CardPriceMonth id="monthValue">
              <CardPriceMonthText>R$</CardPriceMonthText>
              <CardPriceMonthValue>
                {currencyBRL(priceMonth, false)}
              </CardPriceMonthValue>
              <CardPriceMonthText>/mês*</CardPriceMonthText>
            </CardPriceMonth>
          </CardPrices>
          <CardButton
            bgColor={isActive(name) ? colors.orange : cardColor}
            coupon={coupon}
            cycle={renewOn}
            label="Contrate Agora"
            pid={id}
          />
          <CardInfo>
            <CardInfoText>1 ano de Domínio Grátis.</CardInfoText>
            <CardInfoClick>
              <Info />
            </CardInfoClick>
          </CardInfo>
          <CardSavedMoney>
            <CardSavedMoneyText>
              economize {currencyBRL(priceSaved)}
            </CardSavedMoneyText>
            <CardSavedMoneyTag id="savedMoneyTag">40% off</CardSavedMoneyTag>
          </CardSavedMoney>
        </CardBody>
        <CardBase>
          <CardList>
            <CardListItem tip>
              <CardTip
                tip={
                  name === 'Plano P'
                    ? 'Com subdomínios<br/> ilimitados'
                    : 'Tenha diversos sites<br/> no mesmo plano'
                }
              >
                {name === 'Plano P' ? 'Para 1 site' : 'Sites Ilimitados'}
              </CardTip>
            </CardListItem>
            <CardListItem>
              <b>{name === 'Plano Turbo' ? '150' : '100'}</b> GB de
              Armazenamento
            </CardListItem>
            <CardListItem tip>
              <CardTip tip="E-mails profissionais<br/> (@suaempresa.com.br) incluídos">
                Contas de E-mail <b>Ilimitadas</b>
              </CardTip>
            </CardListItem>
            <CardListItem>
              Criador de Sites{' '}
              <u>
                <b>Grátis</b>
              </u>
            </CardListItem>
            <CardListItem>
              Certificado SSL <b>Grátis</b> (https)
            </CardListItem>
          </CardList>
        </CardBase>
      </Card>
    </CardSlick>
  );
};

PlansCard.propTypes = {
  coupon: PropTypes.string.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    cycle: PropTypes.shape({
      annually: PropTypes.shape({
        months: PropTypes.number,
        priceOrder: PropTypes.string,
        priceRenew: PropTypes.string,
      }),
      biennially: PropTypes.shape({
        months: PropTypes.number,
        priceOrder: PropTypes.string,
        priceRenew: PropTypes.string,
      }),
      monthly: PropTypes.shape({
        months: PropTypes.number,
        priceOrder: PropTypes.string,
        priceRenew: PropTypes.string,
      }),
      quarterly: PropTypes.shape({
        months: PropTypes.number,
        priceOrder: PropTypes.string,
        priceRenew: PropTypes.string,
      }),
      semiannually: PropTypes.shape({
        months: PropTypes.number,
        priceOrder: PropTypes.string,
        priceRenew: PropTypes.string,
      }),
      triennially: PropTypes.shape({
        months: PropTypes.number,
        priceOrder: PropTypes.string,
        priceRenew: PropTypes.string,
      }),
    }),
  }).isRequired,
  renewOn: PropTypes.string.isRequired,
};

export default PlansCard;
