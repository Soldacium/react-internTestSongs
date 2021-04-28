const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');



router.get('/:name',(req,res,next) => {
    const name = req.params.name.replace(" ","+").toLowerCase();


    fetch(`https://itunes.apple.com/search?term=${name}`)
    .then(response => response.json())
    .then(data => res.status(200).json(data));
});




module.exports = router;