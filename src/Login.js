import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-icon"
      />

      <a href={accessUrl}>LOGIN TO SPOTIFY</a>

      <p>
        Please note that this is the spotify-clone for remoting actual spotify app purpose only. If
        you wish to play the music, please open your own spotify app BEFORE you login.
      </p>
    </div>
  );
};

export default Login;
