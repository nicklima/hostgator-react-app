export const getDiscount = (value, discount) => {
  const discountPrice = (value - value * (discount / 100)).toFixed(2);
  return discountPrice;
};

export const getMonthPrice = (value, month) => {
  const monthPrice = (value / month).toFixed(2);
  return monthPrice;
};

export const getPriceSaved = (price, discountPrice) => {
  const priceSaved = (price - discountPrice).toFixed(2);
  return priceSaved;
};

export const currencyBRL = (value, hasCurrency = true) => {
  const money = new Intl.NumberFormat(
    'pt-BR',
    hasCurrency
      ? {
          style: 'currency',
          currency: 'BRL',
          maximumFractionDigits: 2,
        }
      : {
          maximumFractionDigits: 2,
        }
  ).format(value);
  return money;
};
