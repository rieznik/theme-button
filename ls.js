const LS_TIMESTAMP_KEY = 'timestamp';
const LS_THEME_KEY = 'theme';

export const getFormattedDate = (date) => {
  const [day, month, year, hours, minutes, seconds] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};

export const getTimestamp = () => {
  return localStorage.getItem(LS_TIMESTAMP_KEY);
};

export const setTimestamp = (date) => {
  localStorage.setItem(LS_TIMESTAMP_KEY, getFormattedDate(date));
};

export const getTheme = () => {
  return localStorage.getItem(LS_THEME_KEY);
};

export const setTheme = (theme) => {
  localStorage.setItem(LS_THEME_KEY, theme);
  return theme;
};
