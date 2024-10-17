const express = require("express");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const router = express.Router();
const {
  createBrand,
  getBrands,
  deleteBrand,
} = require("../controllers/brandController");

// routes
router.post("/createBrand", protect, adminOnly, createBrand);
router.get("/getBrands", protect, adminOnly, getBrands);
// personally I feel router.get must be router.delete for deletion operation but the tutorial does router.get only
router.get("/:slug", protect, adminOnly, deleteBrand);

module.exports = router;
