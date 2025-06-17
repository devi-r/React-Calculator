import { useCallback, useEffect } from 'react';
import { useCalculator } from '../hooks/useCalculator';
import Display from './Display';
import ButtonGrid from './ButtonGrid';

export const Calculator = () => {
  const { expression, result, append, clear, backspace, calculate } =
    useCalculator();

  const handleKeyDown = useCallback(
    (e) => {
      if (/\d/.test(e.key) || ['+', '-', '*', '/', '.'].includes(e.key)) {
        append(e.key);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        calculate();
      } else if (e.key === 'Backspace') {
        backspace();
      } else if (e.key === 'Escape') {
        clear();
      }
    },
    [append, calculate, backspace, clear]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className="max-w-xs mx-auto mt-12 p-4 border rounded-xl shadow-md font-sans bg-black"
      aria-label="Calculator"
    >
      <Display expression={expression} result={result} />

      <ButtonGrid
        append={append}
        clear={clear}
        backspace={backspace}
        calculate={calculate}
      />
    </div>
  );
};

export default Calculator;
