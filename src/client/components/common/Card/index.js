/* eslint-disable react/destructuring-assignment */
import React from "react";

const Card = props => <div className="card">{props.children}</div>;

const CardFooter = props => (
  <footer className="card-footer">{props.children}</footer>
);

const CardHeader = props => (
  <header className="card-header">
    <h2 className="card-header-title">{props.title}</h2>
  </header>
);

const CardContent = props => (
  <div className="card-content">
    <div className="content">{props.children}</div>
  </div>
);

export { Card, CardFooter, CardHeader, CardContent };
export default Card;
