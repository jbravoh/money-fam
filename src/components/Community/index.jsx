import React from "react";
import Feed from "./Feed";
import Navbar from "../Navbar";

const Community = () => {


  return (
    <>
      <Navbar />
      <Feed />
  
      {/* <div>
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
        {selectedIndex === 1 && <Topics />} */}
      {/* </div> */}
    </>
  );
};

export default Community;
