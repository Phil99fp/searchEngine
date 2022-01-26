const express = require('express')
const router = express.Router()
// const searchData = require('./data.js')

const searchResults = [
    { id : "january", animal: "ox"},
    { id : "february", animal: "tiger"},
    { id : "march", animal: "rabbit"},
    { id : "april", animal: "dragon"},
    { id : "may", animal: "snake"},
    { id : "june", animal: "horse"},
    { id : "july", animal: "ram"},
    { id : "august", animal: "monkey"},
    { id : "september", animal: "rooster"},
    { id : "october", animal: "dog"},
    { id : "november", animal: "pig"},
    { id : "december", animal: "rat"},
];

router.get('/', (req,res)=>{
    res.json(searchResults)
})

// router.get('/:id', (req, res) => {
//     try {
//         let reqMonth = req.params.id
//         if 

module.exports = router ;
