var sidenavbar = document.querySelector(".side-navbar")
var havetext = document.querySelectorAll(".have")
var search = document.querySelector(".search")
var entertext =""
function sidenav(){
    sidenavbar.style.right = "0"
}

function closesidenav(){
    sidenavbar.style.right = "-60%"
}

function check(e)
{
    entertext= e.target.value.toUpperCase()

    for (var i =0;i<havetext.length;i++){

        if(havetext[i].textContent.toUpperCase().indexOf(entertext) < 0){
            havetext[i].parentElement.style.display = "none"
        }

        else{
            havetext[i].parentElement.style.display = "block" 
        }
    }
}





