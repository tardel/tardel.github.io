var thing = document.getElementById('name').value;
function yo(){
  
  window.alert(thing);
}
 function call(){
  window.alert(thing)
 }

var a;

function getName(){
  //get value from input field and save as "a"
  a = document.getElementById('username').value;
  //create LS key with value of "a"
  localStorage.setItem('uName',a);
  //automatically take user to page two.html
  location.href="two.html";
}

function getUser(){
  var b = localStorage.getItem('uName');
  document.getElementById('placeholder').innerHTML = "Hello "+b;
}
