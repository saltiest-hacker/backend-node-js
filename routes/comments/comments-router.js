const router = require("express").Router();

const Comments = require("./comments-model");

router.post("/", (req, res) => {
  const { username, comment_toxicity, comment } = req.body;

  const userDecoded = req.decodedToken.subject;

  Comments.add({ username, comment_toxicity, comment, users_id: userDecoded })
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((comment) => {
      res
        .status(404)
        .json({ message: "cannot add comment", comment: comment.message });
    });
});

router.get("/", (req, res) => {
  const userId = req.decodedToken.subject;

  Comments.getAll(userId)
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((error) => {
      res
        .status(404)
        .json({ message: "cannot find comment", error: error.message });
    });
});

router.get("/:id", (req, res) => {
  const userId = req.decodedToken.subject;
  const commentId = req.params.id;

  Comments.get(commentId)
    .then((comment) => {
      if (comment.users_id === userId) {
        res.status(200).json(comment);
      } else {
        res
          .status(403)
          .json({ message: "this comment does not belong to you" });
      }
    })
    .catch((error) => {
      res
        .status(404)
        .json({ message: "cannot find comment", error: error.message });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;

  Comments.update(req.params.id, changes)
    .then((update) => {
      res.json({ message: `comment has been updated` });
    })
    .catch((error) => {
      res
        .status(404)
        .json({ message: `cannot update comment`, error: error.message });
    });
});

router.delete("/:id", (req, res) => {
  Comments.remove(req.params.id)
    .then((removed) => {
      res.status(200).json({ message: `comment removed`, error: removed });
    })
    .catch((error) => {
      res
        .status(404)
        .json({ message: `unable to remove comment`, error: error.message });
    });
});

module.exports = router;
