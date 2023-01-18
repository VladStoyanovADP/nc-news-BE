const {
  getArticles,
  getArticleByID,
  getCommentsOfArticle,
  postComment,
  patchArticle,
} = require("../controllers/articles");

const router = require("express").Router();

router.get("/api/articles", getArticles);
router.get("/api/articles/:id", getArticleByID);
router.get("/api/articles/:id/comments", getCommentsOfArticle);
router.post("/api/articles/:id/comments", postComment);
router.patch("/api/articles/:id", patchArticle);

module.exports = router;