import express from "express";
import { create } from "../controllers/create";
import { remove } from "../controllers/remove";
import { getAll } from "../controllers/getAll";
import { getById } from "../controllers/getById";
import { update } from "../controllers/update";

const userRoutes = express.Router();

userRoutes.get("/", getAll);
userRoutes.get("/:id", getById);
userRoutes.post("/", create);
userRoutes.put("/:id", update);
userRoutes.delete("/:id", remove);

export default userRoutes;
