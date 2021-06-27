let winicon = document.getElementsByClassName("winicon")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

winicon.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-665px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})
