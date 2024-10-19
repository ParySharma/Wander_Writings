// Utils
import { EMPTY_STRING } from './constants';

// Use for set dynamic currency
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export const amountFormatter = (amount: number) => {
  return formatter.format(amount).replace(/^(\D+)/, '$1 ');
};

export const formatterToFixed = (value: any, toFix: number) => {
  return Number(parseFloat(value || 0).toFixed(toFix || 2));
};

export const amountFormatterWithoutDollar = (amount: any) => {
  let formattedValue;
  if (parseFloat(amount)) {
    formattedValue = parseFloat(amount).toFixed(2);
    formattedValue = parseFloat(formattedValue).toLocaleString('en-US');
  } else {
    formattedValue = 0;
  }
  return formattedValue;
};

export const formatCurrencyIntoNumber = (amount: string) => {
  let finalAmount = amount.replace(/,/g, '').trim();
  return Number.isNaN(parseFloat(finalAmount))
    ? EMPTY_STRING
    : parseFloat(finalAmount);
};

export const formatNumber = (amount: string) => {
  return amount.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatCurrency = (amount: string) => {
  let inputValue = String(amount);
  if (inputValue.indexOf('.') >= 0) {
    let decimalPos = inputValue.indexOf('.');
    let leftSide = inputValue.substring(0, decimalPos);
    let rightSide = inputValue.substring(decimalPos);
    leftSide = formatNumber(leftSide);
    rightSide = formatNumber(rightSide);
    rightSide = rightSide.substring(0, 2);
    inputValue = leftSide + '.' + rightSide;
  } else {
    inputValue = formatNumber(inputValue);
    inputValue = inputValue;
  }
  return inputValue;
};
