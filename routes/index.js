const router = require('express').Router();
//Import all of the API routes from /api/index.js
const apiRoutes = require('./api');

//add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);

// router.use((req, res) => {
    //return res.send('<h1>Wrong! You messed up. 404 Error</h1>');
// });

module.exports = router;
