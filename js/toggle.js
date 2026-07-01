const entries = document.querySelectorAll(".entry");
const contents = document.querySelectorAll('.entry-content');
const hideAllContent = () => contents.forEach(c => c.classList.remove('show'));
const clearSelected = () => entries.forEach(e => e.classList.remove('selected'));

entries.forEach(entry => {
  entry.addEventListener('click', e => {
    hideAllContent();
    clearSelected();
    const target = document.querySelector(e.target.dataset.content);
    if (target) {
      target.classList.add('show');
      e.target.classList.add('selected');
    }
  });
});