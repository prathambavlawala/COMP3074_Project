const express = require("express");
const { getMenu, updateMenu } = require("../controllers/menuController");

const router = express.Router();

// GET all menu items
router.get("/", getMenu);

// PUT to update a menu item by id
router.put("/:id", updateMenu);

module.exports = router;
