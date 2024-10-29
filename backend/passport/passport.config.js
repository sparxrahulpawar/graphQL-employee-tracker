import passport from "passport";
import bcrypt from "bcryptjs";
import User from "../models/user.models.js";
import { GraphQLLocalStrategy } from "graphql-passport";

export const configurePassport = async () => {
  passport.serializeUser((user, done) => {
    console.log("Serialize User");
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    console.log("Deserialize User");
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });

  passport.use(
    new GraphQLLocalStrategy(async (username, password, done) => {
      try {
        const user = User.findOne({ username });
        if (!user) throw new Error("Invalid username or password");
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) throw new Error("Invalid username or password");
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );
};
