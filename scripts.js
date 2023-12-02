let usuarios = []


function cadastrarUsuario(){
    let nome = document.getElementById('criar-conta-nome')
    let email = document.getElementById('criar-conta-email')
    let senha = document.getElementById('criar-conta-password')

    let usuario ={
        "nome":nome.value,
        "email":email.value,
        "senha":senha.value
    }
    
    usuarios.push(usuario)
    
    console.log(usuario)
    console.log(usuarios)
}

function listarUsuarios(usuarios){
    for(let u of usuarios){
        console.log(u)
    }

}
