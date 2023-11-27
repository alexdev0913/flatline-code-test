let intervalCheck = 0;
const interval = setInterval(function () {
  if (Swiper) {
    clearInterval(interval);
    new Swiper(".swiper", {
      slidesPerView: 4.5
    });
  }

  if (++intervalCheck == 100) {
    clearInterval(interval);
  }
}, 100);
