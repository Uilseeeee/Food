import { Foods } from "../../models/food-schema.js";


export const updateFood = async (req, res) => {
    const { id } = req.params;
    const { name, price, category, image } = req.body;
    
    try {
        const updateFood = await Foods.findByIdAndUpdate(id, {
        name,
        price,
        category,
        image,
        });
        res.json({ message: "Food updated successfully", food: updateFood });
    } catch (err) {
        console.log(err);
        res.json({ message: "Error occured" });
    }
    }


