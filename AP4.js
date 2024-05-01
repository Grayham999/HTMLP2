async function concurrentRequests() {
    try {
      // Make two API calls concurrently
      const [result1, result2] = await Promise.all([fetchData('https://github.com/'), fetchData('https://www.studentroost.co.uk/')]);
  
      // Log the combined results
      console.log('Combined Results:');
      console.log('Result 1:', result1);
      console.log('Result 2:', result2);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Utility function to fetch data from an API
  async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
  }
  
  // Example usage
  concurrentRequests();
  