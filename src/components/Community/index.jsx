import React, { useState } from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed";
import Topics from "./Topics";
import Navbar from "../Navbar";

const Community = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Navbar />
  
      <div>
        <button
          onClick={() => {
            setSelectedIndex(0);
          }}
        >
          <p>Feed</p>
        </button>
        <button
          onClick={() => {
            setSelectedIndex(1);
          }}
        >
          <p>Topic</p>
        </button>
        {selectedIndex === 0 && <Feed />}
        {selectedIndex === 1 && <Topics />}
      </div>
    </>
  );
};

export default Community;
