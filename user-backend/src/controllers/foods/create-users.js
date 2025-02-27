import { Foods } from "../../models/food-schema.js";

export const addFood = async (req, res) => {
  const { id, name, price, image, ingredients, category, createdAt , updatedAt } = req.body;

  try {
    const newFood = await Users.create({
      id,
      name,
      price,
      image,
      ingredients,
      category,
      createdAt,
      updatedAt,
    });

    res.json({ message: "Food added successfully", Foods: newFood });
  } catch (err) {
    res.json({ message: "Error occured" });
  }
};
