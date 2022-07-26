document.querySelector('btn1').onclick = function(event) {
  var a = event.target.innerHTML;
  document.getElementById('rating').innerHTML = 'You selected ' + a + ' out of 5';

}