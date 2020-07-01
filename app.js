let sidebar=document.getElementById('side-bar');
let menudropdown = document.getElementById('menu-dropdown');

function  toggel_1(){
if(sidebar.style.display=="block"){
    sidebar.style.display="none"
}
else{
    sidebar.style.display="block"
}
}
function menu_drop(){
    if(menudropdown.style.display=="block"){
          menudropdown.style.display="none"
    }
    else{
        menudropdown.style.display="block"
    }
}
function size(){
    var w = document.documentElement.clientWidth;
     if(w>760){
         menudropdown.style.display="none"
     }
}

function size_check(){
    if(w>760){
        menudropdown.style.display="none"
    }
}