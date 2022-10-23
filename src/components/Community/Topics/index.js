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

  const formatTopics = (topic) => {
    if (topic === "make_a_budget") {
      return "Budget";
    } else if (topic === "pay_expensive_debts") {
      return "Debts";
    } else if (topic === "check_in") {
      return "Check in";
    } else if (topic === "fill_emergency_fund") {
      return "Emergency Fund";
    } else if (topic === "autoenroll_in_pension") {
      return "Pension";
    } else {
      return;
    }
  };

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
