const twoDecimalOptions = {
  minimumIntegerDigits: 1,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
};

export const format2Decimal = (num) => {
  return num ? Number(num).toLocaleString('en', twoDecimalOptions) : '0.00';
};

const eightDecimalOptions = {
  minimumIntegerDigits: 1,
  minimumFractionDigits: 8,
  maximumFractionDigits: 8
};
export const format8Decimal = (num) => {
  return num
    ? Number(num).toLocaleString('en', eightDecimalOptions)
    : '0.00000000';
};
export const formatInt = (num) => {
  return num ? Number(num).toLocaleString('en') : '0';
};
