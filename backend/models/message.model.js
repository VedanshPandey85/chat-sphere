import mongoose from "mongoose";
//In models we create schemas which defines how our collection is going to be look like what will be data types
// and what will be validations or constraints with references

// basically this model will have reciver , serder  and message (what they are going to send )
const messageSchema = new mongoose.Schema(
  {
    // sender Id : unique id of sender will be referenced from user collection(Table)
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // reciver Id : reciver id of sender will be referenced from user collection(Table)
    reciverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  // this whill give us the info about when the message was created , upadated
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
