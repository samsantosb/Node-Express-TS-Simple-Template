import express from "express";

const userRoutes = express.Router();

userRoutes.get("/", user.getAll);
userRoutes.get("/:id", user.getById);
userRoutes.post("/", user.create);
userRoutes.put("/:id", user.update);
userRoutes.delete("/:id", user.delete);

export default userRoutes;
