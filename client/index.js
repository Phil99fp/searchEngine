

//index


// index
function getAllAnimals(e) {
    fetch('http://localhost:3000/birthMonth')
      .then(resp => console.log(resp))
      
    //   .then (data => console.log(data))
      .then(animals => document.getElementById('print').textContent = animals) 
      .catch(console.warn)   
  }

// create

// function submitMonth(e){
//     e.preventDefault();

//     const birthMonths {
//         id 
//     }
// }


module.exports = {
    getAllAnimals
}
