import React from 'react';
const checkStrength = { easy: 'easy', medium: 'medium', strong: 'strong' };

export default function CheckingBlocks() {
  return (
    <div className="mt-5 flex flex-col space-y-3">
      <div className="w-[300px] red rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 text-center py-1">
        <span className="text-white uppercase">{checkStrength.easy}</span>
      </div>
      <div className="w-[300px] gray text-center rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 py-1">
        <span>Test</span>
      </div>
      <div className="w-[300px] gray text-center rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 py-1">
        <span>Test</span>
      </div>
    </div>
  );
}
