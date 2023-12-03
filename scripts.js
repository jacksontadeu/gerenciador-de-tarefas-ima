
function logar(){
    var email = document.getElementById('login-email').value;
    var senha = document.getElementById('login-password').value;

    var lista= JSON.parse(localStorage.getItem('lista'))
    var emailLogin =''
    var senhaLogin =''
    
    for (let i = 0; i <lista.length; i++){
        if(lista[i].email == email){
            emailLogin = lista[i].email
            senhaLogin = lista[i].senha
            contaLogada = lista[i].nome
        }
    }
    
    if(email == emailLogin && senha == senhaLogin){
        alert("Login com Sucesso")
        localStorage.setItem('contaLogada', contaLogada)
        location.href='adicionar_tarefas.html'
    }else{
        alert("Login inválido!!!")
        location.href='index.html'
    }
}
function cadastrarUsuario(){
    let nome = document.getElementById('criar-conta-nome').value;
    let email = document.getElementById('criar-conta-email').value;
    let senha = document.getElementById('criar-conta-password').value;

    let usuario = {
        "nome": nome,
        "email": email,
        "senha": senha
    }
    var usuarios = JSON.parse(localStorage.getItem('lista') || '[]');
    usuarios.push(usuario);
    localStorage.setItem("lista",JSON.stringify(usuarios))
    window.location.href='index.html'
}
function logout(){
    localStorage.removeItem('contaLogada')
    location.href='index.html'
}
function cadastrarTarefas(){
    let tarefa = document.getElementById('tarefa').value;
    let dataInicio = document.getElementById('data-inicio').value;
    let horaInicio = document.getElementById('hora-inicio').value;
    let dataTermino = document.getElementById('data-termino').value;
    let horaTermino = document.getElementById('hora-termino').value;
    let descricao = document.getElementById('descricao').value;
    
    let compromisso = {
        "conta": localStorage.getItem("contaLogada"),
        "tarefa": tarefa,
        "dataInicio": dataInicio,
        "horainicio": horaInicio,
        "datatermino": dataTermino,
        "horatermino": horaTermino,
        "descricao": descricao
    }
    var compromissos = JSON.parse(localStorage.getItem('tarefas')|| '[]');
    compromissos.push(compromisso)
    localStorage.setItem('tarefas', JSON.stringify(compromissos))
    location.href='adicionar_tarefas.html'

}
var contaLogin = document.getElementById('conta-logada')
contaLogin.innerHTML = `Olá ${localStorage.getItem('contaLogada')} seja bem vindo!!!`
