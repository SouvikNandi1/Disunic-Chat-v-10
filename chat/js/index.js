const firebaseConfig = {
    apiKey: "AIzaSyAxU8cccikUyN7dYG4ToBtq2dhq7VKyC4U",
    authDomain: "disunicchatserver.firebaseapp.com",
    databaseURL: "https://disunicchatserver-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "disunicchatserver",
    storageBucket: "disunicchatserver.appspot.com",
    messagingSenderId: "549278183688",
    appId: "1:549278183688:web:f01699782119c2b895fcbd",
    measurementId: "G-5EBC07JFJP"
};
firebase.initializeApp(firebaseConfig);
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
