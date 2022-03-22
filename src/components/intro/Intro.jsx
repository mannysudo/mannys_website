import "./intro.scss";
import { contactsTabs } from "../../data";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="container">
          {contactsTabs.map((d) => (
            <div key={d.id} className="iconSquare">
              <a className="icon" href={d.link}>
                <img src={d.img} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Manuel Martinez</h1>
          <h2>Software Developer</h2>
        </div>
        <a href="#portfolio">
          <img src="/media/downarrow0.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
