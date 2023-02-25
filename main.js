$(document).ready(function() {
    $("#cadastrar").click(function(event) {
    event.preventDefault();
    var novaTarefa = $("#nova-tarefa").val().trim();
    if (novaTarefa !== "") {
        var novoItem = $("<li>").text(novaTarefa); 
        $("#lista-tarefas").append(novoItem);
        $("#nova-tarefa").val(""); 
        $("#nova-tarefa").focus(); 
        novoItem.on("click", function() {
        $(this).toggleClass("riscado");
        });
    }
    });
});
