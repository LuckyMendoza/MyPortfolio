// Get the theme toggle checkbox
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference, otherwise use system preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeToggle.checked = currentTheme === 'light';
} else {
  const systemTheme = prefersDarkScheme.matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', systemTheme);
  themeToggle.checked = systemTheme === 'light';
}

// Toggle theme on checkbox change
themeToggle.addEventListener('change', () => {
  const newTheme = themeToggle.checked ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});