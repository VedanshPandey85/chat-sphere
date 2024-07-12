import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filtteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filtteredUsers);
  } catch (error) {
    console.error("Errors in get User side Bar : ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
