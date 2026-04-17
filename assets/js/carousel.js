document.querySelectorAll('.carousel').forEach((carousel) => {
  const track = carousel.querySelector('.track');
  const next = carousel.querySelector('.next');
  const prev = carousel.querySelector('.prev');

  const getScrollAmount = () => track.clientWidth * 0.8;

  next.addEventListener('click', () => {
    track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });

  // Drag support (scoped per carousel)
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => isDown = false);
  track.addEventListener('mouseup', () => isDown = false);

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });
});
track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX;
  scrollLeft = track.scrollLeft;
});

track.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - startX) * 1.5;
  track.scrollLeft = scrollLeft - walk;
});
