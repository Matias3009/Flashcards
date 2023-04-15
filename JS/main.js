
var flashMenu, catMenu;
var editMode = false;
var tarjetas=new Array();
var actual = 0;
tarjetas.push(new Array());
tarjetas[actual].push("Default");

var item = "Cards";


/*class flashcard{
    constructor(clase, name, desc){
        
    }
}*/

function init(){
    //console.log("Hello World");
    flashMenu = document.getElementById("contenedor");
    catMenu = document.getElementById("clasesC");
    /*let navi = navigator.userAgent;
    if(navi.match(/Android/i)){
        document.getElementById("clasesC").style.display = none;
    }*/

    if(localStorage.getItem(item)){
    var gdh = localStorage.getItem(item);
    if(typeof(tarjetas) == typeof(JSON.parse(gdh))){
        tarjetas = JSON.parse(gdh);
    }
    else{
        localStorage.setItem(item, JSON.stringify(tarjetas));
    }
    reset();
    resCat();
    }
    else{
        localStorage.setItem(item, JSON.stringify(tarjetas));
        reset();
        resCat();
    }
}

function resCat(){
    //Borra todo lo de las categorías.
    catMenu.innerHTML= "";
    var botonAdd = document.createElement("button");
        botonAdd.className = "categoria";
        botonAdd.textContent =" + New Category";
        botonAdd.onclick = function(e){addCat();};

        catMenu.appendChild(botonAdd);
    for (let i = 0; i < tarjetas.length; i++) {
        let element = tarjetas[i];
        
        let nuevoBoton = document.createElement("button");
        nuevoBoton.className = "categoria";
        nuevoBoton.textContent = "> "+ element[0];
        nuevoBoton.numero = i;
        nuevoBoton.onclick = function(e){
            actual = this.numero;
            reset();
        };

        catMenu.appendChild(nuevoBoton);
        //add button to delete:
        let botonDel = document.createElement("button");
        botonDel.className = "eliminate";
        botonDel.textContent = "DEL";
        botonDel.onclick = function(e){
            let hid = this.parentNode.numero;
            let dele = confirm("¿Estás Seguro de eliminar esta Categoría?");
            if(dele){
                tarjetas.splice(hid, 1);
                localStorage.setItem(item, JSON.stringify(tarjetas));
                actual=0;
                console.log(actual);
                
                reset();
                resCat();
                alert("Categoría eliminada!");
            }

        };

        nuevoBoton.appendChild(botonDel);
    }
}

function removeChilds(){
    /*for (let index = 0; index <= flashMenu.childNodes.length; index++) {
        let element = flashMenu.firstChild;
        flashMenu.removeChild(element);
    }*/
    flashMenu.innerHTML = "";
}
function addCat(){
    let nombreN = prompt("Nombre de la nueva categoría:", "New Category");
    if(nombreN!=""){
        actual = tarjetas.length-1;
        
        /*var nuevoBoton = document.createElement("button");
        nuevoBoton.className = "categoria";
        nuevoBoton.textContent = nombreN;
        nuevoBoton.numero = tarjetas.length-1;

        catMenu.appendChild(nuevoBoton);*/

        tarjetas.push(new Array());
        tarjetas[tarjetas.length-1] = [nombreN];

        localStorage.setItem(item, JSON.stringify(tarjetas));
        reset();
        resCat();

    }
}
function reset(){
    removeChilds();
    if(!tarjetas[actual]){
        actual = 0;
    }
    for (let index = 0; index < tarjetas[actual].length; index++) {
        const element = tarjetas[actual][index];
        if(typeof(element)=="string"){
            continue;
        }
        let jku = document.createElement("button");
        let okl = document.createElement("p");

        jku.numero = index;
        jku.className = "flash";
        jku.draggable = true;
        element.styled *= -1;
        jku.appendChild(okl);
        flashMenu.appendChild(jku);
        //jku is the button;
        jku.addEventListener('click', function(){
            if(!tarjetas[actual][this.numero]){
                return;
            }
            if(tarjetas[actual][this.numero].styled == 1){
                this.firstChild.textContent = tarjetas[actual][this.numero].desc;
                tarjetas[actual][this.numero].styled *= -1;
            }
            else{
                this.firstChild.textContent = tarjetas[actual][this.numero].name;
                tarjetas[actual][this.numero].styled *= -1;
            }
        });
        /*jku.startTime = 0;
        jku.endTime = 0;
        jku.selected = false;
        jku.onmousedown = function(ev){
            this.startTime = new Date();

        };
        jku.onmouseup = function(ev){
            this.endTime = new Date();
            var timeDiff = this.endTime - this.startTime;
            //console.log(timeDiff);
            if(timeDiff >= 600){
                editMode = true;
                this.selected = true;
                this.style.opacity = 0.8;
            }
            
        };*/
        let dele = document.createElement("button");
        dele.className="eliminate2";
        dele.textContent="DEL";
        dele.onclick = function(ev){
            let nni = this.parentNode.numero;

            tarjetas[actual].splice(nni, 1);
            localStorage.setItem(item, JSON.stringify(tarjetas));
            reset();
        };
        jku.appendChild(dele);
        jku.click();
    }
}

function llama(){
    console.log("Add a Bread");
    
    let name = prompt("Nombre de la Flashcard:", "No Name!");
    let dess = prompt("Descripción:", "Not have a Description!");

    if(!name || !dess){
        console.log("Cancel");
        return;
    }
    /*var ann = document.createElement("button");
    
    
    ann.className = "flash";*/

    tarjetas[actual].push({"desc": dess, "name": name, "styled":1});

    
    /*var ghlength = tarjetas[actual].length-1;
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
    flashMenu.appendChild(ann);*/

    localStorage.setItem(item, JSON.stringify(tarjetas));
    reset();

}