import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const [visible, setVisible] = useState(false); // visibility state
  function handleChange(event) {
    let length = event.target.value.length;

    if (length >= 3) {
      props.onSearch(
        event.target.value,
        (page) => agent.Items.byTitle(event.target.value, page),
        agent.Items.byTitle(event.target.value)
      );
    } else {
      const tab = "all";
      const itemsPromise = agent.Items.all;
      props.onLoad(
        tab,
        itemsPromise,
        Promise.all([agent.Tags.getAll(), itemsPromise()])
      );
    }
  }

  function handleClick(event) {
    console.log(event.target);
    setVisible(!visible);
  }
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span
            id="get-part"
            style={{ paddingRight: "10px" }}
            onClick={handleClick}
          >
            A place to get
          </span>
          <span>
            {visible && (
              <input
                className="search-bar"
                id="search-box"
                placeholder="What is it that you truly desire"
                onChange={handleChange}
              />
            )}
          </span>
          <span style={{ paddingLeft: "10px" }}> the cool sfuff</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
