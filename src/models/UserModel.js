import UserSchema from "./UserSchema.js";

//Create user
export const createUser = (newUserObj) => {
  return UserSchema(newUserObj).save();
};
//Read user @filter must be an object
export const getSingleUser = (filter) => {
  return UserSchema.find(filter);
};
//Update user
export const getUserAndUpdate = (filter, updateObj) => {
  return UserSchema.findOneAndUpdate(filter, updateObj, { new: true });
};

//Delete user
export const deleteUserByID = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};
