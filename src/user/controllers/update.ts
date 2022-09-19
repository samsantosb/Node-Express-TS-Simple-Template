import { Request, Response } from "express";
import { StatusCode } from "../../utils/status.code";
import { UserModel } from "../models/user.model";
import { invalidBody } from "../utils/user.body.validator";

export const update = async (req: Request, res: Response) => {
  if (invalidBody(req)) {
    res.status(StatusCode.BAD_REQUEST).json({ message: "Invalid body" });
    return;
  }

  const id = req.params.id;
  const user = req.body;

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(id, user, {
      new: true,
    });

    res.status(StatusCode.OK).json(updatedUser);
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json(error);
  }
};
