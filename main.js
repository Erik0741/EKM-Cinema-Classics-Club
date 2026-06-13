function toggleMenu(){
    let menu=document.getElementById('menuContent')
    if(menu.hasAttribute('hidden')){
        menu.removeAttribute('hidden')
    }else{
        menu.setAttribute('hidden','')
    }
}

function usernameChanged(){
    let usr=document.getElementById('usernameType')
    sessionStorage.setItem('username', usr.value);
}

function usernameSet(){
    let usr=document.getElementById('usernameType')
    usr.setAttribute('value',sessionStorage.getItem('username'));
}

function reloadChat(){
    let ifr=document.getElementById('chatDetails')
    ifr.removeAttribute("src")
    setTimeout(function(){ifr.setAttribute('src','chatContent.txt')},5)
}