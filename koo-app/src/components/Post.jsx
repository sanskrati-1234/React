import { useState, useEffect } from "react";

const Post = () => {
  const [post, setPost] = useState([
    { title: "abc", body: "ooooo" },
    { title: "abc1", body: "ooooo1" },
    { title: "abc2", body: "ooooo2" },
    { title: "abc3", body: "ooooo3" },
  ]);
  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/posts").then((response) =>
      response.json()
    );
    //.then((post) => setPost(post.data));
  }, []);
  function del(innerHTML) {
    setPost(post.filter((item) => item.title != innerHTML));
  }

  return (
    <>
      {post.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              border: "pink solid 1px",
              margin: "auto",
              width: "500px",
              marginBottom: "20px",
              padding: "20px",
            }}
          >
            <h5 onClick={(e) => del(e.target.innerHTML)}>{item.title}</h5>
            <div>{item.body}</div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
