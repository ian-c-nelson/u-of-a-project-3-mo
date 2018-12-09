/* eslint-disable react/destructuring-assignment */
import React from "react";

export const Card = props => <div className="card">{props.children}</div>;

export const CardFooter = props => (
  <footer className="card-footer">{props.children}</footer>
);

export const CardHeader = props => (
  <header className="card-header">
    <h3 className="card-header-title">{props.title}</h3>
  </header>
);

export const CardContent = props => (
  <div className="card-content">
    <div className="content">{props.children}</div>
  </div>
);
