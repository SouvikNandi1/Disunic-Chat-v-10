const firebaseConfig3 = {
    apiKey: "AIzaSyBYsA58ozyd8LgHfOHCB_yL1l7Bqz045H8",
    authDomain: "disuniccore.firebaseapp.com",
    databaseURL: "https://disuniccore-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "disuniccore",
    storageBucket: "disuniccore.appspot.com",
    messagingSenderId: "953385510885",
    appId: "1:953385510885:web:88d87771468a1fd13cb10c",
    measurementId: "G-0GF9CE0R5T"
  };
// firebase.initializeApp(firebaseConfig3);
const myApp2 = firebase.initializeApp(firebaseConfig3, 'MyAppName2');
const databaselogo = myApp2.database();
function uploaduserlogo() {
    window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo(0, document.body.scrollHeight);
    let fname = document.getElementById("first-name").value
    let lname = document.getElementById("last-name").value
    let logo = localStorage.getItem("userlogo")
    const newStr = localStorage.getItem("userId").replace(/\./g, "@disunic");
    if (fname, lname === "") {
        console.log("er")
    }
    else {
        databaselogo.ref(newStr).set({
            fname,
            lname,
            logo,
        });
    }
}
function getlogofromdb() {
    if (localStorage.getItem("userId") === localStorage.getItem("userId")) {
        const newStr = localStorage.getItem("userId").replace(/\./g, "@disunic");
        const userRef = databaselogo.ref(newStr);
        userRef.once("value", function (snapshot) {
            const userData = snapshot.val();
            const logoUrl = userData.logo;
            const username = userData.fname;
            localStorage.setItem("username", username)
            const lastname = userData.lname;
            localStorage.setItem("lastname", lastname)
            // console.log(logoUrl + username + lastname);
            localStorage.setItem("infologo", logoUrl)

        });
    }
}
