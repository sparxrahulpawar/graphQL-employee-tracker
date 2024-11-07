import User from "../models/user.models.js";
import bcrypt from "bcryptjs";

const userResolver = {
  Query: {
    authUser: async (_, _, context) => {
      try {
        const user = await context.getUser();
        return user;
      } catch (error) {
        console.log("Error in authUser : ", error);
        throw new Error(error.message || "Internal server error");
      }
    },
    // for single user
    user: async (_, { userId }) => {
      try {
        const user = await User.findById(userId);
        return user;
      } catch (error) {
        console.log("Error in user query : ", error);
        throw new Error(error.message || "Error getting user");
      }
    },
  },
  Mutation: {
    // Sign up ke liye mutation, jisme context use hoga
    signUp: async (_, { input }, context) => {
      // context ka use karte hain req aur res ko access karne ke liye,
      // taaki hum authentication, headers, ya cookies ko handle kar saken.
      // Yahan pe context se req ka data nikal sakte hain
      // (jaise authentication token ya user session data).
      try {
        const { username, name, password, gender } = input;

        if (!username || !name || !password || !gender) {
          throw new Error("All fields are required!");
        }

        // Check User is exist in our database or not
        const existingUser = await User.findOne({ username });

        if (existingUser) {
          throw new Error("User already exist!");
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        /* https://avatar-placeholder.iran.liara.run/ */ // this is for profile pic avatar api
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
          username,
          name,
          password: hashedPassword,
          gender,
          profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        await newUser.save();
        await context.login(newUser);
        return newUser;
      } catch (error) {
        console.log("Error in signup : ", error);
        throw new Error(error.message || "Internal server error");
      }
    },

    // Login GraphQL API
    login: async (_, { input }, context) => {
      try {
        const { username, password } = input;

        const { user } = await context.authenticate("graphql-local", {
          username,
          password,
        });

        await context.login(user);
        return user;
      } catch (error) {
        console.log("Error in login : ", error);
        throw new Error(error.message || "Internal server error");
      }
    },

    // Logout GraphQL API
    logout: async (_, _, { req, res, context }) => {
      try {
        await context.logout();
        req.session.destroy((error) => {
          if (error) {
            throw error;
          }
        });
        res.clearCookie("connect.sid");
        return { message: "Logged out successfully" };
      } catch (error) {
        console.log("Error in logout : ", error);
        throw new Error(error.message || "Internal server error");
      }
    },
  },
};
export default userResolver;
