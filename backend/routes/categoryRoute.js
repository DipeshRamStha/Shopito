const express = require("express");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const {
  createCategory,
  getCategories,
  deleteCategory,
} = require("../controllers/categoryController");
const router = express.Router();

// routes
router.post("/createCategory", protect, adminOnly, createCategory);
router.get("/getCategories", protect, adminOnly, getCategories);
// personally I feel router.get must be router.delete for deletion operation but the tutorial does router.get only
router.get("/:slug", protect, adminOnly, deleteCategory);

module.exports = router;
