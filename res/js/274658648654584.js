function rio() {
    setTimeout(() => {
        scrollToBottom()
    }, 10)
}
function dklde() {
    if (document.querySelector("#messages div:first-child") === null) {
        console.log("none")
    }
    else {
        opih()
    }
}
function opih() {
    if (document.querySelector("#messages div:first-child").className === "sent") {
        document.querySelectorAll('.sent')[0].style.marginTop = '86px'
        document.querySelectorAll('.sent')[0].style.transition = '1s'
        document.querySelectorAll('.sent')[0].style.animation = "kdlori 1s"
    }
    else if (document.querySelector("#messages div:first-child").className === "received") {
        document.querySelectorAll('.received')[0].style.marginTop = '86px';
        document.querySelectorAll('.sent').style.transition = "1s"
    }
}
firebase.initializeApp(firebaseConfig);
// const myApp2 = firebase.initializeApp(firebaseConfig6, 'config1');

const db = firebase.database();


let userid = localStorage.getItem("userId");
let recipientUserId = localStorage.getItem("RID");
const recipientNameRef = db.ref("users/" + recipientUserId + "/name");

recipientNameRef.on("value", function (snapshot) {
    const recipientName = snapshot.val();
    document.getElementById("recipient-name").textContent = recipientName;
});

document.getElementById("message-form").addEventListener("submit", sendMessage);

function sendMessage(e) {
    e.preventDefault();
    const timestamp = Date.now();
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();

    if (message !== "") {
        const chatRoomId = generateChatRoomId(userid, recipientUserId);
        const messagesRef = db.ref("messages/" + chatRoomId + "/" + timestamp);
        messagesRef.set({
            sender: userid,
            reciver: recipientUserId,
            message: message,
            timestamp: timestamp,
            type: "friend"
        });

        messageInput.value = "";
        document.getElementById("messages").scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
    }
}
// Define a function to retrieve users who have chatted with you


// Call the function to populate the "set" element


function generateChatRoomId(userId1, userId2) {
    return userId1 < userId2 ? `${userId1}-${userId2}` : `${userId2}-${userId1}`;
}
function displayMessage(snapshot) {
    const messageData = snapshot.val();
    const messageDiv = document.createElement("div");
    const isCurrentUserSender = messageData.sender === userid;
    const timestamp = messageData.timestamp;
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";


    const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    console.log(formattedDateTime);


    if (isCurrentUserSender) {
        messageDiv.className = "sent";
        messageDiv.innerHTML = `
            <p class="message-text">${messageData.message}<a>${formattedDateTime}</a></p>
        `;
    } else {
        messageDiv.className = "received";
        messageDiv.innerHTML = `
            <p class="message-text">${messageData.message}<a>${formattedDateTime}</a></p>
        `;
        rio()
        setTimeout(() => {
            dklde()
        }, 100);



    }
    document.getElementById("messages").appendChild(messageDiv);
    document.getElementById("messages").scrollIntoView(false);
}
const chatRoomId = generateChatRoomId(userid, recipientUserId);
const chatRoomRef = db.ref("messages/" + chatRoomId);
chatRoomRef.on("child_added", displayMessage);


function yuioe() {
    const dbRef = firebase.database().ref("messages/" + chatRoomId);

    // Create a flag to ensure logging only once
    let loggedOnce = false;

    // Listen for changes in the "type" field
    dbRef.on("child_added", function (snapshot) {
        const messageData = snapshot.val();
        if (messageData.type === "friend" && !loggedOnce) {
            console.log(messageData.sender)
            console.log(messageData.reciver)
            console.log("mg");
            loggedOnce = true;
        }
    });
}