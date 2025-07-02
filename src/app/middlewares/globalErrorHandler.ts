import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const globalErrorhandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.name === "ValidationError") {
    const simplifiedError: any = {
      name: err.name,
      errors: {},
    };
    for (const key in err.errors) {
      const e = err.errors[key];
      simplifiedError.errors[key] = {
        message: e.message,
        name: e.name,
        properties: {
          message: e.message,
          type: e.properties?.type,
          min: e.properties?.min,
        },
        kind: e.kind,
        path: e.path,
        value: e.value,
      };
    }

    res.status(400).json({
      message: "Validation failed",
      success: false,
      error: simplifiedError,
    });
    return;
  }
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    success: false,
    error: err,
  });
  return;
};
