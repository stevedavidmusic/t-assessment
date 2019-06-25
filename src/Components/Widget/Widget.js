import React from "react";
import "./widget.css";

const Widget = props => {
  return (
    <div className="widgetContainer">
      <header>
        <h3>You May Like</h3>
      </header>
      <div className="widgets">
        {props.info.map(widget => {
          return (
            <div className="individualWidget" key={widget.created}>
              <a href={widget.url}>
                <img src={widget.thumbnail[0].url} />
              </a>
              <a href={widget.url}>
                <h3>{widget.name}</h3>
              </a>
              <a href={widget.url}>
                <h5>{widget.branding}</h5>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Widget;
