import { sql } from "../config/db.js";

// CRUD operations for products
export const getAllProducts = async (req, res) => {
  try {
    const products = await sql`
    SELECT * FROM products
    ORDER BY created_at DESC
    `;
    console.log("fetched products:", products);
    res.status(200).json({ seccess: true, data: products });
  } catch (error) {
    console.log("Error getAllProducts: ", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const createProduct = async (req, res) => {
  const { name, image, price } = req.body;

  if (!name || !image || !price) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, image and price",
    });
  }

  try {
    const newProduct = await sql`
      INSERT INTO products (name, image, price)
      VALUES (${name}, ${image}, ${price})
      RETURNING *
      `;
    console.log("created product:", newProduct);
    res.status(201).json({ success: true, data: newProduct[0] });
  } catch (error) {
    console.log("Error createProduct: ", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  if (!id)
    return res
      .status(400)
      .json({ success: false, message: "Please provide product id" });

  try {
    const product = await sql`
            SELECT * FROM products WHERE id = ${id}
        `;

    if (product.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    console.log("fetched product:", product);
    res.status(200).json({ success: true, data: product[0] });
  } catch (error) {
    console.log("Error getProductById: ", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, image, price } = req.body;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Please provide product id",
    });
  }

  try {
    const updateProduct = await sql`
            UPDATE products
            SET name = ${name}, image = ${image}, price = ${price}
            WHERE id = ${id}
            RETURNING *
        `;

    if (updateProduct.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    console.log("updated product:", updateProduct);
    res.status(200).json({ success: true, data: updateProduct[0] });
  } catch (error) {
    console.log("Error updateProduct: ", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Please provide product id",
    });
  }

  try {
    const deletedProduct = await sql`
            DELETE FROM products
            WHERE id = ${id}
            RETURNING *
        `;

    if (deletedProduct.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    console.log("deleted product:", deletedProduct);
    res.status(200).json({ success: true, data: deletedProduct[0] });
  } catch (error) {
    console.log("Error deleteProduct: ", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
