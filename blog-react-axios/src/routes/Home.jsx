import blogFetch from "../axios/config";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "../routes/Home.css";
const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    // console.log("testando");
    try {
      const response = await blogFetch.get("/posts");

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
    <div className="home">
      <h1>Últimos posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {/* <link to={`/posts/${post.id}`} className="btn-lermais">
              Ler mais
            </link> */}
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
