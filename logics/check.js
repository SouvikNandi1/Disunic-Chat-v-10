function check1(){
    if (localStorage.getItem("userId") === null){
        window.open("/login","_self")
    }
    else{
        window.open("/chat/index.html","_self")

    }
}
function check2(){
    if (localStorage.getItem("userId") === null){
        window.open("/login","_self")
    }
    else if(localStorage.getItem("userId") === localStorage.getItem("userId")){
        document.getElementById("ddddbnikjoro").style.display="block"
    }
    else{
        console.log("ok")
    }
}