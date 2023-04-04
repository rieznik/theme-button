import { setState } from './setState.js';
import { getTheme, setTheme, setTimestamp } from './ls.js';

const buttonElem = document.querySelector('#button');

setState();

buttonElem.addEventListener('click', () => {
  const theme = getTheme();
  const date = new Date();
  const oppositeTheme = theme === 'light' ? 'dark' : 'light';

  setTheme(oppositeTheme);
  setTimestamp(date);

  setState();
});
