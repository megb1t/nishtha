const button = document.getElementById('ezNavSect');
const phoneNav = document.getElementById('contentDropPhone');

const phoneButton = document.getElementById('phoneNavThree')

const displayDrop = () =>{
    button.style.display="grid"

}

const displayDropPhone = () =>{
    phoneNav.style.display="block"

}

const closeNav = () =>{
    button.style.display="none"
}
const closeNavPhone = () =>{
    phoneNav.style.display="none"
}

const phoneOpenNav = () =>{
    phoneButton.style.width="40vw"
}

const phoneCloseNav = () =>{
    phoneButton.style.width="0"
}