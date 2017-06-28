let buscarPaciente = document.querySelector("#buscar-paciente");

buscarPaciente.addEventListener("click", function(){
    console.log("Deu certo, estou buscano o paciente!");

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        let resposta = xhr.responseText;
        let pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);   
        });
    });
    xhr.send();
});