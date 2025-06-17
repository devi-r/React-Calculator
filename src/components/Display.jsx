export const Display = ({ expression, result }) => {
  return (
    <section className="mb-4" aria-label="Display">
      <input
        type="text"
        className="w-full text-right text-2xl px-4 py-3 border rounded-md mb-2"
        value={expression.join(' ')}
        readOnly
      />
      <div className="text-right text-white h-6">
        {result && `Ans: ${result}`}
      </div>
    </section>
  );
};

export default Display;
