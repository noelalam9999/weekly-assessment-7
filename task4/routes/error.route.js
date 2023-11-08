/**
 * Post - Routes
 */
const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(404).json({
    msg: 'URL - Not found',
  });
});

module.exports = router;
