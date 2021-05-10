// Import stylesheets
import './style.css';

// Write Javascript code!
require(['jquery'], function($) {
var targetGrade = 5, failureRemaining = 1200, delay=100;
 var clickerFn = function() {
   if(failureRemaining === 0) {
    clearInterval(clicker); console.log("done."); return;
   }
   console.log('.');
  if($('button.button-incorrect')[0].disabled == false) {
   var x = Math.floor(Math.random() * 2);
   if(x==0) {
   	console.log("wrong.");
   	$('button.button-incorrect').click(); 
   }
   else {
   	console.log("right.");
   	$('button.button-correct').click();
   }
 }
 else { failureRemaining --;}
 };  
 var clicker = setInterval(clickerFn, delay);
});