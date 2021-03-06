export const calcoloSecondi = (date1, date2) => {
  const diffTime = Math.abs(date2 - date1);
  const differenzaSecondi = Math.round(diffTime / 1000);
  return differenzaSecondi;
};

export const stringaTempo = (tempoInSecondi) => {
  const ore = Math.abs(Math.floor(tempoInSecondi / (60 * 60)));
  const minuti = Math.abs(Math.floor((tempoInSecondi - ore * 60 * 60) / 60));
  const secondi = Math.abs(tempoInSecondi - minuti * 60 - ore * 60 * 60);

  let stringaTempo = `
  ${ore === 0 ? "" : ore === 1 ? "1 ora" : ore + " ore"} 
  ${minuti} ${minuti === 1 ? "minuto" : "minuti"} 
  e ${secondi} ${secondi === 1 ? "secondo" : "secondi"}`;
  return stringaTempo;
};

export const stringaTempoBreve = (tempoInSecondi) => {
  const ore = Math.abs(Math.floor(tempoInSecondi / (60 * 60)));
  const minuti = Math.abs(Math.floor((tempoInSecondi - ore * 60 * 60) / 60));

  let stringaTempo = `
  ${ore === 0 ? "" : ore === 1 ? "1 ora e " : ore + " ore e "}${minuti} min`;
  return stringaTempo;
};
