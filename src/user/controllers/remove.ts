import { Request, Response } from "express";
import { StatusCode } from "../../utils/status.code";
import { UserModel } from "../models/user.model";

export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedUser = await UserModel.findByIdAndDelete(id);
    res.status(StatusCode.OK).json(deletedUser);
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json(error);
  }
};
