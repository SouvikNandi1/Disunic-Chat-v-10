function checkinp() {
    if (document.getElementById("message-input").value === "") {
        document.getElementById("message-btn").disabled = true
        document.getElementById("iotp").style.color="#8696a0"
    }
    else {
        document.getElementById("message-btn").disabled = false
        document.getElementById("iotp").style.color="#0e62d1"
    }
}