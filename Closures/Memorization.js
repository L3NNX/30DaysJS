// Memoization function
function memoize(fn) {
    // Create an object to store previously computed results
    const cache = {};
  
    // Return a new function that wraps the original function
    return function(...args) {
      // Create a unique key for the cache based on the arguments
      const key = JSON.stringify(args);
  
      // Check if the result is already cached
      if (cache[key]) {
        console.log(`Fetching from cache for arguments: ${args}`);
        return cache[key]; // Return cached result
      }
  
      // Call the original function and store the result in cache
      const result = fn(...args);
      cache[key] = result; // Store the result in cache
      console.log(`Calculating result for arguments: ${args}`);
      return result; // Return the computed result
    };
  }
  
  // Example function to be memoized (e.g., Fibonacci)
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Create a memoized version of the Fibonacci function
  const memoizedFibonacci = memoize(fibonacci);
  
  // Testing the memoized function
  console.log(memoizedFibonacci(10)); // Output: 55 (calculates)
  console.log(memoizedFibonacci(10)); // Output: 55 (fetches from cache)
  console.log(memoizedFibonacci(9));  // Output: 34 (calculates)
  console.log(memoizedFibonacci(8));  // Output: 21 (calculates)
  console.log(memoizedFibonacci(10)); // Output: 55 (fetches from cache)
  