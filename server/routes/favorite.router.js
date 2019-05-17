const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorites" ORDER BY "id" ASC;`;
  pool.query(queryText)
    .then((result) => {
      console.log('result.row:', result.rows)
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// add a new favorite 
router.post('/', (req, res) => {
  const newFav = req.body.gif_url
  console.log('POST req.body:', req.body.gif_url)
  const queryText = `INSERT INTO "favorites" ("gif_url") VALUES ($1);`;
  const queryValues = [newFav];

  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200); })
    .catch((error) => {
      console.log('error in favorite query:', error);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
