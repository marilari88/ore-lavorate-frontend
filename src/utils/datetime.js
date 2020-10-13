export const stringaGiorno = (timestamp) => {
  const fullDate = new Date(timestamp);
  let date = fullDate.getDate();
  let month = fullDate.getMonth() + 1;
  let year = fullDate.getFullYear();
  return date + "/" + month + "/" + year;
};

export const stringaOrario = (timestamp) => {
  const fullDate = new Date(timestamp);
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  return ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
};
