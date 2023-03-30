import './App.css';
import { useState } from 'react';
import CheckingBlocks from './components/CheckingBlocks';

function App() {
  const [password, setPassword] = useState('');
  const [checks, setChecks] = useState({
    lettersCheck: false,
    numbersCheck: false,
    charsCheck: false,
    passwordLengthCheck: false,
  });

  const checkStrength = { easy: 'easy', medium: 'medium', strong: 'strong' };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleKeyUp = (e) => {
    const { value } = e.target;
    const lettersCheck = /[a-zA-Zа-яА-Я]/.test(value);
    const numbersCheck = /[0-9]/.test(value);
    const charsCheck = /[!@#$%^&*-№:?;%]/.test(value);
    const passwordLengthCheck = value.length >= 8;
    setChecks({
      lettersCheck,
      numbersCheck,
      charsCheck,
      passwordLengthCheck,
    });
  };

  const letters =
    checks.lettersCheck && !checks.charsCheck && !checks.numbersCheck;
  const chars =
    !checks.lettersCheck && checks.charsCheck && !checks.numbersCheck;
  const numbers =
    !checks.lettersCheck && !checks.charsCheck && checks.numbersCheck;
  const matchingLength = password && password.length >= 8;
  const noMatchingLength = password && password.length < 8;

  return (
    <div className="p-10">
      <form>
        <label className="flex flex-col w-[300px] text-xl uppercase">
          Password:
          <input
            type="text"
            onChange={handlePassword}
            onKeyUp={handleKeyUp}
            className="border-b border-gray-600 outline-none mt-5 text-gray-800 pb-2"
          />
        </label>
      </form>

      {!password ? (
        <div className="mt-5 flex flex-col space-y-3">
          <div className="w-[300px] white text-center rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 py-1">
            <span>No symbols</span>
          </div>
          <div className="w-[300px] white text-center rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 py-1">
            <span>No symbols</span>
          </div>
          <div className="w-[300px] white text-center rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 py-1">
            <span>No symbols</span>
          </div>
        </div>
      ) : (
        ''
      )}

      {noMatchingLength ? (
        <div className="mt-5 flex flex-col space-y-3">
          <div className="w-[300px] red text-center rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 py-1">
            <span className="text-white uppercase">Less then 8 symbols</span>
          </div>
          <div className="w-[300px] red text-center rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 py-1">
            <span className="text-white uppercase">Less then 8 symbols</span>
          </div>
          <div className="w-[300px] red text-center rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 py-1">
            <span className="text-white uppercase">Less then 8 symbols</span>
          </div>
        </div>
      ) : (
        ''
      )}

      {(matchingLength &&
        !checks.lettersCheck &&
        !checks.charsCheck &&
        checks.numbersCheck) ||
      (matchingLength &&
        checks.lettersCheck &&
        !checks.charsCheck &&
        !checks.numbersCheck) ||
      (matchingLength &&
        checks.charsCheck &&
        !checks.lettersCheck &&
        !checks.numbersCheck) ? (
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
      ) : (
        ''
      )}

      {(password &&
        password.length >= 8 &&
        checks.lettersCheck &&
        checks.charsCheck &&
        !checks.numbersCheck) ||
      (password &&
        password.length >= 8 &&
        checks.lettersCheck &&
        !checks.charsCheck &&
        checks.numbersCheck) ||
      (password &&
        password.length >= 8 &&
        !checks.lettersCheck &&
        checks.charsCheck &&
        checks.numbersCheck) ? (
        <div className="mt-5 flex flex-col space-y-3">
          <div className="w-[300px] yellow rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 text-center py-1">
            <span className="text-white uppercase">{checkStrength.medium}</span>
          </div>
          <div className="w-[300px] yellow text-center rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 py-1">
            <span className="text-white uppercase">{checkStrength.medium}</span>
          </div>
          <div className="w-[300px] gray text-center rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 py-1">
            <span>easy</span>
          </div>
        </div>
      ) : (
        ''
      )}

      {password &&
      password.length >= 8 &&
      checks.lettersCheck &&
      checks.charsCheck &&
      checks.numbersCheck ? (
        <div className="mt-5 flex flex-col space-y-3">
          <div className="w-[300px] green rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 text-center py-1">
            <span className="text-white uppercase">{checkStrength.strong}</span>
          </div>
          <div className="w-[300px] green text-center rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 py-1">
            <span className="text-white uppercase">{checkStrength.strong}</span>
          </div>
          <div className="w-[300px] green text-center rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 py-1">
            <span className="text-white uppercase">{checkStrength.strong}</span>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
