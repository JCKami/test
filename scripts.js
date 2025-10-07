// scripts.js

// Lista de todos os campos de componentes
const campos = [
    'processador',
    'placa-mae',
    'ram',
    'gpu',
    'armazenamento',
    'fonte',
    'gabinete'
];

const listaResumo = document.getElementById('resumo');

function atualizarResumo() {
    listaResumo.innerHTML = '';

    campos.forEach(campoId => {
        const select = document.getElementById(campoId);
        const valorSelecionado = select.options[select.selectedIndex].text;

        const li = document.createElement('li');
        li.textContent = `${select.previousElementSibling.textContent}: ${valorSelecionado}`;
        listaResumo.appendChild(li);
    });
}

// Adiciona eventos para atualizar ao mudar seleção
campos.forEach(campoId => {
    const select = document.getElementById(campoId);
    select.addEventListener('change', atualizarResumo);
});

// Atualiza quando a página carrega
window.addEventListener('DOMContentLoaded', atualizarResumo);
