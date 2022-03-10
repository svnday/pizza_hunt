const router = require('express').Router();

const { addComment, removeComment } = require('../../controllers/comment-controller');


// insomnia: /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);


// insomnia: /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment)

module.exports = router;