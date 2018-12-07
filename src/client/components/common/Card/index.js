import React from "react";


const Card = (props) => {
  return (
    <div className="card">
      {props.children}
    </div>
  );
};

const CardFooter = (props) =>{
  return (
    <footer className="card-footer">
      {props.children}
    </footer>
  );
};

const CardHeader = (props) =>{
  return (
    <header className="card-header">
      <p class="card-header-title">
        {props.title}
      </p>
      <a href="#" className="card-header-icon" aria-label="more options">
        <span className="icon">
          <i className="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
  );
};

const CardContent = (props) =>{
  return (
    <div className="card-content">
      <div className="content">
        {props.children}

      </div>
    </div>
  );
};

export const Card;
export const CardHeader;
export const CardContent;
export const CardFooter;
export default Card;