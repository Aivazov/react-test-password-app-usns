import React from 'react';

export default function CheckingBlocks({ title, styles }) {
  return (
    <div className={`checking-box ${styles}`}>
      <span>{title}</span>
    </div>
  );
}
