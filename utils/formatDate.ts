export default (date: string) => {
  const rawBirthday = new Date(date);
  const day = rawBirthday.getDate() + 1;
  const month = rawBirthday.getMonth() + 1;
  const year = rawBirthday.getUTCFullYear();

  return `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year}`;
};
