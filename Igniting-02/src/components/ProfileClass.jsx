import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.name);
    this.state = {
      userInfo: {
        name: "",
        bio: "",
        avatar_url: "",
      },
    };
    //console.log("constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/likitheshts");
    const datJson = await data.json();
    //console.log(datJson);
    this.setState({
      userInfo: datJson,
    });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log("render");
    return (
      <div>
        <h2>{this.state.userInfo?.name}</h2>
        <h2>{this.state.userInfo?.bio}</h2>
        <img src={this.state.userInfo?.avatar_url}></img>
      </div>
    );
  }
}

export default ProfileClass;
