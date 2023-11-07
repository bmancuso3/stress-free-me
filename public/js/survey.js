const submitButton = document.querySelector('.btn-primary');

submitButton.addEventListener('click', async () => {
  const radioButtons = document.querySelectorAll('input[name="exampleForm"]:checked');

  // Iterate over each selected radio button
  for (const radioButton of radioButtons) {
    const rating = radioButton.value;

    // Create an object with the data to be sent in the request body. Wouldn't this need more than one property on the req.body?
    const data = {
      rating: rating
    };
console.log(data)
    try {
      // Make the fetch POST request
      const response = await fetch('/api/surveys', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();
      // Handle the response data
      console.log(responseData);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  }
  document.location.replace("/api/results"); //goes to result page.
});

