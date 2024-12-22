let shante = document.getElementById("shante");
let animation = setInterval(cambiar_imagen,60);
let num_img = 0;
let x = 0;
let y = 0;

function cambiar_imagen() {
    num_img = num_img + 1;
    let direc;
    if (num_img >= 15) {
        num_img = 1;
    }
    direc = "img/shante/Shante_"+num_img+".png";
    shante.setAttribute("src",direc);
}
document.addEventListener("keydown", mover)
function mover(event) {
    console.log(event.keyCode);
    
    if(event.keyCode == 68) {
        console.log("me movere 10 px a la derecha");
        x = x + 10;
    } 
    if(event.keyCode == 65) {
        console.log("me movere 10 px a la izquierda");
        x = x - 10;
    }
    if(event.keyCode == 87) {
        console.log("me movere 10 px hacia arriba");
        y = y - 10;
    }
    if(event.keyCode == 83) {
        console.log("me movere 10 px hacia abajo");
        y = y + 10;
    }  
    
    const screenWidth = window.innerWidth; 
    const screenHeight = window.innerHeight; 
    const imgWidth = shante.offsetWidth; 
    const imgHeight = shante.offsetHeight; 
    if (x < 0) x = 0; 
    if (x + imgWidth > screenWidth) x = screenWidth - imgWidth; 
    if (y < 0) y = 0; 
    if (y + imgHeight > screenHeight) y = screenHeight - imgHeight;

    shante.style.left = x + "px";
    shante.style.top = y + "px";

}



