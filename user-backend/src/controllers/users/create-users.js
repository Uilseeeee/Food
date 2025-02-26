import { Users } from "../../models/user.schema.js";

export const userSignup = async (req, res) => {
    const { email, password, phonenumber, address } = req.body;
    const newUser = await Users.create({ email, password, phonenumber, address });

    res.json({message : "User created successfully", user: newUser});
};
