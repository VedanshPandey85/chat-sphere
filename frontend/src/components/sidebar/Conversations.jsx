import React from "react";
import Conversation from "./Conversation";
import useGetConverstions from "../../hooks/useGetConverstions";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const { loading, conversations } = useGetConverstions();
  console.log("Conversations....", conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations?.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversation.length - 1}
        />
      ))}

      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversations;
