const btnEL = document.querySelector(".btn");

btnEL.addEventListener("mouseover",(event) => {
    const x =(event.pageX - btnEL.offsetLeft);
    const y =(event.pagey - btnEL.offsetTop);

    btnEL.Style.setproperty("--xPos", x + "px");
}); btnEL.Style.setproperty("--yPos", y + "px");