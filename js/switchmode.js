// Add this script in your HTML file or a separate JS file
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Check if the user already has a theme preference
if (currentTheme) {
  document.body.classList.add(currentTheme);
  if (currentTheme === 'light-mode') {
    document.body.classList.add('light-mode');
  }
}

// Function to switch themes
function switchTheme() {
  if (document.body.classList.contains('light-mode')) {
    document.body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark-mode');
  } else {
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
  }
}

// Event listener for the toggle button
themeToggle.addEventListener('click', switchTheme);


const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
  document.body.classList.remove('light-mode');
  localStorage.setItem('theme', 'dark-mode');
} else {
  document.body.classList.add('light-mode');
  localStorage.setItem('theme', 'light-mode');
}