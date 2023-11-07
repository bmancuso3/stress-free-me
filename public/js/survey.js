const submitButton = document.querySelector('.btn-primary');

submitButton.addEventListener('click', async () => {
  const radioButtons = document.querySelectorAll('input[name="exampleForm"]:checked');
const data = {
  sleep_quality: radioButtons[0].value, 
  headaches: radioButtons[1].value,
  performance: radioButtons[2].value,
  workload: radioButtons[3].value,
  hobbies: radioButtons[4].value,
  stress: radioButtons[5].value,
  therapy: radioButtons[6].value,
  outside: radioButtons[7].value,
}

  console.log(data);
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
  document.location.replace("/api/profile/:id"); //goes to homepage OR once profile is set. This will go to profile.
});

