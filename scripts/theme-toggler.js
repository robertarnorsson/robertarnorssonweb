function toggleTheme() {
  const isDarkMode = document.documentElement.classList.contains('dark');
  updateTheme(isDarkMode ? 'light' : 'dark');
}

function applyTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    updateTheme(savedTheme);
  } else if (prefersDark) {
    updateTheme('dark');
  } else {
    updateTheme('light');
  }
}

function updateTheme(theme) {

  if (theme === 'dark') {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }

  console.info('Changed theme to ' + theme);
  localStorage.setItem('theme', theme);
}

document.querySelectorAll('#theme-toggle').forEach(button => {
  button.addEventListener('click', toggleTheme);
});

applyTheme();
