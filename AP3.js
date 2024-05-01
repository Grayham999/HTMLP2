async function chainedAsyncFunctions() {
    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
  }
  
  async function firstAsyncFunction() {
    await delayAndLog('IT IS I, GRAYHAM');
  }
  
  async function secondAsyncFunction() {
    await delayAndLog('YOUR DAD IN EVERYTHING');
  }
  
  async function thirdAsyncFunction() {
    await delayAndLog('CALL ME YOUR POPS');
  }
  
  async function delayAndLog(message) {
    await delay(1000);
    console.log(message);
  }
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Example usage
  chainedAsyncFunctions();
  