document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox.querySelector('img');

  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';   // 这里再显示
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';     // 点击关闭
    lightboxImg.src = '';
  });
});