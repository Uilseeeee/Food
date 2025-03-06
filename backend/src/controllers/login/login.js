import jwt from "jsonwebtoken";
import { Users } from "../../models/user.schema.js";

export const createLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email });

  if (user && user.password === password) {
    const token = jwt.sign({ email: user.email, role: user.role }, process.env.SECRET_KEY);

    res.json({
      message: "Login Success",
      token: token,
    });
  } else {
    res.json({
      message: "Login Failed",
    });
  }
  
  
};
