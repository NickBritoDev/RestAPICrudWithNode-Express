import express from "express";
import { createUser, filterAllUser, filterUserByID, deleteUser, editUser } from "../controllers/users.js";
const router = express.Router()

router.post('/', createUser)

router.get('/', filterAllUser)

router.get('/:id', filterUserByID)

router.delete('/:id', deleteUser)

router.patch('/:id', editUser)

export default router