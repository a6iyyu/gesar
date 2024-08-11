import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ZodError } from "zod";

const Prisma = new PrismaClient();

export const RegisterUser = async (request: Request, response: Response, next: NextFunction) => {
  try {
  } catch (e) {
    console.error(e);
    e instanceof ZodError ? response.status(400).send("Permintaan tidak valid!") : response.status(500).send("Terjadi kesalahan pada server!");
  }
};

export const LoginUser = async (request: Request, response: Response) => {
  try {
    
  } catch (e) {
    console.error(e);
    e instanceof ZodError ? response.status(400).send("Permintaan tidak valid!") : response.status(500).send("Terjadi kesalahan pada server!");
  }
};