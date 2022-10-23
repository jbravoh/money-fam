import posts from "../../../fixtures/posts.json";
import { capitalCase } from "change-case";

const Topics = () => {
  const topics = [];

  posts.forEach((x) => {
    console.log(x.topic);
    if (!topics.includes(x.topic)) {
      topics.push(x.topic);
    }
    return;
  });

  return (
    <>
      {topics.map((topic, index) => {
        return (
          <div key={index}>
            <h2>{capitalCase(topic)}</h2>
          </div>
        );
      })}
    </>
  );
};

export default Topics;
