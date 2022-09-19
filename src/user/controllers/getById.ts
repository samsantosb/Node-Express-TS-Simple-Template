import { Request, Response } from "express";
import { StatusCode } from "../../utils/status.code";
import { UserModel } from "../models/user.model";

export const getById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await UserModel.findById(id);
    res.status(StatusCode.OK).json(response);
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json(error);
  }
};
