import mongoose from "mongoose";
const consversationSchema = new mongoose.Schema(
  {
    // the users who are going to be the part of conversation
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // the massages are stored in array form
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", consversationSchema);
export default Conversation;
