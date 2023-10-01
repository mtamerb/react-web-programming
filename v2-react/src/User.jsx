import React, { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);

  const getUser = async () => {
    const { data: users } = await axios(
      "https://jsonplaceholder.typicode.com/users"
    );
    const { data: posts } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );

    setUser(users);
    setPosts(posts);

    console.log("users: ", users);
    console.log("posts", posts);
  };

  useEffect(() => {
    getUser();
  }, []);

  return <div>User</div>;
}

export default User;
