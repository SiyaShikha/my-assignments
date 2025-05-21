function slice(string, from, to) {
  if (from === to) {
    return string[to];
  }

  return string[from] + slice(string, from + 1, to);
}