
import { categoryModel } from "../../models/category-schema.js";

export const createCategory = async (req, res) => {
 try{
    const { categoryName }  = req.body;
    const newCategory = new categoryModel({
        categoryName,
    });

    const savedCategory = await newCategory.save();
    res.json({ message: "Category added successfully", Category: savedCategory });
 } catch (err) {
   res.json({ message: "Error occured" });
 }
};