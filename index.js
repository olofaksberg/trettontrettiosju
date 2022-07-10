/** @format */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

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

app.use("/", express.static("./client/public"));

app.get("*", (req, res) =>
 res.sendFile("index.html", {
  root: "./client/public",
 })
);

app.listen(port, () => {
 console.log("lyssnar, port " + port);
});
