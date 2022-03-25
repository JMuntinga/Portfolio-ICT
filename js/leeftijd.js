/*
*hier staan pop ups die vertellen of je iets mag kopen aanliggend van je leefttijd.* 
*/

let result = prompt("Hoe oud ben je?");
alert(`${result}`);



if (result < 18) {
    alert('Jij mag geen bier kopen');
} 
else if (result >=21) {
    document.body.innerHTML += `Jij mag bier en wisky kopen`
}
else {
    alert('Jij mag bier kopen');
}
