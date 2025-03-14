import { Foods } from "../../models/food-schema.js";

export const deleteFood = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteFood = await Foods.findByIdAndDelete(id);
        res.json({ message: "Food deleted successfully", food: deleteFood });
    } catch (err) {
        console.log(err);
        res.json({ message: "Error occured" });
    }
    }
