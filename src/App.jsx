import './App.css';
import { useState } from 'react';
import CheckingBlocks from './components/CheckingBlocks';
import { checkStrength, styles } from './data';

function App() {
  const [password, setPassword] = useState('');
  const [checks, setChecks] = useState({
    lettersCheck: false,
    numbersCheck: false,
    charsCheck: false,
    passwordLengthCheck: false,
  });

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
    <div className="flex flex-col justify-center items-center pt-10">
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

      {/* checking if no password */}

      {!password ? (
        <div className="mt-5 flex flex-col space-y-3">
          <CheckingBlocks
            title={checkStrength.empty}
            styles={styles.lightGray}
          />
          <CheckingBlocks
            title={checkStrength.empty}
            styles={styles.lightGray}
          />
          <CheckingBlocks
            title={checkStrength.empty}
            styles={styles.lightGray}
          />
        </div>
      ) : (
        ''
      )}

      {/* checking if less then given number of symbols */}

      {noMatchingLength ? (
        <div className="mt-5 flex flex-col space-y-3">
          <CheckingBlocks title={checkStrength.lackOf} styles={styles.red} />
          <CheckingBlocks title={checkStrength.lackOf} styles={styles.red} />
          <CheckingBlocks title={checkStrength.lackOf} styles={styles.red} />
        </div>
      ) : (
        ''
      )}

      {/* checking if only one type of characters are typed */}

      {(matchingLength && numbers) ||
      (matchingLength && letters) ||
      (matchingLength && chars) ? (
        <div className="mt-5 flex flex-col space-y-3">
          <CheckingBlocks title={checkStrength.easy} styles={styles.red} />
          <CheckingBlocks
            title={checkStrength.easy}
            styles={styles.lightGray}
          />
          <CheckingBlocks
            title={checkStrength.easy}
            styles={styles.lightGray}
          />
        </div>
      ) : (
        ''
      )}

      {/* checking if two of three characters types are typed */}

      {(matchingLength && charsLetters) ||
      (matchingLength && lettersNumbers) ||
      (matchingLength && charsNumbers) ? (
        <div className="mt-5 flex flex-col space-y-3">
          <CheckingBlocks title={checkStrength.medium} styles={styles.yellow} />
          <CheckingBlocks title={checkStrength.medium} styles={styles.yellow} />
          <CheckingBlocks
            title={checkStrength.medium}
            styles={styles.lightGray}
          />
        </div>
      ) : (
        ''
      )}

      {/* checking if all three types of characters were used */}

      {matchingLength && lettersCharsNumbers ? (
        <div className="mt-5 flex flex-col space-y-3">
          <CheckingBlocks title={checkStrength.strong} styles={styles.green} />
          <CheckingBlocks title={checkStrength.strong} styles={styles.green} />
          <CheckingBlocks title={checkStrength.strong} styles={styles.green} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
