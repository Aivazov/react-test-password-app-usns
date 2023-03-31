import './App.css';
import { useState } from 'react';
import CheckingBlocks from './components/CheckingBlocks';
import { motion } from 'framer-motion';
import { checkStrength, color } from './data';

function App() {
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

  // checks

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
        <label className="flex flex-col w-[300px] text-xl uppercase relative">
          Password:
          <input
            type={type}
            onChange={handlePassword}
            onKeyUp={handleKeyUp}
            className="border-b border-gray-600 outline-none mt-5 text-gray-800 pb-2"
          />
          <button className="absolute right-0 top-10" onClick={handleShowClick}>
            {type === 'password' ? 'Show' : 'Hide'}
          </button>
        </label>
      </form>

      {/* checking if no password */}

      <div className="overflow-hidden px-20">
        {!password ? (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mt-5 flex flex-col space-y-3"
          >
            <CheckingBlocks
              title={checkStrength.empty}
              color={color.lightGray}
              filter={color.filter}
            />
            <CheckingBlocks
              title={checkStrength.empty}
              color={color.lightGray}
              filter={color.filter}
            />
            <CheckingBlocks
              title={checkStrength.empty}
              color={color.lightGray}
              filter={color.filter}
            />
          </motion.div>
        ) : (
          ''
        )}

        {/* checking if less then given number of symbols */}

        {noMatchingLength ? (
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              // ease: 'linear',
              // duration: 2,
              // x: { duration: 1 },
              type: 'spring',
              stiffness: 100,
            }}
            className="mt-5 flex flex-col space-y-3"
          >
            <CheckingBlocks title={checkStrength.lackOf} color={color.red} />
            <CheckingBlocks title={checkStrength.lackOf} color={color.red} />
            <CheckingBlocks title={checkStrength.lackOf} color={color.red} />
          </motion.div>
        ) : (
          ''
        )}

        {/* checking if only one type of characters are typed */}

        {(matchingLength && numbers) ||
        (matchingLength && letters) ||
        (matchingLength && chars) ? (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mt-5 flex flex-col space-y-3"
          >
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
          </motion.div>
        ) : (
          ''
        )}

        {/* checking if two of three characters types are typed */}

        {(matchingLength && charsLetters) ||
        (matchingLength && lettersNumbers) ||
        (matchingLength && charsNumbers) ? (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mt-5 flex flex-col space-y-3"
          >
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
          </motion.div>
        ) : (
          ''
        )}

        {/* checking if all three types of characters were used */}

        {matchingLength && lettersCharsNumbers ? (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mt-5 flex flex-col space-y-3"
          >
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
          </motion.div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default App;
