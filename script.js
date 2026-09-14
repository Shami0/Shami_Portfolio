// Auto-fill the current year in the footer
document.querySelector('.year').textContent = new Date().getFullYear();

// Friendly console reminder for links that still need a real URL
document.querySelectorAll('[data-placeholder]').forEach((el) => {
  el.addEventListener('click', (e) => {
    if (el.getAttribute('href') === '#') {
      e.preventDefault();
      console.warn(
        `Update the href for "${el.dataset.placeholder}" in index.html before this goes live.`
      );
    }
  });
});
