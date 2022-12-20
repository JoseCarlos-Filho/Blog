import axios from "axios";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "../routes/Home.css";
const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    // console.log("testando");
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      console.log(response);
    } catch (e) {}
  };

  useEffect(() => {
    getPosts();
  }, []);
  return <div>Home</div>;
};

export default Home;
