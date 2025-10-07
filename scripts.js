// Lista de IDs dos campos de seleção de componentes
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

// Atualiza o resumo com as seleções atuais
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

// Adiciona eventos aos selects
campos.forEach(campoId => {
    const select = document.getElementById(campoId);
    select.addEventListener('change', atualizarResumo);
});

// Atualiza o resumo ao carregar a página
window.addEventListener('DOMContentLoaded', atualizarResumo);
