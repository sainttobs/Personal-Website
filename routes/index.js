let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {title : 'Adeyefa Oluwatoba - worldClassDev'});
});

module.exports = router;