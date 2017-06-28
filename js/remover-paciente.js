let paciente = document.querySelectorAll(".paciente");


let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    
    event.target.parentNode.classList.add("faceOut");

    setTimeout(function(){
       event.target.parentNode.remove();
    },500)

});

/*paciente.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log(" Fui clicado com duplo click!");
        this.remove();
    });
});*/