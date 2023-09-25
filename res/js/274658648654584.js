function rio() {
    setTimeout(() => {
        scrollToBottom()
    }, 10)
}
firebase.initializeApp(firebaseConfig);

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
            message: message,
            timestamp: timestamp
        });

        messageInput.value = "";
        document.getElementById("messages").scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
    }
}
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
    const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    console.log(formattedDateTime);



    if (isCurrentUserSender) {
        messageDiv.className = "sent";
        messageDiv.innerHTML = `
            <p class="message-text">${messageData.message}<a>${formattedDateTime}</a></p>
        `;
    } else {
        messageDiv.className = "received";
        messageDiv.innerHTML = `
            <p class="message-text">${messageData.message},<a>${formattedDateTime}</a></p>
        `;
        rio()
    }
    document.getElementById("messages").appendChild(messageDiv);
    document.getElementById("messages").scrollIntoView(false);
}
const chatRoomId = generateChatRoomId(userid, recipientUserId);
const chatRoomRef = db.ref("messages/" + chatRoomId);
chatRoomRef.on("child_added", displayMessage);
