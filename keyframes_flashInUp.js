document.addEventListener('scroll', function() {
  const items = document.querySelectorAll('.move_in');

  items.forEach(move_in => {
      const itemPosition = move_in.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      

      if (itemPosition < windowHeight - 100) {
          move_in.classList.add('visible');
      }
  });
});