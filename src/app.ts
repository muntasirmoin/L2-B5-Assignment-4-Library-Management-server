import express, { Application, Request, Response } from "express";
import { booksRoute } from "./app/controller/books.controller";
import { globalErrorhandler } from "./app/middlewares/globalErrorHandler";
import { borrowRoute } from "./app/controller/borrow.controller";
import { notFoundHandler } from "./app/middlewares/notFoundHandler";
import cors from "cors";

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      `https://library-management-client-woad.vercel.app`,
      "http://localhost:5173",
    ],
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to library Management App Book!Nest");
});

// app.use("/api/books", booksRoute);
// app.use("/api/borrow", borrowRoute);
app.use("/books", booksRoute);
app.use("/borrow", borrowRoute);

app.use(notFoundHandler);

app.use(globalErrorhandler);

export default app;
