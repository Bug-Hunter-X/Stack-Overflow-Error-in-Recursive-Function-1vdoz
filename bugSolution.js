function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0) { // Handle negative inputs 
    return b; 
  } 
  return foo(a - 1, a + b);
}

//Additional check to prevent stack overflow for very large 'a'
function fooSafe(a,b) {
  if (a > 1000) { // Adjust threshold as needed
    throw new Error("Stack overflow likely. Input too large.");
  }
  return foo(a,b);
} 