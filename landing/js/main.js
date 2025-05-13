const arrowContainer = document.getElementById('arrow-bg');
const arrows = [];

const cols = 10;
const rows = 6;
const spacingX = window.innerWidth / cols;
const spacingY = window.innerHeight / rows;

for (let i = 0; i < cols; i++) {
  for (let j = 0; j < rows; j++) {
    const arrow = document.createElement('img');
    arrow.src = 'images/arrow-logo.png';
    arrow.className = 'arrow';
    arrow.style.left = `${i * spacingX}px`;
    arrow.style.top = `${j * spacingY}px`;
    arrowContainer.appendChild(arrow);
    arrows.push({ el: arrow, x: i * spacingX, y: j * spacingY });
  }
}

document.addEventListener('mousemove', e => {
  arrows.forEach(({ el, x, y }) => {
    const dx = e.clientX - x;
    const dy = e.clientY - y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 300) {
      el.style.transform = `rotate(${angle}deg)`;
    } else {
      el.style.transform = `rotate(0deg)`;
    }
  });
});
