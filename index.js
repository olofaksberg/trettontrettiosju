/** @format */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import index from "./api/routers/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
 origin: "*",
 credentials: true,
 optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/", express.static("./client/build"));
app.use("/", index);

app.get("*", (req, res) =>
 res.sendFile("index.html", {
  root: "./client/build",
 })
);

app.listen(port, () => {
 console.log("lyssnar, port " + port);
});
