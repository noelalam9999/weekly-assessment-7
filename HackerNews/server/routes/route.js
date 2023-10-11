const { Router } = require('express');
const { getNews, saveNews } = require('../controllers/controller');


const router = Router();


router.get('/', getNews)
router.post('/', saveNews)


module.exports = router;


