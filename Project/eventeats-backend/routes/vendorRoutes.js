const express = require("express");
const { getVendors } = require("../controllers/vendorController");

const router = express.Router();

// GET all vendors
router.get("/", getVendors);

module.exports = router;
