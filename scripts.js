// scripts.js

// Lista de todos os campos que queremos monitorar
const campos = ['processador', 'placa-mae']; // você pode adicionar mais depois

// Pega o elemento UL onde o resumo será exibido
const listaResumo = document.getElementById('resumo');

// Função que atualiza o resumo com os valores selecionados
function atualizarResumo() {
    // Limpa o conteúdo atual
    listaResumo.innerHTML = '';

    // Para cada campo, pega o valor selecionado e exibe
    campos.forEach(campoId => {
        const select = document.getElementById(campoId);
        const valorSelecionado = select.options[select.selectedIndex].text;

        // Cria item de lista e adiciona ao resumo
        const li = document.createElement('li');
        li.textContent = `${select.previousElementSibling.textContent}: ${valorSelecionado}`;
        listaResumo.appendChild(li);
    });
}

// Adiciona um evento "change" para cada campo de seleção
campos.forEach(campoId => {
    const select = document.getElementById(campoId);
    select.addEventListener('change', atualizarResumo);
});

// Atualiza o resumo quando a página carregar
window.addEventListener('DOMContentLoaded', atualizarResumo);
