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

      const data = response.data;
      // console.log(data);
      setPosts(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <h1>Últimos posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            console.log(post);
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
