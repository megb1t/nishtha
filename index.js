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




// socials

const socialsFirst = document.getElementById('socialLogos');
const socialsSecond = document.getElementById('socialLogosSecond');
const tempText = document.getElementById('optionalText');

const showSocials = () =>{
    socialsFirst.style.display="none"
    socialsSecond.style.display="flex"
    tempText.style.display="none"
}
const showSocialsTwo = () =>{
    socialsFirst.style.display="flex"
    socialsSecond.style.display="none"
    tempText.style.display="none"
}