let valorNome = "";
let valorEmail = "";

let form = document.querySelector('.form');
let btnSubmit = document.querySelector('#botao').addEventListener('click', verificacao);

function verificacao(event) {
    event.preventDefault(); 

    valorNome = document.getElementById("inputNome").value;
    valorEmail = document.getElementById("inputEmail").value;

    if (valorNome !== "" && valorEmail !== "") {
        atualizarDados();
    } else {
        alert("Preencha todos os campos do formulário!");
    }
}

function atualizarDados() {
    const mensagem = `Nome: ${valorNome}\nEmail: ${valorEmail}`;
    const confirmacao = confirm(`Os dados estão corretos?\n\n${mensagem}`);
  
     if (confirmacao) {
       alert("Dados enviados com sucesso!");
        form.submit();
          } else {
        alert("Digite os dados corretos");
   }
}