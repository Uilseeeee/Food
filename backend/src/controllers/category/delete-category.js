import { categoryModel } from "../../models/category-schema.js";

export const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteCategory = await categoryModel.findByIdAndDelete(id);
        res.json({ message: "Category deleted successfully", category: deleteCategory });
    } catch (err) {
        console.log(err);
        res.json({ message: "Error occured" });
    }
}