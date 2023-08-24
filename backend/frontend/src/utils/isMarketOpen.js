export const isMarketOpen = () => {
  const currentTime = new Date();
  const open =
    currentTime.getDay() >= 1 &&
    currentTime.getDay() <= 5 && // Monday to Friday
    currentTime.getHours() >= 9 &&
    currentTime.getHours() < 16; // 9:00am to 3:59pm

  return open;
};
