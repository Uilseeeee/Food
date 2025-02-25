import express from 'express';

const router = express.Router();

export const createUsers = async (req, res) => {
  res.send('Create Users');
}