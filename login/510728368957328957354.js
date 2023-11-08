const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");

// Sign up
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed up successfully
            const user = userCredential.user;
            console.log(`User signed up: ${user.email}`);
            const userId1 = user.uid
            console.log(userId1)
            localStorage.setItem("userId", userId1)
            setTimeout(() => {
                window.open("/userdetails/index.html", "_self")
            }, 2000);

        })
        .catch((error) => {
            // Handle errors
            console.error(error.message);

        });

});

// Sign in
// Sign in
// Sign in
// Sign in



if (localStorage.getItem("dbcnm") === "213183100301") {
    document.getElementById("signin-form").style.display = "block"
}
else if (localStorage.getItem("dbcnm") === "213434484839") {
    document.getElementById("signup-form").style.display = "block"
}

