//define functions here
function getIt () {
  $('p').on('click', function() {
    alert("Hey!");
  })
}

function frameIt () {
  $('img').on('load', function() {
    $(this).addClass('tasty');
  })
}

function pressIt () {
  $('input').on('keydown', function() {
    if($(this).val() == "G"){
      alert ('G was pressed');
    }
  })
}

function submitIt () {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  })
}


$(document).ready(function(){

// call functions here
getIt ();
frameIt ();
pressIt ();
submitIt ();
});
