function check1(){
    if (localStorage.getItem("userId") === null){
        window.open("/login","_self")
    }
    else{
        window.open("/chat/index.html","_self")
    }
}