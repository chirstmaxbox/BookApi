const express = require("express");
const User = require("../models/userModel");
const usersController = require("../controllers/usersController");

const router = express.Router();

/**
 * @swagger
 * /users/isvalid:
 *  post:
 *      description: Check if a user is registered with the system
 *      tags:
 *          - Users
 *      parameters:
 *      - in: body
 *        name: user
 *        description: information of a user
 *        schema:
 *          type: object
 *          properties:
 *            username:
 *              type: String
 *            password:
 *              type: String
 *      responses:
 *          '200':
 *              description: User has been existed on the system and user's data
 *          '201':
 *              description: User does not exist.
 *          '202':
 *              description: Wrong password
 */
router.post("/users/isvalid", usersController(User).isValid);

/**
 * @swagger
 * /users:
 *  post:
 *      description: Add a new user to system
 *      tags:
 *          - Users
 *      parameters:
 *      - in: body
 *        name: user
 *        description: information of a user
 *        schema:
 *          type: object
 *          properties:
 *            username:
 *              type: String
 *            password:
 *              type: String
 *      responses:
 *          '200':
 *              description: Successfully to register a new user
 */
router.post("/users", usersController(User).addUser);

module.exports = router;
