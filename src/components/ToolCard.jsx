import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ icon, title, description, path }) => {
  return (
    <Link to={path} className="tool-card">
      <div className="tool-card-icon">{icon}</div>
      <div className="tool-card-content">
        <h3 className="tool-card-title">{title}</h3>
        <p className="tool-card-desc">{description}</p>
      </div>
      <div className="tool-card-arrow">&rarr;</div>
    </Link>
  );
};

export default ToolCard;
