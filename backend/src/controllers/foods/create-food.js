import { Foods } from "../../models/food-schema.js";

export const createFood = async (req, res) => {
try{ 
    const { name , price, image, ingredients, category,  } = req.body;
const newfood = await Foods.create({
    name,
    price,
    category,
    createdAt: new Date(),
    updatedAt: new Date(),
});
res.json({ message: "Food created successfully", food: newfood });
}
catch (err) {    
    res.json({ message: "Error occured" });
}
}