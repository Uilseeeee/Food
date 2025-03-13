import Order from "../../models/foodOrder-schema.js";

export const updateOrder = async (req, res) => {
    const { id } = req.params;
    const { order } = req.body; 
    try {
        const updateOrder = await Order.findByIdAndUpdate(id, {
        order,
        });
        res.json({ message: "Order updated successfully", order: updateOrder });
    } catch (err) {
        console.log(err);
        res.json({ message: "Error occured" });
    }
    }