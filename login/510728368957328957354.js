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
            localStorage.setItem("userId",userId1)
            setTimeout(() => {
                window.open("/userdetails/index.html","_self")
            }, 2000);
            
        })
        .catch((error) => {
            // Handle errors
            console.error(error.message);
        });
});

// Sign in
signinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed in successfully
            const user2 = userCredential.user;
            const userId = user2.uid
            console.log(`User signed in: ${user2.email}`);
            console.log(userId)
            localStorage.setItem("userId",userId)
            window.open("/chat/","_self")
        })
        .catch((error) => {
            // Handle errors
            console.error(error.message);
        });
});
if(localStorage.getItem("dbcnm") ==="213183100301"){
    document.getElementById("signin-form").style.display = "block"
}
else if(localStorage.getItem("dbcnm") ==="213434484839"){
    document.getElementById("signup-form").style.display = "block"
}
