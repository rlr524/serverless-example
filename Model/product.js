const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: { type: String },
    type: { type: String },
    cost: { type: Number },
    description: { type: String },
    productID: { type: String }
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("prodcut", ProductSchema);
module.exports = ProductModel;
