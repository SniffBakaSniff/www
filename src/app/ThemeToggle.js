function initializeThemeToggle() {
  // Get the toggle switch element
  const themeToggle = document.getElementById('ThemeToggle');

  if (!themeToggle) {
      console.error('ThemeToggle checkbox not found.');
      return;
  }

  // Function to toggle the theme
  function toggleTheme() {
      if (themeToggle.checked) {
          document.body.classList.add('dark-theme');
          localStorage.setItem('theme', 'dark');
      } else {
          document.body.classList.remove('dark-theme');
          localStorage.setItem('theme', 'light');
      }
  }

  // Initialize theme based on saved preference
  function initializeTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
          themeToggle.checked = true;
          document.body.classList.add('dark-theme');
      } else {
          themeToggle.checked = false;
          document.body.classList.remove('dark-theme');
      }
  }

  // Add event listener to toggle switch
  themeToggle.addEventListener('change', toggleTheme);

  // Initialize theme on page load
  initializeTheme();
}
