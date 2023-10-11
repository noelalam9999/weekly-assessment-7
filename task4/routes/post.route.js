/**
 * Post - Routes
 */

const router = require('express').Router();

const postController = require('../controllers/post.controller');

router.get('/', postController.getAll);
router.post('/', postController.create);
router.get('/:id', postController.getSingle);
router.delete('/:id', postController.delete);
router.put('/:id/up', postController.increaseVote);
router.put('/:id/down', postController.decreaseVote);

module.exports = router;
