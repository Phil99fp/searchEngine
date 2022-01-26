const express = require('express')
const router = express.Router()
// const searchData = require('./data.js')

const birthMonth = [
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
    res.json(birthMonth)
})

router.get('/:id', (req, res) => {
     try {
         let reqMonth = req.params.id
         let matchingMonth = birthMonth.find((month) => month.id.toLowerCase() === reqMonth.toLowerCase());
         if(!matchingMonth) {throw new Error(`No months called ${reqMonth}`)}
         res.json(matchingMonth)
    }catch (err){
         res.status(404).json({ message: err.message })
     }
})

module.exports = router ;
