import { Request, Response } from "express";
import { StatusCode } from "../../utils/status.code";
import { UserModel } from "../models/user.model";

export const getAll = async (req: Request, res: Response) => {
  try {
    const response = await UserModel.find({});
    res.status(StatusCode.OK).json(response);
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json(error);
  }
};
