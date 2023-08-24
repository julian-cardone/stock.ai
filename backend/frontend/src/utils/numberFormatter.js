export const numberFormatter = (number) => {
  let formattedNumber = number;
  if (number >= 1 || number <= -1) {
    formattedNumber = number?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } else if (number >= 0.1 || number <= -0.1) {
    formattedNumber = number?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
    });
  } else {
    formattedNumber = number?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 5,
    });
  }

  return formattedNumber;
};
