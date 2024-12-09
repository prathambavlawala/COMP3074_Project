const MenuModel = require("../models/menuModel");

const getMenu = (req, res) => {
  const menuItems = MenuModel.getAllMenuItems();
  res.status(200).json(menuItems);
};

const updateMenu = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatedItem = MenuModel.updateMenuItemById(id, name);

  if (updatedItem) {
    res.status(200).json({
      message: "Menu item updated successfully",
      updatedItem,
    });
  } else {
    res.status(404).json({
      message: "Menu item not found",
    });
  }
};

module.exports = {
  getMenu,
  updateMenu,
};
