function slice(string, from, to) {
  if (from > to) {
    return '';
  }

  return string[from] + slice(string, from + 1, to);
}

function reverseString(string) {
  if (string === '') {
    return '';
  }

  const remainingString = slice(string, 0, string.length - 2);
  return string[string.length - 1] + reverseString(remainingString);
} 