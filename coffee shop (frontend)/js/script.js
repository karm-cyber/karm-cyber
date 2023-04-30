let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
}

document.getElementById("btn_001").addEventListener("click", dark);
            function dark(){
               document.body.style.backgroundColor = "black";
               document.body.style.Color = "white";
               document.getElementById("btn_001").style.visibility="hidden";
               document.getElementById("btn_001").style.color="black";
               document.getElementById("btn_002").style.visibility="visible";
               document.getElementById("btn_002").style.backgroundColor="white"
               document.getElementById("btn_002").style.color="black";
            }
document.getElementById("btn_002").addEventListener("click", white);
            function white(){
               document.body.style.backgroundColor="white";
               document.getElementById("btn_001").style.visibility="visible";
               document.getElementById("btn_001").style.color="white";
               document.getElementById("btn_002").style.visibility="hidden";

            }