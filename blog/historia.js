// historia.js
const blocks = document.querySelectorAll('.year-block');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

blocks.forEach(block => {
  observer.observe(block);
});
