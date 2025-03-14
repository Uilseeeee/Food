import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const ADMIN_KEY = process.env.ADMIN_KEY;

export const isAdmin = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "You are not admin" });
  }

  const token1 = token.split(" ")[1];

  try {
    const user = jwt.verify(token1, ADMIN_KEY);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "not admining" });
  }
};
