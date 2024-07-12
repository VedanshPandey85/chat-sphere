import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConverstions = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("api/users");
        const data = await res.json();
        console.log(data);

        if (data.error) {
          throw new error(data.error);
        }

        setConversations(data);
      } catch (error) {
        toast.error();
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConverstions;
