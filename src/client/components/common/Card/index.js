import React from "react";


export const Card = (props) => {
  return (
    <div className="card">
      {props.children}
    </div>
  );
};

export const CardFooter = (props) =>{
  return (
    <footer className="card-footer">
      {props.children}
    </footer>
  );
};

export const  CardHeader = (props) =>{
  return (
    <header className="card-header">
      <h3 className="card-header-title">
        {props.title}
      </h3>
      <a href="#" className="card-header-icon" aria-label="more options">
        <span className="icon">
          <i className="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
  );
};

export const  CardContent = (props) =>{
  return (
    <div className="card-content">
      <div className="content">
        {props.children}

      </div>
    </div>
  );
};


