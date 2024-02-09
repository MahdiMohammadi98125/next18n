import React from "react";

export default function Card({ className, children, id }) {
  return (
    <div className={className} key={id}>
      {children}
    </div>
  );
}
