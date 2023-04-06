const addDays = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), Days);

  return `${newdate.getDate()}-${
    newdate.getmonth() + 1
  }-${newdate.getFullYear()}`;
};

module.export = getDateAfterXDays;
