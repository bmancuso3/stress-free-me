const loginForm = async (event) => {
  event.preventDefault();

  //Grabbing the values from our homepage.handlebars
  const email = document.querySelector("#emailInput").value.trim();
  const password = document.querySelector("#passwordInput").value.trim();
  console.log(email, password);
  //If email and password match then we make an update using a POST HTTP request, that speaks directly to the userRoutes.js to fetch the POST route for 'login'.
  // API folder to index.js '/users', and then to 'login' post in userRoutes.js
  if (email && password) {
    const response = await fetch("api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    //this will redirect to questions.handlebars if above is successful. If not, alert will pop up.
    if (response.ok) {
      document.location.replace("/profile/:id");
    } else {
      alert("Invalid Login, please input the correct credentials!");
    }
  }
};

const signupForm = async (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#emailNew").value.trim();
  const password = document.querySelector("#passwordNew").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Created login successful!");
      document.location.replace("/api/surveys"); //needs to go to profile
    } else {
      alert("Invalid login, please input needed criteria for creating login!");
    }
  }
};

document.querySelector(".login-form").addEventListener("submit", loginForm);

document.querySelector(".signup-form").addEventListener("submit", signupForm);
