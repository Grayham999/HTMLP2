async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      console.log(value);
      await delay(1000); // Wait for 1 second before logging the next value
    }
  }
  
  // Utility function to create a delay
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Example usage
  const values = [1, 2, 3, 4, 5];
  
  iterateWithAsyncAwait(values);
  