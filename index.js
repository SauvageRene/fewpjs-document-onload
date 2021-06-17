// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    loadDOM();
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  ); 

  function loadDOM() {
    let newText = document.querySelector('#text');
    newText.innerHTML = "This is really cool!";
  }

// document.addEventListener( "DOMContentLoaded", function () {
//     updateDOM()
//   } );
  
  
//   function updateDOM() {
//     document.getElementById( "text" )
//       .innerHTML = "This is really cool!";
//   }