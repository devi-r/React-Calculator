import { Calculator } from './components/Calculator';

function App() {
  return (
    <main
      className="bg-mustard min-h-screen flex flex-col items-center justify-center"
      role="main"
      aria-labelledby="calculator-title"
    >
      <h1 id="calculator-title" className="text-4xl font-bold text-center mb-4">
        React Calculator
      </h1>
      <Calculator />
    </main>
  );
}

export default App;
