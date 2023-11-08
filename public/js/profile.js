const start = document.querySelector('#start-quiz');


start.addEventListener('click', async () => {
    document.location.replace('/api/surveys');
});

//Call Data from survey and populate chart