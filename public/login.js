const loginForm = $(".loginForm");
const signupForm = $(".signupForm");

signupForm.submit(async (e) => {
  e.preventDefault();

  const username = $("#usernameSignup").val().trim();
  const email = $("#emailSignup").val().trim();
  const password = $("#passwordSignup").val().trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
});

loginForm.submit(async (e) => {
  e.preventDefault();

  const email = $("#emailLogin").val().trim();
  const password = $("#passwordLogin").val().trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
});
