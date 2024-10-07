document.addEventListener('DOMContentLoaded', function() {
  const sectionTitle = document.querySelector('.section-title');
  const sectionContent = document.querySelector('.section-content');
  const toggleIcon = document.querySelector('.toggle-icon');

  sectionTitle.addEventListener('click', function() {
    sectionContent.classList.toggle('active');
    toggleIcon.classList.toggle('active');
  });
});
