const switchTheme = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function checkboxState(event) {
  localStorage.setItem('theme', JSON.stringify(event.target.checked));
  event.target.checked ? darkTheme() : lightTheme();
}

function darkTheme() {
  bodyRef.classList.add(theme.DARK);
  bodyRef.classList.remove(theme.LIGHT);
}

function lightTheme() {
  bodyRef.classList.add(theme.LIGHT);
  bodyRef.classList.remove(theme.DARK);
}

switchTheme.addEventListener('change', checkboxState);
