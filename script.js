// Toggle light/dark mode
const btn = document.getElementById('modeToggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});