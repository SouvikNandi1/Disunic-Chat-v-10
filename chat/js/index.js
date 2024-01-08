const firebaseConfig2 = {
    apiKey: "AIzaSyBYsA58ozyd8LgHfOHCB_yL1l7Bqz045H8",
    authDomain: "disuniccore.firebaseapp.com",
    databaseURL: "https://disuniccore-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "disuniccore",
    storageBucket: "disuniccore.appspot.com",
    messagingSenderId: "953385510885",
    appId: "1:953385510885:web:88d87771468a1fd13cb10c",
    measurementId: "G-0GF9CE0R5T"
  };
firebase.initializeApp(firebaseConfig2);
// const myApp1 = firebase.initializeApp(firebaseConfig2, 'config1');
const database = firebase.database();
const rootRef = database.ref();
function displayUserInfo(data) {
    const userInfoDiv = document.getElementById("user-info");
    userInfoDiv.innerHTML = "";
    for (const userId in data) {
        if (data.hasOwnProperty(userId)) {
            const user = data[userId];
            const username = user.fname;
            const lastName = user.lname;
            const logoUrl = user.logo;
            const fjir = user.online;
            const userDiv = document.createElement("div");
            userDiv.id = userId;
            const fkldiv = document.createComment("div")
            fkldiv.innerHTML = ``
            if(fjir){
                console.log(username)
            }
            const userInfoPara = document.createElement("div");
            userInfoPara.setAttribute("class", "mango")
            userInfoPara.innerHTML = `
            <div class="discm"><div class="slp"><img src=${logoUrl}></img></div>
            <p class="names">${username} ${lastName}</p></div>`
            userDiv.appendChild(fkldiv);
            userDiv.appendChild(userInfoPara);
            userInfoDiv.appendChild(userDiv);
            userDiv.addEventListener("click", () => {
                localStorage.setItem("RID", userId);
                localStorage.setItem("lpo", username);
                localStorage.setItem("lgo", logoUrl)
                window.open("/chat/chat.html", "_self")
            });
        }
    }
}
rootRef.once("value")
    .then((snapshot) => {
        const data = snapshot.val();
        displayUserInfo(data);
    })
    .catch((error) => {
        console.error("Error retrieving data:", error);
    });
