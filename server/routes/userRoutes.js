const { addTolikedMovies, getLikedMovies } = require('../controllers/userController');

const router = require('express').Router();

router.post('/add', addTolikedMovies);
router.get('/liked/:email', getLikedMovies);

module.exports = router;