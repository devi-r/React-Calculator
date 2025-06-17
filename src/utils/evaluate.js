export const evaluate = (tokens) => {
  // First pass: handle * and /
  const highPrecedence = [];
  let i = 0;

  while (i < tokens.length) {
    const token = tokens[i];

    if (token === '*' || token === '/') {
      const a = parseFloat(highPrecedence.pop());
      const b = parseFloat(tokens[i + 1]);
      const result = token === '*' ? a * b : a / b;
      highPrecedence.push(result.toString());
      i += 2; // skip next operand since we consumed it
    } else {
      highPrecedence.push(token);
      i += 1;
    }
  }

  // Second pass: handle + and -
  let result = parseFloat(highPrecedence[0]);
  for (let j = 1; j < highPrecedence.length; j += 2) {
    const operator = highPrecedence[j];
    const next = parseFloat(highPrecedence[j + 1]);

    if (operator === '+') result += next;
    if (operator === '-') result -= next;
  }

  return result;
};
