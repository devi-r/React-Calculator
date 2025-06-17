import { useState } from 'react';
import { OPERATORS } from '../constants/calculator';
import { evaluate } from '../utils/evaluate';

export const useCalculator = () => {
  const [expression, setExpression] = useState([]);
  const [result, setResult] = useState('');

  const append = (value) => {
    setExpression((prev) => {
      const updated = [...prev];
      let last = updated[updated.length - 1];

      if (OPERATORS.includes(value)) {
        if (OPERATORS.includes(last) || !prev.length) {
          return prev;
        }

        return [...prev, value];
      }

      if (!last || !prev.length || OPERATORS.includes(last)) {
        updated.push(value);
      } else {
        updated[updated.length - 1] += value;
      }

      return updated;
    });
  };

  const clear = () => {
    setExpression([]);
    setResult('');
  };

  const backspace = () => {
    setExpression((prev) => {
      if (!prev.length) return prev;

      const updated = [...prev];
      const last = updated.pop();

      if (!OPERATORS.includes(last)) {
        if (last.length > 1) {
          updated.push(last.slice(0, -1)); // remove last digit
        }
        // else: last was a single digit, so don't push it back
      }
      // else: last was an operator, so just drop it

      return updated;
    });
  };

  const calculate = () => {
    try {
      const evalResult = evaluate(expression);
      setResult(evalResult.toString());
      setExpression([evalResult.toString()]); //if needed
    } catch {
      setResult('Error');
    }
  };

  return {
    expression,
    result,
    append,
    clear,
    backspace,
    calculate,
    setExpression,
  };
};
