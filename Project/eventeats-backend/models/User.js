/*const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
*/


// Simulated in-memory user data
let users = []; 

module.exports = {
  findOne: async ({ email }) => {
    return users.find(user => user.email === email);
  },
  create: async (userData) => {
    users.push(userData);
    return userData;
  },
  comparePassword: async (inputPassword, storedPassword) => {
    return inputPassword === storedPassword;
  },
  getUsers: () => users, // Expose all users
};
