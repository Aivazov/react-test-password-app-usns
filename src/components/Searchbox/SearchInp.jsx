import React from 'react'

export default function SearchInp({type, change, keyUp}) {
  return (
    <input
      type={type}
      onChange={change}
      onKeyUp={keyUp}
      placeholder='Please enter a password...'
      className="searchbox__input"
    />
  );
}
