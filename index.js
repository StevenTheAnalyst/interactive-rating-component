const btn = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'hsl(217, 12%, 63%)';
  btn.style.color = 'white';
  return true;
});

btn2.addEventListener('click', function onClick() {
  btn2.style.backgroundColor = 'hsl(217, 12%, 63%)';
  btn2.style.color = 'white';
  return true;
});

btn3.addEventListener('click', function onClick() {
  btn3.style.backgroundColor = 'hsl(217, 12%, 63%)';
  btn3.style.color = 'white';
  return true;
});

btn4.addEventListener('click', function onClick() {
  btn4.style.backgroundColor = 'hsl(217, 12%, 63%)';
  btn4.style.color = 'white';
  return true;
});

btn5.addEventListener('click', function onClick() {
  btn5.style.backgroundColor = 'hsl(217, 12%, 63%)';
  btn5.style.color = 'white';
  return true;
});

// if (btn) {
//   document.getElementById('rating').innerHTML = 'You selected 1 out of 5';
// }

document.querySelector('.btn').onclick = function(event) {
  var a = event.target.innerHTML;
  document.getElementById('rating').innerHTML = 'You selected ' + a + ' out of 5';

}