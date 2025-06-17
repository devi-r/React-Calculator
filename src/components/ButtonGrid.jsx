import { BUTTONS } from '../constants/calculator';
import Button from './Button';

export const ButtonGrid = ({ append, calculate, clear, backspace }) => {
  return (
    <section className="grid grid-cols-4 gap-2" aria-label="Calculator Buttons">
      {BUTTONS.map((char) => (
        <Button
          key={char}
          label={char}
          onClick={() => (char === '=' ? calculate() : append(char))}
        />
      ))}

      <Button
        label="Clear"
        onClick={clear}
        className="col-span-2 bg-red-100 hover:bg-red-200"
      />
      <Button
        label="Backspace"
        onClick={backspace}
        className="col-span-2 bg-yellow-100 hover:bg-yellow-200"
      />
    </section>
  );
};

export default ButtonGrid;
