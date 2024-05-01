// async function awaitCall() {
//     try {
//       // Simulate fetching data from an API (replace this with your actual API call)
//       const response = await fetch('https://api.grayham.com/data');
      
//       // Assuming the response is in JSON format, await its parsing
//       const data = await response.json();
  
//       // Log the data
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
//   // Example usage
//   awaitCall();

  async function awaitCall() {
    try {
      // Simulate fetching data from an API (replace this with your actual API call)
      const response = await fetch('https://api.grayham.com/data');
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }
      
      // Assuming the response is in JSON format, await its parsing
      const data = await response.json();
  
      // Log the data
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Example usage
  awaitCall();
  
  