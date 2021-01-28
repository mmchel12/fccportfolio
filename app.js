/* jshint esversion: 6 */
/* jshint browser: true */
/* global console */


const parallax = document.querySelector('#welcome-section');

window.addEventListener('scroll', function() {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset*0.65+"px";
});