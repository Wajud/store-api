const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ message: "Product Testing Route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ message: "Product Route" });
};

module.exports = { getAllProductsStatic, getAllProducts };
