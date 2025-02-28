import Order from "../../models/foodOrder-schema.js";


 export const getOrder = async (req, res) => {
    const { id } = req.params;
   try{
         const order = await Order.findById(id).populate("user");
         if(!order){
              return res.status(404).json({message: "Order not found"});
         }
         res.json({order});
   }catch(err){
       console.error(err);
       res.status(500).json({message: "An error occurred while getting the order"});
   }
};
