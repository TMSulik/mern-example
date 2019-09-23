const router = require('express').Router();
const bookRoutes = require('./books');

router.use('/api/books', bookRoutes);

/*
The prefix /api/books before the routes means you can only access 
the books as http://localhost:5000/api/books.
*/

module.exports = router;