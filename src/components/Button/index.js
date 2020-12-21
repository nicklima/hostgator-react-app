import React from 'react';
import PropTypes from 'prop-types';

import { buttons } from '~/styles/variables';
import { Btn } from './styles';

const Button = ({ pid, cycle, coupon, color, bgColor, bgHover, label }) => {
  return (
    <Btn
      href={`https://www.hostgator.com.br/hospedagem-de-sites-seu-sucesso/escolha-de-ciclo?a=add&pid=${pid}&billingcycle=${cycle}&promocode=${coupon}`}
      type="button"
      bgColor={bgColor}
      bgHover={bgHover}
      color={color}
      target="_blank"
    >
      {label}
    </Btn>
  );
};

Button.propTypes = {
  pid: PropTypes.number.isRequired,
  cycle: PropTypes.string.isRequired,
  coupon: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  bgHover: PropTypes.string,
  label: PropTypes.string,
};

Button.defaultProps = {
  color: buttons.text,
  bgColor: buttons.bgColor,
  bgHover: buttons.bgHover,
  label: 'Contrate Agora',
};

export default Button;
