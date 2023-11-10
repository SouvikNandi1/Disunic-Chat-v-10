function checkinp() {
    if (document.getElementById("message-input").value === "") {
        document.getElementById("message-btn").disabled = true
        document.getElementById("iotp").style.color = "#8696a0"
        document.getElementById("message-form").style.height = "15%"
        document.getElementById("uritpt").style.display = "none"
        document.getElementById("messages").style.height = "85%"
        document.getElementById("bar2").style.marginTop = "20px"
    }
    else {
        document.getElementById("message-btn").disabled = false
        document.getElementById("iotp").style.color = "#0e62d1"
        if (localStorage.getItem("userId") === localStorage.getItem("RID")) {
            console.log("OKTYU")
            document.getElementById("uritpt").style.display = "block"
            document.getElementById("message-form").style.height = "23%"
            document.getElementById("messages").style.height = "77%"
            document.getElementById("bar2").style.marginTop = "10px"
            localStorage.setItem("jsks", document.getElementById("message-input").value)
        }
        else {
            console.log("Haaaaa")
        }
        // document.getElementById("uritpt").style.display="block"
        // document.getElementById("message-form").style.height="23%"
        // document.getElementById("messages").style.height="77%"
        // document.getElementById("bar2").style.marginTop="10px"
        // localStorage.setItem("jsks",document.getElementById("message-input").value)
    }
}
function hfj() {

}