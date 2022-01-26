const { getAllAnimals } = require("./index.js");

// SETUP
const btn = document.querySelector('.btn');
const form = document.querySelector('#new-form');

// Bind event listeners
btn.addEventListener('click', getAllAnimals);
form.addEventListener('submit', submitMonth);


