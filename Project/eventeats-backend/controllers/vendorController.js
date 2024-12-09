const VendorModel = require("../models/vendorModel");

const getVendors = (req, res) => {
  const vendors = VendorModel.getAllVendors();
  res.status(200).json(vendors);
};

module.exports = {
  getVendors,
};
