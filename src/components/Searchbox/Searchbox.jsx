import React from 'react';
import SearchInp from './SearchInp';
import ShowBtn from './ShowBtn';

export default function Searchbox({ keyUp, change, type, showBtnClick }) {
  return (
    <form>
      <label className="searchbox__label">
        Password:
        <SearchInp type={type} change={change} keyUp={keyUp} />
        <ShowBtn type={type} showBtnClick={showBtnClick} />
      </label>
    </form>
  );
}
