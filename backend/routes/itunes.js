const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/artists/:query',(req,res,next) => {
    const query = req.params.query.replace(" ","+").toLowerCase();
    fetch(`https://itunes.apple.com/search?term=${query}&entity=musicArtist`)
    .then(response => response.json())
    .then(data => res.status(200).json(data.results))
    .catch(err => console.log(err));
});

router.get('/albums/:query',(req,res,next) => {
    const query = req.params.query.replace(" ","+").toLowerCase();
    fetch(`https://itunes.apple.com/search?term=${query}&entity=album`)
    .then(response => response.json())
    .then(data => res.status(200).json(data.results))
    .catch(err => console.log(err));
});

router.get('/artist/:id',(req,res,next) => {
    fetch(`https://itunes.apple.com/lookup?id=${req.params.id}`)
    .then(response => response.json())
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err));
});

router.get('/album/:id',(req,res,next) => {
    fetch(`https://itunes.apple.com/lookup?id=${req.params.id}&entity=song`)
    .then(response => response.json())
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err));
});


module.exports = router;