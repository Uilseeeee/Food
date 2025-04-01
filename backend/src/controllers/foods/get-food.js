import { Foods } from "../../models/food-schema.js";

export const getAllFood = async (req, res) => {
    try {
        const allFoods = await Foods.find();
        res.status(200).json(allFoods);
    } catch (error) {
        res.status(400).json({ message: "Error occured while getting foods" });
    }
};
