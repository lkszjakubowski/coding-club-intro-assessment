console.log('Hello from Nerdbord!');

const colors = ['#BE6DB7', '#FDD36A', '#DC8449', '#C04A82'];

const box = document.getElementsByClassName('box');

const changeBorder = () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  box[0].style.borderColor = randomColor;
};

setInterval(changeBorder, 3000);
