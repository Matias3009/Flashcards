
var flashMenu;

var tarjetas=new Object();
tarjetas.default = [];


/*class flashcard{
    constructor(clase, name, desc){
        
    }
}*/

function init(){
    console.log("Hello World");
    flashMenu = document.getElementById("contenedor");
    var gdh = localStorage.getItem("Flash");
    tarjetas = JSON.parse(gdh);
    
    reset();
}
function reset(){
    for (let index = 0; index < tarjetas.default.length; index++) {
        const element = tarjetas.default[index];
        let jku = document.createElement("button");
        let okl = document.createElement("p");

        jku.numero = index;
        jku.className = "flash";
        element.styled *= -1;
        jku.appendChild(okl);
        flashMenu.appendChild(jku);

        jku.addEventListener('click', function(){
            if(tarjetas.default[this.numero].styled == 1){
                this.firstChild.textContent = tarjetas.default[this.numero].desc;
                tarjetas.default[this.numero].styled *= -1;
            }
            else{
                this.firstChild.textContent = tarjetas.default[this.numero].name;
                tarjetas.default[this.numero].styled *= -1;
            }
        });

        jku.click();
    }
}

function llama(){
    console.log("Add a Bread");
    var ann = document.createElement("button");
    
    
    ann.className = "flash";
    let name = prompt("Nombre de la Flashcard:", "No Name!");
    let dess = prompt("Descripción:", "Not have a Description!");

    tarjetas.default.push({"desc": dess, "name": name, "styled":1});

    
    var ghlength = tarjetas.default.length-1;
    let annP = document.createElement("p");
    //var annText = document.createTextNode(name);
    ann.numero = ghlength;
    //ann.href = Elemento(name, annP);
    ann.addEventListener('click', function(){
        if(tarjetas.default[this.numero].styled == 1){
            this.firstChild.textContent = tarjetas.default[this.numero].desc;
            tarjetas.default[this.numero].styled *= -1;
        }
        else{
            this.firstChild.textContent = tarjetas.default[this.numero].name;
            tarjetas.default[this.numero].styled *= -1;
        }
    });

    annP.textContent = name;
    ann.appendChild(annP);
    flashMenu.appendChild(ann);

    localStorage.setItem("Flash", JSON.stringify(tarjetas));

}