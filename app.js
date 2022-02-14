const colorBtn = document.querySelector('#colorBtn');
const currentColor = document.querySelector('#currentColor');

colorBtn.addEventListener('click', () => {
  // document.body.style.background = 'olive';
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const newColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.background = newColor;
  currentColor.innerText = 'Current color: ' +  newColor;
  if (r < 100 && g < 100 && b < 100) {
    document.body.style.color = 'white';
  } else {
    document.body.style.color = 'black';
  }
});
