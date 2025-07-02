import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({
    message: "Unmatched Route. Follow API endpoints",
    success: false,
    error: "Not Found",
  });
};
