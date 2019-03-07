exports.getDate = () => {
  const Month = new Date().getMonth() + 1;
  const Day = new Date().getDate();
  const DATE = String(Month) + String(Day);
  return DATE;
};
