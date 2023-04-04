const buttonElem = document.querySelector('#button');
const bodyElem = document.querySelector('body');
const timestampMessageElem = document.getElementById('timestamp-msg');

const getFormattedDate = (date) => {
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

const updateTimestampMessage = (theme) => {
  const date = new Date();

  if (timestampMessageElem.classList.contains('hidden')) {
    timestampMessageElem.classList.remove('hidden');
  }

  const timestampMessage = `Last time on the ${theme} side: ${getFormattedDate(
    date
  )}`;

  localStorage.setItem('timestampMessage', `${timestampMessage}`);
  timestampMessageElem.innerText = timestampMessage;
};

const setTheme = (theme) => {
  localStorage.setItem('theme', theme);
  if (theme === 'dark') {
    buttonElem.innerText = 'Turn to the light side, we have ☕️';
    bodyElem.classList.replace('light-theme', 'dark-theme');
  } else {
    buttonElem.innerText = 'Come to the dark side, we have 🍪';
    bodyElem.classList.replace('dark-theme', 'light-theme');
  }
};

(() => {
  const theme = localStorage.getItem('theme');
  const timestampMessage = localStorage.getItem('timestampMessage');

  if (!theme || theme === 'light') {
    setTheme('light');
  } else {
    setTheme('dark');
  }

  if (timestampMessage) {
    timestampMessageElem.classList.remove('hidden');
    timestampMessageElem.innerText = timestampMessage;
  }
})();

const toggleTheme = (theme) => {
  if (theme === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
};

buttonElem.addEventListener('click', () => {
  const theme = localStorage.getItem('theme');
  toggleTheme(theme);
  updateTimestampMessage(theme);
});
