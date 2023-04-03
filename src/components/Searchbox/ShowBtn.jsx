import React from 'react';

export default function ShowBtn({ type, showBtnClick }) {
  return (
    <button className="searchbox__btn" onClick={showBtnClick}>
      {type === 'password' ? 'Show' : 'Hide'}
    </button>
  );
}
