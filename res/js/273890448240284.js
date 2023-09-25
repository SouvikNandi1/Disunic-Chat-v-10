function checkinp() {
    if (document.getElementById("message-input").value === "") {
        document.getElementById("message-btn").disabled = true
    }
    else {
        document.getElementById("message-btn").disabled = false
    }
}