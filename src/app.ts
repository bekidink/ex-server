require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
// import cookieParser from "cookie-parser";
// import { ErrorMiddleware } from "./middleware/error";

// import { rateLimit } from "express-rate-limit";
import categoryRoutes from "./routes/category.route";
import checkoutRoutes from "./routes/checkout.route";
import highlightRoutes from "./routes/highlight.route";
import productRoutes from "./routes/product.route";
import brandRoutes from "./routes/brand.route";
import Nylas from "nylas";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
export const nylas = new Nylas({
  apiKey: process.env.NYLAS_API_KEY!,
  // apiUri: "https://api.eu.nylas.com",
});
// body parser
app.use(express.json({ limit: "50mb" }));

// cookie parser
// app.use(cookieParser());

// cors => cross origin resource sharing

// api requests limit
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 100,
//   standardHeaders: "draft-7",
//   legacyHeaders: false,
// });

// routes
app.use(
  "/api/v1",
  checkoutRoutes,
  categoryRoutes,
  brandRoutes,
  productRoutes,
  highlightRoutes
);

// testing api
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    succcess: true,
    message: "API is working",
  });
});

// unknown route
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

// middleware calls
// app.use(limiter);
// app.use(ErrorMiddleware);
