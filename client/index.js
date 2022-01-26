// Setup
// const id = require("./dataRoute.js")
// SETUP
const btn1 = document.querySelector('#all');
const btn2 = document.querySelector('#search');

// Bind event listeners
btn1.addEventListener('click', getAllAnimals);
btn2.addEventListener('click', getAnimal);
// form.addEventListener('submit', submitMonth);

// index
function getAllAnimals(e) {
    e.preventDefault()
    fetch('http://localhost:3000/birthMonth')
      .then(resp => resp.text())
      .then(animals => document.getElementById('print').textContent = animals) 
      .catch(console.warn)   
  }

  function getAnimal(id) {
    id.preventDefault()
    fetch(`http://localhost:3000/birthMonth/:${id}`)
      .then(resp => resp.json())
      .then(animal => document.getElementById('print2').textContent = animal) 
    //   document.getElementById('id').value = ''
      .catch(console.warn) 
  }

// create

// function submitMonth(e){
//     e.preventDefault();

//     const birthMonths {
//         id 
//     }
// }


