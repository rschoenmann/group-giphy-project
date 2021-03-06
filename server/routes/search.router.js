const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('in /search GET', req.query.query);

    let url = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.query.query}`
    axios.get(url)
        .then(response => {
            console.log(response.data);

            res.send(response.data)
        })// end .then
        .catch(error => {
            console.log('error in GET to API', error);
            res.sendStatus(500)
        })// end .catch
})//end router GET /search

module.exports = router;
