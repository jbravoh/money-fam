import posts from "../../fixtures/posts.json";
import React from "react";
import PostContainer from "./PostContainer";

const Feed = () => {
  const mostPopular = posts.reduce((prev, current) => {
    return prev.num_likes > current.num_likes ? prev : current;
  });

  // const popularExtract = mostPopular.content.slice(0, 100) + "...";

  const popularExtract = mostPopular.content.slice(0, 100) + "...";

  console.log(popularExtract)
  
  

  return (
    <>
      {/* <Container maxWidth="sm"> */}
      <h2 style={{margin: "20px 0"}}>Most popular post</h2>
      <PostContainer
        title={mostPopular.title ? mostPopular.title : mostPopular.question}
        extract={popularExtract}
        topic={mostPopular.topic}
      />
      <hr style={{margin: "30px 0 20px", colour: "light-grey"}}/>
      <h2 style={{margin: "20px 0"}}>All Posts</h2>
      {posts.map((post) => {
        const extract = post.content.slice(0, 100) + "...";
        return (
          <div key={post.id}>
            <PostContainer
              title={post.title ? post.title : post.question}
              extract={extract}
              topic={post.topic}
            />
          </div>
        );
      })}
    </>
  );
};

export default Feed;
