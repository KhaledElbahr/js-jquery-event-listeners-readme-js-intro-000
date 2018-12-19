//define functions here
function getIt () {
  $('p').on('click', function() {
    alert("Hey!");
  })
}

function frameIt () {
  $('img').on('load', function() {
    $('this').addClass('tasty');
  })
}

function pressIt () {
  $('').on('keydown', function() {
    
  })
}


$(document).ready(function(){

// call functions here
getIt ();
frameIt ();
pressIt ();
});
