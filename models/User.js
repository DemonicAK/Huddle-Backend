const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
      index: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minLength: [4, "Minimum password length is 6 characters"],
    },
    picture: {
      type: String,
    },
    newMessage: {
      type: Object,
      default: {},
    },
    status: {
      type: String,
      default: "online",
    },
  },
  { minimize: false }
);



// fire a function before doc saved to db
userSchema.pre('save',  function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

   bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
 // hash the password along with our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
    // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});





// when return user object to user, delete password and newMessage
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  // delete userObject.newMessage;

  return userObject;
};

// static method to login user
userSchema.statics.findByCredentials = async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("Invalid email");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);


  if (!isPasswordMatch) {
    console.log(password, user.password);
    throw new Error("Invalid password");
  }

  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
