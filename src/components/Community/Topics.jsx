import posts from "../../fixtures/posts.json";
import {formatTopics} from "../../utils"

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
            <h2>{formatTopics(topic)}</h2>
          </div>
        );
      })}
    </>
  );
};

export default Topics;
