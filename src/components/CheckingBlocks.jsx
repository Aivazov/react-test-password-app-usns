import React from 'react';

export default function CheckingBlocks({ title, color, filter }) {
  return (
    <div className={`checking-box ${color}`}>
      <span className={`${filter}`}>{title}</span>
    </div>
  );
}
