const profilePage = document.querySelector('#profile');
const start = document.querySelector('#start-quiz');

profilePage.addEventListener('click', async () => {
    document.location.replace('/profile/:id');
});
start.addEventListener('click', async () => {
    document.location.replace('/api/surveys');
});

//Call Data from survey and populate chart



