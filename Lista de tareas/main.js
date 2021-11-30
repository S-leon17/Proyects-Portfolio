const input=document.querySelector(".task_add");
const btn_add=document.querySelector(".add_btn");
const ul=document.querySelector(".array_list");
let num=document.querySelector(".contNum");
const divParagraph=document.querySelector(".list_task");
//Se seleccionan los elementos con los que vayamos a trabajar 
numCont=0;

btn_add.addEventListener("click",function (e) {
    e.preventDefault();

    const task= input.value;
    //Se guarda el texto del input en una variable 
    
    if (task.length>0) {
        addBtnDelete();
    
        
        const creatorList=document.createElement('li');
        const text=document.createElement('p');
        //Se crean los elementos donde se escribe la tarea
        
        text.textContent=task;
        // Se le almacena el texto a la variable que va a escribir la tarea en el sitio
        
        
        
        
        ul.appendChild(creatorList);
        creatorList.appendChild(text);
        creatorList.appendChild(btnDelete);
        // Se definen los hijos de los elemnetos  
        
        
        
        numCont=numCont+1;
        //Se van sumando valores al contador

        document.querySelector(".contNum").innerHTML=numCont;
        //Se contanea el valor del contador al contador en el DOM
       
       
        divParagraph.style.display="none";
        //Se elimina el div de tareas pendientes
    }
    else{
        
        alert("Porfavor digite su tarea para ser agregada");
        
    }
    

})
function addBtnDelete() {
    
    btnDelete=document.createElement('button');
    btnDelete.textContent="X";
    btnDelete.className="btn-delete";
    
    //Se crea el boton de eliminar tarea y se le agrega contenido y clase 
    
    btnDelete.addEventListener("click",function (e){

        const item=e.target.parentElement;
        ul.removeChild(item);
        numCont=numCont-1;
        document.querySelector(".contNum").innerHTML=numCont;
        
    });
    const totalItems=document.querySelectorAll("ul");
    if (totalItems.length==0) {
        divParagraph.style.display="block";        
    }

}
//La función permite eliminar la tarea (ul)