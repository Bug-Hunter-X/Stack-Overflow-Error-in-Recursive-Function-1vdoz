function foo(a, b) {
  if (a === 0) {
    return b;
  }
  return foo(a - 1, a + b);
}