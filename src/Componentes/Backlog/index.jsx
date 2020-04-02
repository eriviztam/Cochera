import React from "react";
import './styles.css'

export const Backlog= ({ id, description}) => {
  return (
    <div className="backlog">
      <p><b>{id}:</b> {description}</p>
    </div>
  );
};