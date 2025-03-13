import { categoryModel } from "../../models/category-schema.js";

export const updateCategory = async (req, res) => {

    try {
        const { id } = req.params;
        const { categoryName } = req.body;
        const updateCategory = await categoryModel.findByIdAndUpdate(id, {
        categoryName,
        });
        res.json({ message: "Category updated successfully", category: updateCategory });
    } catch (err) {
        console.log(err);
        res.json({ message: "Error occured" });
    }
};
