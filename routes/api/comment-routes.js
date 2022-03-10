const router = require('express').Router();

const {
    addComment,
    removeComment,
    addReply,
    removeReply,
} = require('../../controllers/comment-controller');


// insomnia: /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);


// insomnia: /api/comments/<pizzaId>/<commentId>
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment)


router.route('/pizzaId/:commentId/:replyId').delete(removeReply)

module.exports = router;