const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumContato = document.getElementById('num-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumContato.value}</td>`;
    linha += '</td>';

    linhas += linha;

    inputNomeContato.value = '';
    inputNumContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tfoot');
    corpoTabela.innerHTML = linhas;
}
    
