import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import passport, { Profile } from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: "http://localhost:2001/auth/google/callback",
  }, async (accessToken, RefreshToken, profile: Profile, done) => {
    try {
      const email = profile.emails![0].value;
      if (!email) return done(null, false, { message: "Email tidak ditemukan!" });
    } catch (e) {
      return done(e);
    }
  }
));

passport.serializeUser((user: Express.User, done) => done(null, user));

passport.deserializeUser(async (id_user: string, done) => {
  try {
  } catch (e) {
    done(e);
  }
});