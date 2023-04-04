import { getTimestamp, getTheme, setTheme } from './ls.js';

const setTimestampMessage = (theme, timestamp) => {
  const timestampMessageElem = document.getElementById('timestamp-msg');
  const previousTheme = theme === 'light' ? 'dark' : 'light';

  timestampMessageElem.innerText = `Last time on the ${previousTheme} side: ${timestamp}`;
};

const setButtonText = (theme) => {
  const buttonElem = document.querySelector('#button');

  buttonElem.innerText =
    theme === 'light'
      ? 'Come to the dark side, we have 🍪'
      : 'Turn to the light side, we have ☕️';
};

const setStyle = (theme) => {
  const bodyElem = document.querySelector('body');

  bodyElem.className = theme === 'light' ? 'light-theme' : 'dark-theme';
};

export const setState = () => {
  const theme = getTheme() || setTheme('light');
  const timestamp = getTimestamp();

  if (timestamp) {
    setTimestampMessage(theme, timestamp);
  }

  setStyle(theme);
  setButtonText(theme);
};
