var a = [];
function yo(){
  var thing = document.getElementById('name').value;
  document.getElementById('name').value ="";
  a.push(thing)
  window.alert(a);
}

