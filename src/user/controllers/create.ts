import { Request, Response } from "express";
import { StatusCode } from "../../utils/status.code";
import { UserModel } from "../models/user.model";
import { invalidBody } from "../utils/user.body.validator";

export const create = async (req: Request, res: Response) => {
  if (invalidBody(req)) {
    res.status(StatusCode.BAD_REQUEST).json({ message: "Invalid body" });
    return;
  }

  const body = req.body;

  try {
    const response = await UserModel.create(body);
    res.status(StatusCode.CREATED).json(response);
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json(error);
  }
};
