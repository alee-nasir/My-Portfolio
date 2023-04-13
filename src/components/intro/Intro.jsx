import "./intro.scss";
import Typed from "react-typed";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/ali.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ali Nasir</h1>
          <h3>
            <span>
              <Typed
                className="typed-text"
                strings={["ReactJs Front-end Developer", "UX/UI Designer"]}
                typeSpeed={40}
                backSpeed={60}
                backDelay={1500}
                loop
              />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
