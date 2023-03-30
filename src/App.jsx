import './App.css';
import { useState } from 'react';
// import { Password } from 'primereact/password';

// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';

var zxcvbn = require('zxcvbn');

function App() {
  // const [grayBg, setGrayBg] = useState('bg-gray');
  const [password, setPassword] = useState('');
  const [checks, setChecks] = useState({
    lettersCheck: false,
    capsLettersCheck: false,
    numbersCheck: false,
    charsCheck: false,
    passwordLengthCheck: false,
  });

  const checkStrength = { easy: 'easy', medium: 'medium', strong: 'strong' };

  const checkStrengthPassword = (e) => {
    // const password = e.target.value.length;
    // if (password < 8) {
    //   console.log('less then 8');
    // } else {
    //   console.log('nice');
    // }
    // const password = zxcvbn(e.target.value);
    // console.log(password.score);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleKeyUp = (e) => {
    // const value = e.target.value;
    const { value } = e.target;
    // console.log(e.key);
    // console.log(value);
    const lettersCheck = /[a-z]/.test(value);
    const capsLettersCheck = /[A-Z]/.test(value);
    const numbersCheck = /[0-9]/.test(value);
    const charsCheck = /[!@#$%^&*-]/.test(value);
    const passwordLengthCheck = value.length >= 8;
    // console.log(capsLettersCheck);
    // console.log(numbersCheck);
    console.log(charsCheck);
    setChecks({
      lettersCheck,
      capsLettersCheck,
      numbersCheck,
      charsCheck,
      passwordLengthCheck,
    });
  };

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
        {/* <Password /> */}
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

      {password && password.length < 8 ? (
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

      {password && password.length >= 8 ? (
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

      {password &&
      password.length &&
      checks.lettersCheck &&
      checks.numbersCheck ? (
        <div className="mt-5 flex flex-col space-y-3">
          <div className="w-[300px] yellow rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 text-center py-1">
            <span className="text-white uppercase">{checkStrength.medium}</span>
          </div>
          <div className="w-[300px] yellow text-center rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 py-1">
            <span>{checkStrength.medium}</span>
          </div>
          <div className="w-[300px] gray text-center rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 py-1">
            <span>easy</span>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
