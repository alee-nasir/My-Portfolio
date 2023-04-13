import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "Web",
      title: "Web App",
    },
    {
      id: "Design",
      title: "UX/UI",
    },
    {
      id: "Visual Design",
      title: "Graphics",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1478198697312-304b0bd9475f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFkbWluJTIwcGFuZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Admin Panel</h3>
        </div>
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1478198697312-304b0bd9475f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFkbWluJTIwcGFuZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Admin Panel</h3>
        </div>
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1478198697312-304b0bd9475f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFkbWluJTIwcGFuZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Admin Panel</h3>
        </div>
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1478198697312-304b0bd9475f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFkbWluJTIwcGFuZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Admin Panel</h3>
        </div>
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1478198697312-304b0bd9475f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFkbWluJTIwcGFuZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Admin Panel</h3>
        </div>
      </div>
    </div>
  );
}
