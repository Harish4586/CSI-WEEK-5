const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      minlength: [2, "name must be at least 2 characters"],
      maxlength: [40, "name cannot exceed 40 characters"],
      validate(value) {
        if (!validator.isAlpha(value, 'en-US', { ignore: ' -\'' })) {
          throw new Error("name can only contain letters, spaces, hyphens, or apostrophes");
        }
      }
    },
    emailId: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email format");
        }
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minlength: [8, "Password must be at least 8 characters"],
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Invalid password format");
        }
      },
    }
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
