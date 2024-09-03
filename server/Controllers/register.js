import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Function to check if a user already exists
const checkIfUserExists = async (email) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT COUNT(*) AS count FROM userregisters WHERE email = ?`;
    db.query(sql, [email], (error, results) => {
      if (error) {
        console.error("Error executing the query:", error);
        return reject(error);
      }
      resolve(results[0].count > 0);
    });
  });
};

// User registration function
export const userRegister = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!email || !password || !fullName) {
    return res.status(400).send("Full name, email, and password are required.");
  }

  try {
    // Check if the user already exists
    const userExists = await checkIfUserExists(email);
    if (userExists) {
      return res.status(400).send("Email already exists. Please use a different email.");
    }

    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert the user into the database
    const sql = `INSERT INTO userregisters (fullName, email, password) VALUES (?, ?, ?)`;
    db.query(sql, [fullName, email, hashedPassword], (error, results) => {
      if (error) {
        console.error("Error executing the query:", error);
        return res.status(500).send("Internal Server Error");
      }

      res.status(201).send("User registered successfully.");
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).send("Internal Server Error");
  }
};
