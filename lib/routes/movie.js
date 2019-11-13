const express = require('express');
const router = express.Router();
const parser = require('body-parser');
router.use(parser.json());
const movieController = require('../controllers/movie');

router.get('/movie', movieController.index);
router.get('/movie/name/:name', movieController.showName);
router.post('/movie', movieController.create);
router.put('/movie/:name', movieController.edit);
router.delete('/movie/:name', movieController.delete);

module.exports = router;
