import { Users } from "../../models/user.schema.js";

export const getUsers = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await Users.findById(id);
    if (!users) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ users });
  } catch (err) {
    console.error(err);
    res
      .status(404)
      .json({ message: "An error occurred while getting the user" });
  }
 
};
