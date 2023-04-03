import React from 'react'

export default function Searchbox({keyUp, change, type, showBtnClick}) {
  return (
    <form>
      <label className="flex flex-col w-[300px] text-xl uppercase relative">
        Password:
        <input
          type={type}
          onChange={change}
          onKeyUp={keyUp}
          className="border-b border-gray-600 outline-none mt-5 text-gray-800 pb-2 pr-[70px]"
        />
        <button
          className="absolute right-1 top-[42px] bg-gray-300 hover:scale-105 transition-all ease-in-out duration-200 rounded-lg py-1 px-2 text-center"
          onClick={showBtnClick}
        >
          {type === 'password' ? 'Show' : 'Hide'}
        </button>
      </label>
    </form>
  );
}
