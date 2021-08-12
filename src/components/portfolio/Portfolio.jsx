import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { webPortfolio, mobilePortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="left">
        <div className="container">
            <h4>
              My fullstack developer skills include the following:
            </h4>
            <ul className='langnames'>
                <li>Python | C++ | Bash | JavaScript | HTML | CSS | SCSS | JSON</li>
                <li>AWS | Google Cloud Platform</li>
                <li>React | React Native</li>
                <li>Git | Github</li>
                <li>REST-APIs | Node.js | Express | MongoDB</li>
            </ul>
        </div>
      </div>

      <div className="right">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              key={item.id}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>

        <div className="container">
          {data.map((d) => (
            <div className="item">
              <img src={d.img} alt="" />
              <a className='web' href={d.link}>
                {d.title}
              </a>
            </div>
          ))}
        </div>
        <a href="#certifications">
          <img src="/media/downarrow0.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
