const firebaseConfig3 = {
    apiKey: "AIzaSyAxU8cccikUyN7dYG4ToBtq2dhq7VKyC4U",
    authDomain: "disunicchatserver.firebaseapp.com",
    databaseURL: "https://disunicchatserver-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "disunicchatserver",
    storageBucket: "disunicchatserver.appspot.com",
    messagingSenderId: "549278183688",
    appId: "1:549278183688:web:f01699782119c2b895fcbd",
    measurementId: "G-5EBC07JFJP"
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
