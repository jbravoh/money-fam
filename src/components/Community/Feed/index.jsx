import posts from "../../../fixtures/posts.json";
import React from "react";
import { Container } from "@material-ui/core";
import PostContainer from "./PostContainer";

const Feed = () => {
  const mostPopular = posts.reduce((prev, current) => {
    return prev.num_likes > current.num_likes ? prev : current;
  });

  const popularExtract = mostPopular.content.slice(0, 100) + "...";

  return (
    <>
      {/* <Container maxWidth="sm"> */}
      <PostContainer
        title={mostPopular.title ? mostPopular.title : mostPopular.question}
        extract={popularExtract}
      />

      {posts.map((post) => {
        const extract = post.content.slice(0, 100) + "...";
        return (
          <div key={post.id}>
            <PostContainer
              title={post.title ? post.title : post.question}
              extract={extract}
            />
          </div>
        );
      })}
    </>
  );
};

export default Feed;