import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import csrf from "csurf";
import dotenv from "dotenv";
import logger from "morgan";
import passport from "passport";
import session from "express-session";

dotenv.config();

const app = express();
const Prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: ["https://localhost:4000", "*"] }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("common"));
app.use(csrf({ cookie: true }));
app.use(session({ secret: process.env.SESSION_SECRET || "", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.listen(4001, () => console.log("Server berjalan di http://localhost:4001"));