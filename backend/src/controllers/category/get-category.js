import { categoryModel } from "../../models/category-schema.js";

export const getCategory = async (req, res) => {
    try {
        const categories = await categoryModel.find();
        res.json(categories);
    } catch (err) {
        console.log(err);
        res.json({ message: "Error occured" });
    }
    }
