import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Interval");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <>
        <div>About Page</div>
        <p> This is the About page</p>
        <ProfileClass name={"Likithesh"} />
        <Outlet />
      </>
    );
  }
}

export default About;
