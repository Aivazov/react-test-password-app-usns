import React, { useState } from 'react';
import CheckingBlocks from '../components/CheckingBlocks';
import { checkStrength, color } from '../data';
import Searchbox from '../components/Searchbox/Searchbox';

export default function PasswordCheck({}) {
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [checks, setChecks] = useState({
    lettersCheck: false,
    numbersCheck: false,
    charsCheck: false,
    passwordLengthCheck: false,
  });

  const handleShowClick = (e) => {
    e.preventDefault();
    setType(type === 'password' ? 'text' : 'password');
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleKeyUp = (e) => {
    const { value } = e.target;
    const lettersCheck = /[a-zA-Z]/.test(value);
    const numbersCheck = /[0-9]/.test(value);
    const charsCheck = /[!@#$%^&*-]/.test(value);
    const passwordLengthCheck = value.length >= 8;
    setChecks({
      lettersCheck,
      numbersCheck,
      charsCheck,
      passwordLengthCheck,
    });
  };

  // reducing checks

  const letters =
    checks.lettersCheck && !checks.charsCheck && !checks.numbersCheck;
  const lettersNumbers =
    checks.lettersCheck && !checks.charsCheck && checks.numbersCheck;

  const chars =
    !checks.lettersCheck && checks.charsCheck && !checks.numbersCheck;
  const charsLetters =
    checks.lettersCheck && checks.charsCheck && !checks.numbersCheck;

  const numbers =
    !checks.lettersCheck && !checks.charsCheck && checks.numbersCheck;
  const charsNumbers =
    !checks.lettersCheck && checks.charsCheck && checks.numbersCheck;

  const lettersCharsNumbers =
    checks.lettersCheck && checks.charsCheck && checks.numbersCheck;

  const matchingLength = password && password.length >= 8;
  const noMatchingLength = password && password.length < 8;

  return (
    <div className="app">
      <Searchbox
        keyUp={handleKeyUp}
        change={handlePassword}
        type={type}
        showBtnClick={handleShowClick}
      />

      {/* checking if no password */}

      <div className="container">
        {!password && (
          <div className="checks__wrap">
            {[...new Array(3)].map(() => (
              <CheckingBlocks
                title={checkStrength.empty}
                color={color.lightGray}
                filter={color.filter}
              />
            ))}
          </div>
        )}

        {/* checking if less then given number of symbols */}

        {noMatchingLength && (
          <div className="checks__wrap">
            {[...new Array(3)].map(() => (
              <CheckingBlocks title={checkStrength.lackOf} color={color.red} />
            ))}
          </div>
        )}

        {/* checking if only one type of characters are typed */}

        {(matchingLength && numbers) ||
        (matchingLength && letters) ||
        (matchingLength && chars) ? (
          <div className="checks__wrap">
            <CheckingBlocks title={checkStrength.easy} color={color.red} />
            <CheckingBlocks
              title={checkStrength.medium}
              color={color.lightGray}
              filter={color.filter}
            />
            <CheckingBlocks
              title={checkStrength.strong}
              color={color.lightGray}
              filter={color.filter}
            />
          </div>
        ) : (
          ''
        )}

        {/* checking if two of three characters types are typed */}

        {(matchingLength && charsLetters) ||
        (matchingLength && lettersNumbers) ||
        (matchingLength && charsNumbers) ? (
          <div className="checks__wrap">
            <CheckingBlocks
              title={checkStrength.medium}
              color={color.yellow}
              filter={color.filter}
            />
            <CheckingBlocks
              title={checkStrength.medium}
              color={color.yellow}
              filter={color.filter}
            />
            <CheckingBlocks
              title={checkStrength.strong}
              color={color.lightGray}
              filter={color.filter}
            />
          </div>
        ) : (
          ''
        )}

        {/* checking if all three types of characters were used */}

        {matchingLength && lettersCharsNumbers ? (
          <div className="checks__wrap">
            <CheckingBlocks
              title={checkStrength.strong}
              color={color.green}
              filter={color.filter}
            />
            <CheckingBlocks
              title={checkStrength.strong}
              color={color.green}
              filter={color.filter}
            />
            <CheckingBlocks
              title={checkStrength.strong}
              color={color.green}
              filter={color.filter}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
