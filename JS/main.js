
var flashMenu;

var tarjetas=new Object();
tarjetas.default = [];
var actual = "default";


/*class flashcard{
    constructor(clase, name, desc){
        
    }
}*/

function init(){
    //console.log("Hello World");
    flashMenu = document.getElementById("contenedor");

    let navi = navigator.userAgent;
    if(navi.match(/Android/i)){
        document.getElementById("clasesC").style.display = none;
    }

    if(localStorage.getItem("Flash")){
    var gdh = localStorage.getItem("Flash");
    
    tarjetas = JSON.parse(gdh);
    
    reset();
    }
}
function removeChilds(){
    for (let index = 0; index <= flashMenu.childNodes.length; index++) {
        const element = flashMenu.firstChild;
        flashMenu.removeChild(element);
    }
}
function reset(){
    removeChilds();
    for (let index = 0; index < tarjetas[actual].length; index++) {
        const element = tarjetas[actual][index];
        let jku = document.createElement("button");
        let okl = document.createElement("p");

        jku.numero = index;
        jku.className = "flash";
        element.styled *= -1;
        jku.appendChild(okl);
        flashMenu.appendChild(jku);

        jku.addEventListener('click', function(){
            if(tarjetas[actual][this.numero].styled == 1){
                this.firstChild.textContent = tarjetas[actual][this.numero].desc;
                tarjetas[actual][this.numero].styled *= -1;
            }
            else{
                this.firstChild.textContent = tarjetas[actual][this.numero].name;
                tarjetas[actual][this.numero].styled *= -1;
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

    tarjetas[actual].push({"desc": dess, "name": name, "styled":1});

    
    var ghlength = tarjetas[actual].length-1;
    let annP = document.createElement("p");
    //var annText = document.createTextNode(name);
    ann.numero = ghlength;
    //ann.href = Elemento(name, annP);
    ann.addEventListener('click', function(){
        if(tarjetas[actual][this.numero].styled == 1){
            this.firstChild.textContent = tarjetas[actual][this.numero].desc;
            tarjetas[actual][this.numero].styled *= -1;
        }
        else{
            this.firstChild.textContent = tarjetas[actual][this.numero].name;
            tarjetas[actual][this.numero].styled *= -1;
        }
    });

    annP.textContent = name;
    ann.appendChild(annP);
    flashMenu.appendChild(ann);

    localStorage.setItem("Flash", JSON.stringify(tarjetas));

}